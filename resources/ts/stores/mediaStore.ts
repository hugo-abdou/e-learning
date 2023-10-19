import { defineStore, acceptHMRUpdate } from "pinia";
import { Media, ResourceResponse } from "@/types";
import axiosIns from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { MediaTypes } from "@core/enums";

interface MediaDialog {
    open: boolean;
    title: string | null;
    type: keyof typeof MediaTypes | undefined;
    data: any;
}

export const useMediaStore = defineStore({
    id: "media",
    state: () => ({
        dialog: {
            open: false,
            title: null,
            data: {},
            type: undefined
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
        openMediaDialog(data?: any, type?: keyof typeof MediaTypes | undefined) {
            this.dialog.open = true;
            this.dialog.type = type;
            this.dialog.data = data;
        },
        closeMediaDialog() {
            this.dialog.open = false;
            this.dialog.type = undefined;
            this.dialog.data = {};
        }
    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot));
}
