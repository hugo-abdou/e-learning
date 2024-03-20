import { breakpointsVuetifyV3 } from "@vueuse/core";
import { VIcon } from "vuetify/components/VIcon";
import { defineThemeConfig } from "@core";
import { Skins } from "@core/enums";

// ❗ Logo SVG must be imported with ?raw suffix
import logo from "@images/logo.svg?raw";

import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from "@layouts/enums";
type AppConfig = {
    appLogo: Lowercase<string>;
    appLogoDark: Lowercase<string>;
    appName: Lowercase<string>;
    appUrl: Lowercase<string>;
};

const appConfig: AppConfig = JSON.parse(document.body.dataset.page || "{}") as any;

export const { themeConfig, layoutConfig } = defineThemeConfig({
    app: {
        title: appConfig.appName,
        logo: h("img", {
            // innerHTML: logo,
            style: "height:52px; color: rgb(var(--v-global-theme-primary))",
            src: appConfig.appLogo,
        }),
        contentWidth: ContentWidth.Boxed,
        contentLayoutNav: AppContentLayoutNav.Vertical,
        overlayNavFromBreakpoint: breakpointsVuetifyV3.md + 16, // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
        i18n: {
            enable: true,
            defaultLocale: "en",
            langConfig: [
                {
                    label: "English",
                    i18nLang: "en",
                    isRTL: false,
                },
                {
                    label: "Arabic",
                    i18nLang: "ar",
                    isRTL: true,
                },
            ],
        },
        theme: "system",
        skin: Skins.Default,
        iconRenderer: VIcon,
    },
    navbar: {
        type: NavbarType.Sticky,
        navbarBlur: true,
    },
    footer: { type: FooterType.Static },
    verticalNav: {
        isVerticalNavCollapsed: false,
        defaultNavItemIconProps: { icon: "tabler-circle", size: 10 },
        isVerticalNavSemiDark: false,
    },
    horizontalNav: {
        type: "sticky",
        transition: "slide-y-reverse-transition",
    },

    /*
        ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
        Such as: chevronDown: { icon: 'tabler-chevron-down', color:'primary', size: '24' },
  */
    icons: {
        chevronDown: { icon: "tabler-chevron-down" },
        chevronRight: { icon: "tabler-chevron-right", size: 18 },
        close: { icon: "tabler-x" },
        verticalNavPinned: { icon: "tabler-circle-dot" },
        verticalNavUnPinned: { icon: "tabler-circle" },
        sectionTitlePlaceholder: { icon: "tabler-separator" },
    },
});
