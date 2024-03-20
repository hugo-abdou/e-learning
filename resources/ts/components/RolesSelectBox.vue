<script setup lang="ts">
import { useRolesStore } from "@/stores/useRolesStore";

interface Role {
    title: string;
    value: string;
}
const props = defineProps<{ defaultRoles?: Role[] }>();

// 👉 search filters
const roles = ref<Role[]>(props.defaultRoles || []);
const roleStore = useRolesStore();
onMounted(async () => {
    const res = await roleStore.fetchRoles();
    roles.value = res.data.map(({ id, name }) => ({ title: name, value: name }));
});
</script>

<template>
    <AppSelect
        :items="roles"
        multiple
        chips
        clear-icon="tabler-x"
    />
</template>
