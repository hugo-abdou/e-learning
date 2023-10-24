<template>
    <VuePlyr ref="plyr" :src="media.url" :poster="media.thumb_url" />
</template>

<script setup lang="ts">
import { Media } from "@/types";
import Plyr from "plyr";

interface Props {
    media: Media;
}
const props = defineProps<Props>();
const plyr = ref<{ player: Plyr }>();

defineExpose({ ...plyr.value });
</script>
