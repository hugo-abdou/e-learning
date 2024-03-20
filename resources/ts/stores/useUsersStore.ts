import { base642file } from "@/helpers";
import type { JsonResponse, ResourceResponse, UserForm, User, OnlineUsers } from "@/types";
import { PresenceChannel } from "laravel-echo";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("useUsersStore", {
  state: () => ({
    onlineUsers: [] as OnlineUsers[],
    onlineUsersChannel: undefined as PresenceChannel | undefined,
  }),
  actions: {
    // 👉 Fetch users data
    fetchUsers(params: any) {
      return $api.get<ResourceResponse<User[]>>("/users", { params });
    },
    // 👉 fetch single user
    fetchUser(id: number) {
      return $api.get<ResourceResponse<User>>(`/users/${id}`);
    },
    // 👉 Add User
    addUser(userData: UserForm) {
      const form = new FormData();
      Object.keys(userData)
        .filter((key: any) => key !== "avatar")
        .forEach((key) => {
          const value = typeof userData[key as keyof UserForm] === "object" ? JSON.stringify(userData[key as keyof UserForm]) : userData[key as keyof UserForm];

          form.append(key, value as string);
        });
      // form.append("_method", "PUT");
      if (userData.avatar && userData.avatar.includes("data:image")) {
        form.append("avatar", base642file(userData.avatar, "avatar"));
      }
      return $api.post<JsonResponse<User>>("/users", form);
    },
    // 👉 Delete User
    deleteUser(id: number) {
      return $api.delete(`/users/${id}`);
    },
  },
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
