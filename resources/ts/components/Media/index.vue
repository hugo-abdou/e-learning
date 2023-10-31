<script setup lang="ts">
import { MediaStatus, MediaTypes } from "@/@core/enums";
import { delay } from "@/helpers";
import { useMediaStore } from "@/stores/mediaStore";
import type { Media as MediaType } from "@/types";
import { resolveDefaultThumbnal, resolveMediaStatusVariant } from "@/utils";
import ImageType from "./ImageType.vue";
import PdfType from "./PdfType.vue";
import VideoType from "./VideoType.vue";

interface Props {
    isPreview?: boolean;
    deletable?: boolean;
    aspectRatio?: string;
    media: MediaType | any;
}
const props = withDefaults(defineProps<Props>(), { isPreview: false, hasTitle: false, deletable: false, heading: true });

const emit = defineEmits<Emits>();
interface Emits {
    (e: "onDelete", value: number): void;
    (e: "update:pdf", value: { page: number; pages: number }): void;
    (e: "update:media", value: MediaType): void;
}
const resource = ref<MediaType>(props.media);
const thumb = computed(() => resource.value.thumb_url || resolveDefaultThumbnal(resource.value.type));
const style = computed(() => ({ aspectRatio: props.aspectRatio || resource.value.width / resource.value.height }));

const MediaTYpeComponent = computed(() => {
    switch (resource.value.type) {
        case MediaTypes.pdf:
            return PdfType;
        case MediaTypes.image:
            return ImageType;
        case MediaTypes.video:
            return VideoType;
        default:
            throw new Error("Media Type dos not exist");
    }
});

const menuItem = computed(() => {
    return [
        {
            title: "Delete",
            _if: props.deletable,
            props: { "prepend-icon": "tabler-trash", onClick: () => deleteMedia(resource.value) }
        },
        {
            title: "retry",
            _if: resource.value.status === MediaStatus.Pending || resource.value.status === MediaStatus.Processing,
            props: { "prepend-icon": "tabler-refresh", onClick: refreshMedia }
        },
        {
            title: "retry",
            _if: resource.value.status === MediaStatus.Error,
            props: { "prepend-icon": "tabler-refresh", onClick: retry }
        }
    ];
});

const mediaStore = useMediaStore();

const playPreview = (type: keyof typeof MediaTypes | undefined) => {
    mediaStore.openMediaDialog(resource.value, type);
};

const refreshMedia = async () => {
    try {
        const res = await mediaStore.getById(resource.value.id);
        resource.value = res;
        if (res.status !== MediaStatus.Completed) {
            await delay(2000);
            refreshMedia();
            return;
        }
        emit("update:media", res);
    } catch (error) {}
};
onMounted(() => {
    // if (resource.value.status !== MediaStatus.Completed) refreshMedia();
});

const retry = async () => {
    try {
        const res = await mediaStore.retry(resource.value.id);
        resource.value = res;
    } catch (error) {}
};

const deleteMedia = (media: MediaType) => {
    emit("onDelete", media.id);
};
</script>

<template>
    <VCard v-if="isPreview" :style="style" color="surface" class="media-card w-100 h-100 overflow-hidden">
        <div class="card-header-actions pa-1">
            <VChip
                v-if="resource.status === MediaStatus.Processing || resource.status === MediaStatus.Error"
                variant="flat"
                size="x-small"
                :text="resolveMediaStatusVariant(resource.status).lable"
                :color="resolveMediaStatusVariant(resource.status).color"
                :prepend-icon="resolveMediaStatusVariant(resource.status).icon"
            />
        </div>
        <VImg :src="thumb" :style="style" cover>
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </VImg>
        <!-- <VImg :src="thumb" style="inset-block-start: 0" class="w-100 h-100 position-absolute blurred-background rounded" /> -->
        <VToolbar absolute density="compact" class="toolbar-overlay pa-2">
            <div class="d-flex align-center justify-center w-100 me-2">
                <VBtn v-if="resource.url" @click="playPreview(resource.type)" icon="tabler-play" variant="elevated" />
            </div>
        </VToolbar>
        <VToolbar absolute density="compact" class="toolbar-actions">
            <VCardSubtitle style="inline-size: 85%" class="text-white" :title="resource.name">
                {{ resource.name }}
            </VCardSubtitle>
            <VSpacer />
            <VMenu :attach="$el" transition="speed-dial" location="top end">
                <template #activator="{ props }">
                    <ActionButton v-bind="props" color="#fff" variant="text" icon="mdi-dots-vertical" />
                </template>
                <VList :items="menuItem.filter(({ _if }) => _if)" />
            </VMenu>
        </VToolbar>
    </VCard>
    <component :is="MediaTYpeComponent" v-else :style="style" :media="resource" class="media-card">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps || {}" />
        </template>
    </component>
</template>

<style lang="scss" scoped>
.card-header-actions {
    position: absolute;
    z-index: 10;
    inset-block-start: 0;
}
</style>
