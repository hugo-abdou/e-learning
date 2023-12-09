import { abilitiesPlugin } from "@casl/vue";
import type { App } from "vue";
import ability from "./ability";

export default function (app: App) {
  app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  });
}
