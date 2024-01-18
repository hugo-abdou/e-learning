<script lang="ts" setup>
import type { Media, Quiz } from "@/types";
import { UploadBunAttrs, uuid } from "@/utils";
definePage({
  meta: {
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
    layout: "default",
    navActiveLink: "quizzes",
  },
});

const isUploaderopen = ref(false);
const quiz = ref<Omit<Quiz, "id">>({
  title: "",
  description: "",
  duration: 5,
  status: "Draft",
  attachments: [],
  questions: [
    {
      id: uuid(),
      question: "",
      options: [{ id: uuid(), option: "", points: 0, is_correct: false }],
    },
  ],
});
// @ts-expect-error
const formEl = ref<VForm>({});

const validate = async () => {
  const { valid, errors } = await formEl.value.validate();
  if (valid) return Promise.resolve();
  return Promise.reject(errors);
};

const addQuestion = () => {
  validate().then(() => {
    quiz.value.questions.push({
      id: uuid(),
      question: "",
      options: [{ id: uuid(), option: "", points: 0, is_correct: false }],
    });
  });
};

const addOption = (questionIndex: number) => {
  validate().then(() => {
    quiz.value.questions[questionIndex].options.push({
      id: uuid(),
      option: "",
      points: 0,
      is_correct: false,
    });
  });
};

const removeOption = (questionIndex: number, optionIndex: number) => {
  quiz.value.questions[questionIndex].options.splice(optionIndex, 1);
};

const removeQuestion = (index: number) => {
  quiz.value.questions.splice(index, 1);
};
const copyQuestion = (index: number) => {
  quiz.value.questions.push({
    id: uuid(),
    question: quiz.value.questions[index].question,
    options: quiz.value.questions[index].options.map((option) => ({
      ...option,
      id: uuid(),
    })),
  });
};

