<script setup lang="ts">
import { CourseDifficulty, CourseStatus } from "@/@core/enums";
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media/index.vue";
import type { CourseForm, Media as MediaType } from "@/types";
import { UploadBunAttrs } from "@/utils";
import { VForm } from "vuetify/components/VForm";

interface Props {
  course?: CourseForm;
}

const props = withDefaults(defineProps<Props>(), {
  course: () => ({
    description: "",
    thumbnail: undefined,
    difficulty: CourseDifficulty.Beginner,
    status: CourseStatus.Draft,
    title: "",
    prerequisite_id: "",
  }),
});

const emit = defineEmits<{}>();

const isUploaderopen = ref(false);
const form = ref<CourseForm>(props.course);

// @ts-expect-error
const formEl = ref<VForm>({});

const validate = async () => {
  try {
    const { valid } = await formEl.value.validate();
    if (!valid) return Promise.reject(new Error("validation faild"));

    return Promise.resolve(form.value);
  } catch (error) {
    throw error;
  }
};
const setThumbnale = (media: MediaType[]) => {
  form.value.thumbnail = media[0].thumb_url;
  isUploaderopen.value = false;
};

defineExpose({ formEl, validate });
watch(
  () => props.course,
  (val) => {
    form.value = val;
  }
);
</script>

<template>
  <VForm ref="formEl">
    <VCard>
      <VCardItem>
        <VRow class="mt-0">
          <VCol cols="12" md="4">
            <div
              v-if="form.thumbnail"
              style="max-block-size: 200px"
              class="h-100"
            >
              <Media
                :media="{ thumb_url: form.thumbnail, status: 2, type: 'image' }"
                deletable
                is-preview
                @on-delete="form.thumbnail = undefined"
              />
            </div>
            <template v-else>
              <InfoTooltip
                v-slot="{ props }"
                :text="$t('media.upload.description')"
              >
                <VBtn
                  v-bind="{
                    ...props,
                    ...UploadBunAttrs,
                    style: 'min-height: 130px',
                  }"
                  @click="isUploaderopen = true"
                >
                  <div class="d-flex flex-column align-center">
                    <VIcon icon="flat-color-icons:add-image" size="28" />
                    <VLabel class="mt-2">
                      {{ $t("media.thumbnale") }}
                    </VLabel>
                  </div>
                </VBtn>
              </InfoTooltip>
            </template>
          </VCol>
          <VCol cols="12" md="8">
            <VTextField
              v-model="form.title"
              :rules="[requiredValidator]"
              :label="$t('course.fields.title.label')"
              class="mb-5"
            >
              <template #append-inner>
                <InfoTooltip :text="$t('course.fields.title.description')" />
              </template>
            </VTextField>
            <VTextarea
              v-model="form.description"
              :rules="[requiredValidator]"
              :label="$t('course.fields.description.label')"
            >
              <template #append-inner>
                <InfoTooltip
                  :text="$t('course.fields.description.description')"
                />
              </template>
            </VTextarea>
          </VCol>
          <VCol cols="12" sm="6">
            <AppSelect
              v-model="form.difficulty"
              :items="
                Object.values(CourseDifficulty).map((val) => ({
                  title: $t(`course.fields.difficulty.options.${val}`),
                  value: val,
                }))
              "
              :label="$t('course.fields.difficulty.label')"
            >
              <template #append-inner>
                <InfoTooltip
                  :text="$t('course.fields.difficulty.description')"
                />
              </template>
            </AppSelect>
          </VCol>
          <VCol cols="12" sm="6">
            <AppSelect
              v-model="form.prerequisite_id"
              :items="[]"
              :label="$t('course.fields.prerequisite.label')"
            >
              <template #append-inner>
                <InfoTooltip
                  :text="$t('course.fields.prerequisite.description')"
                />
              </template>
            </AppSelect>
          </VCol>
        </VRow>
      </VCardItem>
    </VCard>
  </VForm>
  <FileUploaderDialog
    v-model:is-dialog-visible="isUploaderopen"
    :allowed-file-types="['image/*']"
    :max-number-of-files="1"
    @done="setThumbnale"
  />
</template>
