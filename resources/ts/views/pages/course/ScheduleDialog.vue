<script setup lang="ts">
import { useCourseStore } from '@/stores/useCourseStore';

interface Props {
  courseId: number | null
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
interface Emits {
  (e: 'done'): void
}
const isScheduleDialogOpen = ref(false)
const scheduleDate = ref<string>(new Date().toISOString())

watch(isScheduleDialogOpen, val => {
  if (!val)
    emit('done')
})
watch(
  () => props.courseId,
  val => {
    isScheduleDialogOpen.value = !!val
  },
)

const courseStore = useCourseStore()

const save = () => {
  if (props.courseId && scheduleDate.value)
    courseStore.scheduleCourse(props.courseId, scheduleDate.value).then(() => emit('done'))
}
</script>

<template>
  <VDialog
    v-model="isScheduleDialogOpen"
    width="266"
  >
    <DialogCloseBtn @click="isScheduleDialogOpen = false" />

    <DateTimePicker
      v-model="scheduleDate"
      class="w-100"
      :config="{ inline: true }"
    >
      <VCardActions class="d-flex justify-space-between pt-2 border-t">
        <VSpacer />
        <VBtn
          size="small"
          variant="flat"
          @click="save"
        >
          Save
        </VBtn>
      </VCardActions>
    </DateTimePicker>
  </VDialog>
</template>
