import { router } from "@/plugins/1.router";
import { useUserStore } from "@/stores/user";
import axios from "axios";

const axiosIns = axios.create({
    baseURL: "/api",
    headers: {
        Accept: "application/json",

        common: {
            "X-Requested-With": "XMLHttpRequest"
        }
        // "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')?.getAttribute("content"),
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
