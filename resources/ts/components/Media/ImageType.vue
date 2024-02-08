<script lang="ts" setup>
import { Media } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
interface Props {
  media: Media;
  aspectRatio?: string;
}

const props = withDefaults(defineProps<Props>(), {});
const style = computed(() => ({
  // aspectRatio: props.aspectRatio || props.media.width / props.media.height,
}));

const isError = ref(false);
const thumb = computed(() => {
  return resolveDefaultThumbnal(props.media);
});

const faild = () => (isError.value = true);
</script>

<template>
  <VCard
    class="media-card h-100 bg-black d-flex justify-center align-center"
    :style="style"
  >
    <VImg
      :lazy-src="thumb"
      :src="!isError ? thumb : '/assets/Image_not_available.png'"
      @error="faild"
      cover
      style="height: 100%; width: 100%"
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
