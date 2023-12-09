<script setup lang="ts">
import ScrollToTop from "@core/components/ScrollToTop.vue";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import { hexToRgb } from "@layouts/utils";
import { useTheme } from "vuetify";
import ServerErrorLogger from "./ServerErrorLogger.vue";
import { getAction, getName } from "./helpers";
import { UserProperties } from "./types";
import { UserAbility } from "./utils/casl/AppAbility";
import { useAppAbility } from "./utils/casl/useAppAbility";

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();

const configStore = useConfigStore();

const authUser = useUserStore();
const ability = useAppAbility();
authUser.$onAction(({ after, args, name }) => {
  after((resolvedValue) => {
    if (name === "refreshUser") {
      const auth = resolvedValue as UserProperties;
      if (auth.permissions) {
        const rules: UserAbility[] = [];
        auth.permissions.forEach((name) => {
          const subject = getName(name);
          const action = getAction(name);
          if (subject && action) rules.push({ subject, action });
        });
        localStorage.setItem("userAbilities", JSON.stringify(rules));
        ability.update(rules);
      }
    }
  });
});
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp
      :style="`--v-global-theme-primary: ${hexToRgb(
        global.current.value.colors.primary
      )}`"
    >
      <ServerErrorLogger />
      <RouterView />
      <ScrollToTop />
      <MediaPlayerDialog />
      <SnackBar />
    </VApp>
  </VLocaleProvider>
</template>
