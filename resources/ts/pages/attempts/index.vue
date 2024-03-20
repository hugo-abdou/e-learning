<script lang="ts" setup>
import { useAuthStore } from "@/stores/useAuthStore";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { useStudentsStore } from "@/stores/useStudentsStore";
import { StudentAttempts, TableOptions, User, UsersWithAttempts } from "@/types";
import { debounce } from "@/helpers";
import CheckAttemptsDialog from "@/views/pages/users/CheckAttemptsDialog.vue";

definePage({
    meta: {
        layout: "default",
        authenticatedOnly: true,
    },
});

const auth = useAuthStore();
const studentsStore = useStudentsStore();

const totalUsers = ref(0);
const options = ref<TableOptions>({
    page: 1,
    itemsPerPage: 10,
    search: undefined,
    groupBy: [],
    sortBy: [],
});
// Headers
const headers = [
    { title: "Name", key: "name" },
    { title: "Attempts", key: "attempts", sortable: false, width: "70" },
];
const items = ref<UsersWithAttempts[]>([]);

const students = computed<UsersWithAttempts[]>(() => {
    return items.value.filter((_, index) => index >= options.value.itemsPerPage * (options.value.page - 1) && index < options.value.itemsPerPage * options.value.page);
});
const fetchAttempts = debounce(async () => {
    const { data } = await studentsStore.fetchStudentsAttempts({
        query: {
            search: options.value.search,
        },
    });

    totalUsers.value = data.length;
    items.value = data;
}, 500);
watch([() => options.value.search], fetchAttempts, { immediate: true });

const dialog = ref<{
    open: boolean;
    data?: UsersWithAttempts;
}>({
    open: false,
    data: undefined,
});
const checkAttempts = (item: UsersWithAttempts) => {
    openDialog(item);
};

const openDialog = (data?: any) => {
    dialog.value.open = true;
    dialog.value.data = data;
};

const closeDialog = () => {
    dialog.value.open = false;
    dialog.value.data = undefined;
};
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
                    ]"
                    style="inline-size: 6.25rem"
                    @update:model-value="options.itemsPerPage = parseInt($event, 10)"
                />
            </div>
            <VSpacer />

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
                <!-- 👉 Search  -->
                <div style="inline-size: 15rem">
                    <AppTextField
                        v-model="options.search"
                        placeholder="Search"
                        density="compact"
                        prepend-inner-icon="tabler-search"
                    />
                </div>
            </div>
        </VCardText>

        <VDivider />
        <!-- SECTION datatable -->
        <VDataTableServer
            :items="students"
            :items-length="totalUsers"
            :headers="headers"
            class="text-no-wrap"
        >
            <!-- User -->
            <template #item.name="{ item }">
                <div class="d-flex align-center">
                    <VAvatar :variant="!item.avatar ? 'tonal' : undefined">
                        <VImg
                            v-if="item.avatar"
                            :src="item.avatar"
                            cover
                        />
                        <span v-else>{{ avatarText(item.name) }}</span>
                    </VAvatar>
                    <div class="d-flex flex-column ml-5">
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

            <!-- Attempts -->
            <template #item.attempts="{ item }">
                <VBadge
                    :content="item.attempts.length"
                    location="start top"
                    max="9"
                    bordered
                    class="v-badge--tonal mt-2"
                    color="error"
                >
                    <VBtn
                        @click="checkAttempts(item)"
                        variant="tonal"
                        >{{ $t("Check") }}</VBtn
                    >
                </VBadge>
            </template>

            <!-- pagination -->
            <template #bottom>
                <VDivider />
                <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                    <p class="text-sm text-disabled mb-0">
                        {{ paginationMeta(options, totalUsers) }}
                    </p>
                    <VPagination
                        v-model="options.page"
                        :length="Math.ceil(totalUsers / options.itemsPerPage)"
                        :total-visible="$vuetify.display.xs ? 1 : 10"
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
    <CheckAttemptsDialog
        v-model:is-drawer-open="dialog.open"
        :data="dialog.data"
        @-check-done="fetchAttempts"
    />
</template>
