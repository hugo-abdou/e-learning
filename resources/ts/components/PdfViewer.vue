<script setup lang="ts">
import { ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";

interface Props {
    src: string;
    author?: string;
}
const props = defineProps<Props>();

const page = ref(1);
const progress = ref({
    loaded: 0,
    total: 0
});
const { pdf, pages, info } = usePDF(props.src, {
    onProgress: (e: any) => (progress.value = e)
});
const reset = () => {
    page.value = 1;
};
</script>

<template>
    <div class="w-100 overflow-auto" style="aspect-ratio: 16/9" @contextmenu.prevent="">
        <VuePDF :pdf="pdf" :page="page" fit-parent :watermark-text="author" />
    </div>
    <slot v-bind="{ reset, page, pages }" />
    <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
        <p class="text-sm text-disabled mb-0">Showing page {{ page }} of {{ pages }} pages</p>
        <VPagination :model-value="page" @update:model-value="page = $event" :length="Math.ceil(pages / 1)" :total-visible="5" />
    </div>
</template>

<style scoped></style>
