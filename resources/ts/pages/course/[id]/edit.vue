<template>
    <VContainer>
        <VRow align="center">
            <VCol cols="12" class="d-flex gap-2 flex-wrap">
                <VTabs v-model="currentStep" class="v-tabs-pill">
                    <template v-for="step in steps" :key="step.icon">
                        <VTab>
                            <VIcon :size="18" :icon="step.icon" class="me-1" />
                            <span>{{ step.title }}</span>
                        </VTab>
                    </template>
                </VTabs>
            </VCol>
            <VCol cols="12">
                <VWindow v-model="currentStep" class="mt-5 overflow-visible">
                    <VWindowItem>
                        <CourseDetailsForm :course="course" :ref="el => (steps[0].component = el as null)" />
                    </VWindowItem>
                    <VWindowItem>
                        <CourseChaptersForm v-if="chapters" :chapters="chapters" :ref="el => (steps[1].component = el as null)" />
                    </VWindowItem>
                </VWindow>

                <div class="d-flex gap-2 justify-space-between mt-8">
                    <VSpacer />
                    <VBtn color="success" @click="save">
                        Save
                        <VIcon icon="tabler-check" end class="flip-in-rtl" />
                    </VBtn>
                    <!-- <VBtn v-if="course" :to="{ name: 'course-id', params: { id: course.id } }" color="default">Previw</VBtn> -->
                </div>
            </VCol>
        </VRow>
    </VContainer>
</template>
<script setup lang="ts" async>
import type { VForm } from "vuetify/components/VForm";
import { useCourseStore } from "@/stores/useCourseStore";
import { Chapter, ChapterForm, Course, CourseForm } from "@/types";
import useSnackBarStore from "@/components/SnackBar/useSnackBarStore";

const snackbarStore = useSnackBarStore();
const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();

const currentStep = ref(0);

const steps = ref([
    {
        icon: "tabler-clipboard",
        title: "Details",
        subtitle: "Enter Coure Details",
        discription: "Provide data with this form to create your Coure",
        component: null as { formEl: VForm; validate: () => Promise<any> } | null
    },
    {
        icon: "grommet-icons:chapter-add",
        title: "Chapters",
        subtitle: "Add Chapters",
        discription: "Add Chapters",
        component: null as { formEl: VForm; validate: () => Promise<any> } | null
    }
]);
const course = ref<Course>();
const chapters = ref<Chapter[]>([]);

onBeforeMount(async () => {
    try {
        course.value = await courseStore.getCourse(Number(route.params.id), { additional: { chapters: true } });
        chapters.value = course.value?.chapters || [];
        // @ts-ignore
        delete course.value?.chapters;
        // @ts-ignore
        delete course.value?.author;
    } catch (error) {
        router.push({ name: "course" });
    }
});
const save = async () => {
    const step = steps.value[currentStep.value];
    try {
        if (step.title.toLocaleLowerCase() === "details" && course.value) {
            const data: CourseForm = await step.component?.validate();
            courseStore.updateCourse(course.value.id, data);
        }
        if (step.title.toLocaleLowerCase() === "chapters" && course.value) {
            const data: Chapter[] = await step.component?.validate();
            const course_id = course.value.id;
            // @ts-expect-error
            const chaptersForm: ChapterForm[] = data.map((item, i) => {
                const attachments: { [key: number]: any } = {};
                item.attachments.forEach(({ name, id, type, download, visibility, watermark }) => {
                    attachments[id] = { name, type, download, visibility: JSON.stringify(visibility), watermark };
                });
                return { ...item, course_id, attachments, order: i };
            });
            snackbarStore.add({ text: "course updated successfuly", timeout: 5000 });

            await Promise.all(chaptersForm.map(form => courseStore.updateChapter(form.id || 0, form)));
        }
    } catch (error) {
        // @ts-ignore
        snackbarStore.add({ text: error?.message, color: "error", timeout: 5000 });
    }
};
</script>
<route lang="yaml">
meta:
    beforeResolve: getCourse
    navActiveLink: course
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
