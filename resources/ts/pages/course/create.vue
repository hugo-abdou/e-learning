<template>
    <VContainer>
        <h1 class="text-h1 text-center mb-2">
            {{ steps[currentStep].title }}
        </h1>
        <p class="text-sm text-center mb-8">{{ steps[currentStep].discription }}</p>
        <VRow>
            <VCol cols="12" md="4" lg="3">
                <VCardItem>
                    <AppStepper
                        :current-step="currentStep"
                        :direction="windowWidth > 960 ? 'vertical' : 'horizontal'"
                        :items="steps"
                        icon-size="22"
                        class="stepper-icon-step-bg"
                    />
                </VCardItem>
            </VCol>

            <VCol cols="12" md="8" lg="9">
                <VWindow v-model="currentStep" class="disable-tab-transition stepper-content">
                    <VWindowItem>
                        <VForm :ref="el => (steps[0].form = el as any)" @submit.prevent="nextStep">
                            <VCard>
                                <VCardItem>
                                    <VRow align="end" class="mt-0">
                                        <VCol cols="12">
                                            <VTextField v-model="formData.title" :rules="[requiredValidator]" label="Coure Title" />
                                        </VCol>
                                        <VCol cols="12">
                                            <VTextarea
                                                v-model="formData.description"
                                                :rules="[requiredValidator]"
                                                label="Coure Description"
                                            />
                                        </VCol>
                                        <VCol cols="12" sm="6">
                                            <AppSelect
                                                v-model="formData.difficulty"
                                                :items="Object.values(CourseDifficulty)"
                                                label="Difficulty"
                                            />
                                        </VCol>
                                        <VCol cols="12" sm="6">
                                            <AppSelect v-model="formData.prerequisite_id" :items="[]" label="Prerequisite" />
                                        </VCol>
                                        <VCol cols="6">
                                            <VSwitch label="Visible" v-model="formData.is_visible" />
                                        </VCol>
                                    </VRow>
                                </VCardItem>
                            </VCard>
                        </VForm>
                    </VWindowItem>
                    <VWindowItem>
                        <VForm :ref="el => (steps[1].form = el as any)" @submit.prevent="">
                            <VExpansionPanels v-model="currentChapter" variant="accordion">
                                <VExpansionPanel v-for="(chapter, i) in chapters" :key="i + chapter.title">
                                    <VExpansionPanelTitle>
                                        <div class="d-flex justify-space-between w-100 pr-5">
                                            <span class="text-h4 text-capitalize">
                                                {{ chapter.title || `Chapter ${i + 1}` }}
                                            </span>
                                            <div @click.stop="" class="d-flex justify-center align-center">
                                                <VCheckbox
                                                    :model-value="chapter.is_main"
                                                    @update:model-value="makeChapterAsMain(i)"
                                                    true-icon="ooui:image-layout-thumbnail"
                                                    false-icon="ooui:image-layout-thumbnail"
                                                >
                                                    <VTooltip open-on-focus max-width="200" location="start" activator="parent">
                                                        Click to make this chapter as the main chapter for your course
                                                    </VTooltip>
                                                </VCheckbox>
                                                <template v-if="hasOne">
                                                    <ActionButton
                                                        :disabled="i === 0"
                                                        @click.stop="up(i)"
                                                        icon="mdi-arrow-up"
                                                        variant="text"
                                                    />
                                                    <ActionButton
                                                        :disabled="i + 1 >= chapters.length"
                                                        @click.stop="down(i)"
                                                        icon="mdi-arrow-down"
                                                        variant="text"
                                                    />
                                                </template>
                                                <ActionButton
                                                    @click.stop="deleteChapter(i)"
                                                    icon="tabler-trash"
                                                    color="error"
                                                    class="ml-2"
                                                />
                                            </div>
                                        </div>
                                    </VExpansionPanelTitle>
                                    <VExpansionPanelText class="pt-8 border-t">
                                        <ChapterForm :chapter="chapter" @update:title="chapter.title = $event" @upload="openDialog" />
                                    </VExpansionPanelText>
                                </VExpansionPanel>
                            </VExpansionPanels>
                        </VForm>
                        <div class="text-center">
                            <VBtn @click="addChapter" class="mt-5" variant="tonal" rounded="pill">
                                <VIcon start icon="tabler-plus" size="22" />
                                Add Chapter
                            </VBtn>
                        </div>
                    </VWindowItem>
                </VWindow>

                <div class="d-flex justify-space-between mt-8">
                    <VBtn variant="tonal" color="secondary" :disabled="currentStep === 0" @click="currentStep--">
                        <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                        Previous
                    </VBtn>

                    <VBtn v-if="steps.length - 1 === currentStep" color="success" @click="onSubmit">
                        submit
                        <VIcon icon="tabler-check" end class="flip-in-rtl" />
                    </VBtn>

                    <VBtn v-else @click="nextStep">
                        Next
                        <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
                    </VBtn>
                </div>
            </VCol>
        </VRow>
        <VDialog :model-value="dialog.open" @update:model-value="closeDialog" class="v-dialog-lg">
            <!-- Dialog close btn -->
            <DialogCloseBtn @click="closeDialog" />
            <VCard title="Upload Your Files">
                <FileUploader @uploadSuccess="uploadSuccess" @done="closeDialog" />
            </VCard>
        </VDialog>
    </VContainer>
