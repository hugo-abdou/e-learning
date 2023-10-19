import { createI18n } from "vue-i18n";
import { missingHandler } from "./compilation";

const messages = Object.fromEntries(
    Object.entries(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        import.meta.glob<{ default: any }>("./locales/*.json", { eager: true })
    ).map(([key, value]) => [key.slice(10, -5), value.default])
);

export default createI18n({
    legacy: true,
    locale: localStorage.getItem("locale") || "en",
    messages,
    fallbackLocale: "en",
    missing: import.meta.env.MODE === "development" ? missingHandler : undefined,
    missingWarn: false,
    fallbackWarn: false
});
