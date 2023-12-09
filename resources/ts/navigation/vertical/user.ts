import type { VerticalNavItems } from "@/@layouts/types";

export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-layout-dashboard" },
  },

  {
    title: "Browse",
    to: { name: "browse" },
    icon: { icon: "fluent:flash-play-20-regular" },
  },
] as VerticalNavItems;
