import type { Chapter, ChapterForm, Course, CourseForm, PaginationResponse } from '@/types';
import axiosIns from '@/utils/axios';
import type { AxiosResponse } from 'axios';

export const useCourseStore = defineStore({
  id: 'CourseStore',
  state: () => ({}),
  getters: {},
  actions: {
    async getCourses(params: any): Promise<PaginationResponse<Course>> {
      return (await axiosIns.get('/courses', { params })).data
    },
    async getCourse(id: number, params: {}) {
      return (await axiosIns.get(`/courses/${id}`, { params })).data
    },
    async createCourse(data: CourseForm): Promise<Course> {
      return (await axiosIns.post('/courses', data)).data
    },
    async updateCourse(id: number, data: CourseForm) {
      return axiosIns.put(`/courses/${id}`, data)
    },
    async deleteCourse(id: number) {
      return await axiosIns.delete(`/courses/${id}`)
    },
    async publishCourse(id: number, status: string = 'published') {
      return await axiosIns.patch(`/courses/${id}/publish`, { status })
    },
    async scheduleCourse(id: number, date: string) {
      return await axiosIns.patch(`/courses/${id}/schedule`, { date })
    },

    ///////////////////////////////////////////////////////////
    async getChapters(course_id: number) {},
    async getChapter(id: number) {},
    async createChapter(course_id: number, data: ChapterForm): Promise<AxiosResponse<Chapter>> {
      return await axiosIns.post('/chapters', { ...data, course_id })
    },
    async updateChapter(id: number, data: ChapterForm) {
      return await axiosIns.put(`/chapters/${id}`, data)
    },
    async deleteChapter(id: number) {
      return await axiosIns.delete(`/chapters/${id}`)
    },
  },
})
