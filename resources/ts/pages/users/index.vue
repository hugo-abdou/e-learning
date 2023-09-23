<script setup lang="ts">
import { VDataTableServer } from "vuetify/labs/VDataTable";
import type { UserProperties } from "@/types";
import { paginationMeta, resolveUserRoleVariant } from "@/utils";
import AddNewUserDrawer from "@/views/pages/users/list/AddNewUserDrawer.vue";
import { useUserListStore } from "@/stores/useUserListStore";
import type { Options } from "@core/types";
import { avatarText } from "@core/utils/formatters";
import RolesSelectBox from "./components/RolesSelectBox.vue";
import { useUserStore } from "@/stores/user";
import { debounce } from "lodash";

// 👉 Store
const userListStore = useUserListStore();
const searchQuery = ref("");
const selectedRole = ref("all");
const authStore = useUserStore();
const totalPage = ref(1);
const totalUsers = ref(0);
const users = ref<UserProperties[]>([]);
const roles = ref<{ title: string; value: string }[]>([]);

const options = ref<Options>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined
});

// Headers
const headers = [
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "Roles", key: "role", sortable: false },
    { title: "", key: "actions", sortable: false, width: "70" }
];

// 👉 Fetching users
const fetchUsers = debounce(async () => {
    try {
        const data = await userListStore.fetchUsers({
            q: searchQuery.value,
            role: selectedRole.value,
            ...options.value
        });
        users.value = data.data;
        totalPage.value = data.meta?.to || 0;
        totalUsers.value = data.meta?.total || 0;
        options.value.page = data.meta?.current_page || 0;
    } catch (error) {
        console.log(error);
    }
}, 500);

const onUserAdded = () => {
    fetchUsers();
    authStore.refreshUser();
};

// 👉 Add new user
const isAddNewUserDrawerVisible = ref(false);

// 👉 Delete user
const deleteUser = (id: number) => {
    if (confirm("Are you sure you want to deactivate your account?")) {
        userListStore.deleteUser(id).then(fetchUsers);
    }
};

watch([options, searchQuery, selectedRole, () => options.value.itemsPerPage], fetchUsers);

// const router = useRouter();
onBeforeMount(() => {
    // router.push({ name: "not-authorized" });
});
</script>

