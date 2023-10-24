<template>
    <VCard v-if="isPreview" color="surface" class="h-100 w-100 media-card">
        <VImg :style="style" :src="thumb" cover />
        <VToolbar absolute density="compact">
            <VCardSubtitle style="width: 85%" class="text-white" :title="resource.name">{{ resource.name }} </VCardSubtitle>
            <VSpacer />
            <VMenu :attach="$el" transition="speed-dial" location="top end">
                <template #activator="{ props }">
                    <ActionButton v-bind="props" color="#fff" variant="text" icon="mdi-dots-vertical" />
                </template>
                <VList :items="menuItem.filter(({ _if }) => _if)" />
                <div v-if="false" class="mb-1 d-flex flex-column gap-1">
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
        </VToolbar>
        <!-- <VImg :src="thumb" style="top: 0" class="w-100 position-absolute blurred-background" /> -->
    </VCard>
    <component v-else :is="MediaTYpeComponent" :style="style" :media="resource" class="media-card">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps || {}" />
        </template>
    </component>
</template>

<script setup lang="ts">
import { MediaStatus, MediaTypes } from "@/@core/enums";
import { useMediaStore } from "@/stores/mediaStore";
import { Media as MediaType } from "@/types";
import { resolveDefaultThumbnal } from "@/utils";
import PdfType from "./PdfType.vue";
import ImageType from "./ImageType.vue";
import VideoType from "./VideoType.vue";

interface Props {
    isPreview?: boolean;
    deletable?: boolean;
    aspectRatio?: string;
    media: MediaType | any;
}
const props = withDefaults(defineProps<Props>(), { isPreview: false, hasTitle: false, deletable: false, heading: true });

interface Emits {
    (e: "onDelete", value: number): void;
    (e: "update:pdf", value: { page: number; pages: number }): void;
    (e: "update:media", value: MediaType): void;
}
const emit = defineEmits<Emits>();

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
        { title: "Delete", _if: props.deletable, props: { "prepend-icon": "tabler-trash", onClick: () => deleteMedia(resource.value) } },
        { title: "retry", _if: resource.value.status === MediaStatus.Error, props: { "prepend-icon": "tabler-refresh", onClick: retry } },
        { title: "share", _if: true, props: { "prepend-icon": "tabler-share" } }
    ];
});

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
const deleteMedia = (media: MediaType) => {
    if (confirm("are you sure you want to delete this media")) {
        emit("onDelete", media.id);
    }
};
</script>

<style lang="scss" scoped>
.v-toolbar {
    bottom: 0;
    transform: translateY(50px);
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.media-card:hover .v-toolbar {
    transform: translateY(0px);
}
</style>
