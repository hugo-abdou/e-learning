/** @jsx h */
import axiosIns from "@axios";
import EventTracker from "@uppy/utils/lib/EventTracker";
import XhrUploadParent from "@uppy/xhr-upload";

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
        this.uppy.emit("upload-progress", this.file, { uploader: this, bytesUploaded, bytesTotal });
    }

    uploadRemote(file) {
        return new Promise(async (resolve, reject) => {
            this.uppy.emit("upload-started", file);
            if (file.remote.provider === "gallery") {
                try {
                    const res = await axiosIns.get(file.remote.url);
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
        return this.uploadImage(file, current, total);

        // if (file.type.includes("image/")) return this.uploadImage(file, current, total);
        // if (file.type.includes("application/pdf")) return this.uploadPdf(file, current, total);
        // if (file.type.includes("video/")) return this.uploadVideo(file, current, total);
    }

    uploadImage(file, current, total) {
        return new Promise(async (resolve, reject) => {
            const opts = this.getOptions(file);

            this.uppy.log(`uploading ${current} of ${total}`);
            this.uppy.emit("upload-started", file);
            this.uploaderEvents[file.id] = new EventTracker(this.uppy);
            try {
                const data = opts.formData ? this.createFormDataUpload(file, opts) : file.data;
                const res = await axiosIns.post("/media/upload", data);
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
                const library = 150735;

                bunnyStreem.onProgress("uploadProgress", e => {
                    this.uppy.emit("upload-progress", file, { uploader: this, bytesUploaded: e.loaded, bytesTotal: file.data.size });
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

    uploadPdf(file, current, total) {
        const opts = this.getOptions(file);

        this.uppy.log(`uploading ${current} of ${total}`);

        return new Promise(async (resolve, reject) => {
            this.uppy.emit("upload-started", file);

            this.uploaderEvents[file.id] = new EventTracker(this.uppy);
            let queuedRequest;

            const id_parts = file.id.split("/");
            const fileId = id_parts[id_parts.length - 1];
            async function uploadChunk(chunk, index = 0) {
                const formData = new FormData();

                formData.append("videoChunk", chunk);
                formData.append("id", `${fileId}/chunk-${index}`);

                return axiosIns.post(route("admin.upload_chunk"), formData, { headers: opts.headers });
            }

            const chunkSize = 5 * 1024 * 1024; // 10MB chunks (adjust as needed)
            let offset = 0;
            let index = 0;
            try {
                while (offset < file.data.size) {
                    const chunk = file.data.slice(offset, offset + chunkSize);

                    await uploadChunk(chunk, index);
                    offset += chunkSize;
                    this.uppy.emit("upload-progress", file, { uploader: this, bytesUploaded: offset, bytesTotal: file.data.size });
                    index++;
                }

                const res = await axiosIns.post(
                    route("admin.merge_video"),
                    {
                        chunks_folder: fileId,
                        video_name: file.name
                    },
                    { headers: opts.headers }
                );

                console.log(res);

                const uploadResp = { status: res.status, body: res.data.media };

                this.uppy.emit("upload-success", file, uploadResp);

                return resolve(res.data.media);
            } catch (error) {
                this.uppy.emit("upload-error", file, error);

                return reject(error);
            }
        });
    }
}
