<template>
    <VCard class="position-sticky mb-5 pa-2" :style="{ top: searchPosisions || '0px', 'z-index': 10 }">
        <VRow>
            <VCol style="flex-grow: 13">
                <AppTextField v-model="options.search" :placeholder="$t('Search')" density="compact" />
            </VCol>
            <VCol>
                <slot name="actions" />
            </VCol>
        </VRow>
    </VCard>
    <VContainer>
        <Masonry :grid="grid" :is-loading="isLoading" @load="loadMore" :items="media" v-slot="{ item }">
            <component
                :is="selectable ? CustomCheckboxe : 'div'"
                v-model="selectedMedia"
                :disabled="selectedMedia.length >= maxNumberSelectableFiles && !selectedMedia.includes(item.id)"
                :selected="selectedMedia.includes(item.id)"
                :value="item.id"
            >
                <Media :deletable="deletable" :media="item" @update:media="init" @on-delete="removeItem" is-preview />
            </component>
        </Masonry>
    </VContainer>
</template>

<script setup lang="ts">
import CustomCheckboxe from "@/@core/components/app-form-elements/CustomCheckboxe.vue";
import { GridColumn, Options } from "@/@core/types";
import { useMediaStore } from "@/stores/mediaStore";
import { Media as MediaType } from "@/types";
import { debounce } from "lodash";
import Media from "@/components/Media/index.vue";

interface Props {
    selectable?: boolean;
    deletable?: boolean;
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
    modelValue: () => []
});

interface Emits {
    (e: "onDelete", value: number): void;
    (e: "onChange", value: MediaType[]): void;
    (e: "update:model-value", value: MediaType[]): void;
}
const emit = defineEmits<Emits>();

const mediaStore = useMediaStore();
const media = ref<MediaType[]>([]);
const isLoading = ref(false);
const selectedMedia = ref<number[]>(props.modelValue.map(({ id }) => id));
watch(selectedMedia, val => {
    emit(
        "update:model-value",
        media.value.filter(({ id }) => val.includes(id))
    );
});
const totalMedia = ref(0);
const options = ref<Options>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined,
    ...props.options
});
const loadMore = debounce(async () => {
    isLoading.value = true;
    if (media.value.length < totalMedia.value) {
        options.value.page++;
        media.value.push(...(await getMedia()));
    }
    isLoading.value = false;
}, 500);
watch(
    () => options.value.search,
    debounce(async () => {
        options.value.page = 1;
        media.value = await getMedia();
    }, 500)
);
const removeItem = async (item: number) => {
    await mediaStore.delete(item);
    media.value = media.value.filter(({ id }) => id !== item);
    emit("onDelete", item);
};
const getMedia = async () => {
    try {
        const res = await mediaStore.get({ ...options.value, types: props.allowedFileTypes });
        options.value.page = res.meta?.current_page || 1;
        totalMedia.value = res.meta?.total || 0;
        return Promise.resolve(res.data);
    } catch (error) {
        throw error;
    }
};

const init = async () => {
    isLoading.value = true;
    options.value.page = 1;
    const res = await getMedia();
    media.value = res;
    isLoading.value = false;
};
onMounted(init);
onUnmounted(() => {
    mediaStore.$reset();
});
defineExpose({ init, loadMore });
</script>
