import type { HorizontalNavItems } from "@/@layouts/types";

import student from "./student";

export default function useHorizontalNavItems() {
  const auth = useUserStore();
  const defaultLinks: HorizontalNavItems = [];
  if (auth.isStudent) return student;

  return defaultLinks;
}
