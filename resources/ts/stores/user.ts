// @ts-check
import { base642file } from "@/helpers";
import type { UserForm, UserProperties } from "@/types";
import { UserAbility } from "@/utils/casl/AppAbility";
import { useStorage } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";

export interface UserDevice {
  agent: {
    is_desktop: boolean;
    platform: string;
    browser: string;
  };
  ip_address: string;
  is_current_device: boolean;
  last_active: string;
}

const defaultUser: UserProperties = {
  id: 0,
  avatar: "",
  email: "",
  name: "",
  role: ["user"],
  created_at: "",
};
const defaultAbilities: UserAbility[] = [];

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: (useCookie("userData").value || defaultUser) as UserProperties,
    userAbilities: useStorage("userAbilities", defaultAbilities),
    upgradeDialogShow: false,
    upgradeMessage: "",
  }),
  getters: {
    isSupperAdmin: (state) => state.user.role.includes("super_admin"),
    isInstructor: (state) => state.user.role.includes("instructor"),
    isStudent: (state) => state.user.role.includes("student"),
    isAdmin: (state) => state.user.role.includes("admin"),
  },
  actions: {
    async resetPassword(id: number, form: object) {
      try {
        await $api.put(`/user/${id}/password`, form);
      } catch (error) {
        throw error;
      }
    },
    async refreshUser(): Promise<UserProperties> {
      try {
        const user = await $api.get<UserProperties>("/auth");
        this.$patch({ user });
        useCookie("userData").value = user as any;
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // 👉 Update User
    async updateUser(id: number, data: UserForm) {
      try {
        const form = new FormData();
        Object.keys(data)
          .filter((key: any) => key !== "avatar")
          .forEach((key) => {
            const value =
              typeof data[key as keyof UserForm] === "object"
                ? JSON.stringify(data[key as keyof UserForm])
                : data[key as keyof UserForm];

            form.append(key, value as string);
          });
        form.append("_method", "PUT");
        if (data.avatar && data.avatar.includes("data:image")) {
          form.append("avatar", base642file(data.avatar, "avatar"));
        }
        await $api.post(`/user/${id}/update`, form);
      } catch (error) {
        throw error;
      }
    },
    async destroyAccount(id: number, password: string) {
      try {
        await $api.post(`/user/${id}/destroy`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    async otherBrowserSessions(id: number) {
      try {
        const res: { data: UserDevice } = await $api.get(
          `/user/${id}/other-browser-sessions`
        );

        return Promise.resolve(res);
      } catch (error) {
        throw error;
      }
    },
    async logOutOtherBrowserSessions(id: number, password: string) {
      try {
        await $api.post(`/user/${id}/other-browser-sessions`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    forgotPassword(email: string) {
      return $api.post(
        "/forgot-password",
        { email },
        { baseURL: window.location.origin }
      );
    },
    verifyEmail() {
      return $api.post(
        "email/verification-notification",
        {},
        { baseURL: window.location.origin }
      );
    },
    setNewPassword(form: any) {
      return $api.post("/reset-password", form, {
        baseURL: window.location.origin,
      });
    },
  },
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
