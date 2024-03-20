<script lang="ts" setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useDisplay, useTheme } from "vuetify";
import { themes } from "@/plugins/vuetify/theme";
import ChatActiveChatUserProfileSidebarContent from "@/views/pages/chat/ChatActiveChatUserProfileSidebarContent.vue";
import ChatLeftSidebarContent from "@/views/pages/chat/ChatLeftSidebarContent.vue";
import ChatLog from "@/views/pages/chat/ChatLog.vue";
import ChatUserProfileSidebarContent from "@/views/pages/chat/ChatUserProfileSidebarContent.vue";
import { useChatStore } from "@/views/pages/chat/useChatStore";
import type { User } from "@/types";
import { debounce } from "@/helpers";
import { useAuthStore } from "@/stores/useAuthStore";

definePage({
  meta: {
    layoutWrapperClasses: "layout-content-height-fixed",
    authenticatedOnly: true,
  },
});

// composables
const vuetifyDisplays = useDisplay();
const store = useChatStore();
const { isLeftSidebarOpen } = useResponsiveLeftSidebar(vuetifyDisplays.smAndDown);

// Perfect scrollbar
const chatLogPS = ref();

const scrollToBottomInChatLog = () => {
  if (!chatLogPS.value) return;
  const scrollEl = chatLogPS.value.$el || chatLogPS.value;

  setTimeout(() => {
    scrollEl.scrollTop = scrollEl.scrollHeight + 100;
  }, 50);
};

// Search query
const q = ref("");

const fetchChatsAndContacts = debounce(() => store.fetchChatsAndContacts(q.value), 500);

watch(q, (val) => fetchChatsAndContacts(), { immediate: true });

// Open Sidebar in smAndDown when "start conversation" is clicked
const startConversation = () => {
  if (vuetifyDisplays.mdAndUp.value) return;
  isLeftSidebarOpen.value = true;
};

// Chat message
const msg = ref("");

const sendMessage = async () => {
  if (!msg.value) return;

  await store.sendMsg(msg.value);

  // Reset message input
  msg.value = "";
};

const openChatOfContact = async (userId: User["id"]) => {
  await store.getChat(userId);

  // Reset message input
  msg.value = "";

  // Set unseenMsgs to 0
  // const contact = store.chatsContacts.find((c) => c.id === userId);
  // if (contact) contact.chat.unseenMsgs = 0;

  // if smAndDown =>  Close Chat & Contacts left sidebar
  if (vuetifyDisplays.smAndDown.value) isLeftSidebarOpen.value = false;

  // Scroll to bottom
  nextTick(() => {
    scrollToBottomInChatLog();
  });
};

// User profile sidebar
const isUserProfileSidebarOpen = ref(false);

// Active chat user profile sidebar
const isActiveChatUserProfileSidebarOpen = ref(false);

// file input
const refInputEl = ref<HTMLElement>();

const moreList = computed(() => [
  // { title: "View Contact", value: "View Contact" },
  {
    title: "Mute Notifications",
    "prepend-icon": store.chatSettings.muted ? "tabler-volume-off" : "tabler-volume-2",
    onClick: () => (store.chatSettings.muted = !store.chatSettings.muted),
  },
  // { title: "Block Contact", value: "Block Contact" },
  {
    title: "Clear Chat",
    "prepend-icon": "tabler-trash",
    // @ts-ignore
    onClick: () => store.clearChat(store.activeChat),
  },
  // { title: "Report", value: "Report" },
]);

const { name } = useTheme();

const chatContentContainerBg = computed(() => themes[name.value].colors?.background || "transparent");

const { join, onNotify } = useEcho();
const auth = useAuthStore();

const activeChat = computed(() => store.activeChat?.chat);