<template>
    <section>
        <VRow>
            <VCol cols="12">
                <VCard :title="$t('Users')">
                    <!-- 👉 Filters -->
                    <VCardText>
                        <VRow>
                            <!-- 👉 Select Role -->
                            <VCol cols="12" sm="4">
                                <RolesSelectBox
                                    :default-roles="roles"
                                    v-model="selectedRole"
                                    :label="$t('Select Role')"
                                    :multiple="false"
                                    clearable
                                />
                            </VCol>
                            <VSpacer />
                            <!-- 👉 Select Plan -->
                            <VCol cols="12" sm="4">
                                <AppSelect
                                    :label="$t('Items Per Page')"
                                    :model-value="options.itemsPerPage"
                                    :items="[10, 20, 50, 100]"
                                    @update:model-value="options.itemsPerPage = parseInt($event, 10)"
                                />
                            </VCol>
                        </VRow>
                    </VCardText>

                    <VDivider />

                    <VCardText class="d-flex flex-wrap justify-between py-4 gap-4">
                        <VRow>
                            <VCol cols="12" sm="6">
                                <!-- 👉 Search  -->
                                <AppTextField v-model="searchQuery" :placeholder="$t('Search')" density="compact" />
                            </VCol>

                            <VCol cols="12" sm="6">
                                <div class="d-flex justify-end flex-wrap gap-4">
                                    <!-- 👉 Add user button -->
                                    <VBtn prepend-icon="tabler-plus" @click="isAddNewUserDrawerVisible = true">
                                        {{ $t("Add New User") }}
                                    </VBtn>
                                </div>
                            </VCol>
                        </VRow>
                    </VCardText>

                    <VDivider />

                    <!-- SECTION datatable -->
                    <!-- @vue-ignore -->
                    <VDataTableServer
                        v-model:items-per-page="options.itemsPerPage"
                        v-model:page="options.page"
                        :items="users"
                        :items-length="totalUsers"
                        :headers="headers.map(i => ({ ...i, title: $t(i.title) }))"
                        class="text-no-wrap"
                        @update:options="options = $event"
                    >
                        <!-- User -->
                        <template #item.name="{ item }">
                            <div class="d-flex align-center">
                                <VAvatar
                                    size="34"
                                    :variant="!item.raw.avatar ? 'tonal' : undefined"
                                    class="me-3"
                                    :color="!item.raw.avatar ? resolveUserRoleVariant(item.raw.role).color : undefined"
                                >
                                    <VImg v-if="item.raw.avatar" :src="item.raw.avatar" />
                                    <span v-else>{{ avatarText(item.raw.name) }}</span>
                                </VAvatar>

                                <div class="d-flex flex-column">
                                    <h6 class="text-base">
                                        <RouterLink
                                            :to="
                                                authStore.user.id === item.raw.id
                                                    ? { name: 'account-settings-tab', params: { tab: 'account' } }
                                                    : { name: 'users-id', params: { id: item.raw.id } }
                                            "
                                            class="font-weight-medium user-list-name"
                                        >
                                            {{ item.raw.name }}
                                        </RouterLink>
                                    </h6>
                                    <span class="text-sm text-medium-emphasis"> {{ item.raw.email }}</span>
                                </div>
                            </div>
                        </template>
                        <template #item.role="{ item }">
                            <div class="d-flex gap-1 py-2 flex-wrap w-100">
                                <VChip
                                    v-for="(role, index) in item.raw.role"
                                    label
                                    size="small"
                                    color="default"
                                    density="comfortable"
                                    :key="index"
                                >
                                    {{ role }}
                                </VChip>
                            </div>
                        </template>
                        <!-- Actions -->
                        <template #item.actions="{ item }">
                            <VBtn icon variant="text" size="small" color="medium-emphasis">
                                <VIcon size="24" icon="tabler-dots-vertical" />

                                <VMenu activator="parent">
                                    <VList>
                                        <VListItem
                                            :to="
                                                authStore.user.id === item.raw.id
                                                    ? { name: 'account-settings-tab', params: { tab: 'account' } }
                                                    : { name: 'users-id', params: { id: item.raw.id } }
                                            "
                                        >
                                            <template #prepend>
                                                <VIcon icon="tabler-eye" />
                                            </template>

                                            <VListItemTitle>{{ $t("View") }}</VListItemTitle>
                                        </VListItem>
                                        <VListItem @click="deleteUser(item.raw.id)">
                                            <template #prepend>
                                                <VIcon icon="tabler-trash" />
                                            </template>
                                            <VListItemTitle>{{ $t("Delete") }}</VListItemTitle>
                                        </VListItem>
                                    </VList>
                                </VMenu>
                            </VBtn>
                        </template>

                        <!-- pagination -->
                        <template #bottom>
                            <VDivider />
                            <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                                <p class="text-sm text-disabled mb-0">
                                    {{ paginationMeta(options, totalUsers) }}
                                </p>

                                <VPagination
                                    :model-value="options.page"
                                    @update:model-value="options = { ...options, page: $event }"
                                    :length="Math.ceil(totalUsers / options.itemsPerPage)"
                                    :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / options.itemsPerPage)"
                                >
                                    <template #prev="slotProps">
                                        <VBtn variant="tonal" color="default" v-bind="slotProps" :icon="false"> {{ $t("Previous") }} </VBtn>
                                    </template>

                                    <template #next="slotProps">
                                        <VBtn variant="tonal" color="default" v-bind="slotProps" :icon="false"> {{ $t("Next") }} </VBtn>
                                    </template>
                                </VPagination>
                            </div>
                        </template>
                    </VDataTableServer>
                    <!-- SECTION -->
                </VCard>

                <!-- 👉 Add New User -->
                <AddNewUserDrawer :default-roles="['user']" v-model:isDrawerOpen="isAddNewUserDrawerVisible" @user-data="onUserAdded" />
            </VCol>
        </VRow>
    </section>
</template>
<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
<style lang="scss">
.app-user-search-filter {
    inline-size: 31.6rem;
}

.text-capitalize {
    text-transform: capitalize;
}

.user-list-name:not(:hover) {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
