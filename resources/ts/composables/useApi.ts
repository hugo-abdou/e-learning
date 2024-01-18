import { createFetch } from "@vueuse/core";
import { destr } from "destr";

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || "/api",
  fetchOptions: {
    headers: {
      Accept: "application/json",
    },
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      const access_token = useCookie("access_token").value;

      if (access_token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${access_token}`,
        };
      }

      return { options };
    },
    afterFetch(ctx) {
      const { data, response } = ctx;

      // Parse data if it's JSON

      let parsedData = null;
      try {
        parsedData = destr(data);
      } catch (error) {
        console.error(error);
      }

      return { data: parsedData, response };
    },
  },
});
