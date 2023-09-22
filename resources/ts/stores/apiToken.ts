import axiosIns from "@/plugins/axios";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useApiTokens = defineStore({
    id: "apiTokens",
    state: () => ({
        list: [] as { name: string; id: number; created_at: string }[]
    }),
    actions: {
        async createToken(form: { name: string }): Promise<{ token: string }> {
            try {
                const res = await axiosIns.post("/user/api-tokens", form);
                return Promise.resolve(res.data);
            } catch (error) {
                throw error;
            }
        },
        async getTokens() {
            try {
                const res = await axiosIns.get("/user/api-tokens");
                this.list = res.data.tokens;
            } catch (error) {
                throw error;
            }
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useApiTokens, import.meta.hot));
}
