<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import authV1BottomShape from "@images/svg/auth-v1-bottom-shape.svg?raw";
import authV1TopShape from "@images/svg/auth-v1-top-shape.svg?raw";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { VForm } from "vuetify/components";
import { confirmedValidator, passwordValidator, requiredValidator } from "@validators";

const route = useRoute();
const form = ref({
    token: route.params.token,
    email: route.query.email,
    password: "",
    password_confirmation: ""
});
const errors = ref<Record<string, string | undefined>>({
    password_confirmation: undefined,
    password: undefined
});

const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const authStore = useUserStore();
const refVForm = ref<VForm>();
const router = useRouter();
async function setNewPassword() {
    if (!refVForm.value) return;
    try {
        const { valid } = await refVForm.value.validate();

        if (valid) {
            await authStore.setNewPassword(form.value);
            router.push({ name: "login" });
        }
    } catch (e: any) {
        if (!e.response) throw e;
        const { errors: formErrors } = e.response.data;
        errors.value = formErrors;
    }
}
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

                <VCardText class="pt-2">
                    <h5 class="text-h5 mb-1">Reset Password 🔒</h5>

                    <p class="mb-0">
                        for <span class="font-weight-bold">{{ form.email }}</span>
                    </p>
                </VCardText>

                <VCardText>
                    <VForm ref="refVForm" @submit.prevent="setNewPassword">
                        <VRow>
                            <!-- password -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.password"
                                    :rules="[requiredValidator]"
                                    :error-messages="errors.password"
                                    autofocus
                                    label="New Password"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                />
                            </VCol>

                            <!-- Confirm Password -->
                            <VCol cols="12">
                                <AppTextField
                                    v-model="form.password_confirmation"
                                    label="Confirm Password"
                                    :rules="[requiredValidator, confirmedValidator(form.password_confirmation, form.password)]"
                                    :error-messages="errors.password_confirmation"
                                    :type="isConfirmPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                                />
                            </VCol>

                            <!-- reset password -->
                            <VCol cols="12">
                                <VBtn block type="submit"> Set New Password </VBtn>
                            </VCol>

                            <!-- back to login -->
                            <VCol cols="12">
                                <RouterLink class="d-flex align-center justify-center" :to="{ name: 'login' }">
                                    <VIcon icon="tabler-chevron-left" class="flip-in-rtl" />
                                    <span>Back to login</span>
                                </RouterLink>
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
