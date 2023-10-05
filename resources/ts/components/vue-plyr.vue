<script>
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";
export default {
    name: "VuePlyr",
    props: {
        src: String
    },
    data() {
        return {
            player: {},
            hls: {},
            options: {}
        };
    },
    methods: {
        updateQuality(newQuality) {
            if (newQuality === 0) {
                this.hls.currentLevel = -1;
            } else {
                this.hls.levels.forEach((level, levelIndex) => {
                    if (level.height === newQuality) {
                        this.hls.currentLevel = levelIndex;
                    }
                });
            }
        }
    },
    mounted() {
        if (!Hls.isSupported()) {
            this.$el.src = this.src;
            this.player = new Plyr(this.$el, this.options);
            return;
        }
        this.hls = new Hls();
        this.hls.loadSource(this.src);
        this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            const availableQualities = this.hls.levels.map(l => l.height);
            availableQualities.unshift(0);
            this.options = {
                quality: {
                    default: 0,
                    options: availableQualities,
                    forced: true,
                    onChange: e => this.updateQuality(e)
                },
                i18n: { qualityLabel: { 0: "Auto" } }
            };
            this.hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {});
            this.player = new Plyr(this.$el, this.options);
        });
        this.hls.attachMedia(this.$el);
    },
    beforeUnmount() {
        this.player.destroy();
    }
};
</script>
<template>
    <video controls class="w-100 h-100" style="aspect-ratio: 16/9"></video>
</template>
