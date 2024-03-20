<template>
    <RouterLink
        class="v-avatar"
        :to="auth.user.id === user.id ? { name: 'account-settings-tab', params: { tab: 'account' } } : { name: 'users-id', params: { id: user.id } }"
    >
        <VAvatar :size="size || 32">
            <VImg
                :src="user.avatar"
                cover
            />
            <VTooltip
                activator="parent"
                location="top"
            >
                {{ user.name }}
            </VTooltip>
        </VAvatar>
    </RouterLink>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { User } from "@/types";

const props = defineProps<{ user: User; size?: number }>();
const auth = useAuthStore();
</script>

<style scoped></style>
