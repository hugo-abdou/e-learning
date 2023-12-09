<template>
    <RouterLink
        class="v-avatar"
        :to="
            authStore.user.id === user.id
                ? { name: 'account-settings-tab', params: { tab: 'account' } }
                : { name: 'users-id', params: { id: user.id } }
        "
    >
        <VAvatar :size="size || 32">
            <VImg :src="user.avatar" />
            <VTooltip activator="parent" location="top">{{ user.name }}</VTooltip>
        </VAvatar>
    </RouterLink>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { UserProperties } from "@/types";
const props = defineProps<{ user: UserProperties; size?: number }>();
const authStore = useUserStore();
</script>

<style scoped></style>
