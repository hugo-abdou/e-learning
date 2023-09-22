<template>
    <VCol cols="12">
        <VCard title="Create an API key">
            <VRow no-gutters>
                <!-- 👉 Choose API Key -->
                <VCol cols="12" md="5" order-md="0" order="1">
                    <VCardText>
                        <VForm ref="refVForm" @submit.prevent="create">
                            <VRow>
                                <!-- 👉 Name the API Key -->
                                <VCol cols="12" align-self="center">
                                    <VTextField name="nameee" :rules="[requiredValidator]" v-model="form.name" label="Name the API key" />
                                </VCol>

                                <!-- 👉 Create Key Button -->
                                <VCol cols="12">
                                    <VBtn type="submit" block> Create Key </VBtn>
                                </VCol>
                            </VRow>
                        </VForm>
                    </VCardText>
                </VCol>

                <!-- 👉 Lady image -->
                <VCol cols="12" md="7" order="0" order-md="1" class="d-flex flex-column justify-center align-center">
                    <!-- <VImg :src="laptopGirl" :width="200" :style="$vuetify.display.smAndDown ? '' : 'position: absolute; bottom: 0;'" /> -->
                </VCol>
            </VRow>
        </VCard>
    </VCol>
    <!-- SECTION: API Keys List -->
    <VCol cols="12">
        <VCard title="API Key List &amp; Access">
            <VCardText>
                An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing
                public data anonymously, and are used to associate API requests with your project for quota and billing.
            </VCardText>

            <!-- 👉 Server Status -->
            <VCardText class="d-flex flex-column gap-y-4">
                <VCard v-for="serverKey in apiTokensStore.list" :key="serverKey.id" flat variant="tonal" class="pa-4">
                    <VBtn icon variant="plain" size="25" color="default" class="position-absolute server-close-btn">
                        <VIcon icon="tabler-dots-vertical" />

                        <VMenu activator="parent">
                            <VList>
                                <VListItem
                                    v-for="(item, index) in [
                                        { icon: 'tabler-pencil', text: 'Edit' },
                                        { icon: 'tabler-trash', text: 'Delete' }
                                    ]"
                                    :key="index"
                                    :value="index"
                                    :title="item.text"
                                >
                                    <template #prepend>
                                        <VIcon :icon="item.icon" class="me-2" />
                                    </template>
                                </VListItem>
                            </VList>
                        </VMenu>
                    </VBtn>

                    <div class="d-flex align-center flex-wrap mb-3">
                        <h6 class="text-h6 me-3">
                            {{ serverKey.name }}
                        </h6>

                        <!-- <VChip label color="primary" size="small">
                            {{ serverKey.permission }}
                        </VChip> -->
                    </div>

                    <span>Created on {{ serverKey.created_at }}</span>
                </VCard>
            </VCardText>
        </VCard>
    </VCol>
    <!-- !SECTION -->
    <ConfirmDialog
        @confirm="newTokencreated = ''"
        v-model:isDialogVisible="isTokenModelOpen"
        confirmation-msg="Please copy your new API token. For your security, it won't be shown again."
    >
        <VCard flat variant="tonal" class="pa-4 px-0 whitespace-no-wrap">
            <span>{{ newTokencreated }}</span>
        </VCard>
    </ConfirmDialog>
</template>

<script setup lang="ts">
import { requiredValidator } from "@/@core/utils/validators";

import { useApiTokens } from "@/stores/apiToken";

const apiTokensStore = useApiTokens();
const refVForm = ref();
const form = ref({
    name: ""
});
const newTokencreated = ref("");
const isTokenModelOpen = computed(() => !!newTokencreated.value);

const create = async () => {
    if (!refVForm.value) return;
    const { valid } = await refVForm.value.validate();
    if (!valid) return;
    try {
        const { token } = await apiTokensStore.createToken(form.value);
        newTokencreated.value = token;
    } catch (error) {
        // refVForm.value.items[0].errorMessages.push("what is this");
    }
};

onMounted(async () => {
    await apiTokensStore.getTokens();
});
</script>
