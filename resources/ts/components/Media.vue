<template>
    <div class="w-100 h-100 rounded bg-surface border media-card overflow-hidden position-relative">
        <VCard color="surface" style="aspect-ratio: 16/9" :class="hasTitle ? 'rounded-b-0' : 'rounded'" class="h-100 w-100">
            <VImg :src="thumb" class="w-100 h-100" cover />
            <VImg :src="thumb" style="top: 0" class="w-100 h-100 position-absolute blurred-background rounded" />

            <div class="position-absolute w-100 d-flex align-center pa-2" style="top: 0">
                <ActionButton disabled :icon="resource.type === MediaTypes.video ? 'tabler:video' : 'mdi-image-outline'" />
                <VChip v-if="resource.status !== MediaStatus.Completed" size="x-small" class="ma-1" :color="status.color">
                    <VIcon start size="16" :icon="status.icon" />
                    {{ status.lable }}
                </VChip>
                <VSpacer />
                <slot name="toolbar" />
            </div>
            <div class="position-absolute w-100 d-flex align-center pa-1" style="bottom: 0">
                <template v-if="resource.type === 'video' && resource.status === MediaStatus.Completed">
                    <VChip rounded="sm" size="x-small" class="ml-1" color="#fff" variant="tonal">
                        <VIcon start size="16" icon="mdi-clock-fast" />
                        <span>
                            {{ secondsToMinutes(resource.duration) }}
                        </span>
                    </VChip>
                </template>
                <VSpacer />
                <VMenu transition="speed-dial" location="top" class="mx-2">
                    <template #activator="{ props }">
                        <ActionButton v-bind="props" icon="mdi-dots-vertical" />
                    </template>
                    <div class="mb-1 d-flex flex-column gap-1">
                        <ActionButton variant="elevated" v-if="deletable" @click.stop="deleteMedia(resource)" icon="tabler-trash" />
                        <ActionButton
                            variant="elevated"
                            v-if="resource.status === MediaStatus.Error"
                            @click="retry"
                            icon="tabler:refresh"
                        />
                        <ActionButton variant="elevated" size="small" @click="playPreview(resource.type)" icon="mdi-eye-outline" />
                    </div>
                </VMenu>
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
import { resolveMediaStatusVariant } from "@/utils";

defineOptions({ inheritAttrs: false });

interface Props {
    hasTitle?: boolean;
    isPreview?: boolean;
    deletable?: boolean;
    heading?: boolean;
    footer?: boolean;
    media: Media | any;
}

const props = withDefaults(defineProps<Props>(), { isPreview: false, hasTitle: false, deletable: false, heading: true });
const fab = ref(false);

interface Emits {
    (e: "onDelete", value: number): void;
}
const emit = defineEmits<Emits>();

const play = ref(props.isPreview);
const resource = ref<Media>(props.media);
const status = computed(() => resolveMediaStatusVariant(resource.value.status));
const defaultThumbnal = {
    video: "/assets/video_placeholder.gif",
    image: "/assets/image-placeholder.jpg",
    pdf: "/assets/pdf_placeholder.png"
};
const thumb = computed(() => resource.value.thumb_url || defaultThumbnal[resource.value.type]);

const mediaStore = useMediaStore();
const playPreview = (type: keyof typeof MediaTypes | undefined) => {
    if (type === MediaTypes.video) {
        mediaStore.openMediaDialog({ thumb, url: resource.value.url }, type);
    }
    if (type === MediaTypes.pdf) {
        mediaStore.openMediaDialog({ watermark: "", url: resource.value.url }, type);
    }
    if (type === MediaTypes.image) {
        mediaStore.openMediaDialog({ url: resource.value.url || resource.value.thumb_url }, type);
    }
};
let interval: NodeJS.Timer;
const refreshMedia = async () => {
    try {
        const res = await mediaStore.getById(resource.value.id);
        resource.value = res;
        if (res.status === MediaStatus.Completed) {
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
</style>
