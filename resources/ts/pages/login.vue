<script setup lang="ts">
import { delay } from "@/helpers";
import { useAuthStore } from "@/stores/useAuthStore";
import { User } from "@/types";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";

definePage({
    meta: {
        layout: "blank",
    },
});

const form = ref({
    email: "moikinge3@gmail.com",
    password: "password",
    remember: false,
});

const isPasswordVisible = ref(false);

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true);

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);

const errors = ref<Record<string, string | undefined>>({
    email: undefined,
    password: undefined,
});

const router = useRouter();
const route = useRoute();

const login = async () => {
    try {
        const res = await $api.post<{ token: string }>("login", form.value, {
            baseURL: "/",
        });
        useCookie("accessToken").value = res.token;
        await delay(500);
        await useAuthStore().refreshUser();
        await nextTick(async () => {
            router.replace(route.query.to ? String(route.query.to) : { name: "dashboard" });
        });
    } catch (error: any) {
        if (error.status == 422) {
            errors.value = error._data.errors;
        }
        throw error;
    }
};
</script>

<template>
    <VRow
        no-gutters
        class="auth-wrapper bg-surface"
    >
        <VCol
            md="8"
            class="d-none d-md-flex"
        >
            <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
                <div class="d-flex align-center justify-center w-100 h-100">
                    <VImg
                        max-width="505"
                        :src="authThemeImg"
                        class="auth-illustration mt-16 mb-2"
                    />
                </div>

                <VImg
                    class="auth-footer-mask"
                    :src="authThemeMask"
                />
            </div>
        </VCol>

        <VCol
            cols="12"
            md="4"
            class="auth-card-v2 d-flex align-center justify-center"
        >
            <VCard
                flat
                :max-width="500"
                class="mt-12 mt-sm-0 pa-4"
            >
                <VCardText>
                    <VNodeRenderer
                        :nodes="themeConfig.app.logo"
                        class="mb-6"
                        style="object-fit: scale-down"
                    />
                    <h4 class="text-h4 mb-1">
                        Welcome to
                        <span class="text-capitalize"> {{ themeConfig.app.title }} ! 👋🏻 </span>
                    </h4>
                    <p class="mb-0">Please sign-in to your account and start the adventure</p>
                </VCardText>
                <VCardText>
                    <VForm @submit.prevent="login">
                        <VRow>
                            <!-- email -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.email"
                                    autofocus
                                    label="Email"
                                    type="email"
                                    autocomplete="username"
                                    placeholder="example@email.com"
                                    :error-messages="errors.email"
                                />
                            </VCol>

                            <!-- password -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.password"
                                    label="Password"
                                    placeholder="············"
                                    autocomplete="current-password"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    :error-messages="errors.password"
                                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                />

                                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                                    <VCheckbox
                                        v-model="form.remember"
                                        label="Remember me"
                                    />
                                    <RouterLink
                                        :to="{ name: 'forgot-password' }"
                                        class="text-primary ms-2 mb-1"
                                    >
                                        Forgot Password?
                                    </RouterLink>
                                </div>

                                <VBtn
                                    block
                                    type="submit"
                                >
                                    Login
                                </VBtn>
                            </VCol>

                            <!-- create account -->
                            <VCol
                                cols="12"
                                class="text-center text-base"
                            >
                                <span>New on our platform?</span>

                                <RouterLink
                                    :to="{ name: 'register' }"
                                    class="text-primary ms-2"
                                >
                                    Create an account
                                </RouterLink>
                            </VCol>

                            <VCol
                                cols="12"
                                class="d-flex align-center"
                            >
                                <VDivider />

                                <span class="mx-4">or</span>

                                <VDivider />
                            </VCol>

                            <!-- auth providers -->
                            <VCol
                                cols="12"
                                class="text-center"
                            >
                                <AuthProvider />
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
