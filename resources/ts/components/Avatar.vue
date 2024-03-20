<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="0"
    :color="resolveAvatarBadgeVariant(status)"
    class="rounded"
  >
    <VAvatar
      :size="size"
      :variant="!user.avatar ? 'tonal' : undefined"
    >
      <VImg
        v-if="user.avatar"
        :src="user.avatar"
        :alt="user.name"
        cover
      />
      <span v-else>{{ avatarText(user.name) }}</span>
    </VAvatar>
  </VBadge>
</template>

<script setup lang="ts">
import { UserStatus } from "@/@core/enums";
import { useAuthStore } from "@/stores/useAuthStore";
import { useUsersStore } from "@/stores/useUsersStore";
import { User } from "@/types";

const props = defineProps<{ user: User; size?: number }>();

const avatar = ref<User>(props.user);
const { resolveAvatarBadgeVariant } = useChat();
const usersStore = useUsersStore();
const auth = useAuthStore();

const status = computed(() => {
  if (auth.user.id === props.user.id) return auth.user.status;
  const onlineUser = usersStore.onlineUsers.find((user) => user.id === avatar.value.id);
  if (onlineUser) return onlineUser.status;
  return UserStatus.OFFLINE;
});
</script>

<style scoped></style>
