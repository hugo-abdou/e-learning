<template>
    <vue-plyr :poster="thumb"> </vue-plyr>
    <!-- <video ref="video" controls :poster="thumb" class="w-100 h-100" style="aspect-ratio: 16/9"></video> -->
</template>

<script setup>
import Hls from "hls.js";
const props = defineProps(["thumb", "media"]);
const player = ref();
const video = ref();
const hls = ref();
const isRedy = ref(false);
const defaultOptions = ref({
    quality: {},
    i18n: {}
});
function updateQuality(newQuality) {
    if (newQuality === 0) {
        hls.value.currentLevel = -1;
    } else {
        hls.value.levels.forEach((level, levelIndex) => {
            if (level.height === newQuality) {
                hls.value.currentLevel = levelIndex;
            }
        });
    }
}
onMounted(() => {
    const source = props.media.url;

    if (!Hls.isSupported()) {
        player.value.$el.src = source;
    } else {
        hls.value = new Hls();
        hls.value.loadSource(source);
        hls.value.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            const availableQualities = hls.value.levels.map(l => l.height);
            availableQualities.unshift(0);

            player.value.player.options.quality = {
                default: 0,
                options: availableQualities,
                forced: true,
                onChange: e => updateQuality(e)
            };
            // Add Auto Label
            player.value.player.options.i18n = {
                qualityLabel: {
                    0: "Auto"
                }
            };

            hls.value.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {});

            // Initialize new Plyr player with quality options
            isRedy.value = true;
        });
        player.value.player.options;
        console.log(player.value);
        hls.value.attachMedia(player.value.$el);
    }
});
</script>
