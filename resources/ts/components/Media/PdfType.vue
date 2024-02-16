<script setup lang="ts">
import { DocumentMedia, Media } from "@/types";

interface Props {
  media: Media;
  aspectRatio?: string;
}
const props = defineProps<Props>();
const pdfViwer = ref<{
  reset?: Function;
  next?: Function;
  prev?: Function;
  page: number;
  pages: number;
}>({ page: 1, pages: 0 });

const page = computed({
  get: () => pdfViwer.value.page || 0,
  set: (val) => {
    pdfViwer.value.page = val;
  },
});
const style = computed(() => ({
  aspectRatio: "0.77",
  height: "800px",
  // width: "1080px",
}));

defineExpose({ ...pdfViwer.value });
</script>

<template>
  <VCard class="media-card" :style="style">
    <PdfViewer
      ref="pdfViwer"
      v-bind="$attrs"
      :document="(media as DocumentMedia)"
      can-open-preview
    />
    <VToolbar absolute density="compact" class="toolbar-actions px-2">
      <VChip
        rounded="sm"
        size="small"
        class="ml-1"
        color="surface"
        variant="elevated"
      >
        page {{ pdfViwer?.page }} of {{ pdfViwer?.pages }} pages
      </VChip>
      <VSpacer />
      <VPagination
        color="surface"
        variant="elevated"
        v-model="page"
        :length="Math.ceil(pdfViwer.pages / 1)"
        :total-visible="5"
      />
      <slot name="toolbar" />
    </VToolbar>
  </VCard>
</template>
