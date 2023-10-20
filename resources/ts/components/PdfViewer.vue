<script setup lang="ts">
import { ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import { useMediaStore } from "@/stores/mediaStore";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import "@tato30/vue-pdf/style.css";
import { useUserStore } from "@/stores/user";

defineOptions({ inheritAttrs: false });
interface Props {
    src: string;
    watermark?: string;
    canOpenPreview?: boolean;
}
const props = defineProps<Props>();

const mediaStore = useMediaStore();
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
const next = () => page.value < pages.value && page.value++;
const prev = () => page.value > 1 && page.value--;
const auth = useUserStore();
const sanetizedWatermark = computed(() => props.watermark?.replace("%user_name%", auth.user.name));
defineExpose({ reset, next, prev, page, pages });
</script>

<template>
    <div v-bind="$attrs" class="w-100 h-100 overflow-auto" @contextmenu.prevent="">
        <div v-if="progress.loaded">
            <VuePDF :pdf="pdf" :page="page" :watermark-text="sanetizedWatermark" fit-parent />
            <div class="position-absolute" style="bottom: 20; right: 20">
                <ActionButton
                    v-if="canOpenPreview"
                    @click="mediaStore.openMediaDialog({ watermark: sanetizedWatermark, url: src }, 'pdf')"
                    icon="mdi-eye-outline"
                    variant="elevated"
                />
            </div>
        </div>
        <v-skeleton-loader v-else class="py-5" :type="['heading', 'paragraph', 'paragraph']"></v-skeleton-loader>
        <slot v-bind="{ reset, next, prev, page, pages }" />
    </div>
</template>

<style scoped></style>
