<template>
    <div>
        <VRow>
            <VCol cols="12">
                <VAppBarTitle>Usage</VAppBarTitle>
            </VCol>
            <VCol cols="12">
                <StorageStatistics class="mb-5" />
            </VCol>
            <VCol cols="12" class="d-flex align-center gap-2">
                <VAppBarTitle>Media</VAppBarTitle>
                <AppTextField v-model="options.search" :placeholder="$t('Search')" density="compact" />
                <VBtn @click="isAddMediaDialogOpen = true" prepend-icon="tabler-plus">Add Media</VBtn>
            </VCol>
            <VCol cols="12">
                <Masonry :is-loading="isLoading" @load="loadMore" :items="media" v-slot="{ item }">
                    <div class="w-100 h-100">
                        <Media has-title :media="item" @on-delete="removeItem"> </Media>
                    </div>
                </Masonry>
            </VCol>
        </VRow>
        <FileUploaderDialog
            v-model:isDialogVisible="isAddMediaDialogOpen"
            @uploadSuccess="(f, { body }) => media.unshift(body)"
            @done="isAddMediaDialogOpen = false"
        />
    </div>
</template>

<script setup lang="ts">
import { Options } from "@/@core/types";
import { useMediaStore } from "@/stores/mediaStore";
import { Media as MediaType } from "@/types";
import StorageStatistics from "@/views/analytics/StorageStatistics.vue";
import { debounce } from "lodash";

const mediaStore = useMediaStore();
const media = ref<MediaType[]>([]);
const isAddMediaDialogOpen = ref(false);
const isLoading = ref(false);

const totalMedia = ref(0);
const options = ref<Options>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined
});

const loadMore = debounce(async () => {
    if (media.value.length < totalMedia.value) {
        options.value.page++;
        media.value.push(...(await getMedia()));
    }
}, 500);

const removeItem = (item: number) => {
    media.value = media.value.filter(({ id }) => id !== item);
};

watch(
    () => options.value.search,
    debounce(async () => {
        options.value.page = 1;
        media.value = await getMedia();
    }, 500)
);

const getMedia = async () => {
    try {
        const res = await mediaStore.get(options.value);
        options.value.page = res.meta?.current_page || 1;
        totalMedia.value = res.meta?.total || 0;
        return Promise.resolve(res.data);
    } catch (error) {
        throw error;
    }
};

onMounted(async () => {
    const res = await getMedia();
    media.value = res;
});
onUnmounted(() => {
    mediaStore.$reset();
});
</script>
<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
</route>
