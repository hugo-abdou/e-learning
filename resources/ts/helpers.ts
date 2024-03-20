import { CourseDifficulty, CourseDifficultyColors, CourseStatus, CourseStatusColors, CourseVisibility, MediaStatus, MediaTypes } from "./@core/enums";
import { MediaType } from "@/types";
import * as CryptoJS from "crypto-js";
export async function createBlobFromDataString(dataString: string) {
    return await fetch(dataString).then((res) => res.blob());
}
export async function createFileFromDataString(dataString: string, fileName: string) {
    const blob = await createBlobFromDataString(dataString);

    return new File([blob], fileName, { type: blob.type });
}

export async function readFileAsDataURL(file: File | Blob) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            typeof reader.result === "string" ? resolve(reader.result) : reject("result is not a string");
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}

export function extractUuidFromUrl(url: string) {
    const uuidRegex = /([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i;
    const match = url.match(uuidRegex);

    return match ? match[0] : null;
}

export function debounce(func: Function, delay: number) {
    let timeoutId: any;

    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

class storageClass {
    storagePath;
    https = false;
    constructor(path: string, https = false) {
        this.https = https;
        this.storagePath = path.replace("public", "storage");

        return this;
    }

    url = () => {
        const appurl = window.location.origin;

        return `${appurl}/${this.storagePath}`;
    };

    path = () => this.storagePath;
}

export function storage(path: string, https?: boolean) {
    return new storageClass(path, https);
}

export async function delay(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({}), time);
    });
}
export function base642file(base64: string, name: string) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);

    return new File([u8arr], name, { type: mime });
}

export function capitalizeWords(str: string) {
    return str
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}
export function getName(input: string): any {
    const matches = input.match(/_(.+)/);
    return matches && matches[1] ? matches[1] : "";
}
export function getAction(input: string): any {
    const matches = input.match(/^(.+)_/);
    return matches && matches[1] ? matches[1] : "";
}

export function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
export function calculateAspectRatio(width: number, height: number) {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(width, height);
    const aspectWidth = width / divisor;
    const aspectHeight = height / divisor;

    return `${aspectWidth}/${aspectHeight}`;
}
export function calculateWordsToDisplay(containerWidth: number, text: string, opt: { charWidth?: number; maxLines?: number }) {
    const charWidth = opt?.charWidth || 8;
    const maxLines = opt?.maxLines || 1;
    const estimatedCharCount = Math.floor(containerWidth / (charWidth * maxLines));
    let charactersToDisplay = text.slice(0, estimatedCharCount);
    if (charactersToDisplay.length < text.length) charactersToDisplay += "...";

    return charactersToDisplay;
}
export function secondsToMinutes(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = (seconds % 60).toFixed(0);

    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    if (hours > 0) return `${String(hours).padStart(2, "0")}:${formattedTime}`;

    return formattedTime;
}

export const resolveUserRoleVariant = (role: string) => {
    const roleLowerCase = role.toLowerCase();

    if (roleLowerCase === "subscriber") return { color: "warning", icon: "tabler-circle-check" };
    if (roleLowerCase === "author") return { color: "success", icon: "tabler-user" };
    if (roleLowerCase === "maintainer") return { color: "primary", icon: "tabler-chart-pie-2" };
    if (roleLowerCase === "editor") return { color: "info", icon: "tabler-edit" };
    if (roleLowerCase === "admin") return { color: "secondary", icon: "tabler-device-laptop" };

    return { color: "primary", icon: "tabler-user" };
};

