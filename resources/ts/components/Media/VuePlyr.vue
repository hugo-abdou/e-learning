<script>
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
export default {
  name: "VuePlyr",
  props: {
    src: String,
    poster: String,
  },
  data() {
    return {
      player: {},
      hls: {},
      options: {},
    };
  },
  watch: {
    src() {
      this.init();
    },
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
        try {
          let videoEl = this.$refs.video;
          if (!Hls.isSupported()) {
            videoEl.src = this.src;
            this.player = new Plyr(videoEl, {
              ...this.options,
            });
            resolve(this.player);
            return;
          }
          this.hls = new Hls({
            autoStartLoad: true,
            maxBufferSize: 2,
            maxBufferLength: 30,
          });
          this.hls.loadSource(this.src);
          this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            const availableQualities = this.hls.levels.map((l) => l.height);
            availableQualities.unshift(0);
            this.options = {
              quality: {
                default: availableQualities.length,
                options: availableQualities,
                forced: true,
                onChange: (e) => this.updateQuality(e),
              },
              i18n: { qualityLabel: { 0: "Auto" } },
            };
            // this.hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {});
            this.player = new Plyr(videoEl, this.options);
            if (this.$attrs.hasOwnProperty("autoplay")) {
              this.player.play();
            }
            resolve(this.player);
          });
          this.hls.attachMedia(videoEl);
        } catch (error) {
          reject(error);
          throw error;
        }
      });
    },
    openPreview() {
      this.init().then((player) => {
        player.play();
        setTimeout(() => {
          player.pip = true;
        }, 500);
      });
    },
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
};
</script>
<template>
  <video ref="video" controls style="height: 100%; width: 100%"></video>
</template>
<style lang="scss">
:root {
  --plyr-color-main: rgb(var(--v-theme-primary));
}

.plyr button {
  color: rgb(var(--v-theme-on-primary));
}
</style>
