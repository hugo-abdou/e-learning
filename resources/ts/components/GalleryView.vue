<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import type { GridColumn, Options } from "@/@core/types";
import { formatBytes, secondsToMinutes } from "@/helpers";
import { useMediaStore } from "@/stores/useMediaStore";
import type { MediaType, TableOptions } from "@/types";
import { resolveDefaultThumbnal, debounce } from "@/helpers";
import Media from "./Media";

interface Props {
    selectable?: boolean;
    deletable?: boolean;
    variant?: "checkbox" | "preview";
    options?: Options;
    grid?: GridColumn;
    modelValue?: MediaType[];
    searchPosisions?: string;
    maxNumberSelectableFiles?: number;
    allowedFileTypes?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    selectable: false,
    deletable: false,
    maxNumberSelectableFiles: 5,
    variant: "preview",
    modelValue: () => [],
});

const emit = defineEmits<Emits>();
interface Emits {
    (e: "onDelete", value: number): void;
    (e: "onChange", value: MediaType[]): void;
    (e: "update:model-value", value: MediaType[]): void;
}
const mediaStore = useMediaStore();
const media = ref<MediaType[]>([]);
const isLoading = ref(false);
const selectedMedia = ref<number[]>(props.modelValue.map(({ id }) => id));

watch(selectedMedia, (val) => {
    emit(
        "update:model-value",
        media.value.filter(({ id }) => val.includes(id))
    );
});

const totalMedia = ref(0);

const options = ref<TableOptions>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined,
    ...props.options,
});

const getMedia = async () => {
    try {
        const res = await mediaStore.get({
            ...options.value,
            types: props.allowedFileTypes,
        });

        options.value.page = res.meta?.current_page || 1;
        totalMedia.value = res.meta?.total || 0;

        return Promise.resolve(res.data);
    } catch (error) {}
};

const loadMore = debounce(async () => {
    isLoading.value = true;
    if (media.value.length < totalMedia.value) {
        options.value.page++;
        media.value.push(...((await getMedia()) || []));
    }
    isLoading.value = false;
}, 500);

watch(
    () => options.value.search,
    debounce(async () => {
        options.value.page = 1;
        media.value = (await getMedia()) || [];
    }, 500)
);

const removeItem = async (item: number) => {
    if (confirm("are you sure you want to delete this media")) {
        await mediaStore.delete(item);
        media.value = media.value.filter(({ id }) => id !== item);
        emit("onDelete", item);
    }
};

const init = async () => {
    isLoading.value = true;
    options.value.page = 1;
    const res = (await getMedia()) || [];
    media.value = res;
    isLoading.value = false;
};
onMounted(init);
onUnmounted(() => {
    mediaStore.$reset();
});
defineExpose({ init, loadMore });
</script>

<template>
    <VCard
        class="position-sticky mb-5 pa-2"
        :style="{ top: searchPosisions || '0px', 'z-index': 10 }"
    >
        <VCardTitle>
            <VRow>
                <VCol class="flex-grow-1">
                    <AppTextField
                        v-model="options.search"
                        :placeholder="$t('Search')"
                        density="compact"
                    />
                </VCol>
                <VCol
                    class="flex-grow-0"
                    v-if="$slots.actions"
                >
                    <slot name="actions" />
                </VCol>
            </VRow>
        </VCardTitle>
    </VCard>
    <Masonry
        v-slot="{ item }"
        :grid="grid"
        :is-loading="isLoading"
        :items="media"
        @load="loadMore"
    >
        <VCard v-if="variant === 'preview'">
            <!-- {{ item.url }} -->
            <Media
                @delete="removeItem(item.id)"
                :deletable="deletable"
                :media="item"
                preview
            />
            <VCardTitle :title="item.name">
                {{ item.name }}
            </VCardTitle>
            <VCardItem class="py-2">
                <div class="w-100 d-flex">
                    <VCardSubtitle
                        v-if="item.type === MediaTypes.video"
                        class="d-inline-flex align-center gap-1"
                    >
                        <VIcon
                            icon="tabler-clock"
                            size="16"
                        />
                        {{ secondsToMinutes(item.duration) }}
                    </VCardSubtitle>
                    <VSpacer />
                    <VCardSubtitle class="d-inline-flex align-center gap-1">
                        {{ formatBytes(item.size) }}
                    </VCardSubtitle>
                </div>
            </VCardItem>
        </VCard>
        <div
            v-else
            class="w-100"
            :style="{ aspectRatio: 1 }"
        >
            <CustomCheckboxe
                v-model="selectedMedia"
                :disabled="selectedMedia.length >= maxNumberSelectableFiles && !selectedMedia.includes(item.id)"
                :selected="selectedMedia.includes(item.id)"
                :value="item.id"
            >
                <VImg
                    :src="resolveDefaultThumbnal(item)"
                    class="w-100 h-100 media-card"
                    cover
                >
                    <VToolbar
                        absolute
                        density="compact"
                        class="toolbar-actions"
                    >
                        <VCardSubtitle
                            style="inline-size: 95%"
                            class="text-white"
                            :title="item.name"
                        >
                            {{ item.name }}
                        </VCardSubtitle>
                    </VToolbar>
                </VImg>
            </CustomCheckboxe>
        </div>
    </Masonry>
</template>
