<template>
    <div class="my-6">
        <div class="d-flex mt-3 mb-2">
            <h6 class="text-base font-weight-medium">{{ title }}</h6>
            <VSpacer />
            <h6 class="text-base font-weight-medium">{{ kFormatter(used) }} of {{ max < 0 ? "∞" : kFormatter(max) }} {{ label }}</h6>
        </div>
        <!-- 👉 Progress -->
        <VProgressLinear rounded rounded-bar :model-value="used" :max="max" height="10" color="primary" />
        <p class="mt-2">{{ remaining }} {{ label }} remaining</p>
    </div>
</template>

<script setup lang="ts">
import { kFormatter } from "@/@core/utils/formatters";

const props = defineProps<{ used: number; max: number; title: string; label: string }>();

const remaining = computed(() => {
    if (props.max < 0) return "∞";
    return kFormatter(props.max - props.used);
});
</script>
