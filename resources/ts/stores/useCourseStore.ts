import { CourseStatus } from "@/@core/enums";
import type {
  Chapter,
  ChapterForm,
  Course,
  CourseForm,
  PaginationResponse,
} from "@/types";
import type { AxiosResponse } from "axios";

export const useCourseStore = defineStore({
  id: "CourseStore",
  state: () => ({}),
  getters: {},
  actions: {
    async getCourses(params: any): Promise<PaginationResponse<Course>> {
      return await $api.get("/courses", { params });
    },
    async getCourse(id: number, params: {}) {
      return await $api.get<Course>(`/courses/${id}`, { params });
    },
    async createCourse(data: CourseForm): Promise<Course> {
      return await $api.post("/courses", data);
    },
    async updateCourse(id: number, data: CourseForm) {
      return $api.put(`/courses/${id}`, data);
    },
    async deleteCourse(id: number) {
      return await $api.delete(`/courses/${id}`);
    },
    async publishCourse(
      id: number,
      status: keyof typeof CourseStatus = "Published"
    ) {
      return await $api.patch(`/courses/${id}/publish`, {
        status: status.toLocaleLowerCase(),
      });
    },
    async scheduleCourse(id: number, date: string) {
      return await $api.patch(`/courses/${id}/schedule`, { date });
    },

    ///////////////////////////////////////////////////////////
    async getChapters(course_id: number) {},
    async getChapter(id: number) {},
    async createChapter(
      course_id: number,
      data: ChapterForm
    ): Promise<AxiosResponse<Chapter>> {
      return await $api.post("/chapters", { ...data, course_id });
    },
    async updateChapter(id: number, data: ChapterForm) {
      return await $api.put(`/chapters/${id}`, data);
    },
    async deleteChapter(id: number) {
      return await $api.delete(`/chapters/${id}`);
    },
  },
});
