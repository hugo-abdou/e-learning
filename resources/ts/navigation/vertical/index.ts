import { VerticalNavItems } from "@/@layouts/types";
import { useAuthStore } from "@/stores/useAuthStore";

export const verticalNavItems = () => {
    const links = ref<VerticalNavItems>([
        {
            heading: "-",
        },
        {
            title: "Dashboard",
            to: { name: "dashboard" },
            icon: { icon: "tabler-smart-home" },
        },
        {
            title: "Chat",
            icon: { icon: "tabler-message-circle" },
            to: "chat",
        },
        {
            title: "Courses",
            icon: { icon: "tabler-books" },
            to: { name: "course" },
            action: "read",
            subject: "course",
        },
        {
            title: "Quiz Attempts",
            icon: { icon: "tabler-target" },
            to: { name: "attempts" },
            action: "read",
            subject: "course",
        },
        {
            title: "Gallery",
            icon: { icon: "tabler-brand-google-photos" },
            to: { name: "gallery" },
            action: "read",
            subject: "storage",
        },
        {
            title: "Categories",
            to: { name: "categories" },
            icon: { icon: "tabler-category-2" },
            action: "read",
            subject: "category",
        },
        {
            title: "Users",
            icon: { icon: "tabler-users" },
            to: { name: "users", query: { type: "student" } },
        },
        {
            title: "Roles",
            to: { name: "roles" },
            icon: { icon: "tabler-shield" },
            action: "read",
            subject: "role",
        },
    ]);
    return links;
};

export default [] as VerticalNavItems;
