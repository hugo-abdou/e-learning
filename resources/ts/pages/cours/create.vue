<script setup lang="ts">
import laptopGirl from "@images/illustrations/laptop-girl.png";

const props = defineProps<{}>();

const emit = defineEmits<{}>();

const currentStep = ref(0);

const createApp = [
    {
        icon: "tabler-clipboard",
        title: "Details",
        subtitle: "Enter Details"
    },
    {
        icon: "grommet-icons:chapter-next",
        title: "Chapters",
        subtitle: "Add Chapters"
    },
    {
        icon: "tabler-check",
        title: "Submit",
        subtitle: "submit"
    }
];

const formData = ref({
    chapters: [{ name: "" }]
});

const addChapter = () => {
    formData.value.chapters.push({ name: "" });
};
const deleteChapter = (index: number) => {
    formData.value.chapters = formData.value.chapters.filter((item, i) => i !== index);
};

const onSubmit = () => {
    // eslint-disable-next-line no-alert
};
</script>

<template>
    <VRow>
        <VCol cols="12" sm="5" md="4" lg="3">
            <VCard height="100%">
                <VCardItem>
                    <AppStepper
                        :current-step="currentStep"
                        direction="vertical"
                        :items="createApp"
                        icon-size="24"
                        class="stepper-icon-step-bg"
                    />
                </VCardItem>
            </VCard>
        </VCol>

        <VCol cols="12" sm="7" md="8" lg="9">
            <h1 class="text-h1 text-center mb-2">Create Coure</h1>
            <p class="text-sm text-center mb-8">Provide data with this form to create your Coure</p>
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
                    <VExpansionPanels class="no-icon-rotate" variant="accordion">
                        <VExpansionPanel v-for="(chapter, i) in formData.chapters" :key="i">
                            <VExpansionPanelTitle disable-icon-rotate>
                                Item {{ i }}
                                <template #actions>
                                    <VIcon @click.stop="deleteChapter(i)" size="18" icon="tabler-trash" color="error" />
                                </template>
                            </VExpansionPanelTitle>
                            <VExpansionPanelText>
                                <VTextField v-model="chapter.name" label="Coure Name" />
                            </VExpansionPanelText>
                        </VExpansionPanel>
                    </VExpansionPanels>
                    <VBtn @click="addChapter" class="mt-5 w-100">Add Chapter</VBtn>
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
</template>

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
