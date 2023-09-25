import { HorizontalNavItems, VerticalNavItems } from "@/@layouts/types";
import { useUserStore } from "@/stores/user";

import { admin } from "./vertical";

export default function useNavigation(): VerticalNavItems | HorizontalNavItems {
    const auth = useUserStore();
    return admin;
}
