<template>
    <div>
        <StorageStatistics class="mb-5" />
        <VRow>
            <VCol v-for="(item, index) in media" :key="index" cols="12" sm="6" md="4" lg="3">
                <Media :media="item">
                    <template #toolbar>
                        <VSpacer />
                        <ActionButton @click.stop="deleteMedia(item)" icon="tabler-trash" color="error" class="ml-2" />
                    </template>
                </Media>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">
import { useMediaStore } from "@/stores/mediaStore";
import { Media as MediaType } from "@/types";
import StorageStatistics from "@/views/analytics/StorageStatistics.vue";
import { debounce } from "lodash";

const mediaStore = useMediaStore();
const media = ref<MediaType[]>([]);

const getMedia = debounce(async () => {
    try {
        media.value = await mediaStore.get({ perPage: 20 });
    } catch (error) {
        throw error;
    }
}, 500);

const deleteMedia = async (media: MediaType) => {
    try {
        await mediaStore.delete(media.id);
        await getMedia();
    } catch (error) {
        console.error(error);
    }
};

onMounted(async () => {
    await getMedia();
});
onUnmounted(() => {
    mediaStore.$reset();
});
</script>
<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
</route>
