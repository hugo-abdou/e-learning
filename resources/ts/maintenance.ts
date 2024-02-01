import Maintenance from "@/Maintenance.vue";
import { createApp } from "vue";

// Styles
import "@core-scss/template/index.scss";
import "@styles/styles.scss";

// Create vue app
const app = createApp(Maintenance);

registerPlugins(app);
// Mount vue app
app.mount("#app");
