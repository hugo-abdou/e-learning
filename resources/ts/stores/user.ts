// @ts-check
import { base642file } from "@/helpers";
import axios from "@/plugins/axios";
import { UserForm, UserProperties } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
export type UserDevice = {
    agent: {
        is_desktop: boolean;
        platform: string;
        browser: string;
    };
    ip_address: string;
    is_current_device: boolean;
    last_active: string;
};
const defaultUser: UserProperties = {
    id: 0,
    avatar: "",
    email: "",
    name: "",
    created_at: ""
};
// @ts-ignore
export const useUserStore = defineStore({
    id: "user",
    state: () => ({ user: useStorage("user", defaultUser), upgradeDialogShow: false, upgradeMessage: "" }),
    getters: {},
    actions: {
        async logout() {
            await axios.post("/logout", {}, { baseURL: window.location.origin });
            this.$patch({ user: defaultUser });
            Promise.resolve();
        },
        async login(email: string, password: string) {
            try {
                await axios.post("/login", { email: email, password: password }, { baseURL: window.location.origin });
                await this.refreshUser();
            } catch (e: any) {
                throw e;
            }
        },
        async register(form: object) {
            try {
                await axios.post("/register", form, { baseURL: window.location.origin });
            } catch (error) {
                throw error;
            }
        },
        async resetPassword(id: number, form: object) {
            try {
                await axios.put(`/user/${id}/password`, form);
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
            const { data } = await axios.get("/auth");
            this.$patch({ user: data });
            return Promise.resolve(data);
        },
        // 👉 Update User
        async updateUser(id: number, data: UserForm) {
            try {
                const form = new FormData();
                Object.keys(data)
                    .filter((key: any) => key !== "avatar")
                    .forEach(key => {
                        // @ts-ignore
                        const value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
                        form.append(key, value);
                    });
                form.append("_method", "PUT");
                if (data.avatar && data.avatar.includes("data:image")) {
                    form.append("avatar", base642file(data.avatar, "avatar"));
                }
                await axios.post(`/user/${id}/update`, form);
            } catch (error) {
                throw error;
            }
        },
        async destroyAccount(id: number, password: string) {
            try {
                await axios.post(`/user/${id}/destroy`, {
                    _method: "DELETE",
                    password: password
                });
            } catch (error) {
                throw error;
            }
        },
        async otherBrowserSessions(id: number) {
            try {
                const res: { data: UserDevice } = await axios.get(`/user/${id}/other-browser-sessions`);
                return Promise.resolve(res.data);
            } catch (error) {
                throw error;
            }
        },
        async logOutOtherBrowserSessions(id: number, password: string) {
            try {
                await axios.post(`/user/${id}/other-browser-sessions`, {
                    _method: "DELETE",
                    password
                });
            } catch (error) {
                throw error;
            }
        },
        forgotPassword(email: string) {
            return axios.post("/forgot-password", { email: email }, { baseURL: window.location.origin });
        },
        verifyEmail() {
            return axios.post("email/verification-notification", {}, { baseURL: window.location.origin });
        },
        setNewPassword(form: any) {
            console.log(form);
            return axios.post("/reset-password", form, { baseURL: window.location.origin });
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
