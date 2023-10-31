import { setupLayouts } from "virtual:generated-layouts";
import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router/auto";
import { createRouter, createWebHistory } from "vue-router/auto";
import { isUserLoggedIn } from "./utils";

import { useUserStore } from "@/stores/user";

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
    if (route.children) {
        for (let i = 0; i < route.children.length; i++) route.children[i] = recursiveLayouts(route.children[i]);

        return route;
    }

    return setupLayouts([route])[0];
}

const router = createRouter({
    history: createWebHistory("/"),
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash, behavior: "smooth", top: 60 };

        return { top: 0 };
    },
    extendRoutes: pages => {
        console.log(pages);
        return [...[...pages].map(route => recursiveLayouts(route))];
    }
});

router.beforeResolve(async (to, from, next) => {
    const auth = useUserStore();
    if (to.query.verified === "1") await auth.refreshUser();

    if (to.meta.redirectIfLoggedIn && isUserLoggedIn()) return next("/");
    if (to.meta.redirectIfNotLoggedIn && !isUserLoggedIn()) return next("/login");
    if (to.meta.redirectIfNotVerified && !auth.user.verified) return next("/verify-email");
    if (to.meta.redirectIfVerified && auth.user.verified) return next("/");

    return next();
});

export { router };

export default function (app: App) {
    app.use(router);
}
