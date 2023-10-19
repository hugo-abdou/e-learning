<script setup lang="ts">
import { useMediaStore } from "@/stores/mediaStore";

const mediaStore = useMediaStore();
const dialog = computed(() => mediaStore.dialog);
</script>

<template>
    <VDialog v-model="mediaStore.dialog.open" class="v-dialog-xl">
        <DialogCloseBtn @click="mediaStore.dialog.open = false" />
        <VCard border>
            <VuePlyr
                v-if="dialog.type === 'video'"
                ref="plyr"
                :src="dialog.data.url"
                :poster="dialog.data.thumb"
                :title="dialog.data.name"
                autoplay
            />
            <PdfViewer v-if="dialog.type === 'pdf'" :watermark="dialog.data.watermark" :src="dialog.data.url" />
            <div v-if="dialog.type === 'image'">
                <VImg :src="dialog.data.url" style="aspect-ratio: 16/9" cover />
                <VImg :src="dialog.data.url" style="top: 0" class="w-100 h-100 position-absolute blurred-background rounded" />
            </div>
        </VCard>
    </VDialog>
</template>
