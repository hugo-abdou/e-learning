<script setup lang="ts">
import { DocumentMedia, Media } from "@/types";
import { StyleValue } from "vue";

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
const style = computed(() => {
  const style: StyleValue = {
    aspectRatio: (props.aspectRatio ||
      props.media.width / props.media.height) as number,
  };

  if (Number(style.aspectRatio) > 1) {
    style.width = props.media.width * 10 + "px";
    style.maxWidth = "100%";
  }
  if (Number(style.aspectRatio) < 1) {
    style.height = props.media.height * 10 + "px";
    style.maxHeight = "100%";
  }

  return style;
});

defineExpose({ ...pdfViwer.value });
</script>

<template>
  <div class="d-flex h-100 w-100 bg-error justify-center align-center">
    <!-- {{ style }} -->
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
  </div>
</template>
