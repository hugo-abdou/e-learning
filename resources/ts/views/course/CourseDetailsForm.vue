<script setup lang="ts">
import { CourseDifficulty, CourseStatus } from "@/@core/enums";
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media";
import type { Course, CourseForm, Media as MediaType } from "@/types";
import { UploadBunAttrs } from "@/utils";
import { VForm } from "vuetify/components/VForm";

interface Props {
  course?: CourseForm & { id?: number };
}
const props = withDefaults(defineProps<Props>(), {
  course: () => ({
    description: "",
    thumbnail: undefined,
    difficulty: CourseDifficulty.Beginner,
    status: CourseStatus.Draft,
    title: "",
  }),
});

const emit = defineEmits<{
  (e: "created", value: Course): void;
  (e: "updated", value: Course): void;
}>();
// @ts-ignore
const formEl = ref<VForm>({});
const form = ref<CourseForm>(props.course);
const isUploaderopen = ref(false);
const loading = ref(false);

const setThumbnale = (media: MediaType[]) => {
  form.value.thumbnail = media[0].url;
  isUploaderopen.value = false;
};
const courseStore = useCourseStore();
const course = ref<Course>();
const reset = () => {
  formEl.value.reset();
  form.value = props.course;
};
const submit = async (): Promise<Course> => {
  try {
    loading.value = true;
    const { valid } = await formEl.value.validate();
    if (!valid) throw new Error("Invalid form");
    if (props.course.id) {
      await courseStore.updateCourse(props.course.id, form.value);
      emit("updated", { ...props.course, ...form.value } as Course);
      return Promise.resolve({ ...props.course, ...form.value } as Course);
    } else {
      course.value = await courseStore.createCourse(form.value);
      emit("created", course.value);
      return Promise.resolve(course.value);
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
  <VForm ref="formEl">
    <VCardItem>
      <VRow class="mt-0">
        <VCol cols="12" md="4">
          <Media
            v-if="form.thumbnail"
            v-bind="UploadBunAttrs"
            :media="{ thumb_url: form.thumbnail, status: 2, type: 'image' }"
            aspect-ratio="1.77"
            deletable
            preview
            @delete="form.thumbnail = undefined"
          />
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
              <InfoTooltip :text="$t('course.fields.difficulty.description')" />
            </template>
          </AppSelect>
        </VCol>
      </VRow>
    </VCardItem>
    <VCardActions class="justify-center">
      <slot
        v-if="$slots.actions"
        :submit="submit"
        :reset="reset"
        name="actions"
      />
      <template v-else>
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
      </template>
    </VCardActions>
  </VForm>
  <FileUploaderDialog
    v-model:is-dialog-visible="isUploaderopen"
    :allowed-file-types="['image/*']"
    :max-number-of-files="1"
    @done="setThumbnale"
  />
</template>
