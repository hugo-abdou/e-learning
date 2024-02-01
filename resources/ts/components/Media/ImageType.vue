<script lang="ts" setup>
import { Media } from "@/types";
interface Props {
  media: Media;
  aspectRatio?: string;
}

const props = withDefaults(defineProps<Props>(), {});
const style = computed(() => ({
  aspectRatio: props.aspectRatio || props.media.width / props.media.height,
}));
</script>

<template>
  <VCard class="media-card" :style="style">
    <VImg :src="media.url" />
    <VToolbar absolute density="compact" class="toolbar-actions px-2">
      <VSpacer />
      <slot name="toolbar" />
    </VToolbar>
  </VCard>
</template>
