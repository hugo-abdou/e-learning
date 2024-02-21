<script setup lang="ts">
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media";
import useSnackBarStore from "@/components/SnackBar/useSnackBarStore";
import type { Chapter, ChapterForm, Media as MediaType } from "@/types";
import { UploadBunAttrs } from "@/utils";
import slugify from "slugify";
import { VForm } from "vuetify/components/VForm";

const emit = defineEmits<{
  (e: "created", value: Chapter): void;
  (e: "updated", value: Chapter): void;
  (e: "cancel"): void;
}>();
interface Props {
  chapter?: ChapterForm;
  courseId?: number;
}

const props = withDefaults(defineProps<Props>(), {
  chapter: () => ({
    title: "",
    attachments: [],
    order: 0,
  }),
});
const snakbar = useSnackBarStore();
const form = ref<ChapterForm>(props.chapter);

// @ts-expect-error
const formEl = ref<VForm>({});
const dialog = reactive({ open: false, type: "" as string | null });
const loading = ref(false);
const uploaderRules = computed(() => {
  if (form.value.attachments.length === 0) {
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
    form.value.attachments.push(
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

const courseStore = useCourseStore();
const reset = () => {
  formEl.value.reset();
  form.value = props.chapter;
  emit("cancel");
};
const submit = async (): Promise<any> => {
  try {
    loading.value = true;
    // console.log(props.chapter);
    const { valid } = await formEl.value.validate();
    if (!valid) throw new Error("Invalid form");

    const attachments: { [key: number]: any } = {};
    form.value.attachments.forEach(
      // @ts-ignore
      ({ id, name, download, type, visibility, watermark }, i) => {
        attachments[id] = {
          name,
          slug: slugify(name),
          download,
          type,
          watermark,
          visibility: JSON.stringify(visibility),
        };
      }
    );
    if (props.chapter.id && props.courseId) {
      const data = { ...form.value, attachments, course_id: props.courseId };
      const { data: chapter } = await courseStore.updateChapter(
        props.chapter.id,
        data as ChapterForm
      );
      emit("updated", chapter);
      return Promise.resolve(chapter);
    } else if (props.courseId) {
      const data = { ...form.value, attachments };
      const { data: chapter } = await courseStore.createChapter(
        props.courseId,
        data as ChapterForm
      );
      emit("created", chapter);
      return Promise.resolve(chapter);
    }
  } catch (error) {
    return Promise.reject(error);
  } finally {
    loading.value = false;
  }
};

defineExpose({
  submit,
  reset,
  form,
});
</script>

<template>
  <VCard
    :title="$t('chapter.dialog.title')"
    :subtitle="$t('chapter.dialog.subtitle')"
  >
    <VForm ref="formEl">
      <VCardItem>
        <VRow class="ma-0">
          <VCol cols="12">
            <VTextField
              v-model="form.title"
              :rules="[requiredValidator]"
              :label="$t('chapter.fields.title.label')"
            />
          </VCol>
          <VCol
            cols="12"
            v-for="(doc, index) in form.attachments"
            :key="doc.id"
          >
            <VCard class="v-card--flat border">
              <div class="d-flex flex-column flex-md-row">
                <div style="aspect-ratio: 1; height: 200px">
                  <Media
                    :media="doc"
                    preview
                    deletable
                    @delete="
                      () => {
                        form.attachments = form.attachments.filter(
                          (_, i) => i !== index
                        );
                      }
                    "
                  />
                </div>
                <VDivider :vertical="$vuetify.display.mdAndUp" />
                <div class="flex-md-grow-1">
                  <VCardText>
                    <VRow align="center" justify="center" class="mb-0">
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
                      <VCol cols="12" md="6">
                        <div class="d-flex gap-2 align-center">
                          <VSwitch
                            v-model="doc.download"
                            :label="$t('chapter.fields.download.label')"
                          />
                          <InfoTooltip
                            :text="$t('chapter.fields.download.description')"
                            size="18"
                          />
                        </div>
                      </VCol>
                    </VRow>
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
          </VCol>
          <VCol cols="12" class="mb-10">
            <VLabel :text="$t('chapter.fields.attachments.title')" />
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
      </VCardItem>
      <VCardActions class="justify-end">
        <VBtn color="secondary" variant="tonal" @click="reset"> Reset </VBtn>
        <VBtn
          color="success"
          variant="tonal"
          @click="submit"
          :loading="loading"
          :disabled="loading"
        >
          Save
        </VBtn>
      </VCardActions>
    </VForm>
    <FileUploaderDialog
      v-model:is-dialog-visible="dialog.open"
      :allowed-file-types="uploaderRules.allowedFileTypes"
      :max-number-of-files="uploaderRules.maxNumberOfFiles"
      @done="setMediaFromUploader"
    />
  </VCard>
</template>

<style>
.v-expansion-panel::before {
  box-shadow: none !important;
}
</style>
