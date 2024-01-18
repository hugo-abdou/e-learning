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

    /**
     * Check if user is logged in by checking if token & user data exists in local storage
     * Feel free to update this logic to suit your needs
     */
    const isLoggedIn = !!(
      useCookie("userData").value && useCookie("access_token").value
    );

    const auth = useUserStore();
    if (to.query.verified === "1") await auth.refreshUser();

    if (to.meta.redirectIfLoggedIn && isLoggedIn) return { name: "dashboard" };
    if (to.meta.redirectIfNotLoggedIn && !isLoggedIn) return { name: "login" };
    // TODO: apply this check
    // if (to.meta.redirectIfNotVerified && !auth.user.verified)
    //   return "/verify-email";
    if (to.meta.redirectIfVerified && auth.user.verified)
      return { name: "dashboard" };

    /*
      If user is logged in and is trying to access login like page, redirect to home
      else allow visiting the page
      (WARN: Don't allow executing further by return statement because next code will check for permissions)
     */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn) return "/";
      else return undefined;
    }

    if (!canNavigate(to)) {
      /* eslint-disable indent */
      return isLoggedIn
        ? { name: "not-authorized" }
        : {
            name: "login",
            query: {
              ...to.query,
              to: to.fullPath !== "/" ? to.path : undefined,
            },
          };
      /* eslint-enable indent */
    }
  });
};
