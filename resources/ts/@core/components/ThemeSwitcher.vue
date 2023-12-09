<script setup lang="ts">
import { useConfigStore } from "@core/stores/config";
import type { ThemeSwitcherTheme } from "@layouts/types";

const props = defineProps<{
  themes: ThemeSwitcherTheme[];
}>();

const configStore = useConfigStore();
const {
  state: currentThemeName,
  next: getNextThemeName,
  index: currentThemeIndex,
} = useCycleList(
  props.themes.map((t) => t.name),
  { initialValue: configStore.theme }
);

const changeTheme = () => {
  configStore.theme = getNextThemeName();
};
</script>

<template>
  <IconBtn @click="changeTheme">
    <VIcon
      size="26"
      color="rgba(var(--v-theme-on-surface))"
      :icon="props.themes[currentThemeIndex].icon"
    />
    <VTooltip activator="parent" open-delay="1000" scroll-strategy="close">
      <span class="text-capitalize">{{ currentThemeName }}</span>
    </VTooltip>
  </IconBtn>
</template>
