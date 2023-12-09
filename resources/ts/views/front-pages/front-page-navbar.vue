<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router/auto";
import { useDisplay } from "vuetify";

import { useWindowScroll } from "@vueuse/core";

import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
import { isUserLoggedIn } from "@/plugins/1.router/utils";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";

const props = defineProps({
  activeId: String,
});

const display = useDisplay();

interface navItem {
  name: string;
  to: RouteLocationRaw;
}

interface MenuItem {
  listTitle: string;
  listIcon: string;
  navItems: navItem[];
}
const { y } = useWindowScroll();

const route = useRoute();
const router = useRouter();

const sidebar = ref(false);

watch(
  () => display,
  () => {
    return display.mdAndUp ? (sidebar.value = false) : sidebar.value;
  },
  { deep: true }
);

const menuItems: MenuItem[] = [];

const isCurrentRoute = (to: RouteLocationRaw) => {
  return route.matched.some(
    (_route) => _route.path === router.resolve(to).path
  );
};

const isPageActive = computed(() =>
  menuItems.some((item) =>
    item.navItems.some((listItem) => isCurrentRoute(listItem.to))
  )
);
const auth = useUserStore();
</script>

<template>
  <!-- 👉 Navigation drawer for mobile devices  -->
  <VNavigationDrawer v-model="sidebar" width="275" disable-resize-watcher>
    <!-- Nav items -->
    <div class="d-flex flex-column gap-y-4 pa-4">
      <RouterLink
        v-for="(item, index) in [
          'Home',
          'Features',
          'Team',
          'FAQ',
          'Contact us',
        ]"
        :key="index"
        :to="{
          name: 'root',
          hash: `#${item.toLowerCase().replace(' ', '-')}`,
        }"
        class="nav-link font-weight-medium"
        :class="[
          props.activeId?.toLocaleLowerCase().replace('-', ' ') ===
          item.toLocaleLowerCase()
            ? 'active-link'
            : '',
        ]"
      >
        {{ item }}
      </RouterLink>

      <div class="font-weight-medium cursor-pointer"></div>

      <RouterLink to="/" target="_blank" class="font-weight-medium nav-link">
        Admin
      </RouterLink>
    </div>

    <!-- Navigation drawer close icon -->
    <VIcon
      id="navigation-drawer-close-btn"
      icon="tabler-x"
      size="20"
      @click="sidebar = !sidebar"
    />
  </VNavigationDrawer>

  <!-- 👉 Navbar for desktop devices  -->
  <div class="front-page-navbar">
    <VAppBar
      :color="
        $vuetify.theme.current.dark
          ? 'rgba(var(--v-theme-background))'
          : 'rgba(255,255,255, 0.38)'
      "
      :class="
        y > 10
          ? 'app-bar-scrolled'
          : [
              $vuetify.theme.current.dark ? 'app-bar-dark' : 'app-bar-light',
              'elevation-0',
            ]
      "
      class="navbar-blur"
    >
      <!-- toggle icon for mobile device -->
      <IconBtn
        id="vertical-nav-toggle-btn"
        class="ms-n3 me-2 d-inline-block d-md-none"
        @click="sidebar = !sidebar"
      >
        <VIcon
          size="26"
          icon="tabler-menu-2"
          color="rgba(var(--v-theme-on-surface))"
        />
      </IconBtn>
      <!-- Title and Landing page sections -->
      <div class="d-flex align-center">
        <VAppBarTitle class="me-6">
          <RouterLink
            to="/"
            class="d-flex gap-x-4"
            :class="$vuetify.display.mdAndUp ? 'd-none' : 'd-block'"
          >
            <div class="d-flex gap-x-3 align-center">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
              <h4
                class="text-h4 text-capitalize text-truncate font-weight-bold"
              >
                {{ themeConfig.app.title }}
              </h4>
            </div>
          </RouterLink>
        </VAppBarTitle>

        <!-- landing page sections -->
        <div class="text-base align-center d-none d-md-flex">
          <RouterLink
            v-for="(item, index) in [
              'Home',
              'Features',
              'Team',
              'Pricing Plan',
              'FAQ',
              'Contact us',
            ]"
            :key="index"
            :to="{
              name: 'root',
              hash: `#${item.toLowerCase().replace(' ', '-')}`,
            }"
            class="nav-link font-weight-medium py-2 px-2 px-lg-4"
            :class="[
              props.activeId?.toLocaleLowerCase().replace('-', ' ') ===
              item.toLocaleLowerCase()
                ? 'active-link'
                : '',
            ]"
          >
            {{ item }}
          </RouterLink>
        </div>
      </div>

      <VSpacer />

      <div class="d-flex gap-x-4">
        <template v-if="isUserLoggedIn()">
          <RouterLink
            :to="{ name: 'dashboard' }"
            class="nav-link font-weight-medium px-2 px-lg-4 py-2"
          >
            Dashboard
          </RouterLink>
          <!-- <UserProfile /> -->
        </template>
        <template v-else>
          <VBtn variant="elevated" target="_blank" href="/login">
            <span class="d-none d-lg-block">Login</span>
          </VBtn>
        </template>
        <NavbarThemeSwitcher />
      </div>
    </VAppBar>
  </div>
</template>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  gap: 3rem;
}

.nav-link {
  &:not(:hover) {
    color: rgb(var(--v-theme-on-surface));
  }
}

.page-link {
  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}

@media (max-width: 1280px) {
  .nav-menu {
    gap: 2.25rem;
  }
}

@media (min-width: 1920px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1440px - 32px);
    }
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1200px - 32px);
    }
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(900px - 32px);
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 64px);
    }
  }
}

@media (max-width: 600px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 32px);
    }
  }
}

.nav-item-img {
  border: 10px solid rgb(var(--v-theme-background));
  border-radius: 10px;
}

.active-link {
  color: rgb(var(--v-theme-primary)) !important;
}

.app-bar-light {
  border: 2px solid rgba(var(--v-theme-surface), 68%);
  border-radius: 0.5rem;
  background-color: rgba(var(-v--theme-surface), 38%);
  transition: all 0.1s ease-in-out;
}

.app-bar-dark {
  border: 2px solid rgba(255, 255, 255, 8%);
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 4%);
  transition: all 0.1s ease-in-out;
}

.app-bar-scrolled {
  border-radius: 0.5rem;
  background-color: rgb(var(--v-theme-surface)) !important;
  transition: all 0.1s ease-in-out;
}

.front-page-navbar::after {
  position: fixed;
  z-index: 2;
  backdrop-filter: saturate(100%) blur(6px);
  block-size: 5rem;
  content: "";
  inline-size: 100%;
}
</style>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutMixins;

.mega-menu {
  position: fixed !important;
  inset-block-start: 5rem;
  inset-inline-start: 50%;
  transform: translateX(-50%);
}

.front-page-navbar {
  .v-toolbar__content {
    padding-inline: 1.5rem !important;
  }

  .v-toolbar {
    inset-inline: 0 !important;
    margin-block-start: 1rem !important;
    margin-inline: auto !important;
  }
}

.mega-menu-item {
  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}

#navigation-drawer-close-btn {
  position: absolute;
  cursor: pointer;
  inset-block-start: 0.5rem;
  inset-inline-end: 1rem;
}
</style>
