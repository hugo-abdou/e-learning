<script lang="ts" setup>
import avatar1 from "@images/avatars/avatar-14.png";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const accountData = {
    avatar: userStore.avatar || avatar1,
    name: userStore.name,
    email: userStore.email
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
const accountDataLocal = ref(structuredClone(accountData));
const isAccountDeactivated = ref(false);

const validateAccountDeactivation = [(v: string) => !!v || "Please confirm account deactivation"];

const resetForm = () => {
    accountDataLocal.value = structuredClone(accountData);
};

const changeAvatar = (file: Event) => {
    const fileReader = new FileReader();
    const { files } = file.target as HTMLInputElement;

    if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") accountDataLocal.value.avatar = fileReader.result;
        };
    }
};

// reset avatar image
const resetAvatar = () => {
    accountDataLocal.value.avatar = accountData.avatar;
};

const updateUser = async () => {
    try {
        await userStore.updateUser({ ...accountDataLocal.value, id: userStore.id });
        errors.value = {};
    } catch (e: any) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            errors.value = formErrors;
        }
    }
};
const destroyAccount = async () => {
    try {
        await userStore.destroyAccount(confirmationpassword.value);
        errors.value = {};
    } catch (e: any) {
        if (!e.response) throw e;
        console.log(e.response);
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            errors.value = formErrors;
        }
    }
};
</script>

<template>
    <VRow>
        <VCol cols="12">
            <VCard title="Profile Details">
                <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar rounded size="100" class="me-6" :image="accountDataLocal.avatar" />

                    <!-- 👉 Upload Photo -->
                    <form ref="refForm" class="d-flex flex-column justify-center gap-4">
                        <div class="d-flex flex-wrap gap-2">
                            <VBtn color="primary" @click="refInputEl?.click()">
                                <VIcon icon="tabler-cloud-upload" class="d-sm-none" />
                                <span class="d-none d-sm-block">Upload new photo</span>
                            </VBtn>

                            <input ref="refInputEl" type="file" name="file" hidden @input="changeAvatar" />

                            <VBtn type="reset" color="secondary" variant="tonal" @click="resetAvatar">
                                <span class="d-none d-sm-block">Reset</span>
                                <VIcon icon="tabler-refresh" class="d-sm-none" />
                            </VBtn>
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
                                <VTextField v-model="accountDataLocal.name" label="First Name" :error-messages="errors.name" />
                            </VCol>
                            <!-- 👉 Email -->
                            <VCol cols="12" md="6">
                                <VTextField v-model="accountDataLocal.email" label="E-mail" type="email" :error-messages="errors.email" />
                            </VCol>

                            <!-- 👉 Form Actions -->
                            <VCol cols="12" class="d-flex flex-wrap gap-4">
                                <VBtn type="submit">Save changes</VBtn>
                                <VBtn color="secondary" variant="tonal" type="reset" @click.prevent="resetForm"> Reset </VBtn>
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
                        <VAlertTitle class="mb-1"> Are you sure you want to delete your account? </VAlertTitle>
                        <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                    </VAlert>
                    <div>
                        <VCheckbox
                            v-model="isAccountDeactivated"
                            :rules="validateAccountDeactivation"
                            label="I confirm my account deactivation"
                        />
                    </div>

                    <VBtn :disabled="!isAccountDeactivated" color="error" class="mt-3" @click="isConfirmDialogOpen = true">
                        Deactivate Account
                    </VBtn>
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
        <VTextField v-model="confirmationpassword" label="Confirm password" type="password" :error-messages="errors.password" />
    </ConfirmDialog>
</template>
