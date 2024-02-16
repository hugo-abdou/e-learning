import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import type { App } from "vue";

export default function (app: App) {
  app.use(autoAnimatePlugin);
}
