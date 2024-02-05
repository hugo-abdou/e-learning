<script lang="ts" setup>
import { MediaTypes } from "@/@core/enums";
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
const thumb = computed(() => resolveDefaultThumbnal(resource.value));
const style = computed(() => ({
  aspectRatio: "1.77",
}));

const mediaStore = useMediaStore();
const playPreview = (type: keyof typeof MediaTypes | undefined) => {
  mediaStore.openMediaDialog(resource.value, type);
};
const faild = () => (isError.value = true);
</script>

<template>
  <VImg
    v-bind="$attrs"
    :style="style"
    cover
    :lazy-src="thumb"
    :src="!isError ? thumb : '/assets/Image_not_available.png'"
    class="media-card h-100"
    @error="faild"
  >
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
    <template v-if="!isError">
      <div
        class="card-header-actions d-flex align-center justify-center w-100 pa-1"
      >
        <VSpacer />
        <IconBtn
          v-if="deletable"
          @click="$emit('delete')"
          icon="tabler-trash"
          color="error"
        />
      </div>
      <VToolbar absolute density="compact" class="toolbar-overlay pa-2">
        <div class="d-flex align-center justify-center w-100 me-2">
          <VBtn
            v-if="resource.url"
            @click="playPreview(resource.type)"
            icon="tabler-play"
            variant="tonal"
          />
        </div>
      </VToolbar>
      <!-- <VToolbar absolute density="compact" class="toolbar-actions">
        <VCardSubtitle
          style="inline-size: 85%"
          class="text-white"
          :title="resource.name"
        >
          {{ resource.name }}
        </VCardSubtitle>
        <VSpacer />
      </VToolbar> -->
      <slot />
    </template>
  </VImg>
</template>
<style lang="scss" scoped>
.card-header-actions {
  position: absolute;
  z-index: 10;
}
</style>
