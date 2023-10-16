<template>
    <VForm ref="formEl">
        <VExpansionPanels v-model="currentChapter" variant="accordion">
            <VExpansionPanel v-for="(chapter, i) in chaptersForm" :key="i">
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
                                <ActionButton :disabled="i === 0" @click.stop="up(i)" icon="mdi-arrow-up" variant="text" />
                                <ActionButton
                                    :disabled="i + 1 >= chapters.length"
                                    @click.stop="down(i)"
                                    icon="mdi-arrow-down"
                                    variant="text"
                                />
                            </template>
                            <ActionButton @click.stop="deleteChapter(i)" icon="tabler-trash" color="error" class="ml-2" />
                        </div>
                    </div>
                </VExpansionPanelTitle>
                <VExpansionPanelText class="border-t">
                    <VCardText class="mb-5">
                        <VRow class="gap-5">
                            <VCol cols="12">
                                <VTextField :rules="[requiredValidator]" v-model="chapter.title" label="Chapter Title" />
                            </VCol>
                            <VCol cols="12" sm="6" md="4" lg="3">
                                <div v-if="chapter.video">
                                    <Media :media="chapter.video" hasTitle deletable @on-delete="chapter.video = null"></Media>
                                </div>
                                <VBtn v-else @click="openDialog('upload-chapter-video')" v-bind="UploadBunAttrs">
                                    <div class="d-flex flex-column align-center">
                                        <VIcon icon="fluent:video-add-20-regular" size="32" />
                                        <VLabel class="mt-2">Video</VLabel>
                                    </div>
                                </VBtn>
                            </VCol>
                            <VDivider vertical class="my-5"></VDivider>
                            <VCol cols="12" sm="6" md="4" lg="3" v-for="doc in chapter.documents" :key="doc.id" class="">
                                <div class="">
                                    <Media
                                        :media="doc"
                                        hasTitle
                                        deletable
                                        @on-delete="chapter.documents = chapter.documents.filter(({ id }) => id !== doc.id)"
                                    >
                                    </Media>
                                </div>
                            </VCol>
                            <VCol cols="12" sm="6" md="4" lg="3">
                                <VBtn v-bind="UploadBunAttrs" @click="openDialog('upload-chapter-document')">
                                    <div class="d-flex flex-column align-center">
                                        <VIcon icon="fluent:document-add-16-regular" size="32" />
                                        <VLabel class="mt-2">Documents</VLabel>
                                    </div>
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VCardText>
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
    <fileUploaderDialog
        :allowed-file-types="uploaderRules.allowedFileTypes"
        :max-number-of-files="uploaderRules.maxNumberOfFiles"
        @done="setMediaFromUploader"
        v-model:is-dialog-visible="dialog.open"
    />
</template>
<script setup lang="ts">
import { requiredValidator } from "@/@core/utils/validators";
import { delay } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import { Chapter, Media as MediaType } from "@/types";
import { UploadBunAttrs } from "@/utils";
import type { VForm } from "vuetify/components/VForm";

interface Props {
    chapters?: Chapter[];
}
const props = withDefaults(defineProps<Props>(), {
    chapters: () => [{ title: "", video: null, documents: [], order: 0, id: 0, is_main: true }]
});

const currentChapter = ref(0);
const chaptersForm = ref<Chapter[]>(props.chapters);
// @ts-ignore
const formEl = ref<VForm>({});
const dialog = reactive({ open: false, type: "" as string | null });
const uploaderRules = computed(() => {
    switch (dialog.type) {
        case "upload-chapter-video":
            return {
                allowedFileTypes: ["video/*"],
                maxNumberOfFiles: 1
            };
        case "upload-chapter-document":
            return {
                allowedFileTypes: ["image/*", "application/pdf"],
                maxNumberOfFiles: 10
            };
        default:
            return {
                allowedFileTypes: ["*"],
                maxNumberOfFiles: 1
            };
    }
});
const closeDialog = () => {
    dialog.open = false;
    dialog.type = null;
};
const openDialog = (type: string) => {
    dialog.open = true;
    dialog.type = type;
};
const setMediaFromUploader = (media: MediaType[]) => {
    if (dialog.type === "upload-chapter-video") {
        chaptersForm.value[currentChapter.value].video = media[0];
    }
    if (dialog.type === "upload-chapter-document") {
        chaptersForm.value[currentChapter.value].documents.push(...media);
    }
    closeDialog();
};
const courseStore = useCourseStore();
const deleteChapter = async (index: number) => {
    const chapter = chaptersForm.value[index];
    if (chapter.id) {
        await courseStore.deleteChapter(chapter.id);
    }
    chaptersForm.value = chaptersForm.value.filter((item, i) => i !== index);
};
const makeChapterAsMain = (index: number) => {
    chaptersForm.value = chaptersForm.value.map((item, i) => ({ ...item, is_main: i === index }));
};
const validateChapters = () => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < chaptersForm.value.length; i++) {
            if (!chaptersForm.value[i].title) {
                currentChapter.value = i;
                await delay(100);
                const { valid } = await formEl.value.validate();
                if (!valid) reject(new Error("validation faild"));
            }
        }
        resolve("Ok");
    });
};
const addChapter = async () => {
    try {
        await validateChapters();
        chaptersForm.value.push({ title: "", video: null, documents: [], order: chaptersForm.value.length, id: 0, is_main: false });
        currentChapter.value++;
    } catch (error) {}
};
const up = (index: number) => {
    const newValue = [...chaptersForm.value];
    newValue[index] = chaptersForm.value[index - 1];
    newValue[index - 1] = chaptersForm.value[index];
    chaptersForm.value = newValue;
};
const down = (index: number) => {
    const newValue = [...chaptersForm.value];
    newValue[index] = chaptersForm.value[index + 1];
    newValue[index + 1] = chaptersForm.value[index];
    chaptersForm.value = newValue;
};
const hasOne = computed(() => chaptersForm.value.length > 1);

const validate = async () => {
    try {
        await validateChapters();
        return Promise.resolve(chaptersForm.value);
    } catch (error) {
        throw error;
    }
};
defineExpose({ formEl, validate });
</script>
