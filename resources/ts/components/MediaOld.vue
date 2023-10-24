<template>
    <div
        class="rounded bg-surface border media-card overflow-hidden position-relative w-100"
        @mouseleave="mouseEnter = false"
        @mouseenter="mouseEnter = true"
    >
        <VCard color="surface" :class="hasTitle ? 'rounded-b-0' : 'rounded'" class="h-100 w-100">
            <div class="position-absolute pa-1" style="top: 0; z-index: 9999" density="compact">
                <VChip v-if="!isPreview" size="x-small" class="ma-1" :color="status.color">
                    <VIcon start size="16" :icon="status.icon" />
                    {{ status.lable }}
                </VChip>
            </div>
            <template v-if="!isPreview || resource.type === 'image'">
                <VImg :style="{ aspectRatio: aspectRatio || resource.width / resource.height }" :src="thumb" class="w-100 h-100" cover />
                <VImg :src="thumb" style="top: 0" class="w-100 h-100 position-absolute blurred-background rounded" />
            </template>
            <template v-if="isPreview">
                <PdfViewer
                    v-if="resource.type === 'pdf'"
                    :style="{ aspectRatio: aspectRatio || resource.width / resource.height }"
                    :document="resource"
                    @update:pdf="emit('update:pdf', $event)"
                    class="h-100"
                    ref="pdfViewer"
                />
            </template>

            <div v-show="mouseEnter" :class="mouseEnter && 'plyr--video'" class="plyr--full-ui plyr--html5 plyr--pip-supported">
                <div class="plyr__controls">
                    <template v-if="resource.type === 'video' && resource.status === MediaStatus.Completed">
                        <VChip rounded="sm" size="x-small" class="ml-1" color="default" variant="tonal">
                            <VIcon start size="16" icon="mdi-clock-fast" />
                            <span>
                                {{ secondsToMinutes(resource.duration) }}
                            </span>
                        </VChip>
                    </template>
                    <template v-if="resource.type === 'pdf' && pdfViewer">
                        <VChip rounded="sm" size="small" class="ml-1" color="default" variant="tonal">
                            page {{ pdfViewer.page }} of {{ pdfViewer.pages }} pages
                        </VChip>
                        <VSpacer />
                        <VPagination
                            v-if="resource.type === 'pdf'"
                            :model-value="pdfViewer.page"
                            @update:model-value="pdfViewer.page = $event"
                            :length="Math.ceil(pdfViewer.pages / 1)"
                            :total-visible="5"
                        />
                    </template>
                    <VSpacer />
                    <slot name="bottom-toolbar" />
                    <div class="mx-2">
                        <VMenu :attach="$el" transition="speed-dial" location="top">
                            <template #activator="{ props }">
                                <ActionButton v-bind="props" color="#fff" variant="tonal" icon="mdi-dots-vertical" />
                            </template>
                            <div class="mb-1 d-flex flex-column gap-1">
                                <ActionButton
                                    color="default"
                                    variant="elevated"
                                    v-if="deletable"
                                    @click.stop="deleteMedia(resource)"
                                    icon="tabler-trash"
                                />
                                <ActionButton
                                    color="default"
                                    variant="elevated"
                                    v-if="resource.status === MediaStatus.Error"
                                    @click="retry"
                                    icon="tabler:refresh"
                                />
                                <ActionButton variant="elevated" size="small" @click="playPreview(resource.type)" icon="mdi-eye-outline" />
                            </div>
                        </VMenu>
                    </div>
                </div>
            </div>
        </VCard>
        <p class="truncate px-2 py-2 ma-0 media-title" v-if="hasTitle" :title="resource.name">{{ resource.name }}</p>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { MediaStatus, MediaTypes } from "@/@core/enums";
import { secondsToMinutes } from "@/helpers";
import { useMediaStore } from "@/stores/mediaStore";
import { Media } from "@/types";
import { resolveDefaultThumbnal, resolveMediaStatusVariant } from "@/utils";

defineOptions({ inheritAttrs: false });

interface Props {
    hasTitle?: boolean;
    isPreview?: boolean;
    deletable?: boolean;
    aspectRatio?: string;
    media: Media | any;
}

const props = withDefaults(defineProps<Props>(), { isPreview: false, hasTitle: false, deletable: false, heading: true });
const mouseEnter = ref(false);

interface Emits {
    (e: "onDelete", value: number): void;
    (e: "update:pdf", value: { page: number; pages: number }): void;
    (e: "update:media", value: Media): void;
}
const emit = defineEmits<Emits>();
const pdfViewer = ref();

const resource = ref<Media>(props.media);
const status = computed(() => resolveMediaStatusVariant(resource.value.status));

const thumb = computed(() => resource.value.thumb_url || resolveDefaultThumbnal(resource.value.type));

const mediaStore = useMediaStore();
const playPreview = (type: keyof typeof MediaTypes | undefined) => {
    mediaStore.openMediaDialog(resource.value, type);
};
let interval: NodeJS.Timer;
const refreshMedia = async () => {
    try {
        const res = await mediaStore.getById(resource.value.id);
        resource.value = res;
        if (res.status === MediaStatus.Completed) {
            emit("update:media", res);
            clearInterval(interval);
        }
    } catch (error) {}
};

const retry = async () => {
    try {
        const res = await mediaStore.retry(resource.value.id);
        resource.value = res;
    } catch (error) {}
};
const deleteMedia = (media: Media) => {
    if (confirm("are you sure you want to delete this media")) {
        emit("onDelete", media.id);
    }
};
onMounted(() => {
    if (resource.value.status === MediaStatus.Pending || resource.value.status === MediaStatus.Processing) {
        interval = setInterval(refreshMedia, 5000);
    }
});
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.active .media-card {
    background-color: rgb(var(--v-theme-primary)) !important;
}
.active .media-card .media-title {
    color: rgb(var(--v-theme-on-primary)) !important;
}

#media-overlay {
    z-index: 99999;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.267), rgba(0, 0, 0, 0));
}
</style>
