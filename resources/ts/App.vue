<script setup lang="ts">
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { hexToRgb } from "@layouts/utils";
import ServerErrorLogger from "./ServerErrorLogger.vue";
import SnackBar from "@/components/SnackBar/index.vue";

const vm = getCurrentInstance();
provide("app", vm);

const {
    syncInitialLoaderTheme,
    syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
    isAppRtl,
    handleSkinChanges
} = useThemeConfig();

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme();
syncConfigThemeWithVuetifyTheme();
handleSkinChanges();
</script>

<template>
    <VLocaleProvider :rtl="isAppRtl">
        <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
        <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
            <ServerErrorLogger />
            <RouterView />
            <ScrollToTop />
            <MediaPlayerDialog />
            <SnackBar />
        </VApp>
    </VLocaleProvider>
</template>
