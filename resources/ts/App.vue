<script setup lang="ts">
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import { hexToRgb } from "@layouts/utils";
import ServerErrorLogger from "./ServerErrorLogger.vue";
import { useAuthStore } from "./stores/useAuthStore";
import { Chat, ChatMessage, ChatOut, User } from "./types";
import { UserAbility } from "./plugins/casl/ability";
import { useAbility } from "./plugins/casl/composables/useAbility";
import { getAction, getName } from "./helpers";

const authStore = useAuthStore();
const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();
const configStore = useConfigStore();
authStore.$patch({ user: useEncryptedCookie<User>("userData").value });
const ability = useAbility();
const updateAbilities = (auth: User) => {
  if (auth.permissions) {
    const rules: UserAbility[] = [];
    auth.permissions.forEach((name) => {
      const subject = getName(name);
      const action = getAction(name);
      if (subject && action) rules.push({ subject, action });
    });
    ability.update(rules);
  }
};

const setContentLayoutNav = (val: "vertical" | "horizontal") => {
  configStore.appContentLayoutNav = val;
};

const { join } = useEcho();

onMounted(async () => {
  setContentLayoutNav(authStore.isStudent ? "horizontal" : "vertical");
  if (authStore.user) {
    join("App.Online.Users");
    updateAbilities(authStore.user);
  }

  authStore.$onAction(({ after, args, name }) => {
    after((resolvedValue) => {
      if (name === "refreshUser") {
        updateAbilities(resolvedValue as User);
        join("App.Online.Users");
        setContentLayoutNav(authStore.isStudent ? "horizontal" : "vertical");
      }
    });
  });
});
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />
      <SnackBar />
      <ScrollToTop />

      <MediaPlayerDialog />
      <ServerErrorLogger />
      <!-- <BuyNow /> -->
    </VApp>
  </VLocaleProvider>
</template>
