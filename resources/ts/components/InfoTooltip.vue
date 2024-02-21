<template>
  <VTooltip location="top" max-width="320">
    <template #activator="{ props }">
      <slot v-if="$slots.default" :props="props" />
      <VIcon
        v-else
        v-bind="props"
        :icon="icon ?? 'tabler-exclamation-circle'"
        :size="size || 20"
      />
    </template>
    <span>{{ text }}</span>
  </VTooltip>
</template>

<script setup lang="ts">
defineProps<{ text: string; icon?: string; size?: number | string }>();
</script>

<style scoped></style>
