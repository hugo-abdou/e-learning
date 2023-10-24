<template>
    <VForm ref="formEl">
        <VExpansionPanels :class="chaptersForm.length > 1 && 'no-icon-rotate'" v-model="currentChapter" variant="default">
            <VExpansionPanel v-for="(chapter, i) in chaptersForm" :key="i">
                <VExpansionPanelTitle>
                    <VCardTitle style="width: 90%" class="text-capitalize d-flex pr-0">
                        <span class="text-truncate">
                            {{ chapter.title || `Chapter ${i + 1}` }}
                        </span>
                        <VSpacer />
                    </VCardTitle>
                    <template #actions v-if="chaptersForm.length > 1">
                        <VMenu transition="speed-dial-left" location="left center">
                            <template #activator="{ props }">
                                <ActionButton variant="plain" color="default" v-bind="props" icon="mdi-dots-vertical" />
                            </template>
                            <VList class="mr-1 px-2 d-flex gap-1 bg-background">
                                <ActionButton variant="text" :disabled="i === 0" @click.stop="up(i)" icon="mdi-arrow-up" />
                                <ActionButton
                                    variant="text"
                                    :disabled="i + 1 >= chapters.length"
                                    @click.stop="down(i)"
                                    icon="mdi-arrow-down"
                                />
                                <ActionButton variant="text" @click.stop="deleteChapter(i)" icon="tabler-trash" color="error" />
                            </VList>
                        </VMenu>
                    </template>
                </VExpansionPanelTitle>
                <VExpansionPanelText class="border-t">
                    <VCardText class="mb-5">
                        <VRow>
                            <VCol cols="12" class="mb-3">
                                <VTextField
                                    :rules="[requiredValidator]"
                                    v-model="chapter.title"
                                    :label="$t('chapter.fields.title.label')"
                                />
                            </VCol>
                            <Masonry
                                class="w-100"
                                :items="chapter.attachments"
                                v-slot="{ item: doc }"
                                :grid="gridType === 'grid' ? { cols: '12', sm: '6' } : { cols: '12' }"
                            >
                                <VRow :key="gridType" class="mb-2 py-2 rounded border bg-background w-100 px-1 ma-0">
                                    <VCol v-bind="gridType === 'list' ? { cols: '12', sm: '4' } : { cols: '12' }">
                                        <Media
                                            :media="doc"
                                            hasTitle
                                            deletable
                                            aspect-ratio="2"
                                            @on-delete="chapter.attachments = chapter.attachments.filter(({ id }) => id !== doc.id)"
                                        >
                                        </Media>
                                    </VCol>

                                    <VCol v-bind="gridType === 'list' ? { cols: '12', sm: '8' } : { cols: '12' }">
                                        <VRow>
                                            <VCol cols="12">
                                                <VTextField
                                                    :rules="[requiredValidator]"
                                                    v-model="doc.name"
                                                    :label="$t('chapter.fields.title.label')"
                                                />
                                            </VCol>
                                            <VCol cols="6">
                                                <VSelect
                                                    v-model="doc.visibility"
                                                    :items="['Public', 'Plan A', 'Plan B']"
                                                    :label="$t('chapter.fields.visibility.label')"
                                                    :rules="[requiredValidator]"
                                                    chips
                                                    multiple
                                                >
                                                    <template #append-inner>
                                                        <InfoTooltip :text="$t('chapter.fields.visibility.description')" />
                                                    </template>
                                                </VSelect>
                                            </VCol>
                                            <VCol cols="6" class="d-flex align-center gap-2">
                                                <VSwitch v-model="doc.download" :label="$t('chapter.fields.download.label')" />
                                                <InfoTooltip :text="$t('chapter.fields.download.description')" />
                                            </VCol>
                                            <VCol v-if="doc.type === MediaTypes.pdf" cols="12">
                                                <VTextField v-model="doc.watermark" :label="$t('chapter.fields.watermark.label')">
                                                    <template #append-inner>
                                                        <InfoTooltip :text="$t('chapter.fields.watermark.description')" />
                                                    </template>
                                                </VTextField>
                                            </VCol>
                                        </VRow>
                                    </VCol>
                                </VRow>
                            </Masonry>
                            <VCol cols="12">
                                <InfoTooltip :text="$t('media.upload.description')" v-slot="{ props }">
                                    <VBtn
                                        v-bind="{ ...props, ...UploadBunAttrs }"
                                        style="height: 100%"
                                        @click="openDialog('upload-chapter-attachment')"
                                    >
                                        <div class="d-flex flex-column align-center">
                                            <VIcon icon="fluent:document-add-16-regular" size="32" />
                                            <VLabel class="mt-2">{{ $t("media.upload.label") }}</VLabel>
                                        </div>
                                    </VBtn>
                                </InfoTooltip>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VExpansionPanelText>
            </VExpansionPanel>
        </VExpansionPanels>
    </VForm>
    <div class="text-center">
        <VBtn @click="addChapter" class="mt-5" variant="tonal" append-icon="tabler-plus" rounded="pill">
            {{ $t("Add Chapter") }}
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
import { ChapterForm, Media as MediaType } from "@/types";
import { UploadBunAttrs } from "@/utils";
import type { VForm } from "vuetify/components/VForm";
import { scrollToTop } from "@/utils";
import { MediaTypes } from "@/@core/enums";
import Media from "@/components/Media/index.vue";

interface Props {
    chapters?: ChapterForm[];
    gridType?: "grid" | "list";
}
const props = withDefaults(defineProps<Props>(), {
    chapters: () => [],
    gridType: "grid"
});

const courseStore = useCourseStore();
const currentChapter = ref(0);
const chaptersForm = ref<ChapterForm[]>(props.chapters);
// @ts-ignore
const formEl = ref<VForm>({});
const dialog = reactive({ open: false, type: "" as string | null });
const uploaderRules = computed(() => {
    if (chaptersForm.value[currentChapter.value]?.attachments.length === 0) {
        return {
            allowedFileTypes: ["video/*"],
            maxNumberOfFiles: 1
        };
    }
    if (dialog.type === "upload-chapter-attachment") {
        return {
            allowedFileTypes: ["image/*", "application/pdf", "video/*"],
            maxNumberOfFiles: 3
        };
    }
    return {
        allowedFileTypes: ["*"],
        maxNumberOfFiles: 1
    };
});

onMounted(() => {
    if (chaptersForm.value.length === 0) {
        chaptersForm.value.push({ title: "", attachments: [], order: 0, id: 0 });
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
    if (dialog.type === "upload-chapter-attachment") {
        chaptersForm.value[currentChapter.value].attachments.push(
            ...media.map(m => ({ ...m, visibility: [], download: false, watermark: "" }))
        );
    }
    closeDialog();
};
const deleteChapter = async (index: number) => {
    const chapter = chaptersForm.value[index];
    if (chapter.id) {
        await courseStore.deleteChapter(chapter.id);
    }
    chaptersForm.value = chaptersForm.value.filter((item, i) => i !== index);
};
const validateChapters = () => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < chaptersForm.value.length; i++) {
            currentChapter.value = i;
            await delay(100);
            const { valid } = await formEl.value.validate();
            if (!valid) {
                scrollToTop();
                return reject(new Error("validation faild"));
            }
        }
        resolve("Ok");
    });
};
const addChapter = async () => {
    try {
        await validateChapters();
        chaptersForm.value.push({ title: "", attachments: [], order: chaptersForm.value.length, id: 0 });
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
