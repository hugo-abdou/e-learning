<script lang="ts" setup>
interface Props {
  menuList?: any[];
  itemProps?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <IconBtn
    density="compact"
    color="disabled"
  >
    <VIcon icon="tabler-dots-vertical" />

    <VMenu
      v-if="props.menuList"
      activator="parent"
    >
      <VList :item-props="props.itemProps">
        <VListItem
          v-for="(item, i) in props.menuList"
          :key="i"
          v-bind="item"
        />
      </VList>
    </VMenu>
  </IconBtn>
</template>
