<script setup lang="ts">
import { CourseDifficulty, CourseStatus } from "@/@core/enums";
import { useCourseStore } from "@/stores/useCourseStore";
import type { Chapter, ChapterForm, CourseForm } from "@/types";
import type { VForm } from "vuetify/components/VForm";
definePage({
  meta: {
    navActiveLink: "course",
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});

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
    id: 1,
    icon: "tabler-clipboard",
    title: "course.steps.details.title",
    subtitle: "course.steps.details.subtitle",
    component: null as { formEl: VForm; validate: () => Promise<any> } | null,
  },
  {
    id: 2,
    icon: "grommet-icons:chapter-add",
    title: "course.steps.chapters.title",
    subtitle: "course.steps.chapters.subtitle",
    component: null as { formEl: VForm; validate: () => Promise<any> } | null,
  },
  {
    id: 3,
    icon: "fluent:quiz-new-20-regular",
    title: "course.steps.quizzes.title",
    subtitle: "course.steps.quizzes.subtitle",
    component: null,
  },
  {
    id: 4,
    icon: "mdi-publish",
    title: "course.steps.visibility.title",
    subtitle: "course.steps.visibility.subtitle",
    component: null,
  },
]);

const currentStep = ref(0);
const idQuizDialogOpen = ref(false);

const router = useRouter();
const courseStore = useCourseStore();

const form = ref<{
  course: CourseForm;
  chapters: ChapterForm[];

  quizzes: number[];
}>({
  course: {
    description: "",
    thumbnail: undefined,
    difficulty: CourseDifficulty.Beginner,
    status: CourseStatus.Draft,
    title: "",
  },
  chapters: [],
  quizzes: [],
});

const nextStep = async () => {
  const step = steps.value[currentStep.value];
  if (step.id === 1) {
    const data: CourseForm = await step.component?.validate();
    form.value.course = data;
  }
  if (step.id === 2) {
    const data: Chapter[] = await step.component?.validate();
    // @ts-expect-error
    const chaptersForm: ChapterForm[] = data.map((item, i) => {
      const attachments: { [key: number]: any } = {};
      item.attachments.forEach((attachment) => {
        attachments[attachment.id] = {
          name: attachment.name,
          // @ts-ignore
          watermark: attachment.watermark,
          type: attachment.type,
          download: attachment.download,
          visibility: JSON.stringify(attachment.visibility),
          slug: attachment.slug,
        };
      });
      return { ...item, attachments, order: i };
    });
    form.value.chapters = chaptersForm;
  }
  if (steps.value.length - 1 > currentStep.value) currentStep.value++;
};

const submit = async () => {
  try {
    if (!form.value.course) throw new Error("Course not Found");
    const course = await courseStore.createCourse(form.value.course);
    if (form.value.chapters.length) {
      await Promise.all(
        form.value.chapters.map((form) =>
          courseStore.createChapter(course.id, form)
        )
      );
    }
    if (form.value.quizzes.length) {
      await courseStore.attachQuizzes(course.id, form.value.quizzes);
    }

    if (visibility.value === "schedule")
      await courseStore.scheduleCourse(course.id, scheduleDate.value);

    if (visibility.value === "publish")
      await courseStore.publishCourse(course.id, publishStatus.value);

    router.push({ name: "course" });
  } catch (error) {
    throw error;
  }
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
      <VWindowItem>
        <VCardTitle>{{ $t("course.steps.details.title") }}</VCardTitle>
        <VCardSubtitle>
          {{ $t("course.steps.details.subtitle") }}
        </VCardSubtitle>
        <CourseDetailsForm :ref="el => (steps[0].component = el as null)" />
      </VWindowItem>

      <VWindowItem>
        <VCardTitle>{{ $t("course.steps.chapters.title") }}</VCardTitle>
        <VCardSubtitle>
          {{ $t("course.steps.chapters.subtitle") }}
        </VCardSubtitle>
        <CourseChaptersForm :ref="el => (steps[1].component = el as null)" />
      </VWindowItem>
      <VWindowItem>
        <VCardItem>
          <VCardTitle>{{ $t("course.steps.quizzes.title") }}</VCardTitle>
          <VCardSubtitle>
            {{ $t("course.steps.quizzes.subtitle") }}
          </VCardSubtitle>
          <CourseQuizzesForm v-model="form.quizzes" />
        </VCardItem>
      </VWindowItem>
      <VWindowItem>
        <VExpansionPanels
          v-model="visibility"
          mandatory="force"
          style="max-width: 500px; margin-inline: auto"
          variant="accordion"
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
    <VCardActions class="d-flex justify-center pa-5">
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
      v-model="idQuizDialogOpen"
    >
      <!-- 👉 Dialog close btn -->
      <DialogCloseBtn @click="idQuizDialogOpen = false" />
      <QuizzesForm status="Published" class="v-card--flat" />
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
