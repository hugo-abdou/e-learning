<script setup lang="ts">
import useSnackBarStore from "@/components/SnackBar/useSnackBarStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuizzesStore } from "@/stores/useQuizzesStore";
import { Question, QuestionAnswer, Quiz } from "@/types";
import QuizzesPlayList from "@/views/pages/quiz/QuizzesPlayList.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
definePage({
    meta: {
        navActiveLink: "browse",
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
        roles: ["student"],
        subject: "course",
        action: "read",
    },
});
const route = useRoute<"course-id-quiz-quiz">();
const selected = ref<Quiz>();
const questions = ref<Question[]>([]);
const currentQuestion = ref(0);
const playList = ref<{ next: () => void; prev: () => void; selected: Quiz; hasNext: boolean }>();
const congratulationDialog = ref(false);
const answers = ref<{ [key: number]: QuestionAnswer }>({});
const tabs = computed(() => {
    return questions.value.map(({ question, options }, index) => {
        // extract headers from editorjs data
        const headerOrParagraph = question.blocks.find((block) => block.type === "header" || block.type === "paragraph");
        const title = headerOrParagraph?.data?.text;
        let titleSubstring = "";
        if (title) {
            // take only 50 characters from the title
            const titleLength = title.length > 30 ? 30 : title.length;
            titleSubstring = `${title.substring(0, titleLength)}${title.length > titleLength ? "..." : ""}`;
        }
        const points = Math.max(...options.map((option) => option.points));
        return {
            points,
            icon: "tabler-help",
            title: ` : ${index + 1}`,
            subtitle: titleSubstring,
        };
    });
});
const hasCorrectAnswer = computed(() => {
    const question = questions.value[currentQuestion.value];
    return question?.show_answer_after_response && question?.answer?.blocks?.length;
});

const hasStudentAnswered = computed(() => {
    const question = questions.value[currentQuestion.value];
    return question.student_answer !== null;
});

const quizStore = useQuizzesStore();
const snakbar = useSnackBarStore();
const auth = useAuthStore();
const nextStep = async () => {
    const question = questions.value[currentQuestion.value];
    try {
        if (!hasStudentAnswered.value && selected.value && playList.value && auth.isStudent) {
            const res = await quizStore.answerQuestion(question.id, answers.value[question.id]);
            loadQuestions(selected.value.id);
            playList.value.selected.progress = playList.value?.selected.progress + 100 / questions.value.length;
            return;
        }
        if (questions.value.length - 1 > currentQuestion.value) {
            currentQuestion.value++;
        } else if (playList.value?.hasNext) {
            playList.value.next();
            currentQuestion.value = 0;
        } else {
            congratulationDialog.value = true;
        }
    } catch (error: any) {
        if (error.status === 422) {
            snakbar.add({ color: "error", text: "Please answer the question" });
        }
    }
};

const loadQuestions = (quizId: number) => {
    quizStore.getQuestions(quizId, { params: { with: ["questions", "questions.answers"] } }).then(({ data }) => {
        questions.value = data;
        answers.value = data.reduce((prev, curr) => {
            prev[curr.id] = { custom_answer: curr.student_answer?.custom_answer, answers: curr.student_answer?.answers };
            return prev;
        }, {} as any);
    });
};
// @ts-ignore
watch(selected, ({ id }) => loadQuestions(id));
</script>

