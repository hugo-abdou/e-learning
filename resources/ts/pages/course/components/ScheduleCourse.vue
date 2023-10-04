<template>
    <VDialog v-model="isScheduleDialogOpen" class="v-dialog-sm">
        <DialogCloseBtn @click="isScheduleDialogOpen = false" />
        <VCard title="Schedule publish date">
            <VCardItem class="pa-5">
                <VRow justify="center">
                    <VCol cols="auto">
                        <DateTimePicker v-model="scheduleDate" :config="{ inline: true }" />
                    </VCol>
                </VRow>
            </VCardItem>
            <VCardActions class="d-flex justify-space-between pt-4 border-t">
                <VSpacer />
                <VBtn @click="save">Save</VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
import { useCourseStore } from "@/stores/useCourseStore";

interface Props {
    courseId: number | null;
}
const props = defineProps<Props>();
interface Emits {
    (e: "done"): void;
}
const emit = defineEmits<Emits>();

const isScheduleDialogOpen = ref(false);
const scheduleDate = ref<string>(new Date().toISOString());
watch(
    () => props.courseId,
    val => {
        isScheduleDialogOpen.value = !!val;
    }
);
const courseStore = useCourseStore();
const save = () => {
    if (props.courseId && scheduleDate.value) {
        courseStore.scheduleCourse(props.courseId, scheduleDate.value).then(() => emit("done"));
    }
};
</script>
