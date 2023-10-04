<template>
    <div class="relative w-100 h-100">
        <VImg v-bind="$attrs" :src="thumb" style="aspect-ratio: 16/9" cover class="rounded w-100 border">
            <VToolbar color="#00000000" density="compact">
                <VChip v-if="resource.status !== MediaStatus.Completed" size="small" class="ma-1" :color="status.color">
                    <VIcon start size="16" :icon="status.icon" />
                    {{ status.lable }}
                </VChip>
                <VBtn v-if="resource.status === MediaStatus.Error" @click="retry" icon size="26" variant="tonal" color="error">
                    <VIcon icon="tabler:refresh" />
                </VBtn>
                <slot name="toolbar" />
            </VToolbar>
        </VImg>
        <p class="truncate mt-2" v-if="hasTitle" :title="resource.name">{{ resource.name }}</p>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { MediaStatus } from "@/@core/enums";
import { useMediaStore } from "@/stores/mediaStore";
import { Media } from "@/types";
import { resolveMediaStatusVariant } from "@/utils";

defineOptions({ inheritAttrs: false });

interface Props {
    hasTitle?: boolean;
    media: Media;
}
const props = defineProps<Props>();

interface Emits {}
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

onMounted(() => {
    if (resource.value.status === MediaStatus.Pending || resource.value.status === MediaStatus.Processing) {
        interval = setInterval(refreshMedia, 5000);
    }
});
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped></style>
