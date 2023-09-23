<script setup lang="ts">
import avatar1 from "@/../images/avatars/avatar-1.png";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const auth = useUserStore();

const logout = async () => {
    await auth.logout();
    router.replace({ name: "login" });
};

// onMounted(auth.getUser);
</script>

<template>
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
        <VImg :src="auth.user.avatar || avatar1" />

        <!-- SECTION Menu -->
        <VMenu activator="parent" width="230" location="bottom end" offset="14px">
            <VList>
                <!-- 👉 User Avatar & Name -->
                <VListItem>
                    <template #prepend>
                        <VListItemAction start>
                            <VAvatar>
                                <VImg :src="auth.user.avatar || avatar1" />
                            </VAvatar>
                        </VListItemAction>
                    </template>
                    <VListItemSubtitle>{{ auth.user.email }}</VListItemSubtitle>
                </VListItem>

                <VDivider class="my-2" />

                <!-- 👉 Settings -->
                <VListItem :to="{ name: 'account-settings-tab', params: { tab: 'account' } }">
                    <template #prepend>
                        <VIcon class="me-2" icon="tabler-settings" size="22" />
                    </template>

                    <VListItemTitle>Settings</VListItemTitle>
                </VListItem>
                <!-- Divider -->
                <VDivider class="my-2" />

                <!-- 👉 Logout -->
                <VListItem link @click="logout">
                    <template #prepend>
                        <VIcon class="me-2" icon="tabler-logout" size="22" />
                    </template>

                    <VListItemTitle>Logout</VListItemTitle>
                </VListItem>
            </VList>
        </VMenu>
        <!-- !SECTION -->
    </VAvatar>
</template>