store.$onAction(({ after, name }) => {
  after(() => {
    if (name === "sendMsg" || name === "receiveMsg") scrollToBottomInChatLog();
    if (name === "fetchChatsAndContacts") join("App.Online.Users")?.whisper("newMessageDelivered", { chats: store.chatsContacts.map((c) => c.chat.id), isSeen: false });
    if (name === "getChat") join("App.Online.Users")?.whisper("newMessageDelivered", { chat: store.activeChat?.chat?.id, isSeen: true });
  });
});
watch(
  activeChat,
  (chat) => {
    if (!chat) return;
    join("App.Online.Users")?.whisper("newMessageDelivered", { chat: chat.id, isSeen: true });
    store.chatsContacts.forEach((c) => {
      if (c.chat.id === chat.id) c.chat.unseenMsgs = 0;
    });
  },
  { immediate: true }
);
const initbroadcasting = () => {
  join("App.Online.Users");
  onNotify("App\\Notifications\\NewMessageNotification", (e: any) => {
    store.receiveMsg(e.message, e.chat, e.contact);
    join("App.Online.Users")?.whisper("newMessageDelivered", { chat: e.chat.id, isSeen: e.chat.id === store.activeChat?.chat?.id });
    if (!store.chatSettings.muted) {
      // make a ping sound
      const audio = new Audio("/assets/ping.wav");
      audio.play();
    }
  });
  join("App.Online.Users")?.listenForWhisper("newMessageDelivered", (e: any) => store.newMessageDelivered(e));
};
onMounted(() => {
  if (auth.user) {
    initbroadcasting();
    scrollToBottomInChatLog();
  }
});
onBeforeUnmount(() => {
  console.log("stop listening for whisper");
  join("App.Online.Users")?.stopListeningForWhisper("newMessageDelivered");
});
</script>

<template>
  <VLayout class="chat-app-layout">
    <!-- 👉 user profile sidebar -->
    <VNavigationDrawer
      v-model="isUserProfileSidebarOpen"
      temporary
      touchless
      absolute
      class="user-profile-sidebar"
      location="start"
      width="370"
    >
      <ChatUserProfileSidebarContent @close="isUserProfileSidebarOpen = false" />
    </VNavigationDrawer>

    <!-- 👉 Active Chat sidebar -->
    <VNavigationDrawer
      v-model="isActiveChatUserProfileSidebarOpen"
      width="374"
      absolute
      temporary
      location="end"
      touchless
      class="active-chat-user-profile-sidebar"
    >
      <ChatActiveChatUserProfileSidebarContent @close="isActiveChatUserProfileSidebarOpen = false" />
    </VNavigationDrawer>

    <!-- 👉 Left sidebar   -->
    <VNavigationDrawer
      v-model="isLeftSidebarOpen"
      absolute
      touchless
      location="start"
      width="370"
      :temporary="$vuetify.display.smAndDown"
      class="chat-list-sidebar"
      :permanent="$vuetify.display.mdAndUp"
    >
      <ChatLeftSidebarContent
        v-model:isDrawerOpen="isLeftSidebarOpen"
        v-model:search="q"
        @open-chat-of-contact="openChatOfContact"
        @show-user-profile="isUserProfileSidebarOpen = true"
        @close="isLeftSidebarOpen = false"
      />
    </VNavigationDrawer>

    <!-- 👉 Chat content -->
    <VMain class="chat-content-container">
      <!-- 👉 Right content: Active Chat -->
      <div
        v-if="store.activeChat"
        class="d-flex flex-column h-100"
      >
        <!-- 👉 Active chat header -->
        <div class="active-chat-header d-flex align-center text-medium-emphasis bg-surface">
          <!-- Sidebar toggler -->
          <IconBtn
            class="d-md-none me-3"
            @click="isLeftSidebarOpen = true"
          >
            <VIcon icon="tabler-menu-2" />
          </IconBtn>

          <!-- avatar -->
          <div
            class="d-flex align-center cursor-pointer"
            @click="isActiveChatUserProfileSidebarOpen = true"
          >
            <Avatar :user="store.activeChat.contact" />

            <div class="flex-grow-1 ms-4 overflow-hidden">
              <p class="text-h6 mb-0">
                {{ store.activeChat.contact.name }}
              </p>
              <p class="text-truncate mb-0 text-disabled">
                <!-- @vue-skip -->
                {{ store.activeChat.contact.email }}
              </p>
            </div>
          </div>

          <VSpacer />

          <!-- Header right content -->
          <div class="d-sm-flex align-center gap-1 d-none">
            <IconBtn icon="tabler-phone-call" />
            <IconBtn icon="tabler-video" />
            <MoreBtn
              :menu-list="moreList"
              density="comfortable"
              color="undefined"
            />
          </div>
        </div>

        <VDivider />

        <!-- Chat log -->
        <PerfectScrollbar
          ref="chatLogPS"
          tag="ul"
          :options="{ wheelPropagation: false }"
          class="flex-grow-1"
        >
          <ChatLog />
        </PerfectScrollbar>

        <!-- Message form -->
        <VForm
          class="chat-log-message-form mb-5 mx-5"
          @submit.prevent="sendMessage"
        >
          <VTextField
            :key="store.activeChat?.contact.id"
            v-model="msg"
            variant="solo"
            class="chat-message-input"
            placeholder="Type your message..."
            density="default"
            autofocus
          >
            <template #append-inner>
              <IconBtn>
                <VIcon icon="tabler-microphone" />
              </IconBtn>

              <IconBtn
                class="me-2"
                @click="refInputEl?.click()"
              >
                <VIcon icon="tabler-photo" />
              </IconBtn>

              <VBtn @click="sendMessage"> Send </VBtn>
            </template>
          </VTextField>
          <input
            ref="refInputEl"
            type="file"
            name="file"
            accept=".jpeg,.png,.jpg,GIF"
            hidden
          />
        </VForm>
      </div>

      <!-- 👉 Start conversation -->
      <div
        v-else
        class="d-flex h-100 align-center justify-center flex-column"
      >
        <VAvatar
          size="109"
          class="elevation-3 mb-6 bg-surface"
        >
          <VIcon
            size="50"
            class="rounded-0 text-high-emphasis"
            icon="tabler-message"
          />
        </VAvatar>
        <p
          class="mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface"
          :class="[{ 'cursor-pointer': $vuetify.display.smAndDown }]"
          @click="startConversation"
        >
          Start Conversation
        </p>
      </div>
    </VMain>
  </VLayout>
