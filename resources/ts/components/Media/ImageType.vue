<script lang="ts" setup>
import { Media } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
import { StyleValue } from "vue";
interface Props {
  media: Media;
  aspectRatio?: number;
}

const props = withDefaults(defineProps<Props>(), {});
const style = computed(() => {
  const style: StyleValue = {
    aspectRatio: props.aspectRatio || props.media.width / props.media.height,
  };

  // @ts-ignore
  if (style?.aspectRatio > 1) {
    style.width = props.media.width + "px";
    style.maxWidth = "100%";
  }
  // @ts-ignore
  if (style?.aspectRatio < 1) {
    style.height = props.media.height + "px";
    style.maxHeight = "100%";
  }

  return style;
});

const isError = ref(false);
const thumb = computed(() => {
  return resolveDefaultThumbnal(props.media);
});

const faild = () => (isError.value = true);
</script>

<template>
  <VCard
    class="media-card bg-black d-flex justify-center align-center"
    :style="style"
  >
    <VImg
      :lazy-src="thumb"
      :src="!isError ? props.media.url : '/assets/Image_not_available.png'"
      @error="faild"
      cover
      :style="style"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </VImg>
    <VToolbar
      v-if="$slots.toolbar"
      absolute
      density="compact"
      class="toolbar-actions px-2"
    >
      <VSpacer />
      <slot name="toolbar" />
    </VToolbar>
  </VCard>
</template>
