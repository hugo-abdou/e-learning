<script setup lang="ts">
import type { VideoMedia } from "@/types";
import { StyleValue } from "vue";

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
  <div class="d-flex h-100 w-100 justify-center align-center">
    <VCard :style="style">
      <iframe
        :ref="iframeInit"
        :src="`/embed/${media.uuid.replace('-', '/')}`"
        v-bind="$attrs"
        style="border: 0; height: 100%; width: 100%; aspect-ratio: 16/9"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowfullscreen="true"
      ></iframe>
    </VCard>
  </div>
</template>
