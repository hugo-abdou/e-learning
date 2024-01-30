import { defineThemeConfig } from "@core";
import { Skins } from "@core/enums";
import { Icon } from "@iconify/vue";
import { breakpointsVuetify } from "@vueuse/core";

// ❗ Logo SVG must be imported with ?raw suffix
// import logo from "@images/logo.svg?raw";
import logo from "@images/logo/svg/logo-no-background.svg?raw";

import {
  AppContentLayoutNav,
  ContentWidth,
  FooterType,
  NavbarType,
} from "@layouts/enums";

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: "vuexy",
    logo: h("div", {
      innerHTML: logo,
      style:
        "line-height:0;width:7rem; color: rgb(var(--v-global-theme-primary))",
    }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16, // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
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
          label: "French",
          i18nLang: "fr",
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
    iconRenderer: Icon,
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: FooterType.Sticky },
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
  // ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
  // Such as: chevronDown: { icon: 'tabler-chevron-down', color:'primary', size: '24' },
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
