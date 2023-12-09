<script setup lang="ts">
import { useRolesStore } from "@/stores/useRolesStore";
import { useUserStore } from "@/stores/user";
import { Role } from "@/types";
import girlUsingMobile from "@images/pages/girl-using-mobile.png";

const rolesStore = useRolesStore();

// 👉 Roles List
const dataList = ref<Role[]>();
const roles = computed(() =>
  dataList.value?.filter(({ type }) => type === "role")
);
const plans = computed(() =>
  dataList.value?.filter(({ type }) => type === "plan")
);

const isRoleDialogVisible = ref(false);

const roleDetail = ref<Role>();

const isAddRoleDialogVisible = ref(false);
const RoleDialogFormType = ref<"role" | "plan">("role");

const editPermission = (value: Role, type: "plan" | "role") => {
  RoleDialogFormType.value = type;
  isRoleDialogVisible.value = true;
  roleDetail.value = value;
};
const getRoles = async () => {
  try {
    const res = await rolesStore.fetchRoles({});
    dataList.value = res.data;
  } catch (error) {
    console.error(error);
  }
};
const onRoleChange = async () => {
  try {
    await getRoles();
    useUserStore().refreshUser();
  } catch (error) {
    console.error(error);
  }
};

onMounted(getRoles);

const addRole = (type: "plan" | "role") => {
  isAddRoleDialogVisible.value = true;
  RoleDialogFormType.value = type;
};
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h4 class="text-h4 mb-6">Roles List</h4>
      <p class="mb-0">
        A role provided access to predefined menus so that depending on assigned
        role an administrator can have access to what he need
      </p>
    </VCol>

    <!-- 👉 Roles Cards -->
    <VCol cols="12">
      <VRow>
        <!-- 👉 Roles -->
        <VCol v-for="item in roles" :key="item.name" cols="12" sm="6" lg="4">
          <VCard class="h-100">
            <VCardText class="d-flex align-center pb-1">
              <h4 class="text-h4">
                {{ item.name }}
              </h4>
              <VSpacer />

              <div v-if="item.users?.length" class="v-avatar-group">
                <template v-for="(user, index) in item.users" :key="user">
                  <AvatarLink
                    :size="36"
                    v-if="item.users.length > 4 && index < 3"
                    :user="user"
                  />
                  <AvatarLink
                    :size="36"
                    v-if="item.users.length <= 4"
                    :user="user"
                  />
                </template>
                <VAvatar
                  v-if="item.users.length > 4"
                  :color="$vuetify.theme.current.dark ? '#4A5072' : '#f6f6f7'"
                >
                  <span> +{{ item.users.length - 3 }} </span>
                </VAvatar>
              </div>
            </VCardText>

            <VCardText class="py-10">
              <span>Total {{ item.users?.length }} users</span>
              <div class="d-flex align-center">
                <a
                  href="javascript:void(0)"
                  @click="editPermission(item, 'role')"
                >
                  Edit Role
                </a>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <!-- 👉 Add New Role -->
        <VCol cols="12" sm="6" lg="4">
          <VCard class="h-100" :ripple="false" @click="addRole('role')">
            <VRow no-gutters class="h-100">
              <VCol
                cols="5"
                class="d-flex flex-column justify-end align-center mt-5"
              >
                <img width="85" :src="girlUsingMobile" />
              </VCol>

              <VCol cols="7">
                <VCardText
                  class="d-flex flex-column align-end justify-end gap-2 h-100"
                  style="text-align: end"
                >
                  <VBtn>Add New Role</VBtn>
                  <span>Add role, if it doesn't exist.</span>
                </VCardText>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
    <VCol cols="12">
      <h4 class="text-h4 mb-6">Plans List</h4>
      <p class="mb-0">
        A (jvzoo) plan provided access to predefined features so that depending
        on assigned plan an administrator can have access to what he need
      </p>
    </VCol>
    <!-- 👉 plans Cards -->
    <VCol cols="12">
      <VRow>
        <!-- 👉 Roles -->
        <VCol v-for="item in plans" :key="item.name" cols="12" sm="6" lg="4">
          <VCard class="h-100">
            <VCardText class="d-flex align-center pb-1">
              <h4 class="text-h4">
                {{ item.name }}
              </h4>
              <VSpacer />

              <div v-if="item.users?.length" class="v-avatar-group">
                <template v-for="(user, index) in item.users" :key="user">
                  <AvatarLink
                    :size="36"
                    v-if="item.users.length > 4 && index < 3"
                    :user="user"
                  />
                  <AvatarLink
                    :size="36"
                    v-if="item.users.length <= 4"
                    :user="user"
                  />
                </template>
                <VAvatar
                  v-if="item.users.length > 4"
                  :color="$vuetify.theme.current.dark ? '#4A5072' : '#f6f6f7'"
                >
                  <span> +{{ item.users.length - 3 }} </span>
                </VAvatar>
              </div>
            </VCardText>

            <VCardText class="py-10">
              <span>Total {{ item.users?.length }} users</span>
              <div class="d-flex align-center">
                <a
                  href="javascript:void(0)"
                  @click="editPermission(item, 'plan')"
                >
                  Edit Plan
                </a>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <!-- 👉 Add New Role -->
        <VCol cols="12" sm="6" lg="4">
          <VCard class="h-100" :ripple="false" @click="addRole('plan')">
            <VRow no-gutters class="h-100">
              <VCol
                cols="5"
                class="d-flex flex-column justify-end align-center mt-5"
              >
                <img width="85" :src="girlUsingMobile" />
              </VCol>

              <VCol cols="7">
                <VCardText
                  class="d-flex flex-column align-end justify-end gap-2 h-100"
                  style="text-align: end"
                >
                  <VBtn>Add New Plan</VBtn>
                  <span>Add plan, if it doesn't exist.</span>
                </VCardText>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
    <AddEditRoleDialog
      :type="RoleDialogFormType"
      v-model:is-dialog-visible="isAddRoleDialogVisible"
      @roleCreated="onRoleChange"
    />
    <!-- @vue-skip -->
    <AddEditRoleDialog
      v-model:is-dialog-visible="isRoleDialogVisible"
      v-model:role-permissions="roleDetail"
      :type="RoleDialogFormType"
      @roleCreated="onRoleChange"
    />
  </VRow>
</template>
<route lang="yaml">
meta:
  redirectIfNotLoggedIn: true
  action: show
  subject: role
</route>
