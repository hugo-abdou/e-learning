import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import laravel from "laravel-vite-plugin";
import { fileURLToPath } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  VueRouterAutoImports,
  getPascalCaseRouteName,
} from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";
import Layouts from "vite-plugin-vue-layouts";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: (routeNode) => {
        // Convert pascal case to kebab case
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
          .toLowerCase();
      },

      routesFolder: "resources/ts/pages",
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag === "swiper-container" || tag === "swiper-slide",
        },

        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    laravel({
      input: ["resources/ts/main.ts", "resources/ts/maintenance.ts"],
      refresh: true,
    }),
    VueDevTools(),
    vueJsx(), // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "resources/styles/variables/_vuetify.scss",
      },
    }), // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./resources/ts/layouts/",
    }), // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: [
        "./resources/ts/**/components",
        "resources/ts/@core/components",
        "resources/ts/views",
        "resources/ts/components",
      ],
      dts: true,
      resolvers: [
        (componentName) => {
          // Auto import `VueApexCharts`
          if (componentName === "VueApexCharts")
            return {
              name: "default",
              from: "vue3-apexcharts",
              as: "VueApexCharts",
            };
        },
      ],
    }),
    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "@vueuse/core",
        "@vueuse/math",
        "vue-i18n",
        "pinia",
        {
          slugify: ["slugify"],
        },
      ],
      dirs: [
        "./resources/ts/@core/utils",
        "./resources/ts/stores",
        "./resources/ts/@core/composable/",
        "./resources/ts/composables/",
        "./resources/ts/utils/",
        "./resources/ts/plugins/*/composables/*",
      ],
      vueTemplate: true,

      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"],
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(
          new URL("./resources/ts/plugins/i18n/locales/**", import.meta.url)
        ),
      ],
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@core-scss": fileURLToPath(
        new URL("./resources/styles/@core", import.meta.url)
      ),
      "@": fileURLToPath(new URL("./resources/ts", import.meta.url)),
      "@themeConfig": fileURLToPath(
        new URL("./themeConfig.ts", import.meta.url)
      ),
      "@core": fileURLToPath(new URL("./resources/ts/@core", import.meta.url)),
      "@layouts": fileURLToPath(
        new URL("./resources/ts/@layouts", import.meta.url)
      ),
      "@images": fileURLToPath(new URL("./resources/images/", import.meta.url)),
      "@styles": fileURLToPath(new URL("./resources/styles/", import.meta.url)),
      "@configured-variables": fileURLToPath(
        new URL("./resources/styles/variables/_template.scss", import.meta.url)
      ),
      apexcharts: fileURLToPath(
        new URL("node_modules/apexcharts-clevision", import.meta.url)
      ),
      "@db": fileURLToPath(
        new URL("./resources/ts/plugins/fake-api/handlers/", import.meta.url)
      ),
      "@api-utils": fileURLToPath(
        new URL("./resources/ts/plugins/fake-api/utils/", import.meta.url)
      ),
      "@axios": fileURLToPath(
        new URL("./resources/ts/utils/axios", import.meta.url)
      ),
      "@validators": fileURLToPath(
        new URL("./resources/ts/@core/utils/validators", import.meta.url)
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: ["./resources/ts/**/*.vue"],
  },
  // server
  server: {
    hmr: { overlay: false },
    watch: {
      ignored: [`${__dirname}/storage/**/*.*`, `${__dirname}/public/**/*.*`],
    },
  },
});
