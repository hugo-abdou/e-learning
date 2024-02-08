<script setup lang="ts">
import type { VideoMedia } from "@/types";

defineOptions({ inheritAttrs: false });

const emit = defineEmits([
  "progress",
  "ready",
  "play",
  "pause",
  "timeupdate",
  "seeking",
  "seeked",
  "ended",
  "ratechange",
  "enterfullscreen",
  "exitfullscreen",
  "captionsenabled",
  "captionsdisabled",
  "languagechange",
  "volumechange",
  "error",
  "fullscreenchange",
]);

interface Props {
  media: VideoMedia;
  aspectRatio?: string;
}
const props = defineProps<Props>();
const style = computed(() => ({
  aspectRatio: props.aspectRatio || props.media.width / props.media.height,
}));

const plyr = ref<{ player: any }>();

defineExpose({ ...plyr.value });

function iframeInit(el: any) {
  if (!el) return;
  el.onload = () => {
    el.contentWindow?.postMessage({ command: "activate" });
    window?.addEventListener("message", handleMessage);
  };
}
function handleMessage(event: MessageEvent) {
  if (event.data.channel === "bunnystream") {
    emit(event.data.event, event.data);
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("message", handleMessage);
});
</script>

<template>
  <VCard
    :style="style"
    class="h-100 bg-black d-flex justify-center align-center"
  >
    <iframe
      :ref="iframeInit"
      :src="`/embed/${media.uuid.replace('-', '/')}`"
      v-bind="$attrs"
      style="border: 0; height: 100%; width: 100%; aspect-ratio: 16/9"
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
      allowfullscreen="true"
    ></iframe>
  </VCard>
</template>
