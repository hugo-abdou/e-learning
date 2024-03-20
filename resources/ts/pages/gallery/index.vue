<script setup lang="ts">
definePage({
    meta: {
        redirectIfNotLoggedIn: true,
        action: "read",
        subject: "storage",
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
        <GalleryView
            ref="gallery"
            :deletable="$can('delete', 'storage')"
            :grid="{ cols: '12', sm: '6', md: '3' }"
            :search-posisions="windowWidth > 769 ? '90px' : '10px'"
        >
            <template
                v-if="$can('create', 'storage')"
                #actions
            >
                <VBtn
                    prepend-icon="tabler-plus"
                    @click="isAddMediaDialogOpen = true"
                >
                    Add Media
                </VBtn>
            </template>
        </GalleryView>
        <FileUploaderDialog
            v-model:is-dialog-visible="isAddMediaDialogOpen"
            :max-number-of-files="100"
            @done="uploadDone"
        />
    </div>
</template>
