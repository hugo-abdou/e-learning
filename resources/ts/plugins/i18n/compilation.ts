import { debounce } from "@/helpers";
import { ComponentInternalInstance } from "vue";
const missing: { [key: string]: { [key: string]: any } } = {};

const log = debounce(() => {
    const missingLocales = JSON.parse(localStorage.getItem("missingLocales") || '{ "en": {}, "fr": {}, "ar": {} }');
    const newValue = {
        en: { ...missingLocales.en, ...missing.en },
        fr: { ...missingLocales.fr, ...missing.fr },
        ar: { ...missingLocales.ar, ...missing.ar }
    };
    localStorage.setItem("missingLocales", JSON.stringify(newValue));
    console.error("you have some missing translation :", newValue);
}, 1000);

export const missingHandler = (locale: string, key: string, vm: ComponentInternalInstance | undefined) => {
    missing[locale as keyof typeof missing] = { ...missing[locale as keyof typeof missing], [key]: key };
    log();
};
