<template>
    <VForm ref="formEl">
        <VCard>
            <VCardItem>
                <VRow class="mt-0">
                    <VCol cols="12" sm="4">
                        <div style="max-height: 200px" class="h-100" v-if="form.thumbnail">
                            <Media :media="{ thumb_url: form.thumbnail, status: 2 }" deletable @on-delete="form.thumbnail = null" />
                        </div>
                        <template v-else>
                            <VBtn @click="isUploaderopen = true" v-bind="{ ...UploadBunAttrs, style: 'min-height: 130px' }">
                                <div class="d-flex flex-column align-center">
                                    <VIcon icon="flat-color-icons:add-image" size="28" />
                                    <VLabel class="mt-2">Thumbnail</VLabel>
                                </div>
                            </VBtn>
                        </template>
                    </VCol>
                    <VCol cols="12" sm="8">
                        <VTextField v-model="form.title" :rules="[requiredValidator]" label="Coure Title" class="mb-5" />
                        <VTextarea v-model="form.description" :rules="[requiredValidator]" label="Coure Description" />
                    </VCol>
                    <VCol cols="12" sm="6">
                        <AppSelect v-model="form.difficulty" :items="Object.values(CourseDifficulty)" label="Difficulty" />
                    </VCol>
                    <VCol cols="12" sm="6">
                        <AppSelect v-model="form.prerequisite_id" :items="[]" label="Prerequisite" />
                    </VCol>
                    <VCol cols="6">
                        <VSwitch label="Visible" v-model="form.is_visible" />
                    </VCol>
                </VRow>
            </VCardItem>
        </VCard>
    </VForm>
    <fileUploaderDialog
        :allowed-file-types="['image/*']"
        :max-number-of-files="1"
        @done="
            media => {
                form.thumbnail = media[0].thumb_url;
                isUploaderopen = false;
            }
        "
        v-model:is-dialog-visible="isUploaderopen"
    />
</template>
<script setup lang="ts">
import { CourseDifficulty, CourseStatus } from "@/@core/enums";
import { requiredValidator } from "@/@core/utils/validators";
import { Course, CourseForm } from "@/types";
import { UploadBunAttrs } from "@/utils";
import type { VForm } from "vuetify/components/VForm";

interface Props {
    course?: CourseForm;
}
const props = withDefaults(defineProps<Props>(), {
    course: () => ({
        title: "",
        description: "",
        is_visible: true,
        status: CourseStatus.Draft,
        difficulty: CourseDifficulty.Beginner,
        thumbnail: null,
        prerequisite_id: null
    })
});
const emit = defineEmits<{}>();

const isUploaderopen = ref(false);
const form = ref<CourseForm>(props.course);

// @ts-ignore
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
defineExpose({ formEl, validate });
watch(
    () => props.course,
    val => {
        form.value = val;
    }
);
</script>
