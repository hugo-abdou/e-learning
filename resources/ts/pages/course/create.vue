<template>
    <VContainer>
        <VRow align="center">
            <VCol cols="12">
                <AppStepper :current-step="currentStep" direction="horizontal" :items="steps" icon-size="22" class="stepper-icon-step-bg" />
            </VCol>
            <VCol cols="12">
                <VWindow v-model="currentStep" class="disable-tab-transition stepper-content mt-5">
                    <VWindowItem>
                        <CourseDetailsForm :ref="el => (steps[0].component = el as null)" />
                    </VWindowItem>
                    <VWindowItem>
                        <CourseChaptersForm :ref="el => (steps[1].component = el as null)" />
                    </VWindowItem>
                </VWindow>

                <div class="d-flex justify-space-between mt-8">
                    <VBtn variant="plain" color="secondary" :disabled="currentStep === 0" @click="currentStep--">
                        <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                        Previous
                    </VBtn>

                    <VBtn v-if="steps.length - 1 === currentStep" color="success" @click="nextStep">
                        submit
                        <VIcon icon="tabler-check" end class="flip-in-rtl" />
                    </VBtn>

                    <VBtn variant="plain" v-else @click="nextStep">
                        Next
                        <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
                    </VBtn>
                </div>
            </VCol>
        </VRow>
    </VContainer>
</template>
<script setup lang="ts">
import type { VForm } from "vuetify/components/VForm";
import { useCourseStore } from "@/stores/useCourseStore";
import { Chapter, ChapterForm, Course, CourseForm } from "@/types";

const currentStep = ref(0);
// @ts-ignore
const formComponent = ref<{ formEl: VForm; validate: () => Promise<any> }>({});

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

const nextStep = async () => {
    const step = steps.value[currentStep.value];
    try {
        if (step.title.toLocaleLowerCase() === "details") {
            const data: CourseForm = await step.component?.validate();
            course.value = await courseStore.createCourse(data);
        }
        if (step.title.toLocaleLowerCase() === "chapters" && course.value) {
            const data: Chapter[] = await step.component?.validate();
            const chaptersForm: ChapterForm[] = data.map((item, i) => {
                const attachments: { [key: number]: any } = {};
                item.attachments.forEach(({ id }) => {
                    attachments[id] = { type: "media" };
                });
                return { ...item, video: item.video?.id || null, attachments, order: i };
            });
            const courseId = course.value.id;
            await Promise.all(chaptersForm.map(form => courseStore.createChapter(courseId, form)));
            router.push({ name: "course" });
        }
        if (steps.value.length - 1 > currentStep.value) currentStep.value++;
    } catch (error) {
        // console.error(error);
    }
};
const router = useRouter();
const courseStore = useCourseStore();
</script>
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

<route lang="yaml">
meta:
    navActiveLink: course
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
