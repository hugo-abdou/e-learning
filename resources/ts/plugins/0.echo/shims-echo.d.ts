import Echo from "laravel-echo";
import { ability } from "./ability";

declare module "vue" {
  interface ComponentCustomProperties {
    $echo: Echo;
  }
}
