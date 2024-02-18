<script setup lang="ts">
import { Question, QuestionAnwser, Quiz } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
definePage({
  meta: {
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});
const route = useRoute();
const selected = ref<Quiz>();
const questions = ref<Question[]>([]);
const currentQuestion = ref(0);

const answers = ref<{ [key: number]: QuestionAnwser }>({});
const tabs = computed(() => {
  return questions.value.map(({ question, options }, index) => {
    // extract headers from editorjs data
    const header = question.blocks.filter(
      (block) => block.type === "header"
    )[0];
    const title = header?.data?.text;
    // take only 50 characters from the title
    const titleLength = title.length > 30 ? 30 : title.length;
    const titleSubstring = title.substring(0, titleLength);

    const points = options.reduce((prev, curr) => prev + curr.points, 0);

    return {
      points,
      icon: "mynaui:question-waves",
      title: ` : ${index + 1}`,
      subtitle: titleSubstring + " ...",
    };
  });
});

const hasCorrectAnswer = computed(() => {
  const question = questions.value[currentQuestion.value];
  return question.show_answer_after_response && question.answer?.blocks?.length;
});

const quizStore = useQuizzesStore();
const nextStep = async () => {
  const question = questions.value[currentQuestion.value];
  try {
    const res = await quizStore.anwserQuestion(
      question.id,
      answers.value[question.id]
    );
    console.log(res);
    currentQuestion.value++;
  } catch (error) {
    throw error;
  }
};

const loadQuiz = () => {
  if (route.params.quiz) {
    const quizMeta = (route.params.quiz as string).split("-");
    const quizId: number = Number(quizMeta[quizMeta.length - 1]);
    quizStore
      .getQuiz(quizId, { params: { with: ["questions", "questions.answers"] } })
      .then((quiz) => {
        selected.value = quiz;
        questions.value = quiz.questions;
        answers.value = quiz.questions.reduce((prev, curr) => {
          prev[curr.id] = { custom_answer: undefined, answers: [] };
          return prev;
        }, {});
      });
  }
};

// @ts-ignore
watch(() => route.params.quiz, loadQuiz, { immediate: true });
</script>

<template>
  <VRow align="start" class="gap-y-2 page-container">
    <VCol cols="12" md="8" class="py-0 h-100">
      <VCard class="v-card--flat" v-if="questions.length && selected">
        <AppStepper
          icon-size="24"
          class="stepper-icon-step-bg my-5"
          align="start"
          :current-step="currentQuestion"
          :items="tabs"
        >
          <template #title="{ title, index }">
            <div class="d-flex align-center justify-space-between">
              <span> {{ $t("quiz.questions.question") + title }}</span>
              <VChip
                color="primary"
                :text="`${$t('quiz.questions.points')} : ${tabs[index].points}`"
              />
            </div>
          </template>
        </AppStepper>
        <VDivider />
        <VWindow v-model="currentQuestion">
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
                class="mt-2 border"
                :value="option.id"
              >
                <template #prepend="{ isSelected }">
                  <VListItemAction start>
                    <VCheckbox :model-value="isSelected" color="primary" />
                  </VListItemAction>
                </template>
                <template #default>
                  {{ option.option }}
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
                  @editor-change="
                    async (editor) => {
                      answers[question.id].custom_answer = await editor.save();
                    }
                  "
                  :placeholder="$t('quiz.custom_answer.placeholder')"
                  :minHeight="200"
                />
              </VCardItem>
            </template>
            <template v-if="hasCorrectAnswer">
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
            <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
            {{ $t("previous") }}
          </VBtn>
          <VBtn
            v-if="tabs.length - 1 === currentQuestion"
            append-icon="tabler-check"
            color="success"
          >
            {{ $t("submit") }}
          </VBtn>
          <VBtn v-else @click="nextStep" variant="plain">
            {{ $t("next") }}
            <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
          </VBtn>
        </VCardActions>
      </VCard>
      <template v-else>
        <VAlert
          variant="tonal"
          icon="mdi-alert-circle"
          color="warning"
          class="mt-5"
        >
          {{ $t("quiz.questions.no_questions") }}
        </VAlert>
      </template>
    </VCol>
    <VCol cols="12" md="4" class="rounded py-0">
      <VCard>
        <PerfectScrollbar :options="{ wheelPropagation: true }">
          <!-- @vue-ignore -->
          <QuizzesPlayList ref="playList" :course-id="route.params.id" />
        </PerfectScrollbar>
      </VCard>
    </VCol>
  </VRow>
</template>
