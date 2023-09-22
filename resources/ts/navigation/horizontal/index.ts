import type { HorizontalNavItems } from "@layouts/types";

export default [
    {
        title: "Dahsboard",
        to: { name: "admin-dashboard" },
        icon: { icon: "tabler-layout-dashboard" }
    },
    {
        title: "Users",
        to: { name: "admin-users" },
        icon: { icon: "tabler-users" }
    }
] as HorizontalNavItems;
