<script lang="ts" setup>
import useNavigation from "@/navigation";
import { useThemeConfig } from "@core/composable/useThemeConfig";

// Components
import Footer from "@/layouts/components/Footer.vue";
import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
import UserProfile from "@/layouts/components/UserProfile.vue";

// @layouts plugin
import { VerticalNavLayout } from "@layouts";
import NavBarI18n from "./NavBarI18n.vue";
import NavSearchBar from "./NavSearchBar.vue";

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig();
const { width: windowWidth } = useWindowSize();

const navItems = useNavigation();
</script>

<template>
    <VerticalNavLayout :nav-items="navItems">
        <!-- 👉 navbar -->
        <template #navbar="{ toggleVerticalOverlayNavActive }">
            <div class="d-flex h-100 align-center">
                <IconBtn
                    v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
                    id="vertical-nav-toggle-btn"
                    class="ms-n3"
                    @click="toggleVerticalOverlayNavActive(true)"
                >
                    <VIcon size="26" icon="tabler-menu-2" />
                </IconBtn>

                <NavbarThemeSwitcher />

                <!-- <VSpacer />
                <NavSearchBar class="ms-lg-n3" /> -->
                <VSpacer />
                <NavBarI18n class="me-1" />

                <UserProfile />
            </div>
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
        <!-- <TheCustomizer /> -->
    </VerticalNavLayout>
</template>
