<script setup lang="ts">
import { requiredValidator, urlValidator } from "@/@core/utils/validators";
import { getAction, getName } from "@/helpers";
import { useRolesStore } from "@/stores/useRolesStore";
import { VForm } from "vuetify/components/VForm";
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";

interface Permission {
  [key: string]: boolean | string;
  name: string;
}

interface Roles {
  id?: number;
  name: string;
  type: string;
  permissions: string[];
}

interface Props {
  rolePermissions?: Roles;
  isDialogVisible: boolean;
  type?: "role" | "plan";
}
interface Emit {
  (e: "update:isDialogVisible", value: boolean): void;
  (e: "roleCreated", value: Roles): void;
}

const props = withDefaults(defineProps<Props>(), {
  rolePermissions: () => ({
    name: "",
    type: "",
    permissions: [],
  }),
});

const emit = defineEmits<Emit>();

// 👉 Permission List
const permissions = ref<Permission[]>([]);

const rolesStore = useRolesStore();
const getPermissions = async () => {
  const res = await rolesStore.fetchPermissions();
  permissions.value = res.data.reduce(
    (result: Permission[], current: { id: number; name: string }) => {
      const _name = getName(current.name);
      const action = getAction(current.name);
      const permissionIndex = result.findIndex(({ name }) => name === _name);
      if (permissionIndex !== -1) {
        result[permissionIndex][action] = false;
      } else {
        result.push({
          name: _name,
          [action]: false,
        });
      }
      return result;
    },
    []
  );
};
onMounted(getPermissions);

const form = ref({
  name: "",
  type: "",
  permissions: [] as string[],
  payment_link: null,
  jvzoo_ids: null,
  code: null,
  max_projects: {
    canAddQrcode: false,
    canAddImage: false,
    qrcode: 0,
    image: 0,
  },
  canAddAgent: false,
  max_agents: 0,
  canAddWhitelabel: false,
  max_whitelabel: 0,
  max_subusers: 0,
  storage: 0,
  email_subject: null,
  email_content: {},
});

const storage = computed({
  get: () => {
    return form.value.storage >= 0
      ? (form.value.storage / 1024 / 1024).toFixed(0)
      : (-1).toFixed(0);
  },
  set: (val) => {
    form.value.storage =
      parseInt(val) >= 0 ? parseInt(val) * 1024 * 1024 : parseInt(val);
  },
});

watch(
  () => props.isDialogVisible,
  (val) => {
    if (!val) return;
    Object.assign(form.value, { ...props.rolePermissions, type: props.type });
  }
);

const handelEditorChange = async (editor: any) => {
  const data = await editor.save();
  form.value.email_content = data;
};

const refPermissionForm = ref<VForm>();

const onSubmit = async (validate: SubmitEventPromise, action: string) => {
  try {
    const { valid } = await validate;
    if (!valid) return;
    if (action === "create") await rolesStore.addRole(form.value);
    if (action === "update")
      await rolesStore.updateRole(props.rolePermissions.id || 0, form.value);
    emit("roleCreated", form.value);
    emit("update:isDialogVisible", false);
    refPermissionForm.value?.reset();
  } catch (error) {
    console.error(error);
  }
};

const onReset = () => emit("update:isDialogVisible", false);
const close = () => emit("update:isDialogVisible", false);
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="close"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="close" />

    <VCard class="pa-sm-8 pa-5">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 mb-3">
          {{ props.rolePermissions.name ? "Edit" : "Add New" }} {{ form.type }}
        </VCardTitle>
      </VCardItem>

      <VCardText class="mt-6">
        <!-- 👉 Form -->
        <VForm
          ref="refPermissionForm"
          @submit.prevent="
            onSubmit($event, rolePermissions.name ? 'update' : 'create')
          "
        >
          <VRow>
            <!-- 👉 Role name -->
            <VCol cols="12" md="6">
              <VTextField
                :rules="[requiredValidator]"
                v-model="form.name"
                :label="`${form.type} Name`"
              />
            </VCol>
            <!-- 👉 Role type -->
            <!-- <VCol cols="12" md="6">
                            <AppSelect
                                v-model="form.type"
                                :items="[
                                    { value: 'plan', title: 'plan' },
                                    { value: 'role', title: 'role' }
                                ]"
                            />
                        </VCol> -->
          </VRow>

          <!-- 👉 Plan Options -->
          <VRow v-if="form.type === 'plan'">
            <!-- 👉 Payment Link -->
            <VCol cols="12" md="6">
              <VTextField
                :rules="[requiredValidator, urlValidator]"
                v-model="form.payment_link"
                label="Payment Link"
              />
            </VCol>

            <!-- 👉 Email Subject -->
            <VCol cols="12">
              <VTextField
                :rules="[requiredValidator]"
                v-model="form.email_subject"
                label="Email Subject"
              />
            </VCol>
            <VCol cols="12">
              <VLabel class="ml-3">Email Content</VLabel>
              <EditorJs
                class="border rounded py-2"
                :content="form.email_content"
                @change="handelEditorChange"
              />
            </VCol>
          </VRow>

          <!-- 👉 Role Permissions -->
          <VTable
            v-if="form.type === 'role'"
            class="permission-table text-no-wrap"
          >
            <!-- 👉 Admin  -->
            <tr>
              <td><h6 class="text-h4 mt-8 mb-3">Role Permissions</h6></td>
              <td colspan="10"></td>
            </tr>

            <!-- 👉 Other permission loop -->
            <template v-for="permission in permissions" :key="permission.name">
              <tr>
                <td>{{ permission.name }}</td>
                <template v-for="(value, key) in permission" :key="key">
                  <td v-if="key !== 'name'">
                    <div class="d-flex justify-end">
                      <VCheckbox
                        v-model="form.permissions"
                        :value="`${key}_${permission.name}`"
                        :label="key.toString()"
                      />
                    </div>
                  </td>
                </template>
                <td colspan="10"></td>
              </tr>
            </template>
          </VTable>

          <!-- 👉 Actions button -->
          <div class="d-flex align-center justify-center gap-3 mt-6">
            <VBtn type="submit">Submit</VBtn>
            <VBtn color="secondary" variant="tonal" @click="onReset"
              >Cancel</VBtn
            >
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.permission-table {
  td {
    border-block-end: 1px solid
      rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 0.5rem;

    .v-checkbox {
      min-inline-size: 4.75rem;
    }

    &:not(:first-child) {
      padding-inline: 0.5rem;
    }

    .v-label {
      white-space: nowrap;
    }
  }
}
</style>
