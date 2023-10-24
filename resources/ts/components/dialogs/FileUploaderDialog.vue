<template>
    <VDialog
        :modelValue="isDialogVisible"
        @update:modelValue="updateIsDialogVisible($event)"
        class="v-dialog-sm"
        scrollable
        scroll-strategy="block"
    >
        <DialogCloseBtn @click="updateIsDialogVisible(false)" />
        <VCard>
            <VTabs v-model="activeTab" grow stacked>
                <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
                    <VIcon size="20" start :icon="item.icon" />
                    {{ $t(item.title) }}
                </VTab>
            </VTabs>
            <VWindow v-model="activeTab" :touch="false">
                <VWindowItem value="uploader">
                    <FileUploader
                        :uppy-options="{ restrictions: { maxNumberOfFiles, allowedFileTypes } }"
                        @uploadSuccess="(f, r) => selectedFiles.push(r.body)"
                        @done="$emit('done', selectedFiles)"
                    />
                </VWindowItem>
                <VWindowItem value="gallery">
                    <VCardText style="height: 450px" class="overflow-auto pa-0">
                        <GalleryView
                            :max-number-selectable-files="maxNumberOfFiles"
                            :allowed-file-types="allowedFileTypes"
                            selectable
                            :grid="{ cols: '12', sm: '6' }"
                            v-model="selectedFiles"
                            search-posisions="0px"
                        />
                    </VCardText>
                    <VCardActions class="d-flex justify-end gap-3 flex-wrap">
                        <VBtn @click="$emit('done', selectedFiles)">Done</VBtn>
                    </VCardActions>
                </VWindowItem>
            </VWindow>
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
import { Media } from "@/types";

interface Emit {
    (e: "update:isDialogVisible", val: boolean): void;
    (e: "done", value: Media[]): void;
}
const emit = defineEmits<Emit>();
interface Props {
    isDialogVisible: boolean;
    maxNumberOfFiles?: number;
    allowedFileTypes?: string[];
}
const props = withDefaults(defineProps<Props>(), { isDialogVisible: false, maxNumberOfFiles: 5 });

// tabs
const tabs = [
    { title: "Uploader", icon: "tabler-upload", tab: "uploader" },
    { title: "gallery", icon: "tabler-photo", tab: "gallery" }
];
const activeTab = ref<"uploader" | "gallery">("uploader");

const updateIsDialogVisible = (val: boolean) => {
    emit("update:isDialogVisible", val);
};
const selectedFiles = ref<Media[]>([]);
watch(
    () => props.isDialogVisible,
    () => (selectedFiles.value = [])
);
</script>

<style scoped></style>
