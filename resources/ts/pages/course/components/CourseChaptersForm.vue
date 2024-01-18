<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media/index.vue";
import { delay } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import type { ChapterForm, Media as MediaType } from "@/types";
import { UploadBunAttrs, scrollToTop } from "@/utils";
import { VForm } from "vuetify/components/VForm";

interface Props {
  chapters?: ChapterForm[];
  gridType?: "grid" | "list";
}

const props = withDefaults(defineProps<Props>(), {
  chapters: () => [],
  gridType: "grid",
});

const courseStore = useCourseStore();
const currentChapter = ref(0);
const chaptersForm = ref<ChapterForm[]>(props.chapters);

// @ts-expect-error
const formEl = ref<VForm>({});
const dialog = reactive({ open: false, type: "" as string | null });

const uploaderRules = computed(() => {
  if (chaptersForm.value[currentChapter.value]?.attachments.length === 0) {
    return {
      allowedFileTypes: ["video/*"],
      maxNumberOfFiles: 1,
    };
  }
  if (dialog.type === "upload-chapter-attachment") {
    return {
      allowedFileTypes: ["image/*", "application/pdf", "video/*"],
      maxNumberOfFiles: 3,
    };
  }

  return {
    allowedFileTypes: ["*"],
    maxNumberOfFiles: 1,
  };
});

onMounted(() => {
  if (chaptersForm.value.length === 0)
    chaptersForm.value.push({ title: "", attachments: [], order: 0, id: 0 });
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
  console.log(media);
  if (dialog.type === "upload-chapter-attachment") {
    chaptersForm.value[currentChapter.value].attachments.push(
      ...media.map((m) => ({
        ...m,
        visibility: [],
        download: false,
        watermark: "",
      }))
    );
  }
  closeDialog();
};

const deleteChapter = async (index: number) => {
  const chapter = chaptersForm.value[index];
  if (chapter.id) await courseStore.deleteChapter(chapter.id);

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
    chaptersForm.value.push({
      title: "",
      attachments: [],
      order: chaptersForm.value.length,
      id: 0,
    });
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

<template>
  <VForm ref="formEl">
    <VExpansionPanels
      v-model="currentChapter"
      :class="chaptersForm.length > 1 && 'no-icon-rotate'"
      variant="default"
    >
      <VExpansionPanel v-for="(chapter, i) in chaptersForm" :key="i">
        <VExpansionPanelTitle>
          <VCardTitle
            style="inline-size: 90%"
            class="text-capitalize d-flex pr-0"
          >
            <span class="text-truncate">
              {{ chapter.title || `Chapter ${i + 1}` }}
            </span>
            <VSpacer />
          </VCardTitle>
          <template v-if="chaptersForm.length > 1" #actions>
            <VMenu transition="speed-dial-left" location="left center">
              <template #activator="{ props }">
                <ActionButton
                  variant="plain"
                  color="default"
                  v-bind="props"
                  icon="mdi-dots-vertical"
                />
              </template>
              <VList class="mr-1 px-2 d-flex gap-1 bg-background">
                <ActionButton
                  variant="text"
                  :disabled="i === 0"
                  icon="mdi-arrow-up"
                  @click.stop="up(i)"
                />
                <ActionButton
                  variant="text"
                  :disabled="i + 1 >= chapters.length"
                  icon="mdi-arrow-down"
                  @click.stop="down(i)"
                />
                <ActionButton
                  variant="text"
                  icon="tabler-trash"
                  color="error"
                  @click.stop="deleteChapter(i)"
                />
              </VList>
            </VMenu>
          </template>
        </VExpansionPanelTitle>
        <VExpansionPanelText class="border-t">
          <VCardText class="mb-5">
            <VRow>
              <VCol cols="12" class="mb-3">
                <VTextField
                  v-model="chapter.title"
                  :rules="[requiredValidator]"
                  :label="$t('chapter.fields.title.label')"
                />
              </VCol>
              <Masonry
                v-slot="{ item: doc }"
                class="w-100"
                :items="chapter.attachments"
                :grid="
                  gridType === 'grid' ? { cols: '12', sm: '6' } : { cols: '12' }
                "
              >
                <VRow
                  :key="gridType"
                  class="rounded-lg bg-background border w-100 ma-0"
                >
                  <VCol
                    v-bind="
                      gridType === 'list'
                        ? { cols: '12', md: '4' }
                        : { cols: '12' }
                    "
                  >
                    <Media
                      :media="doc"
                      deletable
                      is-preview
                      aspect-ratio="2"
                      @on-delete="
                        chapter.attachments = chapter.attachments.filter(
                          ({ id }) => id !== doc.id
                        )
                      "
                    />
                  </VCol>

                  <VCol
                    v-bind="
                      gridType === 'list'
                        ? { cols: '12', md: '8' }
                        : { cols: '12' }
                    "
                  >
                    <VRow>
                      <VCol cols="12">
                        <VTextField
                          v-model="doc.name"
                          :rules="[requiredValidator]"
                          :label="$t('chapter.fields.title.label')"
                        />
                      </VCol>
                      <VCol cols="12" md="6">
                        <VSelect
                          v-model="doc.visibility"
                          :items="['Public', 'Plan A', 'Plan B']"
                          :label="$t('chapter.fields.visibility.label')"
                          :rules="[requiredValidator]"
                          chips
                          multiple
                        >
                          <template #append-inner>
                            <InfoTooltip
                              :text="
                                $t('chapter.fields.visibility.description')
                              "
                            />
                          </template>
                        </VSelect>
                      </VCol>
                      <VCol cols="12" md="6" class="d-flex align-center gap-2">
                        <VSwitch
                          v-model="doc.download"
                          :label="$t('chapter.fields.download.label')"
                        />
                        <InfoTooltip
                          :text="$t('chapter.fields.download.description')"
                        />
                      </VCol>
                      <VCol v-if="doc.type === MediaTypes.pdf" cols="12">
                        <VTextField
                          v-model="doc.watermark"
                          :label="$t('chapter.fields.watermark.label')"
                        >
                          <template #append-inner>
                            <InfoTooltip
                              :text="$t('chapter.fields.watermark.description')"
                            />
                          </template>
                        </VTextField>
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
              </Masonry>
              <VCol cols="12">
                <InfoTooltip
                  v-slot="{ props }"
                  :text="$t('media.upload.description')"
                >
                  <VBtn
                    v-bind="{ ...props, ...UploadBunAttrs }"
                    style="block-size: 100%"
                    @click="openDialog('upload-chapter-attachment')"
                  >
                    <div class="d-flex flex-column align-center">
                      <VIcon icon="fluent:document-add-16-regular" size="32" />
                      <VLabel class="mt-2">
                        {{ $t("media.upload.label") }}
                      </VLabel>
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
    <VBtn
      class="mt-5"
      variant="tonal"
      append-icon="tabler-plus"
      rounded="pill"
      @click="addChapter"
    >
      {{ $t("Add Chapter") }}
    </VBtn>
  </div>
  <FileUploaderDialog
    v-model:is-dialog-visible="dialog.open"
    :allowed-file-types="uploaderRules.allowedFileTypes"
    :max-number-of-files="uploaderRules.maxNumberOfFiles"
    @done="setMediaFromUploader"
  />
</template>
