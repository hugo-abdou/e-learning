import { useAuthStore } from "@/stores/useAuthStore";
import { useUsersStore } from "@/stores/useUsersStore";
import { OnlineUsers } from "@/types";
import { PresenceChannel } from "laravel-echo";

const notificationEvents = ref<{ [key: string]: Function[] }>({});

export function useEcho() {
  const vm = getCurrentInstance();
  const usersStore = useUsersStore();
  const auth = useAuthStore();
  const echo = vm?.proxy?.$echo;
  const join = (channel: string): PresenceChannel | undefined => {
    if (!echo) return;
    if (echo.connector.channels[channel]) return echo.connector.channels[channel];

    const presenceChannel = echo.join(channel);
    presenceChannel
      .here((users: OnlineUsers[]) => {
        usersStore.onlineUsers = users;
      })
      .joining((user: OnlineUsers) => {
        usersStore.onlineUsers.push(user);
      })
      .leaving((user: OnlineUsers) => {
        usersStore.onlineUsers = usersStore.onlineUsers.filter((u) => u.id !== user.id);
      })
      .listenForWhisper(channel, (e: any) => {
        usersStore.onlineUsers = usersStore.onlineUsers.map((u) => {
          if (u.id === e.user.id) return e.user;
          return u;
        });
      });
    return presenceChannel;
  };

  if (auth.user && !Object.keys(echo?.connector.channels).includes("private-App.Models.User." + auth.user.id)) {
    console.log(`registering user : ${auth.user.id} notification App.Models.User.${auth.user.id}`);
    echo?.private("App.Models.User." + auth.user.id)?.notification((e: { type: string }) => {
      if (Object.keys(notificationEvents.value).includes(e.type)) {
        notificationEvents.value[e.type].forEach((cb) => cb(e));
      }
    });
  }

  const onNotify = (name: string, cb: Function) => {
    console.log("registering notification", name);
    if (Object.keys(notificationEvents.value).includes(name)) {
      notificationEvents.value[name].push(cb);
    } else {
      notificationEvents.value[name] = [cb];
    }
  };

  return { echo: vm?.proxy?.$echo, join, onNotify };
}
