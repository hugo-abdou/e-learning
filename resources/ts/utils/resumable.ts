import Resumable from "resumablejs";

const accessToken = useCookie("accessToken").value;
export const $resumable = new Resumable({
    target: "/api/media/upload",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        common: { "X-Requested-With": "XMLHttpRequest" },
    },
    chunkSize: 1024 * 1024,
    simultaneousUploads: 1,
    maxChunkRetries: 3,
});
