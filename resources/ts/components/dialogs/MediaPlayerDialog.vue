<script setup lang="ts">
import { useMediaStore } from "@/stores/mediaStore";

const mediaStore = useMediaStore();
const dialog = computed(() => mediaStore.dialog);
</script>

<template>
    <VDialog :model-value="mediaStore.dialog.open" class="v-dialog-xl" @update:model-value="mediaStore.dialog.open">
        <DialogCloseBtn @click="mediaStore.dialog.open = false" />
        <VCard>
            <VuePlyr ref="plyr" :src="dialog.data.url" :poster="dialog.data.thumb" :title="dialog.data.name" autoplay />
        </VCard>
    </VDialog>
</template>
