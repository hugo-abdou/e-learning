<template>
    <VDialog :modelValue="isDialogVisible" @update:modelValue="updateIsDialogVisible($event)" class="v-dialog-lg">
        <DialogCloseBtn @click="updateIsDialogVisible(false)" />
        <VCard title="Upload Your Files">
            <FileUploader
                @uploadSuccess="(f, r) => $emit('uploadSuccess', f, r)"
                @done="$emit('done')"
                @complete="e => $emit('complete', e)"
            />
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
import { Media } from "@/types";
import { UploadResult } from "@uppy/core";
import { UppyFile } from "@uppy/core";
import { SuccessResponse, UploadSuccessCallback } from "@uppy/core";

interface Props {
    isDialogVisible: boolean;
}
interface Emit {
    (e: "update:isDialogVisible", val: boolean): void;
    (e: "uploadSuccess", file: UppyFile<Media, Record<string, unknown>>, res: SuccessResponse): void;
    (e: "complete", result: UploadResult<any, Record<string, unknown>>): void;
    (e: "done"): void;
}
const emit = defineEmits<Emit>();
const props = withDefaults(defineProps<Props>(), { isDialogVisible: false });

const updateIsDialogVisible = (val: boolean) => {
    emit("update:isDialogVisible", val);
};
</script>

<style scoped></style>
