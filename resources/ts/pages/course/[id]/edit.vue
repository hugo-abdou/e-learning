<script setup lang="ts" async>
import { useCourseStore } from "@/stores/useCourseStore";
import type { Chapter, Course, Quiz } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
import { debounce } from "lodash";
import { VueDraggable } from "vue-draggable-plus";
import type { VForm } from "vuetify/components/VForm";
definePage({
  meta: {
    navActiveLink: "course",
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});
const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const currentStep = ref(0);
const steps = ref([
  {
    icon: "tabler-info-circle",
    title: "course.steps.details.title",
    subtitle: "course.steps.details.subtitle",
    discription: "Provide data with this form to create your Coure",
    component: null as { formEl: VForm; validate: () => Promise<any> } | null,
  },
  {
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
]);

const course = ref<Course>();
const chapters = ref<Chapter[]>([]);
const quizzes = ref<Quiz[]>([]);

onBeforeMount(async () => {
  try {
    // @ts-ignore
    course.value = await courseStore.getCourse(route.params.id);
    chapters.value = (await courseStore.getChapters(course.value.slug)).data;
    quizzes.value = (await courseStore.getQuizzes(course.value.slug)).data;
  } catch (error) {}
});
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
////////////////////////////////////////////////////////////////
const chapterCreated = (chapter: Chapter) => {
  chapters.value.push(chapter);
  closeDialog();
};
const submitNewChaptersOrder = debounce(() => {
  useCourseStore().reOrderChapters(
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
    useCourseStore()
      .deleteChapter(chapter.id)
      .then(() => {
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
    <VCardItem class="px-0">
      <VTabs v-model="currentStep">
        <template v-for="step in steps" :key="step.icon">
          <VTab class="pb-5">
            <VIcon :size="18" :icon="step.icon" class="me-1" />
            <span>{{ $t(step.title) }}</span>
          </VTab>
        </template>
      </VTabs>
    </VCardItem>
    <VWindow v-model="currentStep">
      <WizardSection
        :title="$t('course.steps.details.title')"
        :subtitle="$t('course.steps.details.subtitle')"
      >
        <CourseDetailsForm v-if="course" :course="course" />
      </WizardSection>
      <WizardSection
        v-if="chapters.length"
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
        <VCardText>
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
                  <th class="text-uppercase">Title</th>
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
                  <td>
                    <VTooltip location="top start">
                      <template #activator="{ props }">
                        <ResponsiveText v-bind="props" :text="chapter.title" />
                      </template>
                      {{ chapter.title }}
                    </VTooltip>
                  </td>
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
        </VCardText>
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
                <th class="text-uppercase" style="width: 50px"></th>
              </tr>
            </thead>
            <tbody class="sort-target text-no-wrap">
              <tr v-for="quiz in quizzes" :key="quiz.id">
                <td>
                  <VTooltip location="top start">
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
                  <VTooltip location="top start">
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
    </VWindow>
    <VDialog
      :width="$vuetify.display.smAndDown ? 'auto' : 900"
      v-model="dialog.open"
    >
      <!-- 👉 Dialog close btn -->
      <DialogCloseBtn @click="closeDialog" />
      <ChapterForm
        @cancel="closeDialog"
        @created="chapterCreated"
        @updated="closeDialog"
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
