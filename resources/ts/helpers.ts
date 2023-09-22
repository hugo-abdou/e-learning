export async function createBlobFromDataString(dataString: string) {
    return await fetch(dataString).then(res => res.blob());
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
        reader.onerror = error => {
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
    return () => {
        // @ts-ignore
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
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
    return new Promise(resolve => {
        setTimeout(() => resolve({}), time);
    });
}
export function base642file(base64: string, name: string) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], name, { type: mime });
}
