import { Options } from "@/@core/types";
import axiosIns from "@/plugins/axios";
import { Chapter, ChapterForm, Course, CourseForm, PaginationResponse } from "@/types";
import { AxiosResponse } from "axios";

export const useCourseStore = defineStore({
    id: "CourseStore",
    state: () => ({}),
    getters: {},
    actions: {
        async getCourses(params: any): Promise<PaginationResponse<Course>> {
            return (await axiosIns.get("/courses", { params })).data;
        },
        async getCourse(id: number) {},
        async createCourse(data: CourseForm): Promise<Course> {
            return (await axiosIns.post("/courses", data)).data;
        },
        async updateCourse(id: number, data: CourseForm) {},
        async deleteCourse(id: number) {
            return await axiosIns.delete(`/courses/${id}`);
        },
        async publishCourse(id: number) {
            return await axiosIns.patch(`/courses/${id}/publish`);
        },
        async scheduleCourse(id: number, date: string) {
            return await axiosIns.patch(`/courses/${id}/schedule`, { date });
        },
        ///////////////////////////////////////////////////////////
        async getChapters(course_id: number) {},
        async getChapter(id: number) {},
        async createChapter(course_id: number, data: ChapterForm): Promise<AxiosResponse<Chapter>> {
            return await axiosIns.post("/chapters", { course_id, ...data });
        },
        async updateChapter(id: number, data: ChapterForm) {},
        async deleteChapter(id: number) {}
    }
});
