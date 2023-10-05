<script lang="ts" setup>
// Import styles.
import "vidstack/player/styles/base.css";
import "vidstack/player/styles/default/theme.css";
import "vidstack/player/styles/default/layouts/video.css";
// Register elements.
import "vidstack/player";
import "vidstack/player/layouts";
import "vidstack/player/ui";

import { isHLSProvider, type MediaCanPlayEvent, type MediaProviderChangeEvent } from "vidstack";
import type { MediaPlayerElement } from "vidstack/elements";
import { onMounted, ref } from "vue";
import { textTracks } from "./tracks";

interface Props {
    src: string;
    title: string;
    poster: string;
}
const props = defineProps<Props>();
const $player = ref<MediaPlayerElement>();
const $src = ref("");

onMounted(() => {
    for (const track of textTracks) $player.value!.textTracks.add(track);
    $src.value = props.src;
    // $src.value = "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8";
    return $player.value!.subscribe(({ paused, viewType }) => {});
});

function onProviderChange(event: MediaProviderChangeEvent) {
    const provider = event.detail;
    if (isHLSProvider(provider)) {
        provider.config = {};
    }
}

// We can listen for the `can-play` event to be notified when the player is ready.
function onCanPlay(event: MediaCanPlayEvent) {}
</script>

<template>
    <media-player class="player" :src="$src" crossorigin @provider-change="onProviderChange" @can-play="onCanPlay" ref="$player">
        <media-provider>
            <media-poster class="vds-poster" :src="poster" :alt="title" />
        </media-provider>
        <!-- Layouts -->
        <!-- <media-audio-layout /> -->
        <media-video-layout style="aspect-ratio: 16/9" />
        <!-- thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" -->
    </media-player>
</template>

<style scoped>
.player {
    --media-brand: #f5f5f5;
    --media-focus-ring-color: #4e9cf6;
    --media-focus-ring: 0 0 0 3px var(--media-focus-ring-color);
    --media-border-radius: 0.5rem;
}
.player[data-view-type="video"] {
    --media-tooltip-y-offset: 30px;
    --media-menu-y-offset: 30px;
    aspect-ratio: 16 /9;
    border-radius: var(--media-border-radius);
    contain: layout;
}

.player :deep(video),
media-poster {
    border-radius: var(--media-border-radius);
    height: 100%;
}
</style>