</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss";
@use "@core-scss/base/_mixins.scss";
@use "@layouts/styles/mixins" as layoutsMixins;

// Variables
$chat-app-header-height: 62px;

// Placeholders
%chat-header {
  display: flex;
  align-items: center;
  min-block-size: $chat-app-header-height;
  padding-inline: 1rem;
}

.chat-app-layout {
  border-radius: vuetify.$card-border-radius;

  @include mixins.elevation(vuetify.$card-elevation);

  $sel-chat-app-layout: &;

  @at-root {
    .skin--bordered {
      @include mixins.bordered-skin($sel-chat-app-layout);
    }
  }

  .active-chat-user-profile-sidebar,
  .user-profile-sidebar {
    .v-navigation-drawer__content {
      display: flex;
      flex-direction: column;
    }
  }

  .chat-list-header,
  .active-chat-header {
    @extend %chat-header;
  }

  .chat-list-search {
    .v-field__outline__start {
      flex-basis: 20px !important;
      border-radius: 28px 0 0 28px !important;
    }

    .v-field__outline__end {
      border-radius: 0 28px 28px 0 !important;
    }

    @include layoutsMixins.rtl {
      .v-field__outline__start {
        flex-basis: 20px !important;
        border-radius: 0 28px 28px 0 !important;
      }

      .v-field__outline__end {
        border-radius: 28px 0 0 28px !important;
      }
    }
  }

  .chat-list-sidebar {
    .v-navigation-drawer__content {
      display: flex;
      flex-direction: column;
    }
  }
}

.chat-content-container {
  /* stylelint-disable-next-line value-keyword-case */
  background-color: v-bind(chatContentContainerBg);

  // Adjust the padding so text field height stays 48px
  .chat-message-input {
    .v-field__append-inner {
      align-items: center;
      padding-block-start: 0;
    }

    .v-field--appended {
      padding-inline-end: 9px;
    }
  }
}

.chat-user-profile-badge {
  .v-badge__badge {
    /* stylelint-disable liberty/use-logical-spec */
    min-width: 12px !important;
    height: 0.75rem;
    /* stylelint-enable liberty/use-logical-spec */
  }
}
</style>
