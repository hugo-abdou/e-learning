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
                    <VWindowItem>
                        <VExpansionPanels v-model="visibility" style="max-width: 500px; margin-inline: auto" variant="accordion">
                            <VExpansionPanel value="publish">
                                <VExpansionPanelTitle> Save or publish </VExpansionPanelTitle>
                                <VCardSubtitle class="mb-2">Make your video public or private</VCardSubtitle>
                                <VExpansionPanelText>
                                    <CustomRadiosWithIcon
                                        v-model:selected-radio="(publishStatus as string)"
                                        :radio-content="publishStatusList"
                                        :grid-column="{ md: '6' }"
                                    />
                                </VExpansionPanelText>
                            </VExpansionPanel>
                            <VExpansionPanel value="schedule">
                                <VExpansionPanelTitle> Schedule </VExpansionPanelTitle>
                                <VCardSubtitle class="mb-2">Select a date to make your video public.</VCardSubtitle>
                                <VExpansionPanelText>
                                    <DateTimePicker style="width: min-content" v-model="scheduleDate" :config="{ inline: true }">
                                    </DateTimePicker>
                                </VExpansionPanelText>
                            </VExpansionPanel>
                        </VExpansionPanels>
                    </VWindowItem>
                </VWindow>

                <div class="d-flex justify-space-between mt-8">
                    <VBtn variant="plain" color="secondary" :disabled="currentStep === 0" @click="currentStep--">
                        <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                        {{ $t("previous") }}
                    </VBtn>

                    <VBtn v-if="steps.length - 1 === currentStep" append-icon="tabler-check" color="success" @click="nextStep">
                        {{ $t(visibility) }}
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
import { CourseStatus } from "@/@core/enums";

const currentStep = ref(2);

const visibility = ref<"publish" | "schedule">("publish");
const publishStatus = ref<"draft" | "published">("draft");
const publishStatusList = [
    {
        title: CourseStatus.Draft.toUpperCase(),
        desc: "Only you and people you choose can watch your video",
        value: CourseStatus.Draft,
        icon: { icon: "carbon:virtual-private-cloud", size: "28" }
    },
    {
        title: CourseStatus.Published.toUpperCase(),
        desc: "Everyone can watch your video",
        value: CourseStatus.Published,
        icon: { icon: "mdi-public", size: "28" }
    }
];
const scheduleDate = ref(new Date());

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
    },
    {
        id: 3,
        icon: "mdi-publish",
        title: "course.steps.visibility.title",
        subtitle: "course.steps.visibility.subtitle",
        component: null
    }
]);
const course = ref<Course>();

const nextStep = async () => {
    const step = steps.value[currentStep.value];
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
                item.attachments.forEach(({ name, id, type, download, visibility, watermark }) => {
                    attachments[id] = { name, type, download, visibility: JSON.stringify(visibility), watermark };
                });
                return { ...item, attachments, order: i };
            });
            const courseId = course.value.id;
            await Promise.all(chaptersForm.map(form => courseStore.createChapter(courseId, form)));
        }
        if (steps.value.length - 1 > currentStep.value) currentStep.value++;
    } catch (error) {
        console.error(error);
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
