import type { HorizontalNavItems } from "@/@layouts/types";

export default [
  {
    title: "Dashboard",
    to: { name: "dashboard" },
    icon: { icon: "tabler-layout-dashboard" },
  },
  {
    title: "Courses",
    icon: { icon: "fluent:flash-play-20-regular" },
    to: { name: "browse" },
  },
  { heading: "Applications" },
  {
    title: "Calendar",
    to: { name: "calendar" },
    icon: { icon: "tabler-calendar" },
  },
] as HorizontalNavItems;
