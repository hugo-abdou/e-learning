import type { JsonResponse, Permission, ResourceResponse, Role } from "@/types";
import { defineStore } from "pinia";

import axiosIns from "@axios";

export const useRolesStore = defineStore("useRolesStore", {
  actions: {
    // 👉 Fetch Roles data
    fetchRoles(params: {} = { page: 1, limit: 10 }) {
      return new Promise<ResourceResponse<Role[]>>((resolve, reject) => {
        axiosIns
          .get("/admin/roles", { params })
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
      });
    },
    // 👉 Fetch Roles data
    fetchPermissions(params: {} = { page: 1, limit: 10 }) {
      return new Promise<ResourceResponse<Permission[]>>((resolve, reject) => {
        axiosIns
          .get("/admin/permissions", { params })
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
      });
    },
    // 👉 create new Roles
    addRole(data: { name: string; permissions: string[] }) {
      return new Promise<JsonResponse<Role>>((resolve, reject) => {
        axiosIns
          .post("/admin/roles", data)
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
      });
    },
    // 👉 update Roles data
    updateRole(id: number, data: { name: string; permissions: string[] }) {
      return new Promise<JsonResponse<Role>>((resolve, reject) => {
        axiosIns
          .put(`/admin/roles/${id}`, data)
          .then((response) => resolve(response.data))
          .catch((error) => reject(error));
      });
    },
  },
});
