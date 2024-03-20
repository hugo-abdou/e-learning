<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import { useAuthStore } from "@/stores/useAuthStore";
import { DocumentMedia } from "@/types";
import { StyleValue } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import "@tato30/vue-pdf/style.css";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

interface Props {
    media: DocumentMedia;
    aspectRatio?: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "update:pdf", value: { page: number; pages: number }): void;
}>();

if (props.media.type !== MediaTypes.pdf) throw new Error("Invalid media type");

const PaginationEl = ref();
const page = ref(1);
const progress = ref({
    loaded: 0,
    total: 0,
});
const { pdf, pages } = usePDF({ useWorkerFetch: true, url: props.media.url }, { onProgress: (e) => (progress.value = e) });
const reset = () => (page.value = 1);
const next = () => page.value < pages.value && page.value++;
const prev = () => page.value > 1 && page.value--;
const auth = useAuthStore();
const sanetizedWatermark = computed(() => props.media.watermark?.replace("%user_name%", auth.user.name));
watch([page, pages], ([page, pages]) => emit("update:pdf", { page, pages }));

const scale = ref(1);
const zoomStyle = computed(() => {
    return {
        width: props.media.width * scale.value + "px",
        height: props.media.height * scale.value + "px",
    };
});
const style = computed(() => {
    const style: StyleValue = {
        aspectRatio: (props.aspectRatio || props.media.width / props.media.height) as number,
    };

    style.width = props.media.width * 2 + "px";
    style.maxWidth = "100%";

    style.height = props.media.height * 2 + "px";
    style.maxHeight = "100%";

    return style;
});
defineExpose({
    reset,
    next,
    prev,
});
</script>

<template>
    <div class="d-flex h-100 w-100 justify-center align-center">
        <VCard
            class="media-card overflow-hidden"
            :style="style"
        >
            <div
                v-if="progress.loaded"
                class="overflow-auto h-100 w-100"
            >
                <div :style="zoomStyle">
                    <VuePDF
                        :key="scale"
                        :pdf="pdf"
                        :page="page"
                        fit-parent
                        :watermark-text="sanetizedWatermark"
                    >
                    </VuePDF>
                </div>
            </div>
            <v-skeleton-loader
                v-else
                class="py-5"
                :type="['heading', 'paragraph', 'paragraph', 'paragraph', 'paragraph', 'paragraph', 'paragraph', 'paragraph', 'paragraph']"
            />
            <div
                style="z-index: 999999"
                class="position-absolute d-flex flex-column gap-2 px-2"
                :style="{
                    top: '50%',
                    transform: `translateY(-50%)`,
                }"
            >
                <IconBtn
                    variant="elevated"
                    color="secondary"
                    icon="tabler-zoom-out"
                    @click="scale = Math.min(4, Math.max(0.5, scale - 0.1))"
                />
                <IconBtn
                    @click="scale = Math.min(4, Math.max(0.5, scale + 0.1))"
                    variant="elevated"
                    color="secondary"
                    icon="tabler-zoom-in"
                />
            </div>

            <VToolbar
                absolute
                density="compact"
                class="toolbar-actions px-2"
            >
                <VChip
                    rounded="sm"
                    color="surface"
                    variant="elevated"
                    class="pr-6"
                >
                    {{ page }} / {{ pages }}
                </VChip>
                <VPagination
                    v-if="pages > 1"
                    color="surface"
                    variant="elevated"
                    class="w-100"
                    size="small"
                    ref="PaginationEl"
                    v-model="page"
                    :length="pages"
                    :total-visible="$vuetify.display.xs ? 1 : 5"
                />
                <VSpacer />
                <slot name="toolbar" />
            </VToolbar>
            <slot></slot>
        </VCard>
    </div>
</template>
