import type { VerticalNavItems } from "@/@layouts/types";

import admin from "./admin";
import instructor from "./instructor";
import student from "./student";

export default function useVerticalNavItems() {
  const auth = useUserStore();
  const defaultLinks: VerticalNavItems = [];
  if (auth.isSupperAdmin) return admin;
  if (auth.isInstructor) return instructor;
  if (auth.isStudent) return student;

  return defaultLinks;
}
