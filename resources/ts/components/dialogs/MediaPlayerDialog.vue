<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import { useMediaStore } from "@/stores/mediaStore";

const mediaStore = useMediaStore();
const dialog = computed(() => mediaStore.dialog);
const aspectRatio = computed(() => {
  const width = dialog.value.data?.width || 1080;
  const height = dialog.value.data?.height || 720;
  return width / height;
});
</script>

<template>
  <VDialog v-model="mediaStore.dialog.open" class="v-dialog-xl">
    <DialogCloseBtn @click="mediaStore.dialog.open = false" />
    <VCard border v-if="dialog.data">
      <VuePlyr
        v-if="dialog.type === MediaTypes.video"
        ref="plyr"
        :src="dialog.data.url"
        :poster="dialog.data.thumb_url"
        :title="dialog.data.name"
        autoplay
      />
      <div v-if="dialog.type === MediaTypes.image">
        <VImg :src="dialog.data.url" style="aspect-ratio: 16/9" cover />
        <VImg
          :src="dialog.data.url"
          style="inset-block-start: 0"
          class="w-100 h-100 position-absolute blurred-background rounded"
        />
      </div>
      <template v-if="dialog.type === MediaTypes.pdf">
        <!-- @vue-skip -->
        <PdfViewer :document="dialog.data" />
      </template>
    </VCard>
  </VDialog>
</template>
