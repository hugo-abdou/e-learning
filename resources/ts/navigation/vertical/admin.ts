import type { VerticalNavItems } from "@/@layouts/types";

export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-layout-dashboard" },
  },

  {
    title: "Courses",
    icon: { icon: "fluent:flash-play-20-regular" },
    to: { name: "course" },
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
    subject: "user",
    action: "show",
    to: { name: "users" },
    icon: { icon: "tabler-users" },
  },
  {
    title: "Roles",
    subject: "role",
    action: "show",
    to: { name: "roles" },
    icon: { icon: "mdi-card-account-details-star-outline" },
  },
  {
    title: "Permissions",
    subject: "role",
    action: "show",
    to: { name: "permissions" },
    icon: { icon: "mdi-badge-account-outline" },
  },
] as VerticalNavItems;
