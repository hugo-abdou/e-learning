import { QuizStatus } from "@/@core/enums";
import {
  PaginationResponse,
  QuestionAnwser,
  Quiz,
  QuizForm,
  ResourceResponse,
} from "@/types";
import { FetchOptions } from "ofetch";

export const useQuizzesStore = defineStore({
  id: "QuizzesStore",
  state: () => ({}),
  getters: {},
  actions: {
    async getQuizzes(
      options?: FetchOptions<"json"> | undefined
    ): Promise<PaginationResponse<Quiz>> {
      return await $api.get("/quizzes", options);
    },
    async getQuiz(id: number, options?: FetchOptions<"json"> | undefined) {
      return await $api.get<Quiz>(`/quizzes/${id}`, options);
    },
    async createQuiz(
      data: QuizForm,
      options?: FetchOptions<"json"> | undefined
    ): Promise<ResourceResponse<Quiz>> {
      return await $api.post<ResourceResponse<Quiz>>("/quizzes", data, options);
    },
    async updateQuiz(
      id: number,
      data: QuizForm,
      options?: FetchOptions<"json"> | undefined
    ) {
      return $api.put(`/quizzes/${id}`, data, options);
    },
    async deleteQuiz(id: number, options?: FetchOptions<"json"> | undefined) {
      return await $api.delete(`/quizzes/${id}`, options);
    },
    async publishQuiz(
      id: number,
      status: keyof typeof QuizStatus = "Published",
      options?: FetchOptions<"json"> | undefined
    ) {
      return await $api.patch(
        `/quizzes/${id}/publish`,
        { status: status.toLocaleLowerCase() },
        options
      );
    },
    async scheduleQuiz(
      id: number,
      date: string,
      options?: FetchOptions<"json"> | undefined
    ) {
      return await $api.patch(`/quizzes/${id}/schedule`, { date }, options);
    },
    async anwserQuestion(id: number, response: QuestionAnwser) {
      return await $api.post(`/questions/${id}/anwser`, {
        answers: response.answers,
        custom_answer: response.custom_answer?.blocks.length
          ? JSON.stringify(response.custom_answer)
          : null,
      });
    },
  },
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useQuizzesStore, import.meta.hot));
