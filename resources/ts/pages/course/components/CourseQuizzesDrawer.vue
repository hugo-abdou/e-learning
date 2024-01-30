<script lang="ts" setup>
import { Quiz } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VForm } from "vuetify/components/VForm";
const props = defineProps<{
  isDrawerOpen: boolean;
  quiz?: Quiz;
}>();

const emit = defineEmits<{
  (e: "update:isDrawerOpen", val: boolean): void;
  (e: "addQuiz", val: Quiz): void;
  (e: "updateQuiz", val: Quiz): void;
}>();
const refForm = ref<VForm>();
const quiz = ref<Quiz>();

const resetEvent = () => {
  quiz.value = JSON.parse(JSON.stringify(props.quiz ?? {}));
  nextTick(() => {
    refForm.value?.resetValidation();
  });
};

watch(() => props.isDrawerOpen, resetEvent);
const dialogModelValueUpdate = (val: boolean) => {
  emit("update:isDrawerOpen", val);
};
</script>

<template>
  <VNavigationDrawer
    temporary
    location="end"
    :model-value="props.isDrawerOpen"
    class="scrollable-content"
    @update:model-value="dialogModelValueUpdate"
  >
    <AppDrawerHeaderSection
      :title="quiz?.id ? 'Update Event' : 'Add Event'"
      @cancel="$emit('update:isDrawerOpen', false)"
    >
      <template #beforeClose>
        <IconBtn v-show="quiz?.id">
          <VIcon size="18" icon="tabler-trash" />
        </IconBtn>
      </template>
    </AppDrawerHeaderSection>
    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard title="testing" height="250"></VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