export const resolveUserStatusVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === "pending") return "warning";
    if (statLowerCase === "active") return "success";
    if (statLowerCase === "inactive") return "secondary";

    return "primary";
};
export const resolveMediaStatusVariant = (stat: number) => {
    if (stat === MediaStatus.Pending) return { lable: "Pending", color: "default", icon: "tabler-circle-check" };
    if (stat === MediaStatus.Processing) return { lable: "Processing", color: "info", icon: "tabler-circle-half-2" };
    if (stat === MediaStatus.Completed) return { lable: "Completed", color: "success", icon: "tabler-circle-check" };
    if (stat === MediaStatus.Error) return { lable: "Error", color: "error", icon: "tabler-alert-circle" };
    return { lable: "Inconnue", color: "default", icon: "tabler-circle" };
};
export const resolveCourseStatusVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === CourseStatus.Draft) return { color: CourseStatusColors.Draft, icon: "tabler-circle" };
    if (statLowerCase === CourseStatus.Private) return { color: CourseStatusColors.Private, icon: "tabler-lock" };
    if (statLowerCase === CourseStatus.Scheduled) return { color: CourseStatusColors.Scheduled, icon: "tabler-clock" };
    if (statLowerCase === CourseStatus.Published) return { color: CourseStatusColors.Published, icon: "tabler-check" };
    if (statLowerCase === CourseStatus.Error) return { color: CourseStatusColors.Error, icon: "tabler-alert-circle" };
    if (statLowerCase === CourseStatus.Closed) return { color: CourseStatusColors.Closed, icon: "tabler-x" };
    return { color: "default", icon: "tabler-circle" };
};
export const resolveCourseDifficultyVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase();
    if (statLowerCase === CourseDifficulty.Beginner) return { color: CourseDifficultyColors.Beginner, icon: "tabler-circle-letter-c" };
    if (statLowerCase === CourseDifficulty.Intermediate) return { color: CourseDifficultyColors.Intermediate, icon: "tabler-circle-letter-b" };
    if (statLowerCase === CourseDifficulty.Advanced) return { color: CourseDifficultyColors.Advanced, icon: "tabler-circle-letter-a" };
    return { color: "default", icon: "tabler-circle" };
};
export const resolveCourseVisibilityVariant = (stat: number) => {
    if (stat === CourseVisibility.Visibil) return { color: "success", icon: "tabler-eye" };
    if (stat === CourseVisibility.Hidden) return { color: "default", icon: "tabler-eye-off" };
    return { color: "default", icon: "tabler-circle" };
};
export const resolveAttachmentTypeIcon = (type: keyof typeof MediaTypes) => {
    switch (type) {
        case MediaTypes.image:
            return "tabler-photo";
        case MediaTypes.video:
            return "tabler-video";
        case MediaTypes.pdf:
            return "tabler-file";
        default:
            return "tabler-file";
    }
};

export const resolveDefaultThumbnal = (media: MediaType) => {
    if (media.thumb_url) return media.thumb_url;
    switch (media.type) {
        case MediaTypes.image:
            return "/assets/image-placeholder.jpg";
        case MediaTypes.video:
            return "/assets/video_placeholder.gif";
        case MediaTypes.pdf:
            return "/assets/pdf_placeholder.png";
        default:
            return "";
    }
};

export const paginateArray = (array: unknown[], perPage: number, page: number) => array.slice((page - 1) * perPage, page * perPage);

// pagination meta
export const paginationMeta = computed(() => {
    return <T extends { page: number; itemsPerPage: number }>(options: T, total: number) => {
        const start = (options.page - 1) * options.itemsPerPage + 1;
        const end = Math.min(options.page * options.itemsPerPage, total);

        return `Showing ${start} to ${end} of ${total} entries`;
    };
});

export const genId = <T extends { id: number | string }>(array: T[]) => {
    const { length } = array;

    let lastIndex = 0;

    if (length) lastIndex = Number(array[length - 1]?.id) + 1;

    return lastIndex || length + 1;
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
export const UploadBunAttrs: any = {
    class: "border-md border-dashed rounded-lg w-100 h-100",
    style: "min-height: 100px",
    variant: "text",
    color: "default",
};

export const uuid = () => {
    // @ts-ignore
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export function encrypt(data: string): string {
    const encryptedData = CryptoJS.AES.encrypt(data, import.meta.env.VITE_SECRET_KEY).toString();
    return encryptedData;
}

export function decrypt(encryptedData: string): string {
    const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_SECRET_KEY);
    return decryptedDataBytes.toString(CryptoJS.enc.Utf8);
}
export function aes_encrypt(str_to_encrypt: string) {
    if (str_to_encrypt == null) return "";

    var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
    var iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");

    var encrypted = CryptoJS.AES.encrypt(str_to_encrypt, key, { mode: CryptoJS.mode.CBC, iv: iv });
    var encryptedString = encrypted.toString();
    return encryptedString;
}
export function aes_decrypt(str_to_decrypt: string) {
    if (str_to_decrypt == null) return "";

    var key = CryptoJS.enc.Hex.parse(import.meta.env.VITE_SECRET_KEY);
    var iv = CryptoJS.enc.Hex.parse(import.meta.env.VITE_SECRET_KEY);

    var decrypted = CryptoJS.DES.decrypt(str_to_decrypt, key, { mode: CryptoJS.mode.CBC, iv: iv });
    var decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedString;
}

export function formatDate(value: string, formatting: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }) {
    if (!value) return value;
    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
}
