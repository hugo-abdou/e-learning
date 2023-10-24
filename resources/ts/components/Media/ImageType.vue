<template>
    <VCard class="media-card">
        <VImg :src="media.url" cover />
        <VToolbar absolute density="compact" class="px-2">
            <VSpacer />
            <slot name="toolbar" />
        </VToolbar>
    </VCard>
</template>

<script setup lang="ts">
import { Media } from "@/types";

interface Props {
    media: Media;
}
const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
.v-toolbar {
    bottom: 0;
    transform: translateY(50px);
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.568));
}
.media-card:hover .v-toolbar {
    transform: translateY(0px);
}
</style>
