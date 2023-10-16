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
                <GalleryView deletable searchPosisions="90px" />
            </VCol>
        </VRow>
        <!-- <FileUploaderDialog
            v-model:isDialogVisible="isAddMediaDialogOpen"
            @uploadSuccess="(f, { body }) => media.unshift(body)"
            @done="isAddMediaDialogOpen = false"
        /> -->
    </div>
</template>

<script setup lang="ts">
import StorageStatistics from "@/views/analytics/StorageStatistics.vue";
</script>
<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
</route>
