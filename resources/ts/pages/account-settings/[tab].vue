<script lang="ts" setup>
import { useRoute } from "vue-router";

import { useAuthStore } from "@/stores/useAuthStore";
import AccountSettingsAccount from "@/views/pages/account-settings/AccountSettingsAccount.vue";
import UserBioPanel from "@/views/pages/account-settings/UserBioPanel.vue";
import AccountSettingsSecurity from "@/views/pages/account-settings/AccountSettingsSecurity.vue";
import { User } from "@/types";
definePage({
    meta: {
        navActiveLink: "account-settings-tab",
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
    },
});
const route = useRoute<"account-settings-tab">();

const activeTab = ref(route.params.tab);

// tabs
const tabs = [
    { title: "Account", icon: "tabler-users", tab: "account" },
    { title: "Security", icon: "tabler-lock", tab: "security" },
];

const userStore = useAuthStore();
const userData = computed<User>(() => userStore.user);
</script>

<template>
    <VRow v-if="userData">
        <VCol
            cols="12"
            md="5"
            lg="4"
        >
            <UserBioPanel :user-data="userData" />
        </VCol>
        <VCol
            cols="12"
            md="7"
            lg="8"
        >
            <VTabs
                v-model="activeTab"
                show-arrows
                class="v-tabs-pill"
            >
                <VTab
                    v-for="item in tabs"
                    :key="item.icon"
                    :value="item.tab"
                    :to="{
                        name: 'account-settings-tab',
                        params: { tab: item.tab },
                    }"
                >
                    <VIcon
                        size="20"
                        start
                        :icon="item.icon"
                    />
                    {{ $t(item.title) }}
                </VTab>
            </VTabs>

            <VWindow
                v-model="activeTab"
                class="mt-6 disable-tab-transition"
            >
                <!-- Account -->
                <VWindowItem value="account">
                    <!-- @vue-ignore -->
                    <AccountSettingsAccount
                        :user-data="userData"
                        @user-updated="userStore.refreshUser"
                        @user-deleted="userStore.refreshUser"
                    />
                </VWindowItem>

                <!-- Security -->
                <VWindowItem value="security">
                    <AccountSettingsSecurity :user-data="userData" />
                </VWindowItem>
            </VWindow>
        </VCol>
    </VRow>
</template>
