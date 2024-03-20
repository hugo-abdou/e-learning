<script lang="ts" setup>
import { TableOptions, User as UserType, Student as StudentType } from "@/types";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { debounce } from "@/helpers";
import { useUsersStore } from "@/stores/useUsersStore";
import { useAuthStore } from "@/stores/useAuthStore";

interface Props {
    role: string;
}
const props = defineProps<Props>();

interface Emits {
    (e: "add-new"): void;
}
defineEmits<Emits>();

const auth = useAuthStore();
const searchQuery = ref("");
// Data table options
const options = ref<TableOptions>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [{ key: "id", order: "desc" }],
    groupBy: [],
    search: undefined,
});

// Headers
const headers = computed(() => {
    const headers: any = [{ title: "Name", key: "name" }];
    if (props.role === "student") {
        headers.push(...[{ title: "Progress", key: "completed_courses" }]);
    }
    return [...headers, { title: "Created at", key: "created_at", width: 80 }, { title: "Actions", key: "actions", sortable: false, width: 80 }];
});

type User = UserType | StudentType;

const users = ref<User[]>([]);
const totalUsers = ref(0);

const usersStore = useUsersStore();
// 👉 Fetching users
const fetchUsers = debounce(async () => {
    try {
        const data = await usersStore.fetchUsers({
            q: searchQuery.value,
            role: props.role,
            ...options.value,
        });

        users.value = data.data;
        totalUsers.value = data.meta?.total || 0;
        options.value.page = data.meta?.current_page || 0;
    } catch (error) {
        console.error(error);
    }
}, 500);

// 👉 Add new user

const deleteUser = (id: number) => {
    if (confirm("Are you sure you want to deactivate your account?")) usersStore.deleteUser(id).then(fetchUsers);
};

watch(() => props.role, fetchUsers);
const router = useRouter();
const route = useRoute();

const selectedRole = computed({
    get: () => props.role,
    set: (value) => {
        if (value) {
            router.push({ name: "users", query: { ...route.query, type: value } });
        }
    },
});
watch(
    Object.keys(options.value).map((key) => () => options.value[key as keyof typeof options.value]),
    fetchUsers,
    { immediate: true }
);

defineExpose({ fetchUsers });
</script>

<template>
    <VCard>
        <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div class="me-3 d-flex gap-3">
                <AppSelect
                    :model-value="options.itemsPerPage"
                    :items="[
                        { value: 10, title: '10' },
                        { value: 25, title: '25' },
                        { value: 50, title: '50' },
                        { value: 100, title: '100' },
                        { value: totalUsers, title: 'All' },
                    ]"
                    style="inline-size: 6.25rem"
                    @update:model-value="options.itemsPerPage = parseInt($event, 10)"
                />
                <AppSelect
                    v-model="selectedRole"
                    :items="auth.user.avaliableRoles.map((r) => ({ value: r, title: r.toUpperCase() }))"
                    style="inline-size: 10.25rem"
                />
            </div>
            <VSpacer />

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
                <!-- 👉 Search  -->
                <div style="inline-size: 10rem">
                    <AppTextField
                        v-model="options.search"
                        placeholder="Search"
                        density="compact"
                    />
                </div>

                <!-- 👉 Export button -->
                <!-- @vue-ignore -->
                <VBtn
                    v-if="$can('read', role)"
                    variant="tonal"
                    color="secondary"
                    prepend-icon="tabler-screen-share"
                >
                    Export
                </VBtn>

                <!-- 👉 Add user button -->
                <!-- @vue-ignore -->
                <VBtn
                    v-if="$can('create', role)"
                    prepend-icon="tabler-plus"
                    @click="$emit('add-new')"
                >
                    Add New User
                </VBtn>
            </div>
        </VCardText>
        <VDivider />
        <!-- SECTION datatable -->
        <VDataTableServer
            v-model:items-per-page="options.itemsPerPage"
            v-model:page="options.page"
            v-model:sort-by="options.sortBy"
            :items="users"
            :items-length="totalUsers"
            :headers="headers"
            class="text-no-wrap"
        >
            <!-- User -->
            <template #item.name="{ item }">
                <div class="d-flex align-center">
                    <VAvatar
                        size="34"
                        :variant="!item.avatar ? 'tonal' : undefined"
                        class="me-3"
                    >
                        <VImg
                            v-if="item.avatar"
                            :src="item.avatar"
                            cover
                        />
                        <span v-else>{{ avatarText(item.name) }}</span>
                    </VAvatar>
                    <div class="d-flex flex-column">
                        <h6 class="text-base">
                            <RouterLink
                                :to="auth.user.id === item.id ? { name: 'account-settings-tab', params: { tab: 'account' } } : { name: 'users-id', params: { id: item.id } }"
                                class="font-weight-medium text-link"
                            >
                                {{ item.name }}
                            </RouterLink>
                        </h6>
                        <span class="text-sm text-medium-emphasis">{{ item.email }}</span>
                    </div>
                </div>
            </template>

            <!-- Status -->
            <template #item.completed_courses="{ item }">
                <div class="d-flex align-center gap-1 py-1">
                    <VChip
                        :color="item.completed_courses > 0 ? 'success' : 'secondary'"
                        size="small"
                        class="text-capitalize"
                        prepend-icon="tabler-check"
                    >
                        {{ " : " + item?.completed_courses || 0 }}
                    </VChip>
                    <VChip
                        :color="item.in_progress_courses > 0 ? 'info' : 'secondary'"
                        size="small"
                        class="text-capitalize"
                        prepend-icon="tabler-clock"
                    >
                        {{ " : " + item?.in_progress_courses || 0 }}
                    </VChip>
                </div>
            </template>

            <!-- created at -->
            <template #item.created_at="{ item }">
                <div class="d-flex align-center">
                    <span class="text-sm text-medium-emphasis">{{ formatDate(item.created_at) }}</span>
                </div>
            </template>
            <!-- Actions -->
            <template #item.actions="{ item }">
                <IconBtn
                    v-if="$canList('update', item.roles)"
                    :to="auth.user.id === item.id ? { name: 'account-settings-tab', params: { tab: 'account' } } : { name: 'users-id', params: { id: item.id } }"
                >
                    <VIcon icon="tabler-edit" />
                </IconBtn>
                <IconBtn
                    v-if="auth.user.id !== item.id && $canList('delete', item.roles)"
                    @click="deleteUser(item.id)"
                >
                    <VIcon
                        color="error"
                        icon="tabler-trash"
                    />
                </IconBtn>
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
                        :length="Math.ceil(totalUsers / options.itemsPerPage)"
                        :total-visible="$vuetify.display.xs ? 1 : 10"
                        @update:model-value="options = { ...options, page: $event }"
                    >
                        <template #prev="slotProps">
                            <VBtn
                                variant="tonal"
                                color="default"
                                v-bind="slotProps"
                                :icon="false"
                            >
                                {{ $t("Previous") }}
                            </VBtn>
                        </template>

                        <template #next="slotProps">
                            <VBtn
                                variant="tonal"
                                color="default"
                                v-bind="slotProps"
                                :icon="false"
                            >
                                {{ $t("Next") }}
                            </VBtn>
                        </template>
                    </VPagination>
                </div>
            </template>
        </VDataTableServer>
        <!-- SECTION -->
    </VCard>
</template>