<template>
    <VRow
        align="start"
        class="gap-y-2"
    >
        <VCol
            cols="12"
            md="8"
            class="py-0 h-100"
        >
            <VCard
                class="v-card--flat"
                v-if="questions.length && selected"
            >
                <AppStepper
                    icon-size="24"
                    class="stepper-icon-step-bg px-5 my-5"
                    align="start"
                    :current-step="currentQuestion"
                    :items="tabs"
                >
                    <template #title="{ title, index }">
                        <div class="d-flex align-center justify-space-between">
                            <span> {{ $t("quiz.questions.question") + title }}</span>
                            <VChip
                                color="primary"
                                class="ml-2"
                                :text="`${$t('quiz.questions.points')} : ${tabs[index].points}`"
                            />
                        </div>
                    </template>
                </AppStepper>
                <VDivider />
                <VWindow
                    :touch="false"
                    v-model="currentQuestion"
                >
                    <VWindowItem
                        v-for="(question, index) in questions"
                        :key="question.id"
                        :value="index"
                    >
                        <VCardItem class="mb-5">
                            <EditorJs
                                :key="question.id"
                                read-only
                                :min-height="0"
                                v-if="questions.length"
                                :data="question.question"
                            />
                        </VCardItem>
                        <VCardTitle>{{ $t("quiz.answers.title") }}</VCardTitle>
                        <VCardSubtitle>
                            {{ $t("quiz.answers.subtitle") }}
                        </VCardSubtitle>
                        <VList
                            density="compact"
                            class="mx-5 mb-5"
                            v-model:selected="answers[question.id].answers"
                        >
                            <VListItem
                                v-for="option in question.options"
                                rounded="shaped"
                                :class="[
                                    'mt-2 border',
                                    {
                                        'bg-success': hasStudentAnswered && option.is_correct,
                                        'bg-error': hasStudentAnswered && question.student_answer?.answers.includes(Number(option.id)) && !option.is_correct,
                                    },
                                ]"
                                :value="option.id"
                                :disabled="hasStudentAnswered"
                            >
                                <template #prepend="{ isSelected }">
                                    <VListItemAction start>
                                        <VCheckbox
                                            :model-value="isSelected"
                                            color="primary"
                                        />
                                    </VListItemAction>
                                </template>
                                <template #default>
                                    {{ option.option }}
                                    <VChip
                                        v-if="hasStudentAnswered && option.is_correct"
                                        color="surface"
                                        size="x-small"
                                        variant="elevated"
                                        class="ml-2"
                                        :text="`${$t('quiz.questions.points')} : ${option.points}`"
                                    />
                                </template>
                            </VListItem>
                        </VList>
                        <template v-if="question.allow_custom_answer">
                            <VCardTitle>{{ $t("quiz.custom_answer.title") }}</VCardTitle>
                            <VCardSubtitle>
                                {{ $t("quiz.custom_answer.subtitle") }}
                            </VCardSubtitle>
                            <VCardItem class="border rounded bg-background ma-5">
                                <EditorJs
                                    :read-only="hasStudentAnswered"
                                    :data="question.student_answer?.custom_answer"
                                    @editor-change="
                                        async (editor) => {
                                            if (hasStudentAnswered) return;
                                            answers[question.id].custom_answer = await editor.save();
                                        }
                                    "
                                    :placeholder="$t('quiz.custom_answer.placeholder')"
                                    :minHeight="200"
                                />
                            </VCardItem>
                        </template>
                        <template v-if="hasCorrectAnswer && hasStudentAnswered">
                            <VCardTitle>{{ $t("quiz.correct_answer.title") }}</VCardTitle>
                            <VCardSubtitle>
                                {{ $t("quiz.correct_answer.subtitle") }}
                            </VCardSubtitle>
                            <VCardItem class="mb-5">
                                <EditorJs
                                    :key="question.id"
                                    read-only
                                    :min-height="0"
                                    :data="question.answer"
                                />
                            </VCardItem>
                        </template>
                    </VWindowItem>
                </VWindow>
                <VCardActions class="d-flex justify-center pa-5">
                    <VBtn
                        variant="plain"
                        color="secondary"
                        :disabled="currentQuestion === 0"
                        @click="currentQuestion--"
                    >
                        <VIcon
                            icon="tabler-arrow-left"
                            start
                            class="flip-in-rtl"
                        />
                        {{ $t("previous") }}
                    </VBtn>
                    <VBtn
                        v-if="!hasStudentAnswered"
                        @click="nextStep"
                        variant="plain"
                        color="primary"
                    >
                        {{ $t("Submit") }}
                    </VBtn>
                    <VBtn
                        v-else
                        @click="nextStep"
                        variant="plain"
                    >
                        {{ $t("next") }}
                        <VIcon
                            icon="tabler-arrow-right"
                            end
                            class="flip-in-rtl"
                        />
                    </VBtn>
                </VCardActions>
            </VCard>
            <template v-else>
                <VAlert
                    variant="tonal"
                    icon="tabler-alert-circle"
                    color="warning"
                    class="mt-5"
                >
                    {{ $t("quiz.questions.no_questions") }}
                </VAlert>
            </template>
        </VCol>
        <VCol
            cols="12"
            md="4"
            class="rounded py-0"
        >
            <VCard>
                <PerfectScrollbar :options="{ wheelPropagation: true }">
                    <!-- @vue-ignore -->
                    <QuizzesPlayList
                        @selected="selected = $event"
                        ref="playList"
                        :course-id="route.params.id"
                    />
                </PerfectScrollbar>
            </VCard>
        </VCol>
        <!-- add a congratulation dialog -->
        <CongratulationsDialog
            v-model:isDialogVisible="congratulationDialog"
            :successTitle="$t('quiz.congratulations.title')"
            :successSubtitle="$t('quiz.congratulations.subtitle')"
            :failedTitle="$t('quiz.failed.title')"
            :failedSubtitle="$t('quiz.failed.subtitle')"
            @ok="
                () => {
                    congratulationDialog = false;
                    $router.push({ name: 'course-id', params: { id: route.params.id } });
                }
            "
        />
    </VRow>
</template>
