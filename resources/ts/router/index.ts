import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { useUserStore } from "@/stores/user";
import { isUserLoggedIn } from "./utils";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [...setupLayouts(routes)]
});

router.beforeResolve(async (to, from, next) => {
    const auth = useUserStore();

    if (to.meta.redirectIfLoggedIn && isUserLoggedIn()) return next("/");
    if (to.meta.redirectIfNotLoggedIn && !isUserLoggedIn()) return next("/login");
    if (to.meta.redirectIfNotVerified && !auth.user.verified) return next("/verify-email");
    if (to.meta.redirectIfVerified && auth.user.verified) return next("/");

    return next();
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router;
