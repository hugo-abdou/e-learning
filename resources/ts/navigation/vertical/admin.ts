import type { VerticalNavItems } from "@/@layouts/types";

export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-layout-dashboard" },
  },
  {
    title: "Calendar",
    to: { name: "calendar" },
    icon: { icon: "tabler-calendar" },
  },
  {
    title: "Users",
    to: { name: "users" },
    icon: { icon: "tabler-users" },
  },
  {
    title: "Courses",
    icon: { icon: "fluent:flash-play-20-regular" },
    to: { name: "course" },
  },
  {
    title: "Storage",
    icon: { icon: "mdi-image-multiple-outline" },
    to: { name: "gallery" },
  },
  {
    title: "Browse",
    to: { name: "browse" },
    icon: { icon: "fluent:flash-play-20-regular" },
  },
] as VerticalNavItems;
