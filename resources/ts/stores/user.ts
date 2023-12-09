// @ts-check
import { base642file } from "@/helpers";
import type { UserForm, UserProperties } from "@/types";
import axiosIns from "@/utils/axios";
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

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: useStorage("user", defaultUser),
    upgradeDialogShow: false,
    upgradeMessage: "",
  }),
  getters: {
    isSupperAdmin: (state) => state.user.role.includes("super_admin"),
    isAdmin: (state) => state.user.role.includes("admin"),
  },
  actions: {
    async logout() {
      await axiosIns.post("/logout", {}, { baseURL: window.location.origin });
      this.$patch({ user: defaultUser });
      Promise.resolve();
    },
    async login(email: string, password: string) {
      try {
        await axiosIns.post(
          "/login",
          { email, password },
          { baseURL: window.location.origin }
        );
        await this.refreshUser();
      } catch (e: any) {
        console.log(e);
        throw e;
      }
    },
    async register(form: object) {
      try {
        await axiosIns.post("/register", form, {
          baseURL: window.location.origin,
        });
      } catch (error) {
        throw error;
      }
    },
    async resetPassword(id: number, form: object) {
      try {
        await axiosIns.put(`/user/${id}/password`, form);
      } catch (error) {
        throw error;
      }
    },
    async getUser(): Promise<UserProperties> {
      if (this.user.id) return Promise.resolve(this.$state.user);
      const auth = await this.refreshUser();

      return Promise.resolve(auth);
    },
    async refreshUser(): Promise<UserProperties> {
      // await axiosIns.get("/sanctum/csrf-cookie", { baseURL: window.location.origin });
      const { data } = await axiosIns.get("/auth");
      this.$patch({ user: data });
      return Promise.resolve(data);
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
        if (data.avatar && data.avatar.includes("data:image"))
          form.append("avatar", base642file(data.avatar, "avatar"));

        await axiosIns.post(`/user/${id}/update`, form);
      } catch (error) {
        throw error;
      }
    },
    async destroyAccount(id: number, password: string) {
      try {
        await axiosIns.post(`/user/${id}/destroy`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    async otherBrowserSessions(id: number) {
      try {
        const res: { data: UserDevice } = await axiosIns.get(
          `/user/${id}/other-browser-sessions`
        );

        return Promise.resolve(res.data);
      } catch (error) {
        throw error;
      }
    },
    async logOutOtherBrowserSessions(id: number, password: string) {
      try {
        await axiosIns.post(`/user/${id}/other-browser-sessions`, {
          _method: "DELETE",
          password,
        });
      } catch (error) {
        throw error;
      }
    },
    forgotPassword(email: string) {
      return axiosIns.post(
        "/forgot-password",
        { email },
        { baseURL: window.location.origin }
      );
    },
    verifyEmail() {
      return axiosIns.post(
        "email/verification-notification",
        {},
        { baseURL: window.location.origin }
      );
    },
    setNewPassword(form: any) {
      console.log(form);

      return axiosIns.post("/reset-password", form, {
        baseURL: window.location.origin,
      });
    },
  },
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
