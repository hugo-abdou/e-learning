// @ts-check
import { base642file } from "@/helpers";
import { acceptHMRUpdate, defineStore } from "pinia";
import { ResourceResponse, User, UserDevice, UserForm } from "@/types";

const defaultUser: User = {
  id: 0,
  avatar: "",
  email: "",
  name: "",
  verified: false,
  roles: [],
  permissions: [],
  avaliableRoles: [],
  status: 0,
};

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => ({
    user: defaultUser,
  }),
  getters: {
    isStudent: (state) => state.user?.roles.includes("student"),
    isAdmin: (state) => state.user?.roles.includes("admin"),
    isSupperAdmin: (state) => state.user?.roles.includes("supper-admin"),
  },
  actions: {
    async updateUserStatus(status: User["status"]) {
      try {
        const res = await $api.put<ResourceResponse<User>>(`/auth/status`, { status });
        this.$patch({ user: res.data });
        useEncryptedCookie("userData").value = res.data;
        return Promise.resolve(res.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async resetPassword(id: number, form: object) {
      try {
        await $api.put(`/users/${id}/password`, form);
      } catch (error) {
        throw error;
      }
    },
    async refreshUser(): Promise<User> {
      try {
        const user = await $api.get<User>("/auth");
        this.$patch({ user });
        useEncryptedCookie("userData").value = user;
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async updateUser(id: number, data: UserForm) {
      try {
        const form = new FormData();
        Object.keys(data)
          .filter((key: any) => key !== "avatar")
          .forEach((key) => {
            const value = typeof data[key as keyof UserForm] === "object" ? JSON.stringify(data[key as keyof UserForm]) : data[key as keyof UserForm];

            form.append(key, value as string);
          });
        form.append("_method", "PUT");
        if (data.avatar && data.avatar.includes("data:image")) {
          form.append("avatar", base642file(data.avatar, "avatar"));
        }
        await $api.post(`/users/${id}/update`, form);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async destroyAccount(id: number, password: string) {
      try {
        await $api.post(`/users/${id}/destroy`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    async otherBrowserSessions(id: number) {
      try {
        const res: { data: UserDevice } = await $api.get(`/users/${id}/other-browser-sessions`);

        return Promise.resolve(res);
      } catch (error) {
        throw error;
      }
    },
    async logOutOtherBrowserSessions(id: number, password: string) {
      try {
        await $api.post(`/users/${id}/other-browser-sessions`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    forgotPassword(email: string) {
      return $api.post("/forgot-password", { email }, { baseURL: window.location.origin });
    },
    verifyEmail() {
      return $api.post("email/verification-notification", {}, { baseURL: window.location.origin });
    },
    setNewPassword(form: any) {
      return $api.post("/reset-password", form, {
        baseURL: window.location.origin,
      });
    },
  },
});
if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
