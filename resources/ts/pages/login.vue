<script setup lang="ts">
import { emailValidator, requiredValidator } from "@/@core/utils/validators";
import { useUserStore } from "@/stores/user";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import authV1BottomShape from "@images/svg/auth-v1-bottom-shape.svg?raw";
import authV1TopShape from "@images/svg/auth-v1-top-shape.svg?raw";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { VForm } from "vuetify/components";

const form = ref({
    email: "",
    password: "",
    remember: false
});

const errors = ref<Record<string, string | undefined>>({
    email: undefined,
    password: undefined
});

const isPasswordVisible = ref(false);

const route = useRoute();
const router = useRouter();

const refVForm = ref<VForm>();
const user = useUserStore();

const onSubmit = async () => {
    if (!refVForm.value) return;
    try {
        const { valid } = await refVForm.value.validate();
        if (valid) {
            await user.login(form.value.email, form.value.password);
            window.location.href = route.query.to ? String(route.query.to) : "/dashboard";
        }
    } catch (e: any) {
        if (!e.response) throw e;
        const { errors: formErrors } = e.response.data;
        errors.value = formErrors;
        console.error(e.response.data);
    }
};
</script>

<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
        <div class="position-relative my-sm-16">
            <!-- 👉 Top shape -->
            <VNodeRenderer :nodes="h('div', { innerHTML: authV1TopShape })" class="text-primary auth-v1-top-shape d-none d-sm-block" />

            <!-- 👉 Bottom shape -->
            <VNodeRenderer
                :nodes="h('div', { innerHTML: authV1BottomShape })"
                class="text-primary auth-v1-bottom-shape d-none d-sm-block"
            />

            <!-- 👉 Auth Card -->
            <VCard class="auth-card pa-4" max-width="448">
                <VCardItem class="justify-center">
                    <template #prepend>
                        <div class="d-flex">
                            <VNodeRenderer :nodes="themeConfig.app.logo" />
                        </div>
                    </template>

                    <VCardTitle class="font-weight-bold text-capitalize text-h5 py-1">
                        {{ themeConfig.app.title }}
                    </VCardTitle>
                </VCardItem>

                <VCardText class="pt-1">
                    <h5 class="text-h5 mb-1">
                        Welcome to <span class="text-capitalize">{{ themeConfig.app.title }}</span
                        >! 👋🏻
                    </h5>
                    <p class="mb-0">Please sign-in to your account and start the adventure</p>
                </VCardText>

                <VCardText>
                    <VForm ref="refVForm" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- email -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.email"
                                    autofocus
                                    label="Email"
                                    type="email"
                                    :rules="[requiredValidator, emailValidator]"
                                    :error-messages="errors.email"
                                    autocomplete="username"
                                />
                            </VCol>

                            <!-- password -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.password"
                                    label="Password"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    :rules="[requiredValidator]"
                                    :error-messages="errors.password"
                                    autocomplete="current-password"
                                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                />

                                <!-- remember me checkbox -->
                                <div class="d-flex align-center justify-space-between flex-wrap mt-2 mb-4">
                                    <VCheckbox v-model="form.remember" label="Remember me" />

                                    <RouterLink class="text-primary ms-2 mb-1" :to="{ name: 'forgot-password' }">
                                        Forgot Password?
                                    </RouterLink>
                                </div>

                                <!-- login button -->
                                <VBtn block type="submit"> Login </VBtn>
                            </VCol>

                            <!-- create account -->
                            <VCol cols="12" class="text-center text-base">
                                <span>New on our platform?</span>
                                <span class="text-primary ms-2"> Create an account </span>
                            </VCol>

                            <VCol cols="12" class="d-flex align-center">
                                <VDivider />
                                <span class="mx-4">or</span>
                                <VDivider />
                            </VCol>

                            <!-- auth providers -->
                            <VCol cols="12" class="text-center">
                                <AuthProvider />
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </div>
    </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
    layout: blank
    redirectIfLoggedIn: true
</route>
