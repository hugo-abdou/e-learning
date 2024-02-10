<script lang="ts" setup>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "vue-prism-component";
import { useTheme } from "vuetify/lib/framework.mjs";

const isDialogVisible = ref(false);
const iframe = ref<HTMLIFrameElement | null>(null);
const theme = useTheme();
const jsonResponse = ref(null);

$api.onError((ctx) => {
  if (ctx.response.status === 500) {
    isDialogVisible.value = true;
    nextTick(() => {
      // check if the rsponce is a json or string
      if (typeof ctx.response._data === "object") {
        jsonResponse.value = ctx.response._data;
      } else {
        if (!iframe.value || !iframe.value.contentWindow) return;
        iframe.value.contentWindow.document.open();
        iframe.value.contentWindow.document.write(ctx.response._data);
        iframe.value.contentWindow.document.body.setAttribute(
          "style",
          `background: ${theme.current.value.colors.background};margin: 0;`
        );
        iframe.value.contentWindow.document.close();
      }
    });
  }
});
</script>

<template>
  <VDialog
    v-model="isDialogVisible"
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <VToolbar color="error" :height="30">
        <VBtn icon variant="plain" @click="isDialogVisible = false">
          <VIcon color="white" icon="tabler-x" />
        </VBtn>
      </VToolbar>

      <Prism
        v-if="jsonResponse"
        :style="{
          textAlign: $vuetify.locale.isRtl ? 'right' : 'left',
          height: '100%',
        }"
        language="js"
      >
        {{ jsonResponse }}
      </Prism>
      <iframe v-else ref="iframe" style="border: 0; block-size: 100%" />
    </VCard>
  </VDialog>
</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss";
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  border-radius: vuetify.$card-border-radius;
}

.app-card-code-copy-icon {
  inset-block-start: 1.2em;
  inset-inline-end: 0.8em;
}
</style>
