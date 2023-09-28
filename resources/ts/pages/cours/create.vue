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
                        icon-size="24"
                        class="stepper-icon-step-bg"
                    />
                </VCardItem>
            </VCol>

            <VCol cols="12" md="8" lg="9">
                <VWindow v-model="currentStep" class="disable-tab-transition stepper-content">
                    <VWindowItem>
                        <VCard>
                            <VCardItem>
                                <VRow class="mt-0">
                                    <VCol cols="12">
                                        <VTextField label="Coure Title" />
                                    </VCol>
                                    <VCol cols="12">
                                        <VTextarea label="Coure Description" />
                                    </VCol>
                                </VRow>
                            </VCardItem>
                        </VCard>
                    </VWindowItem>
                    <VWindowItem>
                        <VExpansionPanels :model-value="0" variant="accordion">
                            <VExpansionPanel v-for="(chapter, i) in formData.chapters" :key="i">
                                <VExpansionPanelTitle>
                                    <div class="d-flex justify-space-between w-100 pr-5">
                                        {{ chapter.name || `Chapter ${i + 1}` }}
                                        <VBtn
                                            v-if="canDeleteChapter"
                                            @click.stop="deleteChapter(i)"
                                            variant="tonal"
                                            size="32"
                                            icon="tabler-trash"
                                            color="error"
                                        >
                                        </VBtn>
                                    </div>
                                </VExpansionPanelTitle>
                                <VExpansionPanelText>
                                    <VRow>
                                        <VCol cols="12">
                                            <VTextField v-model="chapter.name" label="Chapter Title" />
                                        </VCol>
                                        <VCol cols="auto">
                                            <VCardTitle><VIcon icon="system-uicons:video" /> Video</VCardTitle>
                                            <VCardItem class="pt-0">
                                                <VBtn
                                                    style="width: 150px; height: 100px"
                                                    class="border-md border-dashed bg-background"
                                                    variant="plain"
                                                    color="secondary"
                                                    @click="openDialog('upload-video')"
                                                >
                                                    <VIcon icon="fluent:video-add-20-regular" size="28" />
                                                </VBtn>
                                            </VCardItem>
                                        </VCol>
                                        <VCol>
                                            <VCardTitle> <VIcon icon="system-uicons:document" /> Documents</VCardTitle>
                                            <VCardItem class="pt-0">
                                                <VBtn
                                                    style="width: 150px; height: 100px"
                                                    class="border-md border-dashed bg-background"
                                                    variant="plain"
                                                    color="secondary"
                                                    @click="openDialog('upload-document')"
                                                >
                                                    <VIcon icon="fluent:document-add-20-regular" size="28" />
                                                </VBtn>
                                            </VCardItem>
                                        </VCol>
                                    </VRow>
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

                    <VWindowItem class="text-center">
                        <h6 class="text-h6 mb-2">Submit 🥳</h6>
                        <p class="text-sm mb-6">Submit to Save your Coure.</p>

                        <VImg :src="laptopGirl" width="176" class="mx-auto" />
                    </VWindowItem>
                </VWindow>

                <div class="d-flex justify-space-between mt-8">
                    <VBtn variant="tonal" color="secondary" :disabled="currentStep === 0" @click="currentStep--">
                        <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                        Previous
                    </VBtn>

                    <VBtn v-if="createApp.length - 1 === currentStep" color="success" @click="onSubmit">
                        submit
                        <VIcon icon="tabler-check" end class="flip-in-rtl" />
                    </VBtn>

                    <VBtn v-else @click="currentStep++">
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
                <FileUploader />
            </VCard>
        </VDialog>
    </VContainer>
</template>
<script setup lang="ts">
import laptopGirl from "@images/illustrations/laptop-girl.png";

const props = defineProps<{}>();
const emit = defineEmits<{}>();
const currentStep = ref(1);

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

const steps = [
    {
        icon: "tabler-clipboard",
        title: "Details",
        subtitle: "Enter Coure Details",
        discription: "Provide data with this form to create your Coure"
    },
    {
        icon: "grommet-icons:chapter-add",
        title: "Chapters",
        subtitle: "Add Chapters",
        discription: "Add Chapters"
    },
    {
        icon: "tabler-check",
        title: "Submit",
        subtitle: "submit",
        discription: "submit"
    }
];

const formData = ref({
    chapters: [{ name: "", video: null, documents: [] }]
});

const addChapter = () => {
    formData.value.chapters.push({ name: "", video: null, documents: [] });
};
const deleteChapter = (index: number) => {
    formData.value.chapters = formData.value.chapters.filter((item, i) => i !== index);
};

const onSubmit = () => {
    // eslint-disable-next-line no-alert
};
const { width: windowWidth } = useWindowSize();
const canDeleteChapter = computed(() => formData.value.chapters.length > 1);
</script>
<style lang="scss">
.stepper-content .card-list {
    --v-card-list-gap: 24px;
}
</style>

<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
