<script setup lang="ts">
definePage({
  meta: {
    redirectIfNotLoggedIn: true,
  },
});
const isAddMediaDialogOpen = ref(false);

const gallery = ref<{ init: Function; loadMore: Function }>();

const uploadDone = () => {
  gallery.value?.init();
  isAddMediaDialogOpen.value = false;
};
const { width: windowWidth } = useWindowSize();
</script>

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
        <GalleryView
          ref="gallery"
          deletable
          :search-posisions="windowWidth > 769 ? '90px' : '10px'"
        >
          <template #actions>
            <VBtn
              prepend-icon="mdi-image-plus-outline"
              @click="isAddMediaDialogOpen = true"
            >
              Add Media
            </VBtn>
          </template>
        </GalleryView>
      </VCol>
    </VRow>
    <FileUploaderDialog
      v-model:is-dialog-visible="isAddMediaDialogOpen"
      :max-number-of-files="100"
      @done="uploadDone"
    />
  </div>
</template>
