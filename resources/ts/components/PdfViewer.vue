<script setup lang="ts">
import { ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import { useMediaStore } from "@/stores/mediaStore";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import "@tato30/vue-pdf/style.css";

interface Props {
    src: string;
    watermark?: string;
    canOpenPreview?: boolean;
}
const props = defineProps<Props>();

defineOptions({ inheritAttrs: false });

const page = ref(1);
const progress = ref({
    loaded: 0,
    total: 0
});
const { pdf, pages, info } = usePDF(
    {
        useWorkerFetch: true,
        url: props.src
    },
    { onProgress: e => (progress.value = e) }
);
const reset = () => {
    page.value = 1;
};
const mediaStore = useMediaStore();
</script>

<template>
    <div v-bind="$attrs" class="w-100 position-relative" @contextmenu.prevent="">
        <div v-if="progress.loaded" class="w-100 h-100 overflow-auto" style="max-height: calc(100vh - 125px)">
            <VuePDF :pdf="pdf" :page="page" :watermark-text="watermark" fit-parent />
            <div class="position-absolute pa-5" style="bottom: 0; right: 0">
                <VBtn
                    v-if="canOpenPreview"
                    @click="mediaStore.openMediaDialog({ watermark, url: src }, 'pdf')"
                    size="x-small"
                    icon="mdi-file-find"
                />
            </div>
        </div>
        <v-skeleton-loader v-else class="py-5" :type="['heading', 'paragraph', 'paragraph']"></v-skeleton-loader>
    </div>
    <slot v-bind="{ reset, page, pages }" />
    <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3 border-t">
        <p class="text-sm text-disabled mb-0">Showing page {{ page }} of {{ pages }} pages</p>
        <VPagination :model-value="page" @update:model-value="page = $event" :length="Math.ceil(pages / 1)" :total-visible="5" />
    </div>
</template>

<style scoped></style>
