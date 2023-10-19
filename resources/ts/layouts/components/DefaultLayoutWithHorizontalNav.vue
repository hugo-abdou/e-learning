<script lang="ts" setup>
import useNavigation from "@/navigation";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { themeConfig } from "@themeConfig";

// Components
import Footer from "@/layouts/components/Footer.vue";
import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
import UserProfile from "@/layouts/components/UserProfile.vue";
import { HorizontalNavLayout } from "@layouts";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { HorizontalNavItems } from "@/@layouts/types";

const { appRouteTransition } = useThemeConfig();
const navItems = useNavigation();
</script>

<template>
    <HorizontalNavLayout :nav-items="(navItems as HorizontalNavItems)">
        <!-- 👉 navbar -->
        <template #navbar>
            <RouterLink to="/" class="app-logo d-flex align-center gap-x-3">
                <VNodeRenderer :nodes="themeConfig.app.logo" />

                <h1 class="app-title font-weight-bold leading-normal text-xl text-capitalize">
                    {{ themeConfig.app.title }}
                </h1>
            </RouterLink>
            <VSpacer />

            <NavbarThemeSwitcher class="me-2" />
            <UserProfile />
        </template>

        <!-- 👉 Pages -->
        <RouterView v-slot="{ Component }">
            <Transition :name="appRouteTransition" mode="out-in">
                <Component :is="Component" />
            </Transition>
        </RouterView>

        <!-- 👉 Footer -->
        <template #footer>
            <Footer />
        </template>

        <!-- 👉 Customizer -->
        <TheCustomizer />
    </HorizontalNavLayout>
</template>
