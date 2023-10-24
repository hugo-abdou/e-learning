<template>
    <div>
        <VRow>
            <VCol cols="12">
                <VAppBarTitle>Usage</VAppBarTitle>
            </VCol>
            <VCol cols="12">
                <StorageStatistics class="mb-5" />
            </VCol>
            <VCol cols="12">
                <GalleryView ref="gallery" deletable searchPosisions="90px">
                    <template #actions>
                        <VBtn prependIcon="mdi-image-plus-outline" @click="isAddMediaDialogOpen = true">Add Media</VBtn>
                    </template>
                </GalleryView>
            </VCol>
        </VRow>
        <fileUploaderDialog @done="uploadDone" v-model:is-dialog-visible="isAddMediaDialogOpen" :max-number-of-files="100" />
    </div>
</template>

<script setup lang="ts">
import StorageStatistics from "@/views/analytics/StorageStatistics.vue";
const isAddMediaDialogOpen = ref(false);
const gallery = ref<{ init: Function; loadMore: Function }>();
const uploadDone = () => {
    gallery.value?.init();
    isAddMediaDialogOpen.value = false;
};
</script>
<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
</route>
