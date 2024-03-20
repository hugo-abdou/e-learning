<script setup lang="ts">
import { useMediaStore } from "@/stores/useMediaStore";
import { StyleValue } from "vue";
import Media from "../Media";

const mediaStore = useMediaStore();
const style = computed(() => {
    if (mediaStore.dialog.data) {
        const style: StyleValue = {
            width: mediaStore.dialog.data.width + "px",
            maxWidth: "95%",
            height: mediaStore.dialog.data.height + "px",
            maxHeight: "95%",
        };
        return style;
    }
    return {};
});
</script>

<template>
    <VDialog
        v-bind="
            $vuetify.display.smAndDown
                ? {
                      fullscreen: true,
                      transition: 'dialog-bottom-transition',
                      scrollable: true,
                      class: 'bg-surface',
                  }
                : {
                      contentProps: { style },
                  }
        "
        v-model="mediaStore.dialog.open"
    >
        <DialogCloseBtn
            class="ma-3"
            @click="mediaStore.dialog.open = false"
        />
        <Media :media="mediaStore.dialog.data" />
    </VDialog>
</template>
