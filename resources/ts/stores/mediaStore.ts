import type { Media, ResourceResponse } from "@/types";
import type { MediaTypes } from "@core/enums";
import { acceptHMRUpdate, defineStore } from "pinia";

interface MediaDialog {
  open: boolean;
  title: string | null;
  type: keyof typeof MediaTypes | undefined;
  data: Media | undefined;
}

export const useMediaStore = defineStore({
  id: "media",
  state: () => ({
    dialog: {
      open: false,
      title: null,
      data: {},
      type: undefined,
    } as MediaDialog,
  }),
  actions: {
    get(params: any): Promise<ResourceResponse<Media[]>> {
      return new Promise((resolve, reject) => {
        $api
          .get<ResourceResponse<Media[]>>("/media", { query: params })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
    getById: async (id: number): Promise<Media> => {
      return await $api.get(`/media/${id}`);
    },
    retry: async (id: number): Promise<Media> => {
      return await $api.post<Media>(`/media/${id}/retry`, {});
    },
    delete(_id: string | number): Promise<Media> {
      return new Promise((resolve, reject) => {
        return $api
          .delete<Media>(`/media/${_id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    openMediaDialog(data: Media, type?: keyof typeof MediaTypes | undefined) {
      this.dialog.open = true;
      this.dialog.type = type;
      this.dialog.data = data;
    },
    closeMediaDialog() {
      this.dialog.open = false;
      this.dialog.type = undefined;
      this.dialog.data = undefined;
    },
  },
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot));
