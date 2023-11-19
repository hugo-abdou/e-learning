<template>
  <VCard>
    <VCard-title>Create a New Quiz</VCard-title>
    <VForm ref="form" @submit.prevent="createQuiz">
      <VCardItem>
        <VTextField
          class="mt-2"
          v-model="quiz.title"
          label="Quiz Title"
          required
        />
        <VTextarea
          class="mt-2"
          v-model="quiz.description"
          label="Quiz Description"
          required
        />
      </VCardItem>
      <VDivider />
      <template v-for="(question, index) in quiz.questions" :key="index">
        <VCardItem>
          <VRow>
            <VCol cols="10">
              <VTextField
                v-model="question.question"
                :label="'Question ' + (index + 1)"
                required
                class="mt-2"
              />
            </VCol>
            <VCol cols="2">
              <v-btn class="mt-2" @click="addOption(index)">Add Option</v-btn>
            </VCol>
            <template
              v-for="(option, optionIndex) in question.options"
              :key="optionIndex"
            >
              <VCol cols="10">
                <VTextField
                  v-model="option.option"
                  :label="'Option ' + (optionIndex + 1)"
                  required
                />
              </VCol>
              <VCol cols="2">
                <VCheckbox v-model="option.isCorrect" :label="'Is Correct'" />
              </VCol>
            </template>
          </VRow>
        </VCardItem>
        <VDivider />
      </template>
      <VCardActions class="pt-2">
        <v-btn @click="addQuestion">Add Question</v-btn>
        <v-btn type="submit">Create Quiz</v-btn>
      </VCardActions>
    </VForm>
  </VCard>
</template>

<script setup>
import { ref } from "vue";

const quiz = ref({
  title: "",
  description: "",
  questions: [{ question: "", options: [{ option: "", isCorrect: false }] }],
});

const addQuestion = () => {
  quiz.value.questions.push({
    question: "",
    options: [{ option: "", isCorrect: false }],
  });
};

const addOption = (questionIndex) => {
  quiz.value.questions[questionIndex].options.push({
    option: "",
    isCorrect: false,
  });
};

const createQuiz = () => {};
</script>
