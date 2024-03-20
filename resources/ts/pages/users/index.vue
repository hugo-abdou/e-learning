<script lang="ts" setup>
import UsersCardStatistics from "@/views/pages/users/UsersCardStatistics.vue";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import AddNewUserDrawer from "@/views/pages/users/AddNewUserDrawer.vue";
import UsersListTable from "@/views/pages/users/UsersListTable.vue";
import { useAuthStore } from "@/stores/useAuthStore";

definePage({
    meta: {
        layout: "default",
        authenticatedOnly: true,
    },
});
const route = useRoute<"users">();
const usersTableRef = ref<{ fetchUsers: Function }>();
// 👉 Store
const isAddNewUserDrawerVisible = ref(false);

const userCreated = (data: any) => {
    isAddNewUserDrawerVisible.value = false;
    usersTableRef.value?.fetchUsers();
};
const auth = useAuthStore();
const type = computed<string>(() => {
    if (auth.user.avaliableRoles.includes(String(route.query.type))) {
        return String(route.query.type);
    }
    return "student";
});
</script>

<template>
    <section>
        <!-- 👉 Widgets -->
        <div class="d-flex mb-6">
            <VRow>
                <VCol
                    v-for="i in ['total-users', 'paid-users']"
                    :key="i + type"
                    cols="12"
                    md="3"
                    sm="6"
                >
                    <Suspense>
                        <UsersCardStatistics
                            :type="i"
                            :role="type"
                        />
                        <template #fallback>
                            <VSkeletonLoader :type="['article']" />
                        </template>
                    </Suspense>
                </VCol>
            </VRow>
        </div>
        <UsersListTable
            ref="usersTableRef"
            :role="type"
            @add-new="isAddNewUserDrawerVisible = true"
        />

        <!-- 👉 Add New User -->
        <AddNewUserDrawer
            :default-roles="[type]"
            v-model:isDrawerOpen="isAddNewUserDrawerVisible"
            @user-data="userCreated"
        />
    </section>
</template>
