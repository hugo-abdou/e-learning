<script setup lang="ts">
import { QuizStatus } from "@/@core/enums";
import Media from "@/components/Media";
import type { Quiz, ResourceResponse } from "@/types";
import { UploadBunAttrs } from "@/helpers";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import slugify from "slugify";
import { useQuizzesStore } from "@/stores/useQuizzesStore";
import CollapsedContent from "./CollapsedContent.vue";

const emit = defineEmits<{
    (e: "created", value: Quiz): void;
}>();
const props = withDefaults(defineProps<{ status?: keyof typeof QuizStatus }>(), { status: "Draft" });

const uuid = () => new Date().getTime();

const iconsSteps = ref([
    {
        title: "Details",
        subtitle: "quiz.steps.details.subtitle",
    },
    {
        title: "Attachments",
        subtitle: "quiz.steps.attachments.subtitle",
    },
    {
        title: "Questions",
        subtitle: "quiz.steps.questions.subtitle",
    },
]);

onMounted(() => {
    if (props.status === "Draft") {
        iconsSteps.value.push({
            title: "quiz.steps.visibility.title",
            subtitle: "quiz.steps.visibility.subtitle",
        });
    }
});

const currentStep = ref(0);

// @ts-expect-error
const formEl = ref<VForm>({});
const validate = async () => {
    const { valid, errors } = await formEl.value.validate();
    if (valid) return Promise.resolve();
    return Promise.reject(errors);
};

const next = () => {
    validate().then(() => currentStep.value++);
};
const initialState: Omit<Quiz, "id"> = {
    title: "",
    slug: "",
    description: "",
    duration: 5,
    status: props.status,
    attachments: [],
    questions: [
        {
            id: uuid(),
            allow_custom_answer: false,
            show_answer_after_response: false,
            answer: {} as OutputData,
            question: {} as OutputData,
            options: [{ id: uuid(), option: "", points: 0, is_correct: false }],
        },
    ],
};

const formData = ref<Omit<Quiz, "id">>({ ...initialState });

const isUploaderopen = ref(false);
const onDeleteAttachment = (index: number) => {
    formData.value.attachments.splice(index, 1);
};
const copyQuestion = (index: number) => {
    formData.value.questions.push({
        ...formData.value.questions[index],
        id: uuid(),
        options: formData.value.questions[index].options.map((option) => ({
            ...option,
            id: uuid(),
        })),
    });
};
const removeQuestion = (index: number) => {
    formData.value.questions.splice(index, 1);
};
const addQuestion = () => {
    formData.value.questions.push({
        id: uuid(),
        allow_custom_answer: false,
        show_answer_after_response: false,
        answer: {} as any,
        question: {} as any,
        options: [{ id: uuid(), option: "", points: 0, is_correct: false }],
    });
};
const removeOption = (questionIndex: number, optionIndex: number) => {
    formData.value.questions[questionIndex].options.splice(optionIndex, 1);
};
const addOption = (questionIndex: number) => {
    formData.value.questions[questionIndex].options.push({ id: uuid(), option: "", points: 0, is_correct: false });
};

const visibility = ref<"publish" | "schedule">("publish");
const publishStatus = ref<"Private" | "Published">("Private");
const publishStatusList = [
    {
        title: "Private",
        desc: "Only you see can this quiz",
        value: "Private",
        icon: { icon: "carbon:virtual-private-cloud", size: "28" },
    },
    {
        title: "Publish",
        desc: "All your users can see this quiz",
        value: "Published",
        icon: { icon: "mdi-public", size: "28" },
    },
];
const scheduleDate = ref(new Date().toISOString());
const setMedia = (media: any[]) => {
    formData.value.attachments.push(...media);
    isUploaderopen.value = false;
};

type EditorJsType = { editor: EditorJS; id: any };
const questionEditorJs = ref<EditorJsType[]>([]);
const answerEditorJs = ref<EditorJsType[]>([]);
const quizStore = useQuizzesStore();

