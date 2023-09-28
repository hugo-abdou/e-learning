import axios from "axios";
import router from "@/router";
import { useUserStore } from "@/stores/user";

const axiosIns = axios.create({
    baseURL: "/api",
    headers: {
        Accept: "application/json",
        common: {
            "X-Requested-With": "XMLHttpRequest"
        }
    },
    withCredentials: true
});

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Handle error
        if (error.response.status === 302) {
            router.push(error.response.data.url);
        } else if (error.response.status === 401) {
            useUserStore().logout();
            router.push("/login");
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosIns;
