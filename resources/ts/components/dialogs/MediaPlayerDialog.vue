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
      style.width = mediaStore.dialog.data.width + "px";
      style.maxWidth = "80%";
    }
    if (style.aspectRatio < 1) {
      style.height = mediaStore.dialog.data.height + "px";
      style.maxHeight = "80%";
    }
    return style;
  }
  return {};
});
</script>

<template>
  <VDialog
    content-class="h-auto w-auto"
    :content-props="{ style }"
    v-model="mediaStore.dialog.open"
  >
    <DialogCloseBtn @click="mediaStore.dialog.open = false" />
    <Media :media="mediaStore.dialog.data" />
  </VDialog>
</template>
