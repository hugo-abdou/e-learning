<script lang="ts" setup>
import { useAuthStore } from "@/stores/useAuthStore";
import avatar1 from "@images/avatars/avatar-14.png";

import { requiredValidator } from "@/@core/utils/validators";
import { User, UserForm } from "@/types";

interface Props {
    userData: User;
}
interface Emit {
    (e: "userUpdated", value: UserForm): void;
    (e: "userDeleted"): void;
}

const props = withDefaults(defineProps<Props>(), {
    userData: () => ({
        id: 0,
        name: "",
        role: [],
        email: "",
        avatar: avatar1,
        roles: [],
        permissions: [],
        avaliableRoles: [],
        verified: false,
    }),
});

const emit = defineEmits<Emit>();

const userData = ref<User>(structuredClone(toRaw(props.userData)));

watch(props, () => {
    userData.value = structuredClone(toRaw(props.userData));
});

const onFormReset = () => {
    userData.value = structuredClone(toRaw(props.userData));
};

const confirmationpassword = ref("");

const errors = ref<Record<string, string | undefined>>({
    email: undefined,
    name: undefined,
    avatar: undefined,
    password: undefined,
});

const refInputEl = ref<HTMLElement>();

const isConfirmDialogOpen = ref(false);

const changeAvatar = (file: Event) => {
    const fileReader = new FileReader();
    const { files } = file.target as HTMLInputElement;

    if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") userData.value.avatar = fileReader.result;
        };
    }
};

const userStore = useAuthStore();

const updateUser = async () => {
    if (!userData.value.id) return;
    try {
        await userStore.updateUser(userData.value.id, userData.value as UserForm);
        errors.value = {};
        emit("userUpdated", userData.value as UserForm);
    } catch (e: any) {
        if (!e.status) throw e;
        if (e.status === 422) {
            const { errors: formErrors } = e._data;
            errors.value = formErrors;
        }
    }
};

const destroyAccount = async () => {
    if (!userData.value.id) return;
    try {
        await userStore.destroyAccount(userData.value.id, confirmationpassword.value);
        errors.value = {};
        emit("userDeleted");
        isConfirmDialogOpen.value = false;
        confirmationpassword.value = "";
    } catch (e: any) {
        if (e.status === 422) {
            const { errors: formErrors } = e._data;
            errors.value = formErrors;
            isConfirmDialogOpen.value = true;
            return;
        }
        throw e;
    }
};
</script>

<template>
    <VRow>
        <VCol cols="12">
            <VCard :title="$t('Profile Details')">
                <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar
                        rounded
                        size="100"
                        class="me-6"
                        :image="userData.avatar"
                    />

                    <!-- 👉 Upload Photo -->
                    <form
                        ref="refForm"
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

                <VDivider />

                <VCardText class="pt-2">
                    <!-- 👉 Form -->
                    <VForm
                        class="mt-6"
                        @submit.prevent="updateUser"
                    >
                        <VRow>
                            <!-- 👉 Full Name -->
                            <VCol
                                md="6"
                                cols="12"
                            >
                                <VTextField
                                    v-model="userData.name"
                                    :label="$t('First Name')"
                                    :error-messages="errors.name"
                                />
                            </VCol>
                            <!-- 👉 Email -->
                            <VCol
                                cols="12"
                                md="6"
                            >
                                <VTextField
                                    v-model="userData.email"
                                    :label="$t('E-mail')"
                                    type="email"
                                    :error-messages="errors.email"
                                />
                            </VCol>

                            <!-- 👉 Role -->
                            <VCol
                                cols="12"
                                md="6"
                            >
                                <!-- <RolesSelectBox
                                    v-model="userData.roles"
                                    :rules="[requiredValidator]"
                                /> -->
                            </VCol>

                            <!-- 👉 Form Actions -->
                            <VCol
                                cols="12"
                                class="d-flex flex-wrap gap-4"
                            >
                                <VBtn type="submit">
                                    {{ $t("Save changes") }}
                                </VBtn>
                                <VBtn
                                    color="secondary"
                                    variant="tonal"
                                    type="reset"
                                    @click.prevent="onFormReset"
                                >
                                    {{ $t("Reset") }}
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>

        <VCol cols="12">
            <!-- 👉 Delete Account -->
            <VCard :title="$t('Delete Account')">
                <VCardText>
                    <!-- 👉 Checkbox and Button  -->
                    <VAlert
                        color="warning"
                        variant="tonal"
                        class="mb-4"
                    >
                        <VAlertTitle class="mb-1">
                            {{ $t("confirmation-msg-1") }}
                        </VAlertTitle>
                        <p class="mb-0">
                            {{ $t("confirmation-msg-2") }}
                        </p>
                    </VAlert>

                    <VBtn
                        color="error"
                        class="mt-3"
                        @click="isConfirmDialogOpen = true"
                    >
                        {{ $t("Deactivate Account") }}
                    </VBtn>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>

    <!-- Confirm Dialog -->
    <ConfirmDialog
        v-model:isDialogVisible="isConfirmDialogOpen"
        v-model:password="confirmationpassword"
        confirmation-question="Are you sure to cancel your subscription?"
        password-title="This Action Requires Password"
        :password-error-msg="errors.password"
        @password="destroyAccount"
    >
    </ConfirmDialog>
</template>
