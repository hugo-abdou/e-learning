import { useAuthStore } from "@/stores/useAuthStore";
import { User } from "@/types";
import { canNavigate } from "@layouts/plugins/casl";
import type { Router } from "vue-router";

export const setupGuards = (router: Router) => {
    // 👉 router.beforeEach
    // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
    router.beforeEach(async (to) => {
        /*
         * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
         * Examples of public routes are, 404, under maintenance, etc.
         */
        if (to.meta.public) return;

        const auth = useAuthStore();
        /**
         * Check if user is logged in by checking if token & user data exists in local storage
         * Feel free to update this logic to suit your needs
         */
        const isLoggedIn = !!useEncryptedCookie<User>("userData").value;

        if (to.meta.authenticatedOnly && !isLoggedIn) return { name: "login" };
        if (to.meta.unauthenticatedOnly && isLoggedIn) return { name: "dashboard" };
        // TODO: apply this check
        // if (to.meta.redirectIfNotVerified && !auth.user.verified)
        //   return "/verify-email";
        if (to.meta.verifiedOnly && auth.user.verified) return { name: "dashboard" };

        if (Number(to.meta.roles?.length) > 0) {
            if (!auth.user.roles.some((role) => to.meta.roles?.includes(role))) {
                return { name: "not-authorized" };
            }
        }

        /*
      If user is logged in and is trying to access login like page, redirect to home
      else allow visiting the page
      (WARN: Don't allow executing further by return statement because next code will check for permissions)
     */
        if (to.meta.unauthenticatedOnly && isLoggedIn) return { name: "root" };

        if (!canNavigate(to)) {
            return isLoggedIn
                ? { name: "not-authorized" }
                : {
                      name: "login",
                      query: {
                          ...to.query,
                          to: to.fullPath !== "/" ? to.path : undefined,
                      },
                  };
        }
    });
};
