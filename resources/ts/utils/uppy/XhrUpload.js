/** @jsx h */
import EventTracker from "@uppy/utils/lib/EventTracker";
import XhrUploadParent from "@uppy/xhr-upload";
import BunnyStreem from "./bunny";

// import BunnyStreem from "@/plugins/bunny";
/**
 * XhrUpload
 *
 */
export default class XhrUpload extends XhrUploadParent {
  static VERSION = "0.0.1";

  constructor(uppy, opts) {
    super(uppy, opts);
  }

  setProgress(bytesUploaded, bytesTotal) {
    this.uppy.emit("upload-progress", this.file, {
      uploader: this,
      bytesUploaded,
      bytesTotal,
    });
  }

  uploadRemote(file) {
    return new Promise(async (resolve, reject) => {
      this.uppy.emit("upload-started", file);
      if (file.remote.provider === "gallery") {
        try {
          const res = await $api.get(file.remote.url);
          const uploadResp = { status: res.status, body: res.data };

          this.uppy.emit("upload-success", file, uploadResp);
          resolve(uploadResp);
        } catch (error) {
          this.uppy.emit("upload-error", file, error);
          reject(error);
        }
      }
    });
  }

  upload(file, current, total) {
    console.log(file.type.includes("video/"));

    // return this.uploadImage(file, current, total);
    // if (file.type.includes("image/")) return this.uploadImage(file, current, total);
    // if (file.type.includes("application/pdf")) return this.uploadPdf(file, current, total);
  }

  uploadImage(file, current, total) {
    return new Promise(async (resolve, reject) => {
      const opts = this.getOptions(file);

      this.uppy.log(`uploading ${current} of ${total}`);
      this.uppy.emit("upload-started", file);
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      try {
        const data = opts.formData
          ? this.createFormDataUpload(file, opts)
          : file.data;
        const res = await $api.post("/media/upload", data);
        const uploadResp = { status: 200, body: res.data };

        this.uppy.emit("upload-success", file, uploadResp);

        return resolve(res);
      } catch (error) {
        this.uppy.emit("upload-error", file, error);

        return reject(error);
      }
    });
  }

  uploadVideo(file, current, total) {
    const bunnyStreem = new BunnyStreem();
    this.uppy.log(`uploading ${current} of ${total}`);
    return new Promise(async (resolve, reject) => {
      this.uppy.emit("upload-started", file);
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      try {
        const library = 179002;
        bunnyStreem.onProgress("uploadProgress", (e) => {
          this.uppy.emit("upload-progress", file, {
            uploader: this,
            bytesUploaded: e.loaded,
            bytesTotal: file.data.size,
          });
        });
        bunnyStreem.setFeild("title", file.meta.name);
        const res = await bunnyStreem.store(library, file.data);
        const uploadResp = { status: 200, body: res };
        this.uppy.emit("upload-success", file, uploadResp);
        return resolve(res);
      } catch (error) {
        this.uppy.emit("upload-error", file, error);
        return reject(error);
      }
    });
  }
}
