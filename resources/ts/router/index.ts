import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { useUserStore } from "@/stores/user";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [...setupLayouts(routes)]
});

router.beforeResolve(async (to, from, next) => {
    const user = useUserStore();
    if (to.meta.layout === "auth") await user.getUser();
    if (to.meta.redirectIfLoggedIn && user.id) return next({ path: "/" });

    return next();
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router;
