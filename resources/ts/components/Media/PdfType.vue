<template>
    <VCard class="media-card">
        <PdfViewer ref="pdfViwer" :document="(media as DocumentMedia)" can-open-preview />
        <VToolbar absolute density="compact" class="px-2">
            <VChip rounded="sm" size="small" class="ml-1" color="surface" variant="elevated">
                page {{ pdfViwer?.page }} of {{ pdfViwer?.pages }} pages
            </VChip>
            <VSpacer />
            <VPagination color="surface" variant="elevated" v-model="page" :length="Math.ceil(pdfViwer.pages / 1)" :total-visible="5" />
            <VSpacer />
            <slot name="toolbar" />
        </VToolbar>
    </VCard>
</template>

<script setup lang="ts">
import { DocumentMedia, Media } from "@/types";

interface Props {
    media: Media;
}
const props = defineProps<Props>();
const pdfViwer = ref<{ reset?: Function; next?: Function; prev?: Function; page: number; pages: number }>({ page: 1, pages: 0 });

const page = computed({
    get: () => pdfViwer.value.page || 0,
    set: val => {
        pdfViwer.value.page = val;
    }
});

defineExpose({ ...pdfViwer.value });
</script>
<style lang="scss" scoped>
.v-toolbar {
    background: linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 56.8%));
    inset-block-end: 0;
    transform: translateY(50px);
}

.media-card:hover .v-toolbar {
    transform: translateY(0);
}
</style>
