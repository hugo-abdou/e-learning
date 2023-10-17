<template>
    <div class="w-100 h-100 rounded bg-surface border media-card overflow-hidden position-relative">
        <VCard color="surface" style="aspect-ratio: 16/9" :class="hasTitle ? 'rounded-b-0' : 'rounded'" class="h-100 w-100">
            <VImg :src="thumb" class="w-100 h-100" cover />
            <VImg :src="thumb" style="top: 0" class="w-100 h-100 position-absolute blurred-background rounded" />

            <div class="position-absolute w-100 d-flex align-center" style="top: 0; padding-block: 2px">
                <VAvatar size="26" class="ml-1" color="#fff" variant="text">
                    <VIcon size="18" :icon="resource.type === 'video' ? 'tabler:video' : 'mdi-image-outline'" />
                </VAvatar>
                <VChip v-if="resource.status !== MediaStatus.Completed" size="x-small" class="ma-1" :color="status.color">
                    <VIcon start size="16" :icon="status.icon" />
                    {{ status.lable }}
                </VChip>
                <ActionButton
                    v-if="resource.status === MediaStatus.Error"
                    @click="retry"
                    icon="tabler:refresh"
                    color="error"
                    class="ml-1"
                />
                <slot name="toolbar" />
                <VSpacer />
                <ActionButton
                    v-if="deletable"
                    @click.stop="deleteMedia(resource)"
                    icon="tabler-trash"
                    color="error"
                    class="mr-1 text-error"
                />
            </div>
            <div class="position-absolute w-100 d-flex align-center" style="bottom: 0; padding-block: 2px">
                <template v-if="resource.type === 'video' && resource.status === MediaStatus.Completed">
                    <VChip rounded="sm" size="x-small" class="ml-1" color="#fff" variant="tonal">
                        <VIcon start size="16" icon="mdi-clock-fast" />
                        <span>
                            {{ secondsToMinutes(resource.duration) }}
                        </span>
                    </VChip>
                    <ActionButton @click="playPreview" icon="mdi-play-circle" color="#fff" class="text-" variant="text" />
                </template>
            </div>
        </VCard>
        <p class="truncate px-2 py-2 ma-0" v-if="hasTitle" :title="resource.name">{{ resource.name }}</p>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { MediaStatus } from "@/@core/enums";
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
    pdf: "/assets/pdf_placeholder.jpg"
};
const thumb = computed(() => resource.value.thumb_url || defaultThumbnal[resource.value.type]);

const mediaStore = useMediaStore();
const playPreview = () => {
    mediaStore.openPlayer({
        thumb,
        url: resource.value.url
    });
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
    emit("onDelete", media.id);
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
</style>
