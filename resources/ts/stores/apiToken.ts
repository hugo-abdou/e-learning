import { acceptHMRUpdate, defineStore } from "pinia";

interface ApiToken {
  id: number;
  name: string;
  // token: string;
  created_at: string;
}

export const useApiTokens = defineStore({
  id: "apiTokens",
  state: () => ({
    list: [] as ApiToken[],
  }),
  actions: {
    async createToken(form: { name: string }): Promise<{ token: string }> {
      try {
        const res = await $api.post<{ token: string }>(
          "/user/api-tokens",
          form
        );

        return Promise.resolve(res);
      } catch (error) {
        throw error;
      }
    },
    async getTokens() {
      try {
        const res = await $api.get<{ tokens: ApiToken[] }>("/user/api-tokens");
        this.list = res.tokens;
      } catch (error) {
        throw error;
      }
    },
  },
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useApiTokens, import.meta.hot));
