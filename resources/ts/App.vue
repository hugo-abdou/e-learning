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

const updateAbilities = (auth: UserProperties) => {
  if (auth.permissions) {
    const rules: UserAbility[] = [];
    auth.permissions.forEach((name) => {
      const subject = getName(name);
      const action = getAction(name);
      if (subject && action) rules.push({ subject, action });
    });
    authUser.userAbilities = rules;
    ability.update(rules);
  }
};

authUser.$onAction(({ after, args, name }) => {
  after((resolvedValue) => {
    // if (name === "refreshUser")
    // updateAbilities(resolvedValue as UserProperties);
  });
});
const { width } = useWindowSize();
watch(
  width,
  (val) => {
    if (val < 769) configStore.navbarType = "static";
    if (val > 769) configStore.navbarType = "sticky";
  },
  { immediate: true }
);
onMounted(() => {
  if (authUser.isStudent) {
    configStore.appContentLayoutNav = "horizontal";
  }
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
