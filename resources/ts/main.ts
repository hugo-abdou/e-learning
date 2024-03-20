import { createApp } from "vue";

import App from "@/App.vue";
import { registerPlugins } from "@core/utils/plugins";

// Styles
import "@core-scss/template/index.scss";
import "@styles/styles.scss";

if (import.meta.env.MODE === "production") console.log = () => {};
// Create vue app
const app = createApp(App);

// Register plugins
registerPlugins(app);
app.config.globalProperties.buyNowUrl = import.meta.env.VITE_APP_URL + "/buy-now";
// Mount vue app
app.mount("#app");
