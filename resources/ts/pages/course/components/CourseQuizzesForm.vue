<script lang="ts" setup>
import { Quiz } from "@/types";
import { UploadBunAttrs, resolveCourseStatusVariant } from "@/utils";

const props = defineProps<{
  modelValue: number[];
}>();
const emit = defineEmits<{
  (e: "update:modelValue", val: number[]): void;
}>();

const search = ref<string>("");
const quizzes = ref<Quiz[]>([]);
const selectedQuizzes = ref<number[]>(props.modelValue);

const previewQuizzesList = computed<Quiz[]>(() => {
  const list = quizzes.value.filter((quiz) =>
    selectedQuizzes.value.includes(quiz.id)
  );
  return list;
});
const searchQuizzes = computed<Quiz[]>(() => {
  const list = quizzes.value;
  if (search.value) {
    return list.filter((quiz) =>
      quiz.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  return list;
});
const quizStore = useQuizzesStore();
onMounted(() => {
  quizStore.getQuizzes({ params: {} }).then(({ data }) => {
    quizzes.value = data;
  });
});

const selectQuiz = ({ id }: { id: number }) => {
  if (selectedQuizzes.value.includes(id)) {
    selectedQuizzes.value = selectedQuizzes.value.filter(
      (quizId) => quizId !== id
    );
  } else {
    selectedQuizzes.value.push(id);
  }
};
</script>

<template>
  <VRow class="mt-5">
    <VCol cols="12" class="pe-5">
      <VMenu :close-on-content-click="false">
        <template #activator="{ props }">
          <VBtn
            prepend-icon="tabler-plus"
            v-bind="{ ...props, ...UploadBunAttrs }"
          >
            {{ $t("Select Quiz") }}
          </VBtn>
        </template>
        <template #default="{ isActive }">
          <VCard rounded="0" class="bg-background">
            <VCardItem>
              <VTextField
                prepend-inner-icon="tabler-search"
                :placeholder="$t('Search')"
                v-model="search"
              ></VTextField>
            </VCardItem>
            <VCardItem class="pe-0">
              <!-- @vue-ignore -->
              <VList
                class="bg-background"
                max-height="250px"
                @click:select="selectQuiz"
                lines="three"
                variant="outlined"
              >
                <VListItem
                  v-for="quiz in searchQuizzes"
                  :key="quiz.id"
                  :value="quiz.id"
                  :active="selectedQuizzes.includes(quiz.id as number)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-question-circle" />
                  </template>
                  <VListItemTitle>{{ quiz.title }}</VListItemTitle>
                  <VChip
                    :color="resolveCourseStatusVariant(quiz.status).color"
                    :text="quiz.status"
                  />
                </VListItem>
              </VList>
            </VCardItem>
          </VCard>
        </template>
      </VMenu>
    </VCol>
    <VCol cols="12">
      <VList lines="three" variant="outlined">
        <VListItem
          rounded
          class="mt-2"
          v-for="quiz in previewQuizzesList"
          :key="quiz.id"
        >
          <template #prepend>
            <VIcon icon="tabler-question-circle" />
          </template>
          <VListItemTitle>{{ quiz.title }}</VListItemTitle>
          <VChip
            :color="resolveCourseStatusVariant(quiz.status).color"
            :text="quiz.status"
          />
        </VListItem>
      </VList>
    </VCol>
  </VRow>
</template>
