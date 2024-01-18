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
  {
    title: "Quizzes",
    icon: { icon: "fluent:quiz-new-20-regular" },
    to: { name: "quizzes" },
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
] as VerticalNavItems;
