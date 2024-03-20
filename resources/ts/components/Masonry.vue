<template>
  <div>
    <VRow class="me-0 mx-auto" ref="container">
      <VCol
        v-for="(item, index) in props.items"
        :key="item.id"
        v-bind="grid || { cols: 12, md: 4, sm: 6, xl: 3 }"
      >
        <slot :item="item" :index="index">{{ item }}</slot>
      </VCol>
    </VRow>
    <!-- @vue-ignore -->
    <div :ref="sentinel" class="d-flex justify-center pa-5">
      <span class="pa-5" v-if="isLoading">
        <VIcon icon="svg-spinners:tadpole" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { GridColumn } from "@/@core/types";
import autoAnimate from "@formkit/auto-animate";
import { PropType } from "vue";

const observer = ref();
const container = ref();

type Resource = T & { id: number };

const props = defineProps({
  items: Array as PropType<Resource[]>,
  isLoading: Boolean,
  grid: Object as PropType<GridColumn>,
});
const emit = defineEmits(["load"]);
const handleIntersection = async (entries: any) => {
  const entry = entries[0];
  if (entry.isIntersecting) emit("load");
};

const sentinel = (el: HTMLElement) => {
  observer.value = new IntersectionObserver(handleIntersection, {
    rootMargin: "10px",
  });
  emit("load");
  observer.value.observe(el);
};

onUpdated(() => {
  autoAnimate(container.value.$el); // thats it!
});
onUnmounted(() => observer.value && observer.value.disconnect());
</script>
