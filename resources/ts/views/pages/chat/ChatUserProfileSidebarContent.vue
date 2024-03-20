<script lang="ts" setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useChatStore } from "@/views/pages/chat/useChatStore";
import { UserStatus } from "@/@core/enums";
import { useAuthStore } from "@/stores/useAuthStore";
import { useUsersStore } from "@/stores/useUsersStore";
import { OnlineUsers } from "@/types";

defineEmits<{
  (e: "close"): void;
}>();

// composables
const store = useChatStore();
const auth = useAuthStore();

const userStatusRadioOptions = [
  { title: "Offline", value: UserStatus.OFFLINE, color: "secondary" },
  { title: "Online", value: UserStatus.ONLINE, color: "success" },
  { title: "Away", value: UserStatus.AWAY, color: "warning" },
  { title: "Do not disturb", value: UserStatus.DO_NOT_DISTURB, color: "error" },
];
const usersStore = useUsersStore();
const { join } = useEcho();
const status = computed({
  get: () => store.profileUser?.status || UserStatus.OFFLINE,
  set: async (val) => {
    await auth.updateUserStatus(val);
    store.profileUser = auth.user;
    join("App.Online.Users")?.whisper("App.Online.Users", {
      user: {
        status: val,
        id: auth.user.id,
        avatar: auth.user.avatar,
        name: auth.user.name,
      } as OnlineUsers,
    });
  },
});
</script>

<template>
  <template v-if="store.profileUser">
    <!-- Close Button -->
    <div class="pt-2 me-2 text-end">
      <IconBtn @click="$emit('close')">
        <VIcon
          class="text-medium-emphasis"
          color="disabled"
          icon="tabler-x"
        />
      </IconBtn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6">
      <Avatar
        :size="64"
        :user="store.profileUser"
      />
      <h5 class="text-h5">
        {{ store.profileUser.name }}
      </h5>
      <p class="text-capitalize text-medium-emphasis">
        {{ store.profileUser.roles[0] }}
      </p>
    </div>

    <!-- User Data -->
    <PerfectScrollbar
      class="ps-chat-user-profile-sidebar-content pb-5 px-5"
      :options="{ wheelPropagation: false }"
    >
      <!-- About -->
      <div class="my-5 text-medium-emphasis">
        <span
          for="textarea-user-about"
          class="text-sm text-disabled"
          >ABOUT</span
        >
        <div
          id="textarea-user-about"
          auto-grow
          class="mt-1"
          rows="4"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo non dignissimos, sunt iste officia architecto quia eveniet, aliquid natus, corporis ea odio est quis porro sapiente odit eaque dicta. Odit.
        </div>
      </div>

      <!-- Status -->
      <div class="mb-5">
        <span class="text-sm text-disabled">STATUS</span>
        <VRadioGroup
          v-model="status"
          class="mt-1"
        >
          <VRadio
            v-for="radioOption in userStatusRadioOptions"
            :key="radioOption.title"
            :label="radioOption.title"
            :value="radioOption.value"
            :color="radioOption.color"
          />
        </VRadioGroup>
      </div>

      <!-- Settings -->
      <div class="text-medium-emphasis">
        <span class="text-sm text-disabled">SETTINGS</span>

        <div class="d-flex align-center my-3">
          <VIcon
            class="me-2"
            icon="tabler-message-dots"
            size="22"
          />
          <span class="text-high-emphasis">Two-step Verification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="tabler-bell"
            size="22"
          />
          <span class="text-high-emphasis">Notification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="tabler-user-plus"
            size="22"
          />
          <span class="text-high-emphasis">Invite Friends</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="tabler-trash"
            size="22"
          />
          <span class="text-high-emphasis">Delete Account</span>
        </div>
      </div>
    </PerfectScrollbar>
  </template>
</template>
