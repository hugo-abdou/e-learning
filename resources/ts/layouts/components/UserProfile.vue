<script setup lang="ts">
import avatar1 from "@/../images/avatars/avatar-1.png";
import { useAuthStore } from "@/stores/useAuthStore";

const router = useRouter();
const auth = useAuthStore();
const { echo } = useEcho();
const logout = async () => {
  await $api.post("/logout", {}, { baseURL: "/" });
  useCookie("userData").value = null;
  useCookie("accessToken").value = null;
  echo?.disconnect();
  await router.push({ name: "login", params: { to: router.currentRoute.value.path } });
};
</script>

<template>
  <VAvatar
    v-if="auth.user.id"
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    <VImg
      :src="auth.user.avatar || avatar1"
      cover
    />

    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- 👉 User Avatar & Name -->
        <VListItem>
          <template #prepend>
            <VListItemAction start>
              <VAvatar>
                <VImg
                  :src="auth.user.avatar || avatar1"
                  cover
                />
              </VAvatar>
            </VListItemAction>
          </template>
          <VListItemTitle>{{ auth.user.name }}</VListItemTitle>
          <VListItemSubtitle>{{ auth.user.email }}</VListItemSubtitle>
          <VChip
            color="primary"
            class="mt-2"
            size="x-small"
          >
            {{ auth.user.roles[0] }}
          </VChip>
        </VListItem>

        <VDivider class="my-2" />

        <!-- 👉 Settings -->
        <VListItem
          :to="{
            name: 'account-settings-tab',
            params: { tab: 'account' },
          }"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-settings"
              size="22"
            />
          </template>

          <VListItemTitle>Settings</VListItemTitle>
        </VListItem>
        <!-- Divider -->
        <VDivider class="my-2" />

        <!-- 👉 Logout -->
        <VListItem
          link
          @click="logout"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-logout"
              size="22"
            />
          </template>

          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
