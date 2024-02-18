<template>
  <VCard class="v-card--flat border" v-bind="$attrs">
    <template #append>
      <slot name="append" />
      <IconBtn
        @click="contentColapsed = !contentColapsed"
        v-bind="{
          variant: 'text',
          density: 'compact',
        }"
        icon="tabler-chevron-down"
      />
    </template>
    <VExpandTransition>
      <div v-show="!contentColapsed" class="v-card-content">
        <slot />
      </div>
    </VExpandTransition>
  </VCard>
</template>
<script setup lang="ts">
const contentColapsed = ref(false);
</script>
