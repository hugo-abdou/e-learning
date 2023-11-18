<script setup lang="ts">
import type { Media } from "@/types";

defineOptions({ inheritAttrs: false });

interface Props {
    media: Media;
}
defineProps<Props>();

const plyr = ref<{ player: any }>();

defineExpose({ ...plyr.value });
</script>

<template>
    <VCard>
        <VuePlyr ref="plyr" v-bind="$attrs" :src="media.url" :poster="media.thumb_url" />
    </VCard>
</template>
