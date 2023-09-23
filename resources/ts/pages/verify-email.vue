<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import authV1BottomShape from "@images/svg/auth-v1-bottom-shape.svg?raw";
import authV1TopShape from "@images/svg/auth-v1-top-shape.svg?raw";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";

const authStore = useUserStore();
const isLinkSent = ref(false);

function verifyEmail() {
    authStore.verifyEmail().then(res => {
        if (res.status === 202) {
            isLinkSent.value = true;
        }
    });
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

            <!-- 👉 Auth card -->
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
                    <h5 class="text-h5 mb-1">{{ $t("account_activation_title") }}</h5>
                    <p>{{ $t("account_activation_subtitle", { email: authStore.user.email }) }}</p>

                    <VBtn block @click="verifyEmail" :disabled="isLinkSent" class="mb-6">
                        {{ isLinkSent ? $t("Check your inbox") : $t("Verify") }}
                    </VBtn>

                    <div v-if="isLinkSent" class="d-flex align-center justify-center">
                        <span class="me-1">{{ $t("Didn't get the mail?") }} </span><a href="#" @click="verifyEmail">{{ $t("Resend") }}</a>
                    </div>
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
    redirectIfVerified: true
</route>
