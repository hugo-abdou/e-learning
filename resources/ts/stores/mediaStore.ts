import { defineStore, acceptHMRUpdate } from "pinia";
import { Media, ResourceResponse } from "@/types";
import axiosIns from "@/plugins/axios";
import { AxiosResponse } from "axios";

interface MediaDialog {
    open: boolean;
    title: string | null;
    type: "play-video" | null;
    data: any;
}

export const useMediaStore = defineStore({
    id: "media",
    state: () => ({
        dialog: {
            open: false,
            title: null,
            data: {},
            type: null
        } as MediaDialog
    }),
    actions: {
        get(params: any): Promise<ResourceResponse<Media[]>> {
            return new Promise((resolve, reject) => {
                axiosIns
                    .get(`/media`, { params })
                    .then(res => resolve(res.data))
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
        },
        openPlayer(data?: any) {
            this.dialog.open = true;
            this.dialog.type = "play-video";
            this.dialog.data = data;
        },
        closePlayer() {
            this.dialog.open = false;
            this.dialog.type = null;
            this.dialog.data = {};
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot));
}
