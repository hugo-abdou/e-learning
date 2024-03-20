import { decrypt, encrypt } from "@/helpers";

export default function useEncryptedCookie<T>(key: string): WritableComputedRef<T> {
    const value = computed<any>({
        get() {
            const cookieValue = useCookie(key).value;
            if (cookieValue) return processJson(decrypt(cookieValue)) as T;
            return null;
        },
        set(val: T) {
            useCookie(key).value = encrypt(processJson(val));
        },
    });

    return value;
}
function processJson(input: any) {
    let output = input;

    // Check if input is an object, and stringify if it is
    if (typeof input === "object") {
        return JSON.stringify(input);
    }

    // Check if the output is a valid JSON string
    if (typeof input === "string") {
        try {
            return JSON.parse(output);
        } catch (e) {
            return input;
        }
    }

    return input;
}
