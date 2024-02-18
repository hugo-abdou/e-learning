import Resumable from "resumablejs";

export const $resumable = new Resumable({
  target: "/api/media/upload",
  headers: {
    Accept: "application/json",
    common: { "X-Requested-With": "XMLHttpRequest" },
  },
  chunkSize: 1024 * 1024,
  simultaneousUploads: 1,
  maxChunkRetries: 3,
});
