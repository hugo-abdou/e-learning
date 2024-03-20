import { useStorage } from "@vueuse/core";
import type { ActiveChat } from "./useChat";
import type { Chat, User, UserWithChat, ChatMessage, ChatOut, ResourceResponse } from "@/types";

interface State {
  chatsContacts: UserWithChat[];
  contacts: User[];
  profileUser: User | undefined;
  activeChat: ActiveChat;
  chatSettings: Record<string, any>;
}

export const useChatStore = defineStore("chat", {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    contacts: [],
    chatsContacts: [],
    profileUser: undefined,
    activeChat: null,
    chatSettings: useStorage("chatSettings", {
      muted: false,
    }),
  }),
  getters: {
    isMuted: (state) => state.chatSettings.muted,
  },
  actions: {
    async fetchChatsAndContacts(q: string) {
      const { chatsContacts, contacts, profileUser } = await $api.get<any>(createUrl("/chat/chats-and-contacts", { query: { search: q } }).value);
      this.chatsContacts = chatsContacts;
      this.contacts = contacts;
      this.profileUser = profileUser;
    },

    async getChat(chatId: Chat["id"]) {
      const res = await $api.get<ActiveChat>(createUrl(`/chat/chats/${chatId}`).value);
      this.activeChat = res;
    },

    async sendMsg(message: ChatMessage["message"]) {
      const { message: msg, chat } = await $api.post<{ message: ChatMessage; chat: ChatOut }>(`/chat/chats/${this.activeChat?.contact.id}`, {
        message,
      });
      // ? If it's not undefined => New chat is created (Contact is not in list of chats)
      if (chat !== undefined) {
        if (this.activeChat) {
          const activeChat = this.activeChat!;
          this.chatsContacts.push({
            ...activeChat.contact,
            chat: {
              id: chat.id,
              userId: chat.userId,
              lastMessage: msg,
              unseenMsgs: 0,
              messages: [msg],
            },
          });
          this.activeChat.chat = {
            id: chat.id,
            messages: [msg],
            unseenMsgs: 0,
            userId: this.activeChat?.contact.id,
          };
        }
        this.contacts = this.contacts.filter((c) => c.id !== this.activeChat?.contact.id);
      } else {
        this.activeChat?.chat?.messages.push(msg);
      }

      const contact = this.chatsContacts.find((c) => {
        if (this.activeChat) return c.id === this.activeChat.contact.id;
        return false;
      }) as UserWithChat;
      contact.chat.lastMessage = msg;
    },

    receiveMsg(msg: ChatMessage, chat: ChatOut | undefined, contact: User) {
      let contactChat: UserWithChat | undefined = this.chatsContacts.find((c) => c.id === contact.id);

      if (!contactChat) {
        this.chatsContacts.push({
          ...contact,
          // @ts-expect-error
          chat: chat,
        });
      }
      contactChat = this.chatsContacts.find((c) => c.id === contact.id);
      if (contactChat) {
        contactChat.chat.messages.push(msg);
        contactChat.chat.lastMessage = msg;

        if (this.activeChat?.contact?.id === contact.id) {
          contactChat.chat.unseenMsgs = 0;
        } else {
          contactChat.chat.unseenMsgs++;
        }
      }
      if (this.activeChat?.chat && this.activeChat?.contact.id === contact.id) {
        this.activeChat.chat.messages.push(msg);
      }
      this.contacts = this.contacts.filter((c) => c.id !== contact.id);
    },

    newMessageDelivered({ chat, isSeen }: { chat: number | number[]; isSeen: boolean }) {
      const _this = this;

      const setMessagesfeadback = (chat: Chat, isSeen: boolean) => {
        chat.messages.forEach(function (m, i) {
          if (_this.activeChat?.chat?.id === chat.id) {
            _this.activeChat.chat.messages[i].feedback.isDelivered = true;
            _this.activeChat.chat.messages[i].feedback.isSeen = isSeen;
          } else {
            chat.messages[i].feedback.isDelivered = true;
            chat.messages[i].feedback.isSeen = isSeen;
          }
        });
      };

      if (typeof chat === "number" && this.activeChat?.chat?.id === chat) {
        setMessagesfeadback(this.activeChat.chat, isSeen);
      }
      if (typeof chat === "object" && chat.length > 0) {
        chat.forEach(function (id) {
          const c = _this.chatsContacts.find((c) => c.id === id);
          if (!c) return;
          setMessagesfeadback(c.chat, isSeen);
        });
      }
    },

    async clearChat(activeChat: { chat: Chat }) {
      await $api.post(`/chat/chats/${activeChat?.chat.id}/clear`, {});
      if (this.activeChat?.chat) {
        this.activeChat.chat.messages = [];
      }
    },
  },
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useChatStore, import.meta.hot));
