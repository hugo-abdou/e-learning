<script setup lang="ts">
import type { VForm } from "vuetify/components/VForm";
import { useUserListStore } from "@/stores/useUserListStore";
import type { UserProperties } from "@/types";
import { emailValidator, requiredValidator } from "@validators";
import RolesSelectBox from "@/pages/users/components/RolesSelectBox.vue";
import { useUserStore } from "@/stores/user";

interface Emit {
    (e: "update:isDrawerOpen", value: boolean): void;
    (e: "userData", value: UserProperties): void;
}

interface Props {
    isDrawerOpen: boolean;
    brand?: number;
    disabledRoles?: boolean;
    defaultRoles?: string[];
}

const props = withDefaults(defineProps<Props>(), { isDrawerOpen: false, type: "user" });
const emit = defineEmits<Emit>();

const isPasswordVisible = ref(false);

const isloading = ref(false);
const isFormValid = ref(false);
const refForm = ref<VForm>();
const name = ref("");
const email = ref("");
const password = ref("");
const role = ref();
const errors = ref({
    name: undefined,
    email: undefined,
    password: undefined
});

// 👉 reset form
const resetForm = () => {
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
        errors.value = {
            name: undefined,
            email: undefined,
            password: undefined
        };
    });
};
// 👉 drawer close
const closeNavigationDrawer = () => {
    emit("update:isDrawerOpen", false);
    authStore.refreshUser();
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
};
const userListStore = useUserListStore();

const onSubmit = () => {
    isloading.value = true;
    refForm.value?.validate().then(async ({ valid }) => {
        if (!valid) return;
        try {
            const res = await userListStore.addUser({
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password.value,
                terms: true
            });
            emit("userData", res.data);
            emit("update:isDrawerOpen", false);
            resetForm();
        } catch (error: any) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
        isloading.value = false;
    });
};

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit("update:isDrawerOpen", val);
};

const authStore = useUserStore();

watch(
    () => props.isDrawerOpen,
    val => {
        if (props.defaultRoles) role.value = props.defaultRoles;
        if (!val) return;
    }
);
</script>

<template>
    <VDialog
        :width="$vuetify.display.smAndDown ? 'auto' : 677"
        :model-value="props.isDrawerOpen"
        @update:model-value="handleDrawerModelValueUpdate"
    >
        <!-- Dialog close btn -->
        <DialogCloseBtn @click="closeNavigationDrawer" />
        <VCard title="Create New User" subtitle="Created user details will receive a privacy audit.">
            <VCardText>
                <!-- 👉 Form -->
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- 👉 Full name -->
                        <VCol cols="12" md="6">
                            <VTextField v-model="name" :rules="[requiredValidator]" label="Full Name" :error-messages="errors.name" />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="email"
                                :rules="[requiredValidator, emailValidator]"
                                label="Email"
                                :error-messages="errors.email"
                            />
                        </VCol>
                        <!-- 👉 Password -->
                        <VCol cols="12" md="6">
                            <VTextField
                                v-model="password"
                                label="Password"
                                :rules="[requiredValidator]"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                :error-messages="errors.password"
                            />
                        </VCol>

                        <!-- 👉 Role -->
                        <VCol cols="12" md="6">
                            <RolesSelectBox :rules="[requiredValidator]" v-model="role" />
                        </VCol>

                        <!-- 👉 Submit and Cancel -->
                        <VCol cols="12">
                            <VBtn type="submit" class="me-3" :loading="isloading" :disabled="isloading"> Submit </VBtn>
                            <VBtn type="reset" variant="tonal" color="secondary" @click="closeNavigationDrawer"> Cancel </VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>
</template>
