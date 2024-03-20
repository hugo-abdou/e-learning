<script setup lang="ts">
import { QuizStatus } from "@/@core/enums";
import Media from "@/components/Media";
import type { Quiz, QuizForm, ResourceResponse } from "@/types";
import { UploadBunAttrs } from "@/helpers";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import slugify from "slugify";
import { useQuizzesStore } from "@/stores/useQuizzesStore";
import CollapsedContent from "./CollapsedContent.vue";

const emit = defineEmits<{
    (e: "created", value: Quiz): void;
    (e: "updated", value: Quiz): void;
}>();
interface Props {
    status?: keyof typeof QuizStatus;
    quiz?: Quiz;
}
const props = withDefaults(defineProps<Props>(), {
    status: "Published",
    quiz: () => ({
        id: 0,
        title: "",
        slug: "",
        description: "",
        duration: 5,
        status: "Published",
        attachments: [],
        questions: [
            {
                id: new Date().getTime(),
                allow_custom_answer: false,
                show_answer_after_response: false,
                answer: {} as OutputData,
                question: {} as OutputData,
                options: [{ id: new Date().getTime(), option: "", points: 0, is_correct: false }],
            },
        ],
    }),
});

const uuid = () => new Date().getTime();

const quizStore = useQuizzesStore();
// @ts-expect-error
const formEl = ref<VForm>({});
const validate = async () => {
    const { valid, errors } = await formEl.value.validate();
    if (valid) return Promise.resolve();
    return Promise.reject(errors);
};

const formData = ref<Quiz>({ ...props.quiz } as Quiz);

watch(
    () => props.quiz.id,
    (value) => {
        formData.value.questions = props.quiz.questions;
    }
);

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
        student_answer: null,
    });
};
const removeOption = (questionIndex: number, optionIndex: number) => {
    formData.value.questions[questionIndex].options.splice(optionIndex, 1);
};
const addOption = (questionIndex: number) => {
    formData.value.questions[questionIndex].options.push({ id: uuid(), option: "", points: 0, is_correct: false });
};
const setMedia = (media: any[]) => {
    formData.value.attachments.push(...media);
    isUploaderopen.value = false;
};

type EditorJsType = { editor: EditorJS; id: any };
const questionEditorJs = ref<EditorJsType[]>([]);
const answerEditorJs = ref<EditorJsType[]>([]);

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
            // formData.value.attachments.forEach(({ type, id, name }: any) => (attachments[id] = { type, name, slug: slugify(name) }));
            if (props.quiz.id) {
                const res = await quizStore.updateQuiz(props.quiz.id, {
                    ...formData.value,
                    slug: slugify(formData.value.title),
                    // @ts-ignore
                    questions: formData.value.questions.map(({ question, answer, ...all }) => ({
                        ...all,
                        question: JSON.stringify(question) as any,
                        answer: JSON.stringify(answer) as any,
                    })),
                    // attachments: attachments,
                });
                emit("updated", res.data);
                return resolve(res);
            } else {
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
                await quizStore.publishQuiz(Number(res.data.id), props.status);
                emit("created", res.data);
                return resolve(res);
            }
        } catch (error) {
            return reject(error);
        }
    });
};
const save = () => {
    submit().then(({ data }) => {});
};
</script>

<template>
    <div>
        <VForm ref="formEl">
            <CustomizerSection title="">
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
            </CustomizerSection>
            <!-- TODO: Add attachment -->
            <CustomizerSection
                v-if="false"
                :title="$t('quiz.steps.attachments.title')"
            >
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
            </CustomizerSection>
            <VCardTitle>{{ $t("quiz.steps.questions.title") }}</VCardTitle>
            <div>
                <CollapsedContent
                    class="ma-2"
                    v-if="formData.questions.length > 0"
                    v-for="(question, index) in formData.questions"
                    :key="index"
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
                                    :data="question.question"
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
                <VCardSubtitle v-else>
                    {{ $t("quiz.questions.no_questions") }}
                </VCardSubtitle>
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
            </div>
            <VCardActions class="d-flex justify-end pa-5">
                <VBtn
                    @click="save"
                    color="success"
                    variant="flat"
                >
                    {{ $t("Save") }}
                </VBtn>
            </VCardActions>
        </VForm>
        <FileUploaderDialog
            v-model:is-dialog-visible="isUploaderopen"
            :allowed-file-types="['image/*', '.pdf', 'video/*']"
            @done="setMedia"
        />
    </div>
</template>
