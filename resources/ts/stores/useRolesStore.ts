import { JsonResponse, Permission, ResourceResponse, Role } from "@/types";
import { defineStore } from "pinia";

export const useRolesStore = defineStore("useRolesStore", {
    actions: {
        // 👉 Fetch Roles data
        fetchRoles(params: {} = { page: 1, limit: 10 }) {
            return new Promise<ResourceResponse<Role[]>>((resolve, reject) => {
                $api.get<ResourceResponse<Role[]>>("/roles", { params })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 Fetch Roles data
        fetchPermissions(params: {} = { page: 1, limit: 10 }) {
            return new Promise<ResourceResponse<Permission[]>>((resolve, reject) => {
                $api.get<ResourceResponse<Permission[]>>("/permissions", { params })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 create new Roles
        addRole(data: { name: string; permissions: string[] }) {
            return new Promise<JsonResponse<Role>>((resolve, reject) => {
                $api.post<JsonResponse<Role>>("/roles", data)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 update Roles data
        updateRole(id: number, data: { name: string; permissions: string[] }) {
            return new Promise<JsonResponse<Role>>((resolve, reject) => {
                $api.put<JsonResponse<Role>>(`/roles/${id}`, data)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },
        // 👉 delete Roles
        deleteRole(id: number) {
            return $api.delete(`/roles/${id}`);
        },
    },
});
