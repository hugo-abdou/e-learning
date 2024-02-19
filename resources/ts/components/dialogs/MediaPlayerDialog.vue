<script setup lang="ts">
import { useMediaStore } from "@/stores/useMediaStore";
import { StyleValue } from "vue";
import Media from "../Media";

const mediaStore = useMediaStore();
const style = computed(() => {
  if (mediaStore.dialog.data) {
    const style: StyleValue = {
      aspectRatio: (mediaStore.dialog.data.width /
        mediaStore.dialog.data.height) as number,
    };

    if (Number(style.aspectRatio) > 1) {
      style.maxWidth = "90%";
    }
    if (Number(style.aspectRatio) < 1) {
      style.maxHeight = "90%";
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
