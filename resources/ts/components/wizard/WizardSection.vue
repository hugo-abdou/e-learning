import { title } from 'process';
<script lang="ts" setup>
type Props = {
  title?: string;
  subtitle?: string;
};
const props = defineProps<Props>();
</script>

<template>
  <VWindowItem>
    <VCardItem>
      <div class="d-flex align-center justify-center">
        <slot name="prepend" />
        <div class="pb-0">
          <VCardTitle v-if="title">{{ title }}</VCardTitle>
          <VCardSubtitle v-if="title">{{ subtitle }}</VCardSubtitle>
        </div>
        <VSpacer />
        <slot name="append" />
      </div>
    </VCardItem>
    <slot />
  </VWindowItem>
</template>
