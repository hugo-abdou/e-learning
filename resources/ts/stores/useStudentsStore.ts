import { defineStore } from "pinia";
import { Chapter, PaginationResponse, ResourceResponse, StudentAttempts, UsersWithAttempts } from "@/types";
import { FetchOptions } from "ofetch";
export const useStudentsStore = defineStore("useStudentsStore", {
    actions: {
        fetchStudentsAttempts(options?: FetchOptions<"json">) {
            return $api.get<ResourceResponse<UsersWithAttempts[]>>("/students/attempts", options);
        },
        validateAttempt(id: number, body: any, options?: FetchOptions<"json">) {
            return $api.post<ResourceResponse<StudentAttempts>>(`/students/attempts/${id}/validate`, body, options);
        },
        async fetchChapters(course_id: string, params?: any) {
            return await $api.get<PaginationResponse<Chapter>>(`students/chapters`, {
                params: { course_id, ...params },
            });
        },
    },
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useStudentsStore, import.meta.hot));
