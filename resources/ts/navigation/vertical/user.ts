import type { VerticalNavItems } from "@/@layouts/types";

export default [
    {
        title: "Dashboard",
        to: { name: "index" },
        icon: { icon: "tabler-layout-dashboard" }
    },
    {
        title: "Users",
        to: { name: "users" },
        icon: { icon: "tabler-users" }
    },
    {
        title: "Browse",
        to: { name: "browse" },
        icon: { icon: "fluent:flash-play-20-regular" }
    }
] as VerticalNavItems;
