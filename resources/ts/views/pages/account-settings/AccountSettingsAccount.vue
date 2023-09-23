<script lang="ts" setup>
import avatar1 from "@images/avatars/avatar-14.png";
import { useUserStore } from "@/stores/user";

import { UserForm, UserProperties } from "@/types";
import { requiredValidator } from "@/@core/utils/validators";
import RolesSelectBox from "@/pages/users/components/RolesSelectBox.vue";

interface Props {
    userData: UserProperties;
}
interface Emit {
    (e: "userUpdated", value: UserForm): void;
    (e: "userDeleted"): void;
}
const props = withDefaults(defineProps<Props>(), {
    userData: () => ({
        id: 0,
        name: "",
        email: "",
        avatar: avatar1
    })
});

const emit = defineEmits<Emit>();

const userData = ref<UserProperties>(structuredClone(toRaw(props.userData)));

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
    password: undefined
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
const userStore = useUserStore();

const updateUser = async () => {
    if (!userData.value.id) return;
    try {
        await userStore.updateUser(userData.value.id, userData.value as UserForm);
        errors.value = {};
        emit("userUpdated", userData.value as UserForm);
    } catch (e: any) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            errors.value = formErrors;
        }
    }
};
const destroyAccount = async (confirm: boolean) => {
    if (!confirm || !userData.value.id) return;
    try {
        await userStore.destroyAccount(userData.value.id, confirmationpassword.value);
        errors.value = {};
        emit("userDeleted");
        isConfirmDialogOpen.value = false;
    } catch (e: any) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            errors.value = formErrors;
        }
    }
    confirmationpassword.value = "";
};
</script>

<template>
    <VRow>
        <VCol cols="12">
            <VCard title="Profile Details">
                <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar rounded size="100" class="me-6" :image="userData.avatar" />

                    <!-- 👉 Upload Photo -->
                    <form ref="refForm" class="d-flex flex-column justify-center gap-4">
                        <div class="d-flex flex-wrap gap-2">
                            <VBtn color="primary" @click="refInputEl?.click()">
                                <VIcon icon="tabler-cloud-upload" class="d-sm-none" />
                                <span class="d-none d-sm-block">Upload new photo</span>
                            </VBtn>

                            <input ref="refInputEl" type="file" name="file" hidden @input="changeAvatar" />
                        </div>

                        <p v-if="errors.avatar" class="text-body-1 mb-0 text-error">{{ errors.avatar }}</p>
                        <p v-else class="text-body-1 mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </form>
                </VCardText>

                <VDivider />

                <VCardText class="pt-2">
                    <!-- 👉 Form -->
                    <VForm @submit.prevent="updateUser" class="mt-6">
                        <VRow>
                            <!-- 👉 Full Name -->
                            <VCol md="6" cols="12">
                                <VTextField v-model="userData.name" label="First Name" :error-messages="errors.name" />
                            </VCol>
                            <!-- 👉 Email -->
                            <VCol cols="12" md="6">
                                <VTextField v-model="userData.email" label="E-mail" type="email" :error-messages="errors.email" />
                            </VCol>

                            <!-- 👉 Role -->
                            <VCol cols="12" md="6">
                                <RolesSelectBox :rules="[requiredValidator]" v-model="userData.role" />
                            </VCol>

                            <!-- 👉 Form Actions -->
                            <VCol cols="12" class="d-flex flex-wrap gap-4">
                                <VBtn type="submit">Save changes</VBtn>
                                <VBtn color="secondary" variant="tonal" type="reset" @click.prevent="onFormReset"> Reset </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>

        <VCol cols="12">
            <!-- 👉 Delete Account -->
            <VCard title="Delete Account">
                <VCardText>
                    <!-- 👉 Checkbox and Button  -->
                    <VAlert color="warning" variant="tonal" class="mb-4">
                        <VAlertTitle class="mb-1"> Are you sure you want to delete this account? </VAlertTitle>
                        <p class="mb-0">Once you delete this account, there is no going back. Please be certain.</p>
                    </VAlert>

                    <VBtn color="error" class="mt-3" @click="isConfirmDialogOpen = true"> Deactivate Account </VBtn>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>

    <!-- Confirm Dialog -->
    <ConfirmDialog
        @confirm="destroyAccount"
        v-model:isDialogVisible="isConfirmDialogOpen"
        confirmation-msg="Are you sure you want to deactivate your account?"
    >
        <form>
            <VTextField
                v-model="confirmationpassword"
                label="Confirm password"
                autocomplete="current-password"
                type="password"
                :error-messages="errors.password"
            />
        </form>
    </ConfirmDialog>
</template>
