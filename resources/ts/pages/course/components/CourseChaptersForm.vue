<script setup lang="ts">
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media";
import useSnackBarStore from "@/components/SnackBar/useSnackBarStore";
import { delay } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import type { ChapterForm, Media as MediaType } from "@/types";
import { UploadBunAttrs, scrollToTop } from "@/utils";
import slugify from "slugify";
import { VForm } from "vuetify/components/VForm";

interface Props {
  chapters?: ChapterForm[];
  gridType?: "grid" | "list";
}

const props = withDefaults(defineProps<Props>(), {
  chapters: () => [],
  gridType: "list",
});
const snakbar = useSnackBarStore();
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
    chaptersForm.value.push({
      title: "",
      attachments: [],
      order: 0,
      id: 0,
    });
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
      ...media.map((m, i) => ({
        ...m,
        visibility: [],
        download: false,
        watermark: "",
        slug: slugify(m.name),
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
        snakbar.add({
          text: "Please fill all the required fields on chapter " + (i + 1),
          color: "error",
        });
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
  } catch (error) {
    console.log(error);
  }
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
    <CollapsedContent
      v-for="(chapter, i) in chaptersForm"
      :key="i"
      class="mt-5 ma-5"
      prepend-icon="tabler-device-ipad-question"
      :title="chapter.title || `Chapter ${i + 1}`"
    >
      <template v-if="chaptersForm.length > 1" #append>
        <IconBtn
          variant="text"
          :disabled="i === 0"
          icon="mdi-arrow-up"
          @click.stop="up(i)"
        />
        <IconBtn
          variant="text"
          :disabled="i + 1 >= chapters.length"
          icon="mdi-arrow-down"
          @click.stop="down(i)"
        />
        <IconBtn
          variant="text"
          icon="tabler-trash"
          color="error"
          @click.stop="deleteChapter(i)"
        />
        <!-- <IconBtn @click="copyQuestion(index)" icon="tabler-copy" />
              <IconBtn
                @click="removeQuestion(index)"
                color="error"
                icon="tabler-trash"
              /> -->
      </template>
      <VCardText class="">
        <VRow>
          <VCol cols="12" class="mb-2">
            <VTextField
              v-model="chapter.title"
              :rules="[requiredValidator]"
              :label="$t('chapter.fields.title.label')"
            />
          </VCol>
          <Masonry
            v-slot="{ item: doc, index }"
            class="w-100"
            :items="chapter.attachments"
            :grid="{ cols: '12' }"
          >
            <VCard class="bg-background">
              <div
                class="d-flex justify-space-between align-center flex-wrap flex-md-nowrap flex-column flex-md-row"
              >
                <div class="v-col-md-4 pa-0 pa-md-2 h-100">
                  <Media
                    :media="doc"
                    preview
                    deletable
                    @delete="
                      () => {
                        chapter.attachments = chapter.attachments.filter(
                          (_, i) => i !== index
                        );
                      }
                    "
                  />
                </div>
                <VDivider :vertical="$vuetify.display.mdAndUp" />
                <div class="v-col-md-8">
                  <VCardText>
                    <VTextField
                      v-model="doc.name"
                      :rules="[requiredValidator]"
                      :label="$t('chapter.fields.title.label')"
                    />
                  </VCardText>
                  <VCardText>
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
                          :text="$t('chapter.fields.visibility.description')"
                        />
                      </template>
                    </VSelect>
                  </VCardText>
                  <VCardText class="d-flex justify-space-between">
                    <VSwitch
                      v-model="doc.download"
                      :label="$t('chapter.fields.download.label')"
                    />
                    <InfoTooltip
                      :text="$t('chapter.fields.download.description')"
                    />
                  </VCardText>
                  <VCardText v-if="doc.type === 'pdf'">
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
                  </VCardText>
                </div>
              </div>
            </VCard>
          </Masonry>
          <VCol cols="12" class="mb-4">
            <VLabel :text="$t('chapter.fields.attachments.label')" />
            <InfoTooltip
              v-slot="{ props }"
              text="upload the course materials that you prepare for this chapter"
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
    </CollapsedContent>
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

<style>
.v-expansion-panel::before {
  box-shadow: none !important;
}
</style>
