import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    action?: string;
    subject?: string;
    layoutWrapperClasses?: string;
    navActiveLink?: RouteLocationRaw;
    layout?: "blank" | "default";
    unauthenticatedOnly?: boolean;
    authenticatedOnly?: boolean;
    verifiedOnly?: boolean;
    verified?: boolean;
    public?: boolean;
    roles?: string[];
  }
}

declare module "Echo" {
  import Echo from "laravel-echo";
  export default Echo;
}
