<script setup lang="ts">
import ThemeSwitcher from "@/@core/components/ThemeSwitcher.vue";
import type { ThemeSwitcherTheme } from "@layouts/types";

const themes: ThemeSwitcherTheme[] = [
    {
        name: "system",
        icon: "tabler-device-laptop"
    },
    {
        name: "light",
        icon: "tabler-sun-high"
    },
    {
        name: "dark",
        icon: "tabler-moon"
    }
];
</script>

<template>
    <ThemeSwitcher :themes="themes" />
</template>
