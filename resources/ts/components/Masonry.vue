<template>
    <div ref="container" v-if="props.items?.length">
        <!-- @vue-expect-error -->
        <VRow
            class="me-0 mx-auto"
            v-masonry
            transition-duration="0.3s"
            item-selector=".item"
            :ref="el => (redrawVueMasonry = $redrawVueMasonry)"
        >
            <VCol
                v-for="(item, index) in props.items"
                :key="item.id + '_' + index"
                class="item pa-2"
                v-bind="grid || { cols: 12, md: 4, sm: 6, xl: 3 }"
            >
                <slot :item="item" :redrawVueMasonry="redrawVueMasonry" :index="index">{{ item }}</slot>
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
import { PropType } from "vue";

const observer = ref();
// const sentinel = ref();
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

const sentinel = (el: HTMLElement) => {
    observer.value = new IntersectionObserver(handleIntersection, { rootMargin: "10px" });
    emit("load");
    observer.value.observe(el);
};
const redrawVueMasonry = ref<Function | null>(null);

onUpdated(() => {
    // @ts-ignore
    if (typeof redrawVueMasonry?.value === "function") {
        redrawVueMasonry.value();
    }
});
onUnmounted(() => observer.value && observer.value.disconnect());
</script>
