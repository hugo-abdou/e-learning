import Uppy, { BasePlugin, PluginOptions } from "@uppy/core";
import Resumable from "resumablejs";
import { ResumableFile } from "./ResumableTypes";
import BunnyStreem from "./bunny";

export default class ResumableUppyPlugin extends BasePlugin {
  uppy: Uppy;
  id: string;
  type: string;
  resumable: any;
  token: string;

  constructor(uppy: Uppy, opts?: PluginOptions | undefined) {
    super(uppy, opts);
    this.uppy = uppy;
    this.id = "ResumableUppyPlugin";
    this.type = "uploader";

    this.token = useCookie("access_token").value as string;

    // Bind your methods
    this.upload = this.upload.bind(this);
    this.initResumable = this.initResumable.bind(this);
    this.initResumable();

    this.registerEvents = this.registerEvents.bind(this);
    this.registerEvents();
  }

  initResumable() {
    // Initialize Resumable.js with your configuration
    this.resumable = new Resumable({
      target: "/api/media/upload",
      headers: {
        Accept: "application/json",
        common: { "X-Requested-With": "XMLHttpRequest" },
        Authorization: `Bearer ${this.token}`,
      },
      chunkSize: 1024 * 1024,
      simultaneousUploads: 1,
      maxChunkRetries: 3,
    });
  }

  async upload(fileIDs: string[]) {
    const files = fileIDs.map((id: string) => {
      const file = this.uppy.getFile(id).data;
      // @ts-ignore
      file.uuid = id;
      return file;
    });

    for (let i = 0; i < fileIDs.length; i++) {
      const file = this.uppy.getFile(fileIDs[i]);

      // if (file.type?.includes("video/")) {
      //   const bunnyStreem = new BunnyStreem();
      //   try {
      //     this.uppy.emit("upload-started", file);
      //     bunnyStreem.onProgress("uploadProgress", (e: { loaded: number }) => {
      //       this.uppy.emit("upload-progress", file, {
      //         uploader: this,
      //         bytesUploaded: e.loaded,
      //         bytesTotal: file.size,
      //       });
      //     });
      //     bunnyStreem.setFeild("title", file.meta.name);
      //     const res = await bunnyStreem.store(
      //       BunnyStreem.LIBRARY_ID,
      //       file.data as File
      //     );
      //     const uploadResp = { status: 200, body: res };
      //     this.uppy.emit("upload-success", file, uploadResp);
      //   } catch (error) {
      //     this.uppy.emit("upload-error", file, error);
      //   }
      //   return;
      // }
      this.resumable.addFile(file.data);
    }
  }

  async uploadVideo(file: File) {
    if (file.type?.includes("video/")) {
      const bunnyStreem = new BunnyStreem();
      try {
        this.uppy.emit("upload-started", file);
        bunnyStreem.onProgress("uploadProgress", (e: { loaded: number }) => {
          this.uppy.emit("upload-progress", file, {
            uploader: this,
            bytesUploaded: e.loaded,
            bytesTotal: file.size,
          });
        });
        bunnyStreem.setFeild("title", file.meta.name);
        const res = await bunnyStreem.store(
          BunnyStreem.LIBRARY_ID,
          file.data as File
        );
        const uploadResp = { status: 200, body: res };
        this.uppy.emit("upload-success", file, uploadResp);
      } catch (error) {
        this.uppy.emit("upload-error", file, error);
      }
      return;
    }
  }

  registerEvents() {
    const $this = this;
    this.uppy.on("upload-retry", (uuid) => {
      const file = this.resumable.files.find(
        ({ file }: ResumableFile) => file.uuid === uuid
      );
      file.retry();
    });
    this.uppy.on("retry-all", () => {
      this.resumable.files.map((file: ResumableFile) => file.retry());
    });
    this.resumable.on("fileAdded", (file: ResumableFile) => {
      this.uppy.emit("upload-started", this.uppy.getFile(file.file.uuid));
      this.resumable.upload();
    });
    this.resumable.on("fileProgress", (file: ResumableFile) => {
      const uppyFile = this.uppy.getFile(file.file.uuid);
      this.uppy.emit("upload-progress", uppyFile, {
        uploader: this,
        bytesUploaded: file.progress(false) * uppyFile.size,
        bytesTotal: uppyFile.size,
      });
    });
    this.resumable.on("fileSuccess", (file: ResumableFile, message: string) => {
      if (message !== "Ok") {
        const uploadResp = { status: 200, body: JSON.parse(message) };
        this.uppy.emit(
          "upload-success",
          this.uppy.getFile(file.file.uuid),
          uploadResp
        );
        return Promise.resolve();
      }
      // this.resumable.uploadNextChunk();
    });
    this.resumable.on(
      "fileError",
      async (file: ResumableFile, _error: string) => {
        let error = _error;
        try {
          error = JSON.parse(_error);
        } catch (error) {}
        // @ts-ignore
        if (error?.message === "Unauthenticated.") {
          const { access_token } = await $api.refreshAccessToken();
          $this.token = access_token;
        }
        // @ts-ignore
        if (error?.error === "invalid_request") {
          useCookie("access_token").value = null;
          useCookie("refresh_token").value = null;
          await $api.refreshAccessToken();
        }
        this.uppy.emit(
          "upload-error",
          this.uppy.getFile(file.file.uuid),
          error
        );
      }
    );
  }

  install() {
    this.uppy.addUploader(this.upload);
  }

  uninstall() {
    this.resumable = null;
    this.uppy.removeUploader(this.upload);
  }
}
