<script lang="ts" setup>
interface Props {
    selected?: boolean;
}

interface Emit {}
defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>

<template>
    <VLabel class="custom-input custom-checkbox rounded-lg cursor-pointer w-100 overflow-hidden pa-0" :class="selected ? 'active' : ''">
        <VCheckbox v-bind="$attrs" />
        <slot :class="selected ? 'custom-checkbox-image bg-primary' : 'custom-checkbox-image'" />
    </VLabel>
</template>

<style lang="scss">
.v-label.custom-checkbox {
    position: relative;
    padding: 0;
    transition: all 0.5s;

    .custom-checkbox-image {
        block-size: 100%;
        inline-size: 100%;
        min-inline-size: 100%;
        overflow: hidden;
    }

    .v-checkbox {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        visibility: hidden;
    }

    &:hover,
    &.active {
        .v-checkbox {
            visibility: visible;
        }
        .v-icon {
            color: inherit !important;
        }
    }
}
</style>
