<script setup lang="ts">
import { VForm } from "vuetify/lib/components/index.mjs";

interface Props {
    confirmationQuestion: string;
    confirmationMsg?: string;
    isDialogVisible: boolean;
    confirmTitle?: string;
    confirmMsg?: string;
    cancelTitle?: string;
    cancelMsg?: string;
    passwordTitle?: string;
    passwordMsg?: string;
    passwordErrorMsg?: string;
    password?: string;
}
const props = defineProps<Props>();

interface Emit {
    (e: "update:isDialogVisible", value: boolean): void;
    (e: "update:password", value: string): void;
    (e: "confirm", value: boolean): void;
    (e: "password"): void;
}
const emit = defineEmits<Emit>();

const form = ref<VForm>();

const askForPassword = ref(false);
const unsubscribed = ref(false);
const cancelled = ref(false);

const updateModelValue = (val: boolean) => {
    emit("update:isDialogVisible", val);
};

const onPassword = () => {
    form.value?.validate().then(({ valid }) => {
        if (valid) {
            emit("password");
            askForPassword.value = false;
        }
    });
};

const onConfirmation = () => {
    emit("confirm", true);
    updateModelValue(false);
    if (props.confirmTitle) unsubscribed.value = true;
    if (props.passwordTitle) askForPassword.value = true;
};

const onCancel = () => {
    emit("confirm", false);
    emit("update:isDialogVisible", false);
    if (props.cancelTitle) cancelled.value = true;
};

const iconProps = {
    icon: true,
    variant: "outlined",
    class: "my-4",
    style: "block-size: 88px;inline-size: 88px;pointer-events: none;",
} as any;
</script>

<template>
    <!-- 👉 Confirm Dialog -->
    <VDialog
        max-width="500"
        :model-value="props.isDialogVisible"
        @update:model-value="updateModelValue"
    >
        <VCard class="text-center px-10 py-6">
            <VCardText>
                <VBtn
                    color="warning"
                    v-bind="iconProps"
                >
                    <span class="text-5xl">!</span>
                </VBtn>
                <h6 class="text-lg font-weight-medium">
                    {{ props.confirmationQuestion }}
                </h6>

                <p>{{ props.confirmationMsg }}</p>
            </VCardText>

            <VCardText>
                <slot />
            </VCardText>

            <VCardText class="d-flex align-center justify-center gap-2">
                <VBtn
                    variant="elevated"
                    @click="onConfirmation"
                >
                    Confirm
                </VBtn>

                <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="onCancel"
                >
                    Cancel
                </VBtn>
            </VCardText>
        </VCard>
    </VDialog>

    <!-- Unsubscribed -->
    <VDialog
        v-model="unsubscribed"
        max-width="500"
    >
        <VCard>
            <VCardText class="text-center px-10 py-6">
                <VBtn
                    color="success"
                    v-bind="iconProps"
                >
                    <span class="text-3xl">
                        <VIcon icon="tabler-check" />
                    </span>
                </VBtn>

                <h1 class="text-h4 mb-4">
                    {{ props.confirmTitle }}
                </h1>

                <p>{{ props.confirmMsg }}</p>

                <VBtn
                    color="success"
                    @click="unsubscribed = false"
                >
                    Ok
                </VBtn>
            </VCardText>
        </VCard>
    </VDialog>

    <!-- Password -->
    <VDialog
        v-model="askForPassword"
        max-width="500"
    >
        <VCard>
            <VCardText class="text-center px-10 py-6">
                <VBtn
                    color="error"
                    v-bind="iconProps"
                >
                    <span class="text-3xl">
                        <VIcon icon="tabler-password-fingerprint" />
                    </span>
                </VBtn>
                <h1 class="text-h4 mb-4">
                    {{ props.passwordTitle }}
                </h1>
                <p>{{ props.passwordMsg }}</p>
                <VForm
                    ref="form"
                    @submit.prevent="onPassword"
                >
                    <VTextField
                        :model-value="password"
                        @update:model-value="emit('update:password', $event)"
                        :label="$t('Confirm password')"
                        autocomplete="current-password"
                        :rules="[requiredValidator]"
                        :error-messages="passwordErrorMsg"
                        type="password"
                        class="mb-4"
                    />
                    <VBtn
                        type="submit"
                        color="success"
                    >
                        Submit
                    </VBtn>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>

    <!-- Cancelled -->
    <VDialog
        v-model="cancelled"
        max-width="500"
    >
        <VCard>
            <VCardText class="text-center px-10 py-6">
                <VBtn
                    color="error"
                    v-bind="iconProps"
                >
                    <span class="text-5xl font-weight-light">X</span>
                </VBtn>
                <h1 class="text-h4 mb-4">
                    {{ props.cancelTitle }}
                </h1>
                <p>{{ props.cancelMsg }}</p>
                <VBtn
                    color="success"
                    @click="cancelled = false"
                >
                    Ok
                </VBtn>
            </VCardText>
        </VCard>
    </VDialog>
</template>
