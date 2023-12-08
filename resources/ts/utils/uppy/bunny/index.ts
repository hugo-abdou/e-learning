import axios, { AxiosInstance } from "axios";

import appClient from "@/utils/axios";

export const VIDEO_STATUS = {
  0: "Queued",
  1: "Processing",
  2: "Encoding",
  3: "Finished",
  4: "Resolution finished",
  5: "Failed",
  6: "PresignedUploadStarted",
  7: "PresignedUploadFinished",
  8: "PresignedUploadFailed",
  9: "CaptionsGenerated",
  10: "TitleOrDescriptionGenerated",
};

export default class BunnyStreem {
  static VERSION = "0.0.1";
  // @ts-ignore
  static BASE_URL = import.meta.env.VITE_BUNNY_BASE_URL;
  // @ts-ignore
  static BUNNY_KEY = import.meta.env.VITE_BUNNY_KEY;
  static DEFAULT_HEADERS = {};
  private Clinet: AxiosInstance;
  private Events: { [key: string]: Function[] } = {};
  private feilds: { [key: string]: any } = {
    title: "",
  };
  constructor() {
    const $this = this;

    this.Clinet = axios.create({
      baseURL: BunnyStreem.BASE_URL,
      withCredentials: false,
      headers: { accept: "application/json", accessKey: BunnyStreem.BUNNY_KEY },
      onUploadProgress: (progressEvent) => {
        if (!$this.Events["uploadProgress"]) return;
        $this.Events["uploadProgress"].forEach((cb) => cb(progressEvent));
      },
    });
  }
  onProgress(event: string, cb: Function) {
    if (!this.Events[event]) this.Events[event] = [];
    this.Events[event].push(cb);
  }
  setFeild(key: string, value: any) {
    this.feilds[key] = value;
  }

  private presignedUpload(data: { library: string; name: string }) {
    return this.Clinet.post(
      `library/${data.library}/videos`,
      { title: this.feilds.title || data.name },
      { headers: { "content-type": "application/*+json" } }
    );
  }
  private upload(data: { library: string; videoId: string; file: File }) {
    return this.Clinet.put(
      `library/${data.library}/videos/${data.videoId}`,
      data.file,
      {
        headers: { "content-type": "application/*+json" },
      }
    );
  }
  private storeMedia(data: { videoId: string; file: File }) {
    return appClient.post("/media/store", {
      name: this.feilds.title || data.file.name,
      uuid: data.videoId,
      status: 1,
      mime_type: data.file.type,
      size: data.file.size,
      size_total: data.file.size,
      disk: "bunnycdn",
      path: "/assets/video_placeholder.gif",
      conversions: [
        {
          engine: "ImageResize",
          path: "/assets/video_placeholder.gif",
          disk: "remote",
          name: "thumb",
        },
      ],
    });
  }
  store(library: string, file: File) {
    const $this = this;
    return new Promise(async (resolve, reject) => {
      try {
        const { data: presignedData } = await $this.presignedUpload({
          library,
          name: file.name,
        });
        const { data: uploadData } = await $this.upload({
          library,
          videoId: presignedData.guid,
          file,
        });
        const { data: mediaData } = await $this.storeMedia({
          file,
          videoId: `${library}-${presignedData.guid}`,
        });
        console.log(uploadData);
        return resolve(mediaData);
      } catch (error) {
        return reject(error);
      }
    });
  }
  checkVideo(library: string, videoId: string) {
    return this.Clinet.get(`library/${library}/videos/${videoId}`);
  }
}
