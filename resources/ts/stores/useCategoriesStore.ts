import { Category, JsonResponse, ResourceResponse } from "@/types";
import { defineStore } from "pinia";
import { FetchOptions } from "ofetch";

export const useCategoriesStore = defineStore("useCategoriesStore", {
    actions: {
        getCategories(options?: FetchOptions<"json"> | undefined) {
            return $api.get<ResourceResponse<Category[]>>("/api/categories", options);
        },
        getCategoriesWithPath(options?: FetchOptions<"json"> | undefined) {
            return $api.get<JsonResponse<any>>("/api/categories-paths", options);
        },
        addCategory(data: { name: string; type: string; parent_id?: number }) {
            return $api.post<JsonResponse<Category>>("/api/categories", data);
        },
        updateCategory(id: number, data: { name: string; type: string; parent_id?: number }) {
            return $api.put<JsonResponse<Category>>(`/api/categories/${id}`, data);
        },
        deleteCategory(id: number) {
            return $api.delete(`/api/categories/${id}`);
        },
        updateCategoriesOrder(data: any) {
            return $api.put<JsonResponse<Category[]>>("/api/categories/order", {
                parents: data,
            });
        },
    },
});