const setMedia = (media: Media[]) => {
  // @ts-ignore
  quiz.value.attachments.push(...media);
  isUploaderopen.value = false;
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

const onDeleteAttachment = (index: number) => {
  quiz.value.attachments.splice(index, 1);
};
const router = useRouter();
const quizStore = useQuizzesStore();

const submit = async () => {
  try {
    await validate();
    const attachments: { [key: number]: any } = {};
    quiz.value.attachments.forEach(
      ({ type, id, name }) => (attachments[id] = { type, name })
    );
    const res = await quizStore.createQuiz({
      ...quiz.value,
      attachments: attachments,
    });
    if (visibility.value === "schedule")
      await quizStore.scheduleQuiz(Number(res.data.id), scheduleDate.value);

    if (visibility.value === "publish")
      await quizStore.publishQuiz(Number(res.data.id), publishStatus.value);
    Promise.resolve();
  } catch (error) {
    console.log(error);
    Promise.reject(error);
  }
};

const saveStartOver = () => {
  submit().then(() => {
    router.push({ name: "quizzes-create" });
  });
};
const save = () => {
  submit().then(() => {
    router.push({ name: "quizzes" });
  });
};
</script>

<template>
  <VAppBarTitle>Create a New Quiz</VAppBarTitle>
  <VForm ref="formEl" class="mt-5">
    <VRow>
      <VCol cols="12">
        <VCard prepend-icon="fluent:quiz-new-24-regular" title="Quiz Details">
          <VCardItem>
            <VRow class="pt-2">
              <VCol cols="12" sm="8">
                <VTextField
                  v-model="quiz.title"
                  :rules="[requiredValidator]"
                  label="Title"
                />
              </VCol>
              <VCol cols="12" sm="4">
                <VTextField
                  v-model="quiz.duration"
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
                  v-model="quiz.description"
                  :rules="[requiredValidator]"
                  label="Description"
                />
              </VCol>
            </VRow>
          </VCardItem>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard
          prepend-icon="teenyicons:attachment-outline"
          title="Quiz Attachments"
        >
          <VCardItem>
            <VRow align="center">
              <VCol
                cols="12"
                sm="6"
                md="4"
                v-if="quiz.attachments.length"
                class="h-100"
                v-for="(attachment, index) in quiz.attachments"
                :key="attachment.id"
              >
                <Media
                  :media="attachment"
                  deletable
                  aspect-ratio="2/1"
                  is-preview
                  @on-delete="onDeleteAttachment(index)"
                />
              </VCol>
              <VCol cols="12" sm="6" md="4">
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
                      <VIcon icon="flat-color-icons:add-image" size="28" />
                      <VLabel class="mt-2">
                        {{ $t("media.attachment") }}
                      </VLabel>
                    </div>
                  </VBtn>
                </InfoTooltip>
              </VCol>
            </VRow>
          </VCardItem>
        </VCard>
      </VCol>
      <VCol cols="12" v-for="(question, index) in quiz.questions" :key="index">
        <VCard
          prepend-icon="mdi-account-question-outline"
          :title="`${
            question.question || 'Question ' + (index + 1)
          } - (${question.options.reduce(
            (prev, opt) => prev + Number(opt.points),
            0
          )} Points)`"
        >
          <template #append>
            <VBtn
              @click="copyQuestion(index)"
              v-bind="{ variant: 'text', density: 'compact', color: 'default' }"
              icon="tabler-copy"
            />
            <VBtn
              @click="removeQuestion(index)"
              v-bind="{ variant: 'text', density: 'compact', color: 'error' }"
              icon="tabler-trash"
            />
          </template>
          <VCardItem>
            <VRow>
              <VCol cols="12">
                <!-- <VTextarea
                  v-model="question.question"
                  :label="'Question ' + (index + 1)"
                  :rules="[requiredValidator]"
                  class="mt-2"
                  rows="2"
                  auto-grow
                /> -->
                <EditorJs
                  class="border rounded"
                  :placeholder="'Type here your question ' + (index + 1)"
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
                      :id="
                        'option-points-' + (index + 1) + '-' + (optionIndex + 1)
                      "
                      type="number"
                      v-model="option.points"
                      label="Points"
                      :rules="[requiredValidator]"
                      :base-color="option.is_correct ? 'success' : 'default'"
                    />
                    <div class="ml-4" style="width: 40px">
                      <VCheckbox color="success" v-model="option.is_correct">
                        <VTooltip activator="parent" location="top">
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
                      <VTooltip activator="parent" location="top">
                        Delete Option
                      </VTooltip>
                    </VBtn>
                  </div>
                </VCol>
              </template>
            </VRow>
          </VCardItem>
          <VCardActions class="ma-3">
            <VBtn @click="addOption(index)" variant="tonal"> Add Option </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
      <VCol>
        <VBtn v-bind="UploadBunAttrs" @click="addQuestion">
          <VLabel class="mt-2"> Add Question </VLabel>
        </VBtn>
      </VCol>
      <VCol cols="12">
        <VExpansionPanels
          v-model="visibility"
          mandatory="force"
          variant="accordion"
        >
          <VExpansionPanel value="publish">
            <VExpansionPanelTitle>
              <VIcon icon="tabler:send" class="mr-3" /> Publish Quiz
            </VExpansionPanelTitle>
            <VCardSubtitle class="mb-2">
              Make your Quiz public or private
            </VCardSubtitle>
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
              <VIcon icon="tabler:calendar" class="mr-3" /> Schedule Quiz
            </VExpansionPanelTitle>
            <VCardSubtitle class="mb-2">
              Select a date to make your Quiz public.
            </VCardSubtitle>
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
      </VCol>
      <VCol cols="12">
        <VCardText class="d-flex flex-wrap gap-2">
          <VBtn @click="saveStartOver" variant="outlined" color="success">
            {{ $t(visibility) }} & Start New Quiz
          </VBtn>
          <VSpacer />
          <VBtn @click="save" color="success"> {{ $t(visibility) }}</VBtn>
        </VCardText>
      </VCol>
    </VRow>
  </VForm>
  <FileUploaderDialog
    v-model:is-dialog-visible="isUploaderopen"
    :allowed-file-types="['image/*', '.pdf', 'video/*']"
    @done="setMedia"
  />
</template>
