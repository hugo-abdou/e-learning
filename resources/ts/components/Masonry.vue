<template>
    <div ref="container">
        <VRow class="me-0 mx-auto" v-masonry transition-duration="0.3s" item-selector=".item">
            <VCol
                v-for="(item, index) in items"
                :key="item.id + '_' + index"
                v-masonry-tile
                class="item"
                v-bind="{ cols: 12, md: 4, sm: 6, ...grid, xl: 3 }"
            >
                <!-- @vue-expect-error -->
                <slot :item="item" :index="index" :redrawVueMasonry="$redrawVueMasonry">{{ item }}</slot>
            </VCol>
        </VRow>
        <div ref="sentinel" class="d-flex justify-center py-5">
            <span class="pa-5">
                <VIcon v-if="isLoading" icon="svg-spinners:tadpole" />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts" generic="T">
import { GridColumn } from "@/@core/types";
import { it } from "node:test";
import { PropType } from "vue";

const observer = ref();
const sentinel = ref();
const container = ref();

type Resource = T & { id: number };

const props = defineProps({
    items: Array as PropType<Resource[]>,
    isLoading: Boolean,
    grid: Object as PropType<GridColumn>
});
const emit = defineEmits(["load"]);

const handleIntersection = async (entries: any) => {
    const entry = entries[0];
    if (entry.isIntersecting) emit("load");
};

onMounted(async () => {
    observer.value = new IntersectionObserver(handleIntersection, { rootMargin: "10px" });
    emit("load");
    observer.value.observe(sentinel.value as Element);
});
onUnmounted(() => observer.value && observer.value.disconnect());
</script>
