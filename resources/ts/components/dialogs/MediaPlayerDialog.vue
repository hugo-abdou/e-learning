<script setup lang="ts">
import { useMediaStore } from "@/stores/mediaStore";
import Media from "../Media";

const mediaStore = useMediaStore();
</script>

<template>
  <VDialog v-model="mediaStore.dialog.open">
    <DialogCloseBtn @click="mediaStore.dialog.open = false" />

    <Media :media="mediaStore.dialog.data" />
  </VDialog>
</template>
