<script setup lang="ts">
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import miscMaskDark from "@images/pages/misc-mask-dark.png";
import miscMaskLight from "@images/pages/misc-mask-light.png";
import miscUnderMaintenance from "@images/pages/misc-under-maintenance.png";
import { hexToRgb } from "@layouts/utils";
import { useTheme } from "vuetify";

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark);

const { global } = useTheme();
// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();

const configStore = useConfigStore();
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <div class="layout-wrapper layout-blank">
        <div class="misc-wrapper">
          <div class="text-center mb-12">
            <!-- 👉 Title and subtitle -->
            <h4 class="text-h4 font-weight-medium mb-3">
              Under Maintenance! 🚧
            </h4>
            <p>
              Sorry for the inconvenience but we're performing some maintenance
              at the moment
            </p>
          </div>

          <!-- 👉 Image -->
          <div class="misc-avatar w-100 text-center">
            <VImg
              :src="miscUnderMaintenance"
              alt="Coming Soon"
              :max-width="550"
              class="mx-auto"
            />
          </div>

          <VImg
            :src="authThemeMask"
            class="misc-footer-img d-none d-md-block"
          />
        </div>
      </div>
    </VApp>
  </VLocaleProvider>
</template>
<style lang="scss">
@use "@core-scss/template/pages/misc.scss";
</style>
