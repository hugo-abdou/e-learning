<script lang="ts" setup>
import { HorizontalNavGroup, HorizontalNavLink } from "@layouts/components";
import type { HorizontalNavItems, NavGroup, NavLink } from "@layouts/types";

defineProps<{
  navItems: HorizontalNavItems;
}>();

const resolveNavItemComponent = (item: NavLink | NavGroup) => {
  if ("children" in item) return HorizontalNavGroup;

  return HorizontalNavLink;
};
</script>

<template>
  <ul class="nav-items">
    <template v-for="(item, index) in navItems" :key="index">
      <Component
        v-if="!item?.heading"
        :is="resolveNavItemComponent(item)"
        :item="item"
      />
    </template>
  </ul>
</template>

<style lang="scss">
.layout-wrapper.layout-nav-type-horizontal {
  .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
