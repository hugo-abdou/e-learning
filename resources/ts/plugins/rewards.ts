import type { App } from "vue";
import VueRewards from "vue-rewards";
export default function (app: App) {
    app.use(VueRewards);
}
