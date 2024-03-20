<script setup lang="ts">
import { VForm } from "vuetify/components/VForm";
import { useUsersStore } from "@/stores/useUsersStore";
import type { User } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useAuthStore } from "@/stores/useAuthStore";
import avatar1 from "@images/avatars/avatar-1.png";
import { capitalizeWords } from "@/helpers";

interface Emit {
    (e: "update:isDrawerOpen", value: boolean): void;
    (e: "userData", value: User): void;
}

interface Props {
    isDrawerOpen: boolean;
    brand?: number;
    disabledRoles?: boolean;
    defaultRoles?: string[];
}

const props = withDefaults(defineProps<Props>(), { isDrawerOpen: false, defaultRoles: () => ["admin"] });
const emit = defineEmits<Emit>();

const isPasswordVisible = ref(false);

const isloading = ref(false);
const isFormValid = ref(false);
const refForm = ref<VForm>();
const name = ref("");
const email = ref("");
const password = ref("");
const roles = ref(props.defaultRoles);
const avatar = ref(avatar1);
const refInputEl = ref<HTMLElement>();
const errors = ref({
    name: undefined,
    email: undefined,
    password: undefined,
    avatar: undefined,
});

// 👉 reset form
const resetForm = () => {
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
        errors.value = {
            name: undefined,
            email: undefined,
            password: undefined,
            avatar: undefined,
        };
    });
};

const changeAvatar = (file: Event) => {
    const fileReader = new FileReader();
    const { files } = file.target as HTMLInputElement;

    if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") avatar.value = fileReader.result;
        };
    }
};

const userStore = useUsersStore();
// 👉 drawer close
const closeNavigationDrawer = () => {
    emit("update:isDrawerOpen", false);
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
};

const onSubmit = () => {
    isloading.value = true;
    refForm.value?.validate().then(async ({ valid, errors: err }) => {
        try {
            if (!valid) throw new Error(JSON.stringify(err));
            const res = await userStore.addUser({
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password.value,
                roles: roles.value,
                avatar: avatar.value,
                terms: true,
            });

            emit("userData", res.data);
            emit("update:isDrawerOpen", false);
            resetForm();
        } catch (error: any) {
            if (error.status === 422) errors.value = error._data.errors;
            console.error(error);
        } finally {
            isloading.value = false;
        }
    });
};

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit("update:isDrawerOpen", val);
};

const authStore = useAuthStore();

watch(
    () => props.isDrawerOpen,
    (val) => {
        if (props.defaultRoles) roles.value = props.defaultRoles;
        if (!val) return;
    }
);
</script>

<template>
    <VNavigationDrawer
        temporary
        :width="500"
        location="end"
        class="scrollable-content"
        :model-value="props.isDrawerOpen"
        @update:model-value="handleDrawerModelValueUpdate"
    >
        <!-- 👉 Title -->
        <AppDrawerHeaderSection
            :title="`Add New ${capitalizeWords(defaultRoles[0])}`"
            @cancel="closeNavigationDrawer"
        />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard subtitle="Created user details will receive a privacy audit.">
                <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar
                        rounded
                        size="100"
                        class="me-6"
                        :image="avatar"
                    />

                    <!-- 👉 Upload Photo -->
                    <form
                        ref="avatarForm"
                        class="d-flex flex-column justify-center gap-4"
                    >
                        <div class="d-flex flex-wrap gap-2">
                            <VBtn
                                color="primary"
                                @click="refInputEl?.click()"
                            >
                                <VIcon
                                    icon="tabler-cloud-upload"
                                    class="d-sm-none"
                                />
                                <span class="d-none d-sm-block">{{ $t("Upload new photo") }}</span>
                            </VBtn>

                            <input
                                ref="refInputEl"
                                type="file"
                                name="file"
                                hidden
                                @input="changeAvatar"
                            />
                        </div>

                        <p
                            v-if="errors.avatar"
                            class="text-body-1 mb-0 text-error"
                        >
                            {{ errors.avatar }}
                        </p>
                        <p
                            v-else
                            class="text-body-1 mb-0"
                        >
                            {{ $t("Allowed-ext") }}
                        </p>
                    </form>
                </VCardText>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm
                        ref="refForm"
                        v-model="isFormValid"
                        @submit.prevent="onSubmit"
                    >
                        <VRow>
                            <!-- 👉 Full name -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="name"
                                    :rules="[requiredValidator]"
                                    label="Full Name"
                                    :error-messages="errors.name"
                                />
                            </VCol>

                            <!-- 👉 Email -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="email"
                                    :rules="[requiredValidator, emailValidator]"
                                    label="Email"
                                    autocomplete="username"
                                    :error-messages="errors.email"
                                />
                            </VCol>
                            <!-- 👉 Password -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="password"
                                    label="Password"
                                    autocomplete="current-password"
                                    :rules="[requiredValidator]"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    :error-messages="errors.password"
                                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                />
                            </VCol>

                            <!-- 👉 Role -->
                            <VCol cols="12">
                                <!-- <RolesSelectBox
                                    :multiple="false"
                                    v-model="role"
                                    :rules="[requiredValidator]"
                                /> -->
                            </VCol>

                            <!-- 👉 Submit and Cancel -->
                            <VCol cols="12">
                                <VBtn
                                    type="submit"
                                    class="me-3"
                                    :loading="isloading"
                                    :disabled="isloading"
                                >
                                    Submit
                                </VBtn>
                                <VBtn
                                    type="reset"
                                    variant="tonal"
                                    color="secondary"
                                    @click="closeNavigationDrawer"
                                >
                                    Cancel
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>
