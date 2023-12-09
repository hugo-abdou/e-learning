<script setup lang="ts">
import { useRolesStore } from "@/stores/useRolesStore";
import { Permission } from "@/types";
import { paginationMeta } from "@/utils";
import type { Options } from "@core/types";
import { VDataTableServer } from "vuetify/labs/VDataTable";

// 👉 headers
const headers = [
  { title: "Name", key: "name" },
  { title: "Assigned To", key: "roles", sortable: false },
  { title: "Created Date", key: "created_at", sortable: false },
];

const permissions = ref<Permission[]>();

const search = ref("");
const totalPermissions = ref(0);

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
});

const isPermissionDialogVisible = ref(false);
const isAddPermissionDialogVisible = ref(false);
const permissionName = ref("");
const totalPages = ref(1);

const rolesStore = useRolesStore();

const fetchPermissions = async () => {
  const res = await rolesStore.fetchPermissions(options.value);
  permissions.value = res.data;
  if (res.meta) {
    totalPages.value = res.meta.total / res.meta.per_page || 0;
    totalPermissions.value = res.meta?.total || 0;
  }
};
watch(() => options.value.itemsPerPage, fetchPermissions, { immediate: true });
// watchEffect(fetchPermissions);
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h5 class="text-h4 mb-6">Permissions List</h5>
      <p class="mb-0">
        Each category (Basic, Professional, and Business) includes the four
        predefined roles shown below.
      </p>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardText
          class="d-flex align-center justify-space-between flex-wrap gap-4"
        >
          <AppSelect
            v-model="options.itemsPerPage"
            :items="[10, 20, 50, 100]"
            style="width: 5rem"
          />

          <div class="d-flex align-center gap-4 flex-wrap">
            <AppTextField
              v-model="search"
              placeholder="Search"
              density="compact"
              style="width: 12.5rem"
            />
          </div>
        </VCardText>

        <VDivider />

        <!-- @vue-ignore -->
        <VDataTableServer
          v-model:items-per-page="options.itemsPerPage"
          v-model:page="options.page"
          :items-length="totalPermissions"
          :headers="headers"
          :items="permissions"
          class="text-medium-emphasis text-no-wrap"
          @update:options="options = $event"
        >
          <!-- Assigned To -->
          <template #item.roles="{ item }">
            <div class="d-flex gap-2">
              <VChip
                v-for="text in item.roles"
                :key="text"
                color="primary"
                label
                class="font-weight-medium"
              >
                {{ text }}
              </VChip>
            </div>
          </template>

          <template #bottom>
            <VDivider />

            <div
              class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3"
            >
              <p class="text-sm text-medium-emphasis mb-0">
                {{ paginationMeta(options, totalPermissions) }}
              </p>

              <!-- <VPagination v-model="options.page" :length="totalPages" /> -->
              <VPagination
                v-model="options.page"
                :length="Math.ceil(totalPermissions / options.itemsPerPage)"
                :total-visible="
                  $vuetify.display.xs
                    ? 1
                    : Math.ceil(totalPermissions / options.itemsPerPage)
                "
              >
                <template #prev="slotProps">
                  <VBtn
                    variant="tonal"
                    color="default"
                    v-bind="slotProps"
                    :icon="false"
                  >
                    Previous
                  </VBtn>
                </template>

                <template #next="slotProps">
                  <VBtn
                    variant="tonal"
                    color="default"
                    v-bind="slotProps"
                    :icon="false"
                  >
                    Next
                  </VBtn>
                </template>
              </VPagination>
            </div>
          </template>

          <template #item.created_at="{ item }">
            <span>{{ item.created_at }}</span>
          </template>
        </VDataTableServer>
      </VCard>

      <AddEditPermissionDialog
        v-model:isDialogVisible="isPermissionDialogVisible"
        v-model:permission-name="permissionName"
      />
      <AddEditPermissionDialog
        v-model:isDialogVisible="isAddPermissionDialogVisible"
      />
    </VCol>
  </VRow>
</template>
<route lang="yaml">
meta:
  redirectIfNotLoggedIn: true
  action: show
  subject: role
</route>
