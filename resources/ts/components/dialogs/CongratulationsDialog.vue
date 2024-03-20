<script lang="ts" setup>
interface Props {
    isDialogVisible: boolean;
    failed?: boolean;
    successTitle?: string;
    successSubtitle?: string;
    failedTitle?: string;
    failedSubtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
    isDialogVisible: false,
    failed: false,
});
</script>

<template>
    <VOverlay
        :model-value="isDialogVisible"
        @update:model-value="$emit('update:isDialogVisible', $event)"
        persistent
        max-width="500"
        class="align-center justify-center"
    >
        <CongratulationsCard v-bind="{ ...$attrs, ...$props }" />
    </VOverlay>
</template>
