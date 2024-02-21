<script setup lang="ts">
import { CourseStatus } from "@/@core/enums";
import { Chapter, Course, Quiz } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
import { debounce } from "lodash";
import { VueDraggable } from "vue-draggable-plus";
definePage({
  meta: {
    navActiveLink: "course",
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});

const formEl = ref<any>();
const visibility = ref<"publish" | "schedule">("publish");
const publishStatus = ref<"Private" | "Published">("Private");

const publishStatusList = [
  {
    title: "Private",
    desc: "Only you and people you choose can watch your video",
    value: CourseStatus.Private,
    icon: { icon: "carbon:virtual-private-cloud", size: "28" },
  },
  {
    title: "Publish",
    desc: "Everyone can watch your video",
    value: CourseStatus.Published,
    icon: { icon: "mdi-public", size: "28" },
  },
];

const scheduleDate = ref(new Date().toISOString());

const steps = ref([
  {
    icon: "tabler-info-circle",
    title: "course.steps.details.title",
    subtitle: "course.steps.details.subtitle",
  },
  {
    icon: "grommet-icons:chapter-add",
    title: "course.steps.chapters.title",
    subtitle: "course.steps.chapters.subtitle",
  },
  {
    icon: "fluent:quiz-new-20-regular",
    title: "course.steps.quizzes.title",
    subtitle: "course.steps.quizzes.subtitle",
  },
  {
    icon: "mdi-publish",
    title: "course.steps.visibility.title",
    subtitle: "course.steps.visibility.subtitle",
  },
]);

const currentStep = ref(0);
type DialogTypes = "quiz-dialog" | "chapter-dialog" | undefined;
type Dialog = {
  open: boolean;
  type: DialogTypes;
  data: any;
};
const initialDialog = { open: false, type: undefined, data: undefined };
const dialog = ref<Dialog>({ ...initialDialog });
const closeDialog = () => {
  dialog.value = { ...initialDialog };
};
const openDialog = (type: DialogTypes, data?: any) => {
  dialog.value.open = true;
  dialog.value.type = type;
  dialog.value.data = data;
};
const course = ref<Course>();
const chapters = ref<Chapter[]>([]);
const quizzes = ref<Quiz[]>([]);
const courseStore = useCourseStore();
const chapterCreated = (chapter: Chapter) => {
  chapters.value.push(chapter);
  closeDialog();
};

const router = useRouter();

const createCourse = async () => {
  try {
    course.value = await formEl.value.submit();
    if (course.value) {
      chapters.value = (await courseStore.getChapters(course.value.slug)).data;
      quizzes.value = (await courseStore.getQuizzes(course.value.slug)).data;
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
const nextStep = async () => {
  try {
    if (currentStep.value === 0) await createCourse();
    if (steps.value.length - 1 > currentStep.value) currentStep.value++;
  } catch {}
};

const submit = async () => {
  try {
    if (visibility.value == "publish" && course.value) {
      await courseStore.publishCourse(course.value.id, publishStatus.value);
    }
    if (visibility.value == "schedule" && course.value) {
      await courseStore.scheduleCourse(course.value.id, scheduleDate.value);
    }
    router.push({ name: "course" });
  } catch (error) {
    throw error;
  }
};
const submitNewChaptersOrder = debounce(() => {
  courseStore.reOrderChapters(
    chapters.value.map(({ id, order }) => ({ id, order }))
  );
}, 1000);

const chaptersOrderChange = (e: any) => {
  const oldOrder = chapters.value[e.oldIndex].order;
  const newOrder = chapters.value[e.newIndex].order;
  chapters.value[e.oldIndex].order = newOrder;
  chapters.value[e.newIndex].order = oldOrder;
  submitNewChaptersOrder();
};
const removeChapter = (chapter: Chapter) => {
  if (confirm("Are you sure you want to delete this chapter?")) {
    courseStore.deleteChapter(chapter.id).then(() => {
      chapters.value = chapters.value.filter((c) => c.id !== chapter.id);
    });
  }
};
const editChapter = (chapter: Chapter) => {
  openDialog("chapter-dialog", chapter);
};

////////////////////////////////////////////////////////////////
const quizCreated = (quiz: Quiz) => {
  if (course.value) {
    courseStore.attachQuizzes(course.value.id, [
      ...quizzes.value.map(({ id }) => id),
      quiz.id,
    ]);
    quizzes.value.push(quiz);
  }
  closeDialog();
};
const detachQuizzes = async (quiz: Quiz) => {
  if (course.value) {
    await courseStore.detachQuizzes(course.value.id, [quiz.id]);
    quizzes.value = (await courseStore.getQuizzes(course.value.slug)).data;
  }
  closeDialog();
};
</script>

<template>
  <VCard>
    <VCardText>
      <AppStepper
        icon-size="24"
        class="stepper-icon-step-bg"
        align="start"
        :current-step="currentStep"
        :items="steps"
      />
    </VCardText>
    <VDivider class="mb-5" />
    <VWindow
      :touch="false"
      v-model="currentStep"
      class="disable-tab-transition stepper-content mt-5"
    >
      <WizardSection
        :title="$t('course.steps.details.title')"
        :subtitle="$t('course.steps.details.subtitle')"
      >
        <CourseDetailsForm :course="course" ref="formEl">
          <!-- declare this template just to hide the form actions -->
          <template #actions></template>
        </CourseDetailsForm>
      </WizardSection>
      <WizardSection
        :title="$t('course.steps.chapters.title')"
        :subtitle="$t('course.steps.chapters.subtitle')"
      >
        <template #append>
          <VBtn
            color="primary"
            outlined
            class="mb-2"
            @click="openDialog('chapter-dialog')"
            >{{ $t("Add New Chapter") }}</VBtn
          >
        </template>
        <VCardItem v-if="chapters.length">
          <VueDraggable
            v-model="chapters"
            chosen-class="bg-secondary"
            target=".sort-target"
            @change="chaptersOrderChange"
            :delay="200"
          >
            <VTable class="text-no-wrap border rounded">
              <thead>
                <tr>
                  <th class="text-uppercase" style="width: 10px"></th>
                  <th class="text-uppercase" style="width: 10px">Title</th>
                  <th class="text-uppercase">Attachments</th>
                  <th class="text-uppercase" style="width: 10px"></th>
                </tr>
              </thead>
              <tbody class="sort-target">
                <tr
                  v-for="chapter in chapters"
                  :key="chapter.id + chapter.title"
                >
                  <td>
                    <IconBtn>
                      <VIcon icon="tabler-arrows-move-vertical" />
                    </IconBtn>
                  </td>
                  <td>{{ chapter.title }}</td>
                  <td class="py-2">
                    <div class="v-avatar-group">
                      <template v-for="img in chapter.attachments">
                        <VTooltip location="top">
                          <template #activator="{ props }">
                            <VAvatar
                              v-bind="props"
                              rounded="lg"
                              size="50px"
                              style="width: 70px"
                              class="mr-n10 bg-background border-0"
                              :image="
                                img.thumb_url || resolveDefaultThumbnal(img)
                              "
                            >
                              <!-- make the tooltip -->
                            </VAvatar>
                          </template>
                          {{ img.name }}
                        </VTooltip>
                      </template>
                    </div>
                  </td>
                  <td>
                    <IconBtn @click="removeChapter(chapter)">
                      <VIcon color="error" icon="tabler-trash" />
                    </IconBtn>
                    <IconBtn @click="editChapter(chapter)">
                      <VIcon icon="tabler-edit" />
                    </IconBtn>
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VueDraggable>
        </VCardItem>
      </WizardSection>
      <WizardSection
        :title="$t('course.steps.quizzes.title')"
        :subtitle="$t('course.steps.quizzes.subtitle')"
      >
        <template #append>
          <VBtn
            color="primary"
            outlined
            class="mb-2"
            @click="openDialog('quiz-dialog')"
            >{{ $t("Add New Quiz") }}</VBtn
          >
        </template>
        <VCardItem>
          <VTable density="default" class="border rounded text-no-wrap">
            <thead>
              <tr>
                <th class="text-uppercase">Title</th>
                <th class="text-uppercase">Description</th>
                <th class="text-uppercase"></th>
              </tr>
            </thead>
            <tbody class="sort-target text-no-wrap">
              <tr v-for="quiz in quizzes" :key="quiz.id">
                <td>
                  <VTooltip>
                    <template #activator="{ props }">
                      <ResponsiveText
                        :max-lines="1"
                        v-bind="props"
                        :text="quiz.title"
                      />
                    </template>
                    {{ quiz.title }}
                  </VTooltip>
                </td>
                <td>
                  <VTooltip>
                    <template #activator="{ props }">
                      <ResponsiveText
                        :max-lines="1"
                        v-bind="props"
                        :text="quiz.description"
                      />
                    </template>
                    {{ quiz.description }}
                  </VTooltip>
                </td>
                <td>
                  <IconBtn @click="detachQuizzes(quiz)">
                    <VIcon color="error" icon="tabler-trash" />
                  </IconBtn>
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCardItem>
      </WizardSection>
      <VWindowItem>
        <VExpansionPanels
          v-model="visibility"
          mandatory="force"
          style="max-width: 500px; margin-inline: auto"
          variant="accordion"
          class="expansion-panels-width-border"
        >
          <VExpansionPanel value="publish">
            <VExpansionPanelTitle> Save or publish </VExpansionPanelTitle>
            <VCardSubtitle class="mb-2">
              Make your video public or private
            </VCardSubtitle>
            <VExpansionPanelText>
              <!-- @vue-ignore -->
              <CustomRadiosWithIcon
                v-model:selected-radio="publishStatus"
                :radio-content="publishStatusList"
                :grid-column="{ md: '6' }"
              />
            </VExpansionPanelText>
          </VExpansionPanel>
          <VExpansionPanel value="schedule">
            <VExpansionPanelTitle> Schedule </VExpansionPanelTitle>
            <VCardSubtitle class="mb-2">
              Select a date to make your video public.
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
      </VWindowItem>
    </VWindow>
    <VCardActions class="justify-center mt-5">
      <VBtn
        variant="plain"
        color="secondary"
        :disabled="currentStep === 0"
        @click="currentStep--"
      >
        <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
        {{ $t("previous") }}
      </VBtn>
      <VBtn
        v-if="steps.length - 1 === currentStep"
        append-icon="tabler-check"
        color="success"
        @click="submit"
      >
        {{ $t(visibility) }}
      </VBtn>
      <VBtn v-else variant="plain" @click="nextStep">
        {{ $t("next") }}
        <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
      </VBtn>
    </VCardActions>
    <VDialog
      :width="$vuetify.display.smAndDown ? 'auto' : 900"
      v-model="dialog.open"
    >
      <!-- 👉 Dialog close btn -->
      <DialogCloseBtn @click="closeDialog" />
      <ChapterForm
        @cancel="closeDialog"
        @created="chapterCreated"
        :course-id="course.id"
        :chapter="dialog.data"
        v-if="course && dialog.type === 'chapter-dialog'"
      />
      <QuizzesForm
        v-if="course && dialog.type === 'quiz-dialog'"
        status="Published"
        @cancel="closeDialog"
        @created="quizCreated"
      />
    </VDialog>
  </VCard>
</template>

<style lang="scss">
.stepper-content .card-list {
  --v-card-list-gap: 24px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease;
}

.list-move {
  transition: transform 0.5s ease-out;
}
</style>
