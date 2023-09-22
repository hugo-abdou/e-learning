// @ts-check
import { base642file } from "@/helpers";
import axios from "@/plugins/axios";
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
export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        id: null,
        avatar: "",
        email: null,
        name: null
    }),
    actions: {
        async logout() {
            await axios.post("/logout", {}, { baseURL: window.location.origin });
            this.$reset();
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
        async resetPassword(form: object) {
            try {
                await axios.put("/user/password", form, { baseURL: window.location.origin });
            } catch (error) {
                throw error;
            }
        },
        async getUser() {
            if (this.id) return;
            const { data } = await axios.get("/user");
            this.$patch(data);
        },
        async refreshUser() {
            const { data } = await axios.get("/user");
            this.$patch(data);
        },
        async updateUser(data: typeof this.$state) {
            try {
                const form = new FormData();
                Object.keys(data)
                    .filter((key: any) => key !== "avatar")
                    .forEach((key: any) => {
                        // @ts-ignore
                        form.append(key, data[key] || "");
                    });
                form.append("_method", "PUT");
                if (data.avatar.includes("data:image")) {
                    form.append("avatar", base642file(data.avatar, "avatar"));
                }
                await axios.post("user/profile-information", form, { baseURL: window.location.origin });
                await this.refreshUser();
            } catch (error) {
                throw error;
            }
        },
        async destroyAccount(password: string) {
            try {
                await axios.post(
                    "user",
                    {
                        _method: "DELETE",
                        password: password
                    },
                    { baseURL: window.location.origin }
                );
                this.refreshUser();
            } catch (error) {
                throw error;
            }
        },
        async otherBrowserSessions() {
            try {
                const res: { data: UserDevice } = await axios.get("/user/other-browser-sessions");
                return Promise.resolve(res.data);
            } catch (error) {
                throw error;
            }
        },
        async logOutOtherBrowserSessions(password: string) {
            try {
                await axios.post("/user/other-browser-sessions", {
                    _method: "DELETE",
                    password
                });
            } catch (error) {
                throw error;
            }
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
