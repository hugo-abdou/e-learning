/* eslint-disable import/order */
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import layoutsPlugin from "@/plugins/layouts";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import "@core-scss/template/index.scss";
import "@styles/styles.scss";
import { createPinia } from "pinia";
import { createApp } from "vue";
import i18n from "./plugins/i18n";
import { VueMasonryPlugin } from "vue-masonry";

loadFonts();
// Create vue app
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(createPinia());
app.use(VueMasonryPlugin);
app.use(router);
app.use(layoutsPlugin);
app.use(i18n);
// Mount vue app
app.mount("#app");
