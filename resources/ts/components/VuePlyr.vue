<script>
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";
export default {
    name: "VuePlyr",
    inheritAttrs: false,
    props: {
        src: String,
        poster: String,
        isPreview: { type: Boolean, default: false }
    },
    data() {
        return {
            player: {},
            hls: {},
            options: {}
        };
    },
    watch: {
        src() {
            this.init();
        }
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
        },
        init() {
            return new Promise((resolve, reject) => {
                let videoEl = this.$refs.video;

                if (!Hls.isSupported()) {
                    videoEl.src = this.src;
                    this.player = new Plyr(videoEl, this.options);
                    resolve(this.player);
                    return;
                }
                this.hls = new Hls({
                    autoStartLoad: true,
                    maxBufferSize: 2,
                    maxBufferLength: 30
                });
                this.hls.loadSource(this.src);
                this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                    const availableQualities = this.hls.levels.map(l => l.height);
                    availableQualities.unshift(0);
                    this.options = {
                        quality: {
                            default: availableQualities.length,
                            options: availableQualities,
                            forced: true,
                            onChange: e => this.updateQuality(e)
                        },
                        i18n: { qualityLabel: { 0: "Auto" } }
                    };
                    this.hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {});
                    this.player = new Plyr(videoEl, {
                        ...this.options
                    });
                    this.player.on("ended", e => (this.finished = true));
                    if (this.$attrs.hasOwnProperty("autoplay")) {
                        this.player.play();
                    }
                    resolve(this.player);
                });
                this.hls.attachMedia(videoEl);
            });
        },
        openPreview() {
            this.init().then(player => {
                player.play();
                setTimeout(() => {
                    player.pip = true;
                }, 500);
            });
        }
    },
    mounted() {
        this.init();
    },
    updated() {
        this.init();
    },
    beforeUnmount() {
        this.player.destroy();
    }
};
</script>
<template>
    <video
        ref="video"
        v-bind="$attrs"
        controls
        class="w-100 h-100"
        style="aspect-ratio: 16/9; --plyr-color-main: rgb(var(--v-theme-primary))"
    ></video>
</template>
