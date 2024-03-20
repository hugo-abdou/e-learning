<script lang="ts" setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import ChatContact from "@/views/pages/chat/ChatContact.vue";
import { useChatStore } from "@/views/pages/chat/useChatStore";
import type { User } from "@/types";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

const props = defineProps<{
  search: string;
  isDrawerOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "openChatOfContact", id: User["id"]): void;
  (e: "showUserProfile"): void;
  (e: "close"): void;
  (e: "update:search", value: string): void;
}>();

const search = useVModel(props, "search", emit);

const store = useChatStore();
</script>

<template>
  <!-- 👉 Chat list header -->
  <div class="chat-list-header">
    <template v-if="store.profileUser">
      <Avatar
        :user="store.profileUser"
        @click="$emit('showUserProfile')"
      />
      <VTextField
        v-model="search"
        placeholder="Search..."
        class="ms-4 me-1 chat-list-search"
      >
        <template #prepend-inner>
          <VIcon
            size="22"
            icon="tabler-search"
          />
        </template>
      </VTextField>
    </template>
    <VSkeletonLoader
      v-else
      type="list-item-avatar"
    />
    <IconBtn
      v-if="$vuetify.display.smAndDown"
      @click="$emit('close')"
    >
      <VIcon
        icon="tabler-x"
        class="text-medium-emphasis"
      />
    </IconBtn>
  </div>
  <VDivider />

  <PerfectScrollbar
    tag="ul"
    class="d-flex flex-column gap-y-1 chat-contacts-list px-3 list-none"
    :options="{ wheelPropagation: false }"
  >
    <li class="list-none">
      <span class="chat-contact-header d-block text-primary text-xl font-weight-medium">Chats</span>
    </li>

    <ChatContact
      v-if="store.chatsContacts?.length"
      v-for="contact in store.chatsContacts"
      :key="`chat-${contact.id}`"
      :user="contact"
      is-chat-contact
      @click="$emit('openChatOfContact', contact.id)"
    />
    <!-- <VSkeletonLoader
      v-else
      type="list-item-avatar-two-line@5"
    /> -->
    <span
      v-show="!store.chatsContacts?.length"
      class="no-chat-items-text text-disabled"
      >No chats found</span
    >
    <li class="list-none">
      <span class="chat-contact-header d-block text-primary text-xl font-weight-medium">Contacts</span>
    </li>

    <ChatContact
      v-if="store.contacts?.length"
      v-for="contact in store.contacts"
      :key="`chat-${contact.id}`"
      :user="contact"
      @click="$emit('openChatOfContact', contact.id)"
    />
    <!-- <VSkeletonLoader
      v-else
      type="list-item-avatar-two-line@5"
    /> -->
    <span
      v-show="!store.contacts?.length"
      class="no-chat-items-text text-disabled"
      >No contacts found</span
    >
  </PerfectScrollbar>
</template>

<style lang="scss">
.chat-contacts-list {
  --chat-content-spacing-x: 16px;

  padding-block-end: 0.75rem;

  .chat-contact-header {
    margin-block-end: 0.625rem;
    margin-block-start: 1.25rem;
  }

  .chat-contact-header,
  .no-chat-items-text {
    margin-inline: var(--chat-content-spacing-x);
  }
}

.chat-list-search {
  .v-field--focused {
    box-shadow: none !important;
  }
}
</style>
