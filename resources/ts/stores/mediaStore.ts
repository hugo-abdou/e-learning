import { defineStore, acceptHMRUpdate } from "pinia";
import { Media } from "@/types";
import axiosIns from "@/plugins/axios";
import { AxiosResponse } from "axios";

export const useMediaStore = defineStore({
    id: "media",
    state: () => ({}),
    actions: {
        get(params: any): Promise<Media[]> {
            return new Promise((resolve, reject) => {
                axiosIns
                    .get(`/media`, { params })
                    .then((res: AxiosResponse<Media[]>) => {
                        resolve(res.data);
                    })
                    .catch(err => reject(err));
            });
        },
        getById: async (id: number): Promise<Media> => {
            return (await axiosIns.get(`/media/${id}`)).data;
        },
        retry: async (id: number): Promise<Media> => {
            return (await axiosIns.post(`/media/${id}/retry`)).data;
        },
        delete(_id: string | number) {
            return new Promise((resolve, reject) => {
                axiosIns
                    .delete(`/media/${_id}`)
                    .then((res: AxiosResponse<Media>) => {
                        resolve(res.data);
                    })
                    .catch(err => reject(err));
            });
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot));
}
