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
            <VRow class="">
                <VCol
                    class="flex-grow-0"
                    v-if="$slots.prepend"
                >
                    <slot name="prepend" />
                </VCol>
                <VCol class="flex-grow-1">
                    <VCardTitle v-if="title">{{ title }}</VCardTitle>
                    <VCardSubtitle v-if="subtitle">{{ subtitle }}</VCardSubtitle>
                </VCol>
                <VSpacer />
                <VCol
                    class="flex-grow-0"
                    v-if="$slots.append"
                >
                    <slot name="append" />
                </VCol>
            </VRow>
        </VCardItem>
        <slot />
    </VWindowItem>
</template>
