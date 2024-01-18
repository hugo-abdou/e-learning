<script setup lang="ts">
interface Props {
  isDialogVisible: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
interface Emits {
  (e: "select", val: string): void;
  (e: "update:isDialogVisible", val: boolean): void;
}
const scheduleDate = ref<string>(new Date().toISOString());

const save = () => {
  emit("select", scheduleDate.value);
};
const close = () => emit("update:isDialogVisible", false);
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    @update:model-value="close"
    width="266"
  >
    <DialogCloseBtn @click="close" />

    <DateTimePicker
      v-model="scheduleDate"
      class="w-100"
      :config="{ inline: true }"
    >
      <VCardActions class="d-flex justify-space-between pt-2 border-t">
        <VSpacer />
        <VBtn size="small" variant="flat" @click="save"> Save </VBtn>
      </VCardActions>
    </DateTimePicker>
  </VDialog>
</template>
