<template>
    <div class="relative w-100 h-100">
        <VImg v-bind="$attrs" :src="thumb" style="aspect-ratio: 16/9" cover class="rounded w-100 border relative">
            <VToolbar color="#7e7e7e00" density="compact">
                <VAvatar size="26" variant="tonal" class="ml-1 blurred-background" color="blur">
                    <VIcon size="20" :icon="resource.type === 'video' ? 'tabler:video' : 'mdi-panorama-variant-outline'" color="blur" />
                </VAvatar>
                <VChip v-if="resource.status !== MediaStatus.Completed" size="small" class="ma-1" :color="status.color">
                    <VIcon start size="16" :icon="status.icon" />
                    {{ status.lable }}
                </VChip>
                <VBtn v-if="resource.status === MediaStatus.Error" @click="retry" icon size="26" variant="tonal" color="error">
                    <VIcon icon="tabler:refresh" />
                </VBtn>
                <slot name="toolbar" />
                <VSpacer />
                <ActionButton @click.stop="deleteMedia(resource)" icon="tabler-trash" color="error" class="ml-2" />
            </VToolbar>
            <VToolbar color="#7e7e7e00" density="compact" absolute style="bottom: 0">
                <VChip v-if="resource.type === 'video'" size="small" class="ma-1 blurred-background" color="blur">
                    <VIcon start size="16" icon="mdi-clock-fast" color="blur" />
                    <span class="text-blur">
                        {{ secondsToMinutes(resource.duration) }}
                    </span>
                </VChip>
            </VToolbar>
        </VImg>
        <p class="truncate mt-2" v-if="hasTitle" :title="resource.name">{{ resource.name }}</p>
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
    media: Media;
}
const props = defineProps<Props>();

interface Emits {
    (e: "onDelete", value: number): void;
}
const emit = defineEmits<Emits>();

const resource = ref<Media>(props.media);
const status = computed(() => resolveMediaStatusVariant(resource.value.status));
const defaultThumbnal = {
    video: "/video_placeholder.gif",
    image: "/image-placeholder.jpg"
};
const thumb = computed(() => resource.value.thumb_url || defaultThumbnal[resource.value.type]);
const mediaStore = useMediaStore();
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
const deleteMedia = async (media: Media) => {
    try {
        await mediaStore.delete(media.id);
        emit("onDelete", media.id);
    } catch (error) {
        console.error(error);
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
.blurred-background {
    backdrop-filter: blur(10px); /* Adjust the blur value as needed */
    border-radius: 10px; /* Optional: Add border-radius for rounded corners */
    overflow: hidden; /* Ensure the blurred effect is contained within the element */
}
</style>
