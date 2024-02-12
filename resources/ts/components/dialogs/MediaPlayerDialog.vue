<script setup lang="ts">
import { useMediaStore } from "@/stores/useMediaStore";
import Media from "../Media";

const mediaStore = useMediaStore();
const style = computed(() => {
  if (mediaStore.dialog.data) {
    const style = {
      aspectRatio: (mediaStore.dialog.data.width /
        mediaStore.dialog.data.height) as number,
    };

    if (style.aspectRatio > 1) {
      style.width = mediaStore.dialog.data.width;
      style.maxWidth = "100%";
    }
    if (style.aspectRatio < 1) {
      style.height = mediaStore.dialog.data.height;
      style.maxHeight = "100%";
    }
    return style;
  }
  return {};
});
</script>

<template>
  <VDialog v-model="mediaStore.dialog.open">
    <DialogCloseBtn @click="mediaStore.dialog.open = false" />
    <Media :media="mediaStore.dialog.data" :style="style" />
  </VDialog>
</template>
