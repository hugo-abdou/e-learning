<script setup lang="ts">
import { VForm } from "vuetify/components/VForm";
import { useUsersStore } from "@/stores/useUsersStore";
import type { StudentAttempts, User, UsersWithAttempts } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useAuthStore } from "@/stores/useAuthStore";
import avatar1 from "@images/avatars/avatar-1.png";
import { capitalizeWords } from "@/helpers";
import { useStudentsStore } from "@/stores/useStudentsStore";

interface Emit {
    (e: "update:isDrawerOpen", value: boolean): void;
    (e: "CheckDone"): void;
}

interface Props {
    isDrawerOpen: boolean;
    data?: UsersWithAttempts;
}

const props = withDefaults(defineProps<Props>(), { isDrawerOpen: false });
const emit = defineEmits<Emit>();
const refForm = ref<VForm>();
const attempts = ref<StudentAttempts[]>([]);

watch(
    () => props.data,
    () => {
        attempts.value = props.data?.attempts || [];
    }
);
// 👉 drawer close
const closeNavigationDrawer = () => {
    emit("update:isDrawerOpen", false);
    emit("CheckDone");
};
const currentQuestion = ref(0);
const tabs = computed(() => {
    return attempts.value.map(({ question }, index) => {
        // extract headers from editorjs data
        const headerOrParagraph = question.question.blocks?.find((block) => block.type === "header" || block.type === "paragraph");
        const title = headerOrParagraph?.data?.text;

        return {
            icon: "tabler-help",
            title: `Question : ${index + 1}`,
            subtitle: title,
        };
    });
});
const studentsStore = useStudentsStore();
const validateAttempt = async (value: boolean) => {
    await studentsStore.validateAttempt(attempts.value[currentQuestion.value].id, {
        is_correct: value,
    });
    currentQuestion.value++;
    if (currentQuestion.value >= attempts.value.length) {
        closeNavigationDrawer();
    }
};
</script>

<template>
    <VNavigationDrawer
        temporary
        :width="500"
        location="end"
        class="scrollable-content"
        :model-value="props.isDrawerOpen"
        @update:model-value="closeNavigationDrawer"
    >
        <!-- 👉 Title -->
        <AppDrawerHeaderSection
            :title="`Check New Student Attempts`"
            @cancel="closeNavigationDrawer"
        />
        <VCardText v-if="data">
            <div class="d-sm-flex align-center d-none mb-10">
                <!-- 👉 Avatar -->
                <VAvatar
                    rounded
                    size="70"
                    :image="data.avatar"
                />
                <!-- 👉 Name -->
                <div class="mx-3">
                    <VCardTitle>{{ capitalizeWords(data.name) }}</VCardTitle>
                    <VCardSubtitle>{{ capitalizeWords(data.email) }}</VCardSubtitle>
                </div>
            </div>
            <AppStepper
                v-if="tabs"
                icon-size="30"
                class="stepper-icon-step-bg"
                v-model:current-step="currentQuestion"
                :items="tabs"
                align="start"
            />
        </VCardText>

        <VDivider />
        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard
                flat
                v-if="data"
            >
                <VWindow v-model="currentQuestion">
                    <VWindowItem
                        v-for="(attempt, index) in attempts"
                        :key="index"
                    >
                        <VCardTitle>{{ $t("Question") }} :</VCardTitle>
                        <VCardText>
                            <EditorJs
                                read-only
                                :data="attempt.question.question"
                                class="border rounded pl-3"
                            />
                        </VCardText>
                        <VCardTitle>{{ $t("Answer") }} :</VCardTitle>
                        <VCardText>
                            <EditorJs
                                read-only
                                :data="attempt.answer"
                                class="border rounded pl-3"
                            />
                        </VCardText>
                    </VWindowItem>
                </VWindow>
            </VCard>
        </PerfectScrollbar>
        <VDivider />
        <VCardActions class="mt-5">
            <VSpacer />
            <VBtn
                variant="tonal"
                color="error"
                @click="validateAttempt(false)"
            >
                {{ $t("UnCorrect") }}
            </VBtn>
            <VBtn
                variant="tonal"
                color="success"
                @click="validateAttempt(true)"
            >
                {{ $t("Correct") }}
            </VBtn>
            <VSpacer />
        </VCardActions>
    </VNavigationDrawer>
</template>
