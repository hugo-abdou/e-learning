import { defineStore } from "pinia";
import type { JsonResponse, ResourceResponse, UserForm, UserProperties } from "@/types";
import type { UserParams } from "@/views/pages/users/types";
import axiosIns from "@/plugins/axios";

export const useUserListStore = defineStore("UserListStore", {
    actions: {
        // 👉 Fetch users data
        fetchUsers(params: any) {
            return new Promise<ResourceResponse<UserProperties[]>>((resolve, reject) => {
                axiosIns
                    .get("/users", { params })
                    .then(response => resolve(response.data))
                    .catch(error => reject(error));
            });
        },
        // 👉 fetch single user
        fetchUser(id: number) {
            return new Promise<ResourceResponse<UserProperties>>((resolve, reject) => {
                axiosIns
                    .get(`/users/${id}`)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error));
            });
        },
        // 👉 Add User
        addUser(userData: UserForm) {
            return new Promise<JsonResponse<UserProperties>>((resolve, reject) => {
                axiosIns
                    .post("/users", userData)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error));
            });
        },
        // 👉 Delete User
        deleteUser(id: number) {
            return new Promise((resolve, reject) => {
                axiosIns
                    .delete(`/users/${id}`)
                    .then(response => resolve(response))
                    .catch(error => reject(error));
            });
        }
    }
});
