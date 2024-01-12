import type { VerticalNavItems } from "@/@layouts/types";

export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-layout-dashboard" },
  },

  { heading: "Applications" },
  {
    title: "Storage",
    icon: { icon: "mdi-image-multiple-outline" },
    to: { name: "gallery" },
  },
  {
    title: "Calendar",
    to: { name: "calendar" },
    icon: { icon: "tabler-calendar" },
  },
  { heading: "Admin Section" },
  {
    title: "Users",
    to: { name: "users" },
    icon: { icon: "tabler-users" },
  },
  {
    title: "Roles",
    to: { name: "roles" },
    icon: { icon: "mdi-card-account-details-star-outline" },
  },
  {
    title: "Permissions",
    to: { name: "permissions" },
    icon: { icon: "mdi-badge-account-outline" },
  },
] as VerticalNavItems;
