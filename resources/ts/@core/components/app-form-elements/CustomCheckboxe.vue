<script lang="ts" setup>
interface Props {
    selected?: boolean;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();
</script>

<template>
    <VLabel
        class="custom-input custom-checkbox rounded-lg cursor-pointer w-100 h-100 overflow-hidden pa-0"
        :class="selected ? 'active' : ''"
    >
        <div :class="selected ? 'custom-checkbox-image bg-primary' : 'custom-checkbox-image'">
            <slot />
        </div>
        <VCheckboxBtn true-icon="tabler-photo-check" v-bind="$attrs" />
    </VLabel>
</template>

<style lang="scss">
.v-label.custom-checkbox {
    position: relative;
    padding: 0;
    transition: all 0.5s;

    .custom-checkbox-image {
        overflow: hidden;
        block-size: 100%;
        inline-size: 100%;
        min-inline-size: 100%;
    }

    .v-checkbox-btn {
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 5px;
        visibility: hidden;
    }

    &:hover,
    &.active {
        .v-checkbox-btn {
            visibility: visible;
        }
    }
}
</style>