const submit = (): Promise<ResourceResponse<Quiz>> => {
    return new Promise(async (resolve, reject) => {
        try {
            await validate();
            for (let i = 0; i < questionEditorJs.value.length; i++) {
                const { editor: qEditor } = questionEditorJs.value[i];
                formData.value.questions[i].question = await qEditor.save();
                if (answerEditorJs.value[i]) {
                    const { editor: aEditor } = answerEditorJs.value[i];
                    formData.value.questions[i].answer = await aEditor.save();
                }
            }
            const attachments: { [key: number]: any } = {};
            formData.value.attachments.forEach(({ type, id, name }: any) => (attachments[id] = { type, name, slug: slugify(name) }));
            const res = await quizStore.createQuiz({
                ...formData.value,
                slug: slugify(formData.value.title),
                // @ts-ignore
                questions: formData.value.questions.map(({ id, question, answer, ...all }) => ({
                    ...all,
                    question: JSON.stringify(question) as any,
                    answer: JSON.stringify(answer) as any,
                })),
                attachments: attachments,
            });
            if (props.status === "Draft") {
                if (visibility.value === "schedule") await quizStore.scheduleQuiz(Number(res.data.id), scheduleDate.value);

                if (visibility.value === "publish") await quizStore.publishQuiz(Number(res.data.id), publishStatus.value);
            } else {
                await quizStore.publishQuiz(Number(res.data.id), props.status);
            }
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};
const saveStartOver = () => {
    submit().then(() => {
        formData.value = { ...initialState };
        formData.value.attachments = [];
        formData.value.questions = [];
        formEl.value.reset();
        currentStep.value = 0;
        addQuestion();
    });
};
const save = () => {
    submit().then(({ data }) => {
        emit("created", data);
    });
};
</script>

<template>
    <VCard>
        <!-- 👉 Stepper -->
        <VCardText>
            <AppStepper
                align="start"
                :current-step="currentStep"
                :items="iconsSteps"
            />
        </VCardText>
        <VDivider class="mb-5" />

        <!-- 👉 stepper content -->
        <VForm ref="formEl">
            <VWindow
                :touch="false"
                v-model="currentStep"
                class="disable-tab-transition"
            >
                <VWindowItem>
                    <VCardTitle> {{ $t("quiz.steps.details.title") }}</VCardTitle>
                    <VCardSubtitle>
                        {{ $t("quiz.steps.details.subtitle") }}
                    </VCardSubtitle>
                    <VCardText>
                        <VRow class="pt-2">
                            <VCol
                                cols="12"
                                sm="8"
                            >
                                <VTextField
                                    v-model="formData.title"
                                    :rules="[requiredValidator]"
                                    label="Title"
                                />
                            </VCol>
                            <VCol
                                cols="12"
                                sm="4"
                            >
                                <VTextField
                                    v-model="formData.duration"
                                    type="number"
                                    :rules="[requiredValidator]"
                                    label="Duration (minutes)"
                                    prepend-inner-icon="tabler-clock"
                                />
                            </VCol>
                            <VCol cols="12">
                                <VTextarea
                                    rows="2"
                                    auto-grow
                                    v-model="formData.description"
                                    :rules="[requiredValidator]"
                                    label="Description"
                                />
                            </VCol>
                        </VRow>
                    </VCardText>
                </VWindowItem>
                <VWindowItem>
                    <VCardTitle> {{ $t("quiz.steps.attachments.title") }}</VCardTitle>
                    <VCardSubtitle>
                        {{ $t("quiz.steps.attachments.subtitle") }}
                    </VCardSubtitle>
                    <VCardText>
                        <VRow>
                            <!-- @vue-skip -->
                            <VCol
                                cols="12"
                                sm="6"
                                md="4"
                                v-if="formData.attachments.length"
                                class="h-100"
                                v-for="(attachment, index) in formData.attachments"
                                :key="attachment.id"
                            >
                                <Media
                                    :media="attachment"
                                    preview
                                    deletable
                                    @delete="onDeleteAttachment(index)"
                                    class="rounded-lg"
                                />
                            </VCol>
                            <VCol
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <InfoTooltip
                                    v-slot="{ props }"
                                    :text="$t('media.upload.description')"
                                >
                                    <VBtn
                                        v-bind="{
                                            ...props,
                                            ...UploadBunAttrs,
                                            style: 'min-height: 150px;aspect-ratio:2/1',
                                        }"
                                        @click="isUploaderopen = true"
                                    >
                                        <div class="d-flex flex-column align-center">
                                            <VIcon
                                                icon="tabler-upload"
                                                size="28"
                                            />
                                            <VLabel class="mt-2">
                                                {{ $t("media.attachment") }}
                                            </VLabel>
                                        </div>
                                    </VBtn>
                                </InfoTooltip>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VWindowItem>
                <VWindowItem>
                    <VCardTitle> {{ $t("quiz.steps.questions.title") }}</VCardTitle>
                    <VCardSubtitle>
                        {{ $t("quiz.steps.questions.subtitle") }}
                    </VCardSubtitle>
                    <CollapsedContent
                        v-for="(question, index) in formData.questions"
                        :key="index"
                        class="mt-5 ma-5"
                        prepend-icon="tabler-device-ipad-question"
                        :title="`${'Question ' + (index + 1)} - (${question.options.reduce((prev, opt) => prev + Number(opt.points), 0)} Points)`"
                    >
                        <template #append>
                            <IconBtn
                                @click="copyQuestion(index)"
                                icon="tabler-copy"
                            />
                            <IconBtn
                                @click="removeQuestion(index)"
                                color="error"
                                icon="tabler-trash"
                            />
                        </template>
                        <VCardItem>
                            <VRow>
                                <VCol cols="12">
                                    <EditorJs
                                        class="border rounded pa-4"
                                        :placeholder="'Type here your question ' + (index + 1)"
                                        ref="questionEditorJs"
                                        :holder="question.id + '-question'"
                                    />
                                </VCol>
                                <template
                                    v-for="(option, optionIndex) in question.options"
                                    :key="optionIndex"
                                >
                                    <VCol cols="12">
                                        <div class="d-flex align-start gap-2">
                                            <VTextField
                                                :id="'option-' + (index + 1) + '-' + (optionIndex + 1)"
                                                v-model="option.option"
                                                :label="'Option ' + (optionIndex + 1)"
                                                :rules="[requiredValidator]"
                                                :base-color="option.is_correct ? 'success' : 'default'"
                                                class="w-100"
                                            />
                                            <VTextField
                                                v-if="option.is_correct"
                                                :id="'option-points-' + (index + 1) + '-' + (optionIndex + 1)"
                                                type="number"
                                                v-model="option.points"
                                                label="Points"
                                                :rules="[requiredValidator]"
                                                :base-color="option.is_correct ? 'success' : 'default'"
                                            />
                                            <div
                                                class="ml-4"
                                                style="width: 40px"
                                            >
                                                <VCheckbox
                                                    color="success"
                                                    v-model="option.is_correct"
                                                >
                                                    <VTooltip
                                                        activator="parent"
                                                        location="top"
                                                    >
                                                        Correct Answer
                                                    </VTooltip>
                                                </VCheckbox>
                                            </div>
                                            <VBtn
                                                v-if="question.options.length > 1"
                                                @click="removeOption(index, optionIndex)"
                                                icon
                                                density="compact"
                                                color="error"
                                                variant="text"
                                            >
                                                <VIcon icon="tabler-trash" />
                                                <VTooltip
                                                    activator="parent"
                                                    location="top"
                                                >
                                                    Delete Option
                                                </VTooltip>
                                            </VBtn>
                                        </div>
                                    </VCol>
                                </template>
                                <VCol cols="12">
                                    <VSwitch
                                        v-model:model-value="question.allow_custom_answer"
                                        label="Accept custom answers"
                                    />
                                </VCol>
                                <VCol cols="12">
                                    <VSwitch
                                        v-model:model-value="question.show_answer_after_response"
                                        label="Show Answer After Response"
                                    />
                                </VCol>
                                <VCol
                                    v-if="question.show_answer_after_response"
                                    cols="12"
                                >
                                    <EditorJs
                                        class="border rounded pa-4"
                                        :placeholder="'Type here your Corect Answer '"
                                        ref="answerEditorJs"
                                        :holder="question.id + '-answer'"
                                    />
                                </VCol>
                            </VRow>
                        </VCardItem>
                        <VCardActions class="ma-3">
                            <VBtn
                                @click="addOption(index)"
                                variant="tonal"
                            >
                                Add Option
                            </VBtn>
                        </VCardActions>
                    </CollapsedContent>
                    <div class="d-flex justify-center">
                        <VTooltip location="top">
                            <template #activator="{ props }">
                                <IconBtn
                                    v-bind="props"
                                    icon="tabler-plus"
                                    variant="tonal"
                                    @click="addQuestion"
                                />
                            </template>
                            Add Question
                        </VTooltip>
                    </div>
                </VWindowItem>
                <VWindowItem>
                    <VExpansionPanels
                        v-model="visibility"
                        mandatory="force"
                        variant="accordion"
                    >
                        <VExpansionPanel value="publish">
                            <VExpansionPanelTitle>
                                <VIcon
                                    icon="tabler:send"
                                    class="mr-3"
                                />
                                Publish Quiz
                            </VExpansionPanelTitle>
                            <VCardSubtitle class="mb-2"> Make your Quiz public or private </VCardSubtitle>
                            <VExpansionPanelText class="mt-5">
                                <!-- @vue-ignore -->
                                <CustomRadiosWithIcon
                                    v-model:selected-radio="publishStatus"
                                    :radio-content="publishStatusList"
                                    :grid-column="{ md: '6' }"
                                />
                            </VExpansionPanelText>
                        </VExpansionPanel>
                        <VExpansionPanel value="schedule">
                            <VExpansionPanelTitle>
                                <VIcon
                                    icon="tabler:calendar"
                                    class="mr-3"
                                />
                                Schedule Quiz
                            </VExpansionPanelTitle>
                            <VCardSubtitle class="mb-2"> Select a date to make your Quiz public. </VCardSubtitle>
                            <VExpansionPanelText>
                                <DateTimePicker
                                    v-model="scheduleDate"
                                    style="width: min-content"
                                    :config="{
                                        inline: true,
                                        enableTime: true,
                                        dateFormat: 'Z',
                                    }"
                                />
                            </VExpansionPanelText>
                        </VExpansionPanel>
                    </VExpansionPanels>
                </VWindowItem>
            </VWindow>
            <VCardActions class="d-flex justify-center pa-5">
                <VBtn
                    color="secondary"
                    variant="tonal"
                    :disabled="currentStep === 0"
                    @click="currentStep--"
                >
                    <VIcon
                        icon="tabler-arrow-left"
                        start
                        class="flip-in-rtl"
                    />
                    Previous
                </VBtn>
                <template v-if="iconsSteps.length - 1 === currentStep">
                    <VSpacer />
                    <VBtn
                        @click="saveStartOver"
                        variant="outlined"
                        color="success"
                    >
                        {{ $t(visibility) }} & Start New Quiz
                    </VBtn>
                    <VBtn
                        @click="save"
                        color="success"
                    >
                        {{ $t(visibility) }}</VBtn
                    >
                </template>
                <VBtn
                    v-else
                    @click="next"
                >
                    Next
                    <VIcon
                        icon="tabler-arrow-right"
                        end
                        class="flip-in-rtl"
                    />
                </VBtn>
            </VCardActions>
        </VForm>
        <FileUploaderDialog
            v-model:is-dialog-visible="isUploaderopen"
            :allowed-file-types="['image/*', '.pdf', 'video/*']"
            @done="setMedia"
        />
    </VCard>
</template>
