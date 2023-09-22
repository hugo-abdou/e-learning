<script setup lang="ts">
import { UserForm } from "@/types";

interface Props {
    userData?: UserForm;
    isDialogVisible: boolean;
}

interface Emit {
    (e: "submit", value: UserForm): void;
    (e: "update:isDialogVisible", val: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
    userData: () => ({
        id: 0,
        name: "",
        role: "",
        email: "",
        currentPlan: "",
        avatar: "",
    })
});

const emit = defineEmits<Emit>();

const userData = ref<UserForm>(structuredClone(toRaw(props.userData)));
const isUseAsBillingAddress = ref(false);

watch(props, () => {
    userData.value = structuredClone(toRaw(props.userData));
});

const onFormSubmit = () => {
    emit("update:isDialogVisible", false);
    emit("submit", userData.value);
};

const onFormReset = () => {
    userData.value = structuredClone(toRaw(props.userData));

    emit("update:isDialogVisible", false);
};

const dialogModelValueUpdate = (val: boolean) => {
    emit("update:isDialogVisible", val);
};
</script>

<template>
    <VDialog
        :width="$vuetify.display.smAndDown ? 'auto' : 677"
        :model-value="props.isDialogVisible"
        @update:model-value="dialogModelValueUpdate"
    >
        <!-- Dialog close btn -->
        <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

        <VCard class="pa-sm-8 pa-5">
            <VCardItem class="text-center">
                <VCardTitle class="text-h5 mb-3"> Edit User Information </VCardTitle>
                <p class="mb-0">Updating user details will receive a privacy audit.</p>
            </VCardItem>

            <VCardText>
                <!-- 👉 Form -->
                <VForm class="mt-6" @submit.prevent="onFormSubmit">
                    <VRow>
                        <!-- 👉 First Name -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.fullName.split(' ')[0]" label="first Name" />
                        </VCol>

                        <!-- 👉 Last Name -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.fullName.split(' ')[1]" label="Last Name" />
                        </VCol>

                        <!-- 👉 Billing Email -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.email" label="Billing Email" />
                        </VCol>

                        <!-- 👉 Status -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.status" label="Status" />
                        </VCol>

                        <!-- 👉 Tax Id -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.taxId" label="Tax Id" />
                        </VCol>

                        <!-- 👉 Contact -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.contact" label="Contact" />
                        </VCol>

                        <!-- 👉 Language -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.language" chips multiple label="Language" />
                        </VCol>

                        <!-- 👉 Country -->
                        <VCol cols="12" md="6">
                            <AppTextField v-model="userData.country" label="Country" />
                        </VCol>

                        <!-- 👉 Switch -->
                        <VCol cols="12">
                            <VSwitch v-model="isUseAsBillingAddress" density="compact" label="Use as a billing address?" />
                        </VCol>

                        <!-- 👉 Submit and Cancel -->
                        <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
                            <VBtn type="submit"> Submit </VBtn>

                            <VBtn color="secondary" variant="tonal" @click="onFormReset"> Cancel </VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </VDialog>
</template>
