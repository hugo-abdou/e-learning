import Uppy, { BasePlugin, PluginOptions } from "@uppy/core";
import Resumable from "resumablejs";
import { ResumableFile } from "./ResumableTypes";
import BunnyStreem from "./bunny";

export default class ResumableUppyPlugin extends BasePlugin {
  uppy: Uppy;
  id: string;
  type: string;
  resumable: any;

  constructor(uppy: Uppy, opts?: PluginOptions | undefined) {
    super(uppy, opts);
    this.uppy = uppy;
    this.id = "ResumableUppyPlugin";
    this.type = "uploader";

    // Initialize Resumable.js with your configuration
    this.resumable = new Resumable({
      target: "/api/media/upload",
      headers: {
        Accept: "application/json",
        common: { "X-Requested-With": "XMLHttpRequest" },
        "X-CSRF-TOKEN": document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content"),
      },
      withCredentials: true,
      chunkSize: 1 * 1024 * 1024,
      simultaneousUploads: 1,
      maxChunkRetries: 3,
    });

    // Bind your methods
    this.upload = this.upload.bind(this);
    this.registerEvents = this.registerEvents.bind(this);

    this.registerEvents();
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
      if (file.type?.includes("video/")) {
        const bunnyStreem = new BunnyStreem();
        try {
          this.uppy.emit("upload-started", file);
          const library = "179002";
          bunnyStreem.onProgress("uploadProgress", (e: { loaded: number }) => {
            this.uppy.emit("upload-progress", file, {
              uploader: this,
              bytesUploaded: e.loaded,
              bytesTotal: file.size,
            });
          });
          bunnyStreem.setFeild("title", file.meta.name);
          const res = await bunnyStreem.store(library, file.data as File);
          const uploadResp = { status: 200, body: res };
          this.uppy.emit("upload-success", file, uploadResp);
        } catch (error) {
          this.uppy.emit("upload-error", file, error);
        }
        // await this.uploadVideo(file as File);
        return;
      }
      this.resumable.addFile(file.data);
    }
  }

  uploadVideo(file: File) {
    const bunnyStreem = new BunnyStreem();
    return new Promise<void>(async (resolve, reject) => {
      this.uppy.emit("upload-started", file);
      try {
        const library = "179002";
        bunnyStreem.onProgress("uploadProgress", (e: { loaded: number }) => {
          this.uppy.emit("upload-progress", file, {
            uploader: this,
            bytesUploaded: e.loaded,
            bytesTotal: file.size,
          });
        });
        bunnyStreem.setFeild("title", file.name);
        const res = await bunnyStreem.store(library, file as File);
        const uploadResp = { status: 200, body: res };
        this.uppy.emit("upload-success", file, uploadResp);
        return resolve();
      } catch (error) {
        this.uppy.emit("upload-error", file, error);
        return reject(error);
      }
    });
  }

  registerEvents() {
    this.resumable.on("fileAdded", (file: ResumableFile) => {
      this.uppy.emit("upload-started", this.uppy.getFile(file.file.uuid));
      this.resumable.upload();
    });
    this.uppy.on("upload-retry", (uuid) => {
      const file = this.resumable.files.find(
        ({ file }: ResumableFile) => file.uuid === uuid
      );
      file.retry();
    });
    this.uppy.on("retry-all", () => {
      this.resumable.files.map((file: ResumableFile) => file.retry());
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
    this.resumable.on("fileError", (file: ResumableFile, _error: string) => {
      let error = _error;
      try {
        error = JSON.parse(_error);
      } catch (error) {}
      this.uppy.emit("upload-error", this.uppy.getFile(file.file.uuid), error);
    });
  }

  install() {
    this.uppy.addUploader(this.upload);
  }

  uninstall() {
    this.resumable = null;
    this.uppy.removeUploader(this.upload);
  }
}
