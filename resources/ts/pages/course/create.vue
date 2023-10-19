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
                        {{ $t("previous") }}
                    </VBtn>

                    <VBtn v-if="steps.length - 1 === currentStep" append-icon="tabler-check" color="success" @click="nextStep">
                        {{ $t("submit") }}
                    </VBtn>

                    <VBtn variant="plain" v-else @click="nextStep">
                        {{ $t("next") }}
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

const steps = ref([
    {
        id: 1,
        icon: "tabler-clipboard",
        title: "course.steps.details.title",
        subtitle: "course.steps.details.subtitle",
        component: null as { formEl: VForm; validate: () => Promise<any> } | null
    },
    {
        id: 2,
        icon: "grommet-icons:chapter-add",
        title: "course.steps.chapters.title",
        subtitle: "course.steps.chapters.subtitle",
        component: null as { formEl: VForm; validate: () => Promise<any> } | null
    }
]);
const course = ref<Course>();

const nextStep = async () => {
    const step = steps.value[currentStep.value];
    console.log(step.component?.formEl);
    try {
        if (step.id === 1) {
            const data: CourseForm = await step.component?.validate();
            course.value = await courseStore.createCourse(data);
        }
        if (step.id === 2 && course.value) {
            const data: Chapter[] = await step.component?.validate();
            // @ts-ignore
            const chaptersForm: ChapterForm[] = data.map((item, i) => {
                const attachments: { [key: number]: any } = {};
                item.attachments.forEach(({ id, type, download, visibility, watermark }) => {
                    attachments[id] = { type, download, visibility: JSON.stringify(visibility), watermark };
                });
                return { ...item, attachments, order: i };
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
