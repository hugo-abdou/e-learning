<script lang="ts" setup>
import useSnackBarStore from "@/components/SnackBar/useSnackBarStore";
import { debounce } from "@/helpers";
import { useCategoriesStore } from "@/stores/useCategoriesStore";
import { Category } from "@/types";
import AddNewCategoryDrawer from "@/views/pages/categories/AddNewCategoryDrawer.vue";
import NestedCategory from "@/views/pages/categories/NestedCategory.vue";

definePage({
    meta: {
        redirectIfNotLoggedIn: true,
        subject: "category",
        action: "read",
    },
});

const categories = ref<Category[]>([]);

const search = ref("");
const selectedcategory = ref<Category>();
const isConfirmDialogOpen = ref(false);
const isAddNewCategoryDrawerVisible = ref(false);
const categoriesStore = useCategoriesStore();
const fetchCategories = debounce(() => {
    categoriesStore.getCategories({ params: { search: search.value } }).then(({ data }) => {
        categories.value = data;
    });
}, 500);
fetchCategories();

watch(search, fetchCategories);
const deletecategory = (category: Category) => {
    categoriesStore.deleteCategory(category.id).then(() => {
        fetchCategories();
        selectedcategory.value = undefined;
    });
};
const editCategory = (category: Category) => {
    selectedcategory.value = category;
    setTimeout(() => {
        isAddNewCategoryDrawerVisible.value = true;
    }, 50);
};
watch(isAddNewCategoryDrawerVisible, (val) => {
    if (!val) {
        selectedcategory.value = undefined;
    }
});

function extractParentIds(data: Category[]) {
    let parentIds: { [key: number]: number[] } = {};
    data.forEach((category) => {
        parentIds[category.id] = category.children.reduce((prev, curr) => {
            prev.push(curr.id);
            return prev;
        }, [] as number[]);
        if (category.children.length > 0) {
            parentIds = { ...parentIds, ...extractParentIds(category.children) };
        }
    });
    return parentIds;
}
const snackbarStor = useSnackBarStore();
const updateCategoriesOrder = debounce(() => {
    categoriesStore.updateCategoriesOrder(extractParentIds(categories.value)).catch((res) => {
        if (res.status === 422) {
            snackbarStor.add({
                color: "error",
                timeout: 3000,
                text: res._data.message,
            });
            fetchCategories();
        }
    });
}, 500);
const onOrderChanged = () => {
    updateCategoriesOrder();
};
const addNew = (cat: Category) => {
    selectedcategory.value = { id: 0, name: "", children: [], type: "", parent_id: cat.id };
    isAddNewCategoryDrawerVisible.value = true;
};
</script>

<template>
    <section>
        <VCard>
            <VCardText class="d-flex flex-wrap py-4 gap-4">
                <!-- 👉 Search  -->
                <div style="inline-size: 10rem">
                    <AppTextField
                        v-model="search"
                        placeholder="Search"
                        density="compact"
                    />
                </div>
                <VSpacer />

                <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
                    <!-- 👉 Export button -->
                    <!-- @vue-ignore -->
                    <VBtn
                        variant="tonal"
                        color="secondary"
                        prepend-icon="tabler-screen-share"
                    >
                        Export
                    </VBtn>

                    <!-- 👉 Add user button -->
                    <!-- @vue-ignore -->
                    <VBtn
                        v-if="$can('create', 'category')"
                        prepend-icon="tabler-plus"
                        @click="isAddNewCategoryDrawerVisible = true"
                    >
                        Add New Category
                    </VBtn>
                </div>
            </VCardText>

            <VDivider />
            <VCardText>
                <NestedCategory
                    @add-new="addNew"
                    @order-changed="onOrderChanged"
                    @delete="(isConfirmDialogOpen = true), (selectedcategory = $event)"
                    @edit="editCategory"
                    v-model="categories"
                />
            </VCardText>
        </VCard>
        <AddNewCategoryDrawer
            @cat-data="fetchCategories"
            :data="selectedcategory"
            v-model:isDrawerOpen="isAddNewCategoryDrawerVisible"
        />
        <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogOpen"
            confirmation-question="Are you sure to delete this category?"
            confirmation-msg="Note: this action will delete the category and all its children categories"
            confirm-title="your category has been deleted"
            @confirm="$event && deletecategory(selectedcategory as Category)"
        />
    </section>
</template>