</template>
<script setup lang="ts">
import { CourseForm, Media, Chapter, ChapterForm as ChapterFormType } from "@/types";
import ChapterForm from "./components/ChapterForm.vue";
import type { VForm } from "vuetify/components/VForm";
import { requiredValidator } from "@/@core/utils/validators";
import { CourseStatus, CourseDifficulty } from "@/@core/enums";
import { useCourseStore } from "@/stores/useCourseStore";
import { delay } from "@/helpers";
import { uniqueId } from "lodash";

const props = defineProps<{}>();
const emit = defineEmits<{}>();
const currentStep = ref(0);
const currentChapter = ref(0);

const steps = ref([
    {
        icon: "tabler-clipboard",
        title: "Details",
        subtitle: "Enter Coure Details",
        discription: "Provide data with this form to create your Coure",
        form: null as VForm | null
    },
    {
        icon: "grommet-icons:chapter-add",
        title: "Chapters",
        subtitle: "Add Chapters",
        discription: "Add Chapters",
        form: null
    }
]);
const formData = ref<CourseForm>({
    title: "",
    description: "",
    is_visible: true,
    status: CourseStatus.Draft,
    difficulty: CourseDifficulty.Beginner,
    prerequisite_id: null
});
const chapters = ref<Chapter[]>([]);

const validateSelectedForm = () => {
    return new Promise(async (resolve, reject) => {
        const form = steps.value[currentStep.value].form;
        if (!form) return resolve("Ok");
        const { valid } = await form.validate();
        if (valid) return resolve("Ok");
    });
};
const validateChapters = () => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < chapters.value.length; i++) {
                if (!chapters.value[i].title) {
                    currentChapter.value = i;
                    await delay(100);
                    await validateSelectedForm();
                }
            }
            resolve("Ok");
        } catch (error) {
            reject(error);
        }
    });
};
const dialog = reactive({ open: false, type: "" as string | null });
const closeDialog = () => {
    dialog.open = false;
    dialog.type = null;
};
const openDialog = (type: string) => {
    dialog.open = true;
    dialog.type = type;
};
const uploadSuccess = ({ body }: { body: Media }) => {
    if (dialog.type === "upload-chapter-video") {
        chapters.value[currentChapter.value].video = body;
    }
    if (dialog.type === "upload-chapter-document") {
        chapters.value[currentChapter.value].documents.push(body);
    }
};

const addChapter = async () => {
    validateChapters().then(() => {
        chapters.value.push({ title: "", video: null, documents: [], order: chapters.value.length, id: 0, is_main: false });
        currentChapter.value++;
    });
};
const deleteChapter = (index: number) => {
    chapters.value = chapters.value.filter((item, i) => i !== index);
};
const makeChapterAsMain = (index: number) => {
    chapters.value = chapters.value.map((item, i) => ({ ...item, is_main: i === index }));
};
watch(currentStep, val => {
    if (val !== 1) return;
    // if the selected step is chapters
    if (chapters.value.length == 0)
        chapters.value.push({ title: "", video: null, documents: [], order: chapters.value.length, id: 0, is_main: true });
});
const up = (index: number) => {
    const newValue = [...chapters.value];
    newValue[index] = chapters.value[index - 1];
    newValue[index - 1] = chapters.value[index];
    chapters.value = newValue;
};
const down = (index: number) => {
    const newValue = [...chapters.value];
    newValue[index] = chapters.value[index + 1];
    newValue[index + 1] = chapters.value[index];
    chapters.value = newValue;
};

const nextStep = () => {
    validateSelectedForm().then(() => currentStep.value++);
};
const router = useRouter();
const courseStore = useCourseStore();
const onSubmit = async () => {
    try {
        const validate = currentStep.value === 1 ? validateChapters : validateSelectedForm;
        await validate();
        const mainChapter = chapters.value.find(({ is_main }) => is_main);
        if (mainChapter) {
            formData.value.thumbnail = mainChapter.video?.thumb_url;
        }
        const { id: course_id } = await courseStore.createCourse(formData.value);
        const chaptersForm: ChapterFormType[] = chapters.value.map(({ title, documents, video, is_main }, i) => {
            return { title, is_main, video: video?.id || null, documents: documents.map(({ id }) => id), order: i };
        });
        await Promise.all(chaptersForm.map(form => courseStore.createChapter(course_id, form)));
        router.push({ name: "course" });
    } catch (error) {
        console.error(error);
    }
};
const { width: windowWidth } = useWindowSize();
const hasOne = computed(() => chapters.value.length > 1);
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
