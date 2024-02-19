<script lang="ts" setup>
import { MediaStatus, MediaTypes } from "@/@core/enums";
import { Media } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
interface Props {
  media: Media;
  aspectRatio?: string;
  deletable?: boolean;
}

defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<Props>(), {
  deletable: false,
});

const isError = ref(false);

const resource = ref<Media>(props.media);
const isHovering = ref(false);
function handleMouseEnter() {
  isHovering.value = true;
}
function handleMouseLeave() {
  isHovering.value = false;
}

const thumb = computed(() => {
  if (MediaTypes.video === resource.value.type && isHovering.value) {
    return resource.value.preview_url;
  }
  return resolveDefaultThumbnal(resource.value);
});
const style = computed(() => ({
  aspectRatio: "1.77",
}));

const mediaStore = useMediaStore();
const playPreview = (type: keyof typeof MediaTypes | undefined) => {
  mediaStore.openMediaDialog(resource.value, type);
};
const faild = () => (isError.value = true);
const retry = async () => {
  resource.value = await mediaStore.retry(resource.value.id);
};
onMounted(() => {
  // if (
  //   [MediaStatus.Pending, MediaStatus.Processing].includes(
  //     resource.value.status
  //   )
  // ) {
  //   setTimeout(retry, 1000);
  // }
});
</script>

<template>
  <VImg
    v-bind="$attrs"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="style"
    cover
    :lazy-src="thumb"
    :src="!isError ? thumb : '/assets/Image_not_available.png'"
    @error="faild"
    class="media-card h-100"
  >
    <template v-slot:placeholder>
      <div
        v-if="!isHovering"
        class="d-flex align-center justify-center fill-height"
      >
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
    <div
      class="card-header-actions d-flex align-center justify-center w-100 pa-1"
    >
      <VSpacer />
      <IconBtn
        v-if="
          resource.status === MediaStatus.Error ||
          resource.status === MediaStatus.Processing
        "
        @click="retry"
        icon="tabler-reload"
      />
      <IconBtn
        v-if="deletable"
        @click="$emit('delete')"
        icon="tabler-trash"
        color="error"
      />
    </div>
    <VToolbar absolute density="compact" class="toolbar-overlay pa-2">
      <div class="d-flex align-center justify-center w-100 me-2">
        <IconBtn
          v-if="resource.url"
          @click="playPreview(resource.type)"
          icon="tabler-play"
          variant="tonal"
        />
      </div>
    </VToolbar>
    <slot />
  </VImg>
</template>
<style lang="scss" scoped>
.card-header-actions {
  position: absolute;
  z-index: 10;
}
</style>
