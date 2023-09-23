<template>
    <AppSelect :items="roles" multiple chips clear-icon="tabler-x" />
</template>

<script setup lang="ts">
interface Role {
    title: string;
    value: string;
}
const props = defineProps<{ defaultRoles?: Role[] }>();
// 👉 search filters
const roles = ref<Role[]>(props.defaultRoles || []);
onMounted(() => {
    roles.value = [{ title: "user", value: "user" }];
});
</script>
