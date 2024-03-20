<script setup lang="ts">
import { useUsersStore } from "@/stores/useUsersStore";
import AccountSettingsAccount from "@/views/pages/account-settings/AccountSettingsAccount.vue";
import AccountSettingsSecurity from "@/views/pages/account-settings/AccountSettingsSecurity.vue";
import UserBioPanel from "@/views/pages/account-settings/UserBioPanel.vue";
definePage({
    meta: {
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
    },
});
// 👉 Store
const usersStore = useUsersStore();

const route = useRoute<"users-id">();
const router = useRouter();
const userData = ref();
const userTab = ref(null);

const tabs = [
    // { icon: "tabler-user-check", title: "Account", condition: true },
    { icon: "tabler-user-check", title: "Account Settings", condition: true },
    { icon: "tabler-lock", title: "Security", condition: true },
];
const { canList } = useAbilities();
async function getUser() {
    return usersStore
        .fetchUser(Number(route.params.id))
        .then(({ data }) => {
            if (!canList("update", data.roles)) router.push({ name: "not-authorized" });
            userData.value = data;
        })
        .catch((res) => {
            if (res.status) {
                router.push({ name: "$error", params: { error: "not-found" } });
            }
        });
}

await getUser();
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
                v-model="userTab"
                class="v-tabs-pill"
            >
                <template
                    v-for="tab in tabs"
                    :key="tab.icon"
                >
                    <VTab :disabled="!tab.condition">
                        <VIcon
                            :size="18"
                            :icon="tab.icon"
                            class="me-1"
                        />
                        <span>{{ tab.title }}</span>
                    </VTab>
                </template>
            </VTabs>

            <VWindow
                v-model="userTab"
                class="mt-6 disable-tab-transition"
            >
                <!-- Account -->
                <VWindowItem>
                    <AccountSettingsAccount
                        :user-data="userData"
                        @user-updated="getUser"
                        @user-deleted="$router.push({ name: 'users' })"
                    />
                </VWindowItem>

                <!-- Security -->
                <VWindowItem>
                    <AccountSettingsSecurity :user-data="userData" />
                </VWindowItem>
            </VWindow>
        </VCol>
    </VRow>
</template>
