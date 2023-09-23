<script lang="ts" setup>
import { useApiTokens } from "@/stores/apiToken";
import { useUserStore, UserDevice } from "@/stores/user";
import ApiTokens from "./ApiTokens.vue";
import { UserForm, UserProperties } from "@/types";

interface Props {
    userData: UserProperties;
}
const props = defineProps<Props>();
const userStore = useUserStore();
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const isCurrentPasswordVisible = ref(false);
const isNewPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const passwordForm = ref({
    current_password: "",
    password: "",
    password_confirmation: ""
});
const errors = ref<Record<string, string | undefined>>({
    current_password: undefined,
    password: undefined,
    password_confirmation: undefined
});
async function resetPassword() {
    try {
        await userStore.resetPassword(props.userData.id, passwordForm.value);
        errors.value = {};
    } catch (e: any) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            errors.value = formErrors;
        }
    }
}
const passwordRequirements = ["passwordRequirements_1", "passwordRequirements_2", "passwordRequirements_3"];
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const isOneTimePasswordDialogVisible = ref(false);

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const sessions = ref<UserDevice[]>([]);
function getSessions() {
    // @ts-ignore
    userStore.otherBrowserSessions(props.userData.id).then(val => (sessions.value = val));
}
const isConfirmDialogOpen = ref(false);
const logOutFromOtherBrowsersForm = ref({
    password: "",
    error: undefined
});
async function logOutFromOtherBrowsers(confirm: boolean) {
    if (!confirm) return;
    try {
        await userStore.logOutOtherBrowserSessions(props.userData.id, logOutFromOtherBrowsersForm.value.password);
        logOutFromOtherBrowsersForm.value = { password: "", error: undefined };
        isConfirmDialogOpen.value = false;
        getSessions();
    } catch (e: any) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
            const { errors: formErrors } = e.response.data;
            logOutFromOtherBrowsersForm.value.error = formErrors.password;
        }
    }
}
onMounted(getSessions);
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
</script>

<template>
    <VRow>
        <!-- SECTION: Change Password -->
        <VCol cols="12">
            <VCard :title="$t('Change Password')">
                <VForm @submit.prevent="resetPassword">
                    <VCardText class="pt-0">
                        <!-- 👉 Current Password -->
                        <VRow class="mb-3">
                            <VCol cols="12" md="6">
                                <!-- 👉 current password -->
                                <VTextField
                                    autocomplete="current-password"
                                    v-model="passwordForm.current_password"
                                    :error-messages="errors.current_password"
                                    :type="isCurrentPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    :label="$t('Current Password')"
                                    @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                                />
                            </VCol>
                        </VRow>

                        <!-- 👉 New Password -->
                        <VRow>
                            <VCol cols="12" md="6">
                                <!-- 👉 new password -->
                                <VTextField
                                    autocomplete="new-password"
                                    v-model="passwordForm.password"
                                    :error-messages="errors.password"
                                    :type="isNewPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    :label="$t('New Password')"
                                    @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                                />
                            </VCol>

                            <VCol cols="12" md="6">
                                <!-- 👉 confirm password -->
                                <VTextField
                                    autocomplete="new-password"
                                    v-model="passwordForm.password_confirmation"
                                    :type="isConfirmPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                                    :label="$t('Confirm New Password')"
                                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                                />
                            </VCol>
                        </VRow>
                    </VCardText>

                    <!-- 👉 Password Requirements -->
                    <VCardText>
                        <h6 class="text-base font-weight-medium mb-3">{{ $t("Password Requirements") }}:</h6>

                        <VList class="card-list">
                            <VListItem v-for="item in passwordRequirements" :key="item" :title="$t(item)" class="text-medium-emphasis">
                                <template #prepend>
                                    <VIcon size="8" icon="tabler-circle" class="me-3" />
                                </template>
                            </VListItem>
                        </VList>
                    </VCardText>

                    <!-- 👉 Action Buttons -->
                    <VCardText class="d-flex flex-wrap gap-4">
                        <VBtn type="submit">{{ $t("Save changes") }} </VBtn>

                        <VBtn type="reset" color="secondary" variant="tonal"> {{ $t("Reset") }} </VBtn>
                    </VCardText>
                </VForm>
            </VCard>
        </VCol>
        <!-- !SECTION -->
        <!-- SECTION Two-steps verification -->
        <!-- TODO: this section nead some services implimentation for sms validation -->
        <VCol v-if="false" cols="12">
            <VCard title="Two-steps verification">
                <VCardText>
                    <h6 class="text-base font-weight-semibold mb-3">Two factor authentication is not enabled yet.</h6>
                    <p>
                        Two-factor authentication adds an additional layer of security to your account by
                        <br />
                        requiring more than just a password to log in.
                        <a href="javascript:void(0)" class="text-decoration-none">Learn more.</a>
                    </p>

                    <VBtn @click="isOneTimePasswordDialogVisible = true"> Enable two-FA </VBtn>
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->

        <!-- SECTION: Create an API key -->

        <!-- <ApiTokens /> -->
        <!-- !SECTION -->

        <!-- SECTION Recent Devices -->
        <VCol cols="12">
            <VCard title="Recent Devices">
                <template #append>
                    <VBtn size="small" color="warning" @click="isConfirmDialogOpen = true"> {{ $t("Log Out Other Browsers") }} </VBtn>
                </template>
                <VDivider />
                <VTable class="text-no-wrap">
                    <thead>
                        <tr>
                            <th scope="col">{{ $t("BROWSER") }}</th>
                            <th scope="col">{{ $t("IP") }}</th>
                            <th scope="col">{{ $t("RECENT ACTIVITIES") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="device in sessions" :key="device.last_active">
                            <td class="d-flex align-center">
                                <VIcon start :icon="`logos:${device.agent.browser.toLowerCase()}`" />
                                <h6 class="text-base font-weight-semibold">{{ device.agent.browser }} on {{ device.agent.platform }}</h6>
                            </td>
                            <td>{{ device.ip_address }}</td>
                            <td>{{ device.last_active }}</td>
                        </tr>
                    </tbody>
                </VTable>
            </VCard>
        </VCol>
        <!-- !SECTION -->
    </VRow>

    <!-- SECTION Enable One time password -->
    <EnableOneTimePasswordDialog v-model:isDialogVisible="isOneTimePasswordDialogVisible" />
    <!-- !SECTION -->
    <!-- Confirm Dialog -->
    <ConfirmDialog
        @confirm="logOutFromOtherBrowsers"
        v-model:isDialogVisible="isConfirmDialogOpen"
        :confirmation-msg="$t('confirmation-msg-3')"
    >
        <VTextField
            v-model="logOutFromOtherBrowsersForm.password"
            :label="$t('Confirm password')"
            autocomplete="current-password"
            type="password"
            :error-messages="logOutFromOtherBrowsersForm.error"
        />
    </ConfirmDialog>
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 5px;
}

.server-close-btn {
    inset-inline-end: 0.5rem;
}
</style>
