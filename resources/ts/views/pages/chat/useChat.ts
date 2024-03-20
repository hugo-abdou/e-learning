import type { Chat, User } from "@/types";

export type ActiveChat = {
  chat?: Chat;
  contact: User;
} | null;

export const useChat = () => {
  const resolveAvatarBadgeVariant = (status: User["status"]) => {
    if (status === 0) return "secondary";
    if (status === 1) return "success";
    if (status === 2) return "warning";
    if (status === 3) return "error";

    return "secondary";
  };

  return {
    resolveAvatarBadgeVariant,
  };
};
