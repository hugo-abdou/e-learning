<script setup lang="ts">
import { VForm } from "vuetify/components/VForm";
import type { Category } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useCategoriesStore } from "@/stores/useCategoriesStore";

interface Emit {
    (e: "update:isDrawerOpen", value: boolean): void;
    (e: "catData", value: Category): void;
}

interface Props {
    isDrawerOpen: boolean;
    data?: Category;
}

const props = withDefaults(defineProps<Props>(), {
    isDrawerOpen: false,
    data: () => ({
        id: 0,
        parent_id: 0,
        type: "",
        name: "",
        children: [],
    }),
});

const emit = defineEmits<Emit>();

const isloading = ref(false);
const isFormValid = ref(false);
const refForm = ref<VForm>();
const name = ref("");
const type = ref("");

watch(
    () => props.isDrawerOpen,
    (val) => {
        if (props.data.id && val) {
            name.value = props.data.name;
            type.value = props.data.type;
        } else {
            name.value = "";
            type.value = "";
        }
    }
);

const errors = ref({
    name: undefined,
    type: undefined,
});

// 👉 reset form
const resetForm = () => {
    name.value = "";
    type.value = "";
    errors.value = {
        name: undefined,
        type: undefined,
    };
    nextTick(() => {
        refForm.value?.reset();
        refForm.value?.resetValidation();
    });
};

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit("update:isDrawerOpen", false);
    resetForm();
};

const categoriesStore = useCategoriesStore();
const onSubmit = () => {
    isloading.value = true;
    refForm.value?.validate().then(async ({ valid, errors: err }) => {
        try {
            if (!valid) throw new Error(JSON.stringify(err));

            if (props.data.id) {
                const res = await categoriesStore.updateCategory(props.data.id, {
                    name: name.value,
                    type: type.value,
                });
                emit("catData", res.data);
            } else {
                const res = await categoriesStore.addCategory({
                    name: name.value,
                    type: type.value,
                    parent_id: props.data.parent_id,
                });
                emit("catData", res.data);
            }

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
            title="Add Category"
            @cancel="closeNavigationDrawer"
        />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard
                title="Create New Category"
                subtitle="Created Category details will receive a privacy audit."
            >
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm
                        ref="refForm"
                        v-model="isFormValid"
                        @submit.prevent="onSubmit"
                    >
                        <VRow>
                            <!-- 👉 name -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="name"
                                    :rules="[requiredValidator]"
                                    label="Name"
                                    :error-messages="errors.name"
                                />
                            </VCol>
                            <!-- 👉 type -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="type"
                                    :rules="[requiredValidator]"
                                    label="Type"
                                    :error-messages="errors.type"
                                />
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
