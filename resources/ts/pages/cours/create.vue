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
                        <VForm :ref="el => (steps[0].form = el as any)">
                            <VCard>
                                <VCardItem>
                                    <VRow class="mt-0">
                                        <VCol cols="12">
                                            <VTextField v-model="formData.title" :rules="[requiredValidator]" label="Coure Title" />
                                        </VCol>
                                        <VCol cols="12">
                                            <VTextarea
                                                v-model="formData.discription"
                                                :rules="[requiredValidator]"
                                                label="Coure Description"
                                            />
                                        </VCol>
                                    </VRow>
                                </VCardItem>
                            </VCard>
                        </VForm>
                    </VWindowItem>
                    <VWindowItem>
                        <VExpansionPanels v-model="currentChapter" variant="accordion">
                            <VExpansionPanel v-for="(chapter, i) in formData.chapters" :key="i + chapter.name">
                                <VExpansionPanelTitle>
                                    <div class="d-flex justify-space-between w-100 pr-5">
                                        {{ chapter.name || `Chapter ${i + 1}` }}
                                        <div>
                                            <ActionButton :disabled="i === 0" @click.stop="up(i)" icon="mdi-arrow-up" variant="text" />
                                            <ActionButton
                                                :disabled="i + 1 >= formData.chapters.length"
                                                @click.stop="down(i)"
                                                icon="mdi-arrow-down"
                                                variant="text"
                                            />
                                            <ActionButton
                                                v-if="canDeleteChapter"
                                                @click.stop="deleteChapter(i)"
                                                icon="tabler-trash"
                                                color="error"
                                                class="ml-2"
                                            />
                                        </div>
                                    </div>
                                </VExpansionPanelTitle>
                                <VExpansionPanelText>
                                    <ChapterForm :chapter="chapter" @update:name="chapter.name = $event" @upload="openDialog" />
                                </VExpansionPanelText>
                            </VExpansionPanel>
                        </VExpansionPanels>
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
import { Chapter, Media } from "@/types";
import ChapterForm from "./components/ChapterForm.vue";
import type { VForm } from "vuetify/components/VForm";
import { requiredValidator } from "@/@core/utils/validators";

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
const formData = ref<{ title: string; discription: string; chapters: Chapter[] }>({
    title: "",
    discription: "",
    chapters: [{ name: "", video: null, documents: [] }]
});
const dialog = reactive({
    open: false,
    type: "" as string | null
});
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
        formData.value.chapters[currentChapter.value].video = body;
    }
    if (dialog.type === "upload-chapter-document") {
        formData.value.chapters[currentChapter.value].documents.push(body);
    }
};

const addChapter = () => {
    formData.value.chapters.push({ name: "", video: null, documents: [] });
};
const deleteChapter = (index: number) => {
    formData.value.chapters = formData.value.chapters.filter((item, i) => i !== index);
};
const up = (index: number) => {
    const newValue = [...formData.value.chapters];
    newValue[index] = formData.value.chapters[index - 1];
    newValue[index - 1] = formData.value.chapters[index];
    formData.value.chapters = newValue;
};

const down = (index: number) => {
    const newValue = [...formData.value.chapters];
    newValue[index] = formData.value.chapters[index + 1];
    newValue[index + 1] = formData.value.chapters[index];
    formData.value.chapters = newValue;
};

const nextStep = () => {
    const form = steps.value[currentStep.value].form;
    if (form) {
        form.validate().then(async ({ valid }) => {
            if (!valid) return;
            currentStep.value++;
        });
        return;
    }
    currentStep.value++;
};
const onSubmit = () => {
    console.log(formData.value);
};
const { width: windowWidth } = useWindowSize();
const canDeleteChapter = computed(() => formData.value.chapters.length > 1);
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
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
