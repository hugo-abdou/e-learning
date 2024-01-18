<script setup lang="ts">
import type { Media } from "@/types";

defineOptions({ inheritAttrs: false });

interface Props {
  media: Media;
}
defineProps<Props>();

const plyr = ref<{ player: any }>();

defineExpose({ ...plyr.value });
</script>

<template>
  <VCard>
    <!-- <VuePlyr
      ref="plyr"
      v-bind="$attrs"
      :src="media.url"
      :poster="media.thumb_url"
    /> -->
    <iframe
      src="https://iframe.mediadelivery.net/embed/179002/b48d09ac-f82b-408f-914b-1129e0553418?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
      loading="lazy"
      style="border: 0; height: 100%; width: 100%; aspect-ratio: 16/9"
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
      allowfullscreen="true"
    ></iframe>
  </VCard>
</template>
