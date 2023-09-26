<template>
    <section>
        <VRow>
            <VCol cols="12">
                <VCard :title="$t('Cours')">
                    <!-- 👉 Filters -->
                    <VCardText>
                        <VRow align="end">
                            <!-- 👉 Select Plan -->
                            <VCol cols="12" sm="2">
                                <AppSelect :label="$t('Items Per Page')" :items="[10, 20, 50, 100]" v-model="options.itemsPerPage" />
                            </VCol>
                            <VCol class="d-flex gap-5">
                                <!-- 👉 Search  -->
                                <AppTextField v-model="options.search" :placeholder="$t('Search')" density="compact" />
                                <div class="d-flex justify-end flex-wrap gap-4">
                                    <!-- 👉 Add user button -->
                                    <VBtn prepend-icon="tabler-plus" :to="{ name: 'cours-create' }">
                                        {{ $t("Add New Cour") }}
                                    </VBtn>
                                </div>
                            </VCol>
                        </VRow>
                    </VCardText>

                    <VDivider />

                    <!-- SECTION datatable -->
                    <!-- @vue-ignore -->
                    <VDataTableServer
                        v-model:items-per-page="options.itemsPerPage"
                        v-model:page="options.page"
                        :items="courses"
                        :items-length="totalCours"
                        :headers="headers.map(i => ({ ...i, title: $t(i.title) }))"
                        class="text-no-wrap"
                        @update:options="options = $event"
                    >
                        <!-- Actions -->
                        <template #item.actions="{ item }">
                            <VBtn icon variant="text" size="small" color="medium-emphasis">
                                <VIcon size="24" icon="tabler-dots-vertical" />

                                <VMenu activator="parent">
                                    <VList>
                                        <VListItem>
                                            <template #prepend>
                                                <VIcon icon="tabler-eye" />
                                            </template>

                                            <VListItemTitle>{{ $t("View") }}</VListItemTitle>
                                        </VListItem>
                                        <VListItem>
                                            <template #prepend>
                                                <VIcon icon="tabler-trash" />
                                            </template>
                                            <VListItemTitle>{{ $t("Delete") }}</VListItemTitle>
                                        </VListItem>
                                    </VList>
                                </VMenu>
                            </VBtn>
                        </template>

                        <!-- pagination -->
                        <template #bottom>
                            <VDivider />
                            <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                                <p class="text-sm text-disabled mb-0">
                                    {{ paginationMeta(options, totalCours) }}
                                </p>

                                <VPagination
                                    :model-value="options.page"
                                    @update:model-value="options = { ...options, page: $event }"
                                    :length="Math.ceil(totalCours / options.itemsPerPage)"
                                    :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalCours / options.itemsPerPage)"
                                >
                                    <!-- <template #prev="slotProps">
                                        <VBtn variant="tonal" color="default" v-bind="slotProps"> {{ $t("Previous") }} </VBtn>
                                    </template>

                                    <template #next="slotProps">
                                        <VBtn variant="tonal" color="default" v-bind="slotProps"> {{ $t("Next") }} </VBtn>
                                    </template> -->
                                </VPagination>
                            </div>
                        </template>
                    </VDataTableServer>
                    <!-- SECTION -->
                </VCard>

                <!-- 👉 Add New User -->
            </VCol>
        </VRow>
    </section>
</template>

<script setup lang="ts">
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { paginationMeta } from "@/utils";
import { Options } from "@/@core/types";

const totalCours = ref(0);
const courses = ref([]);

const options = ref<Options>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined
});

// Headers
const headers = [
    { title: "Name", key: "name" },
    { title: "", key: "actions", sortable: false, width: "70" }
];

watch(
    Object.keys(options.value).map(item => () => options.value[item as keyof Options]),
    ([page, perPage, search]) => {}
);
</script>

<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
<style lang="scss">
.app-user-search-filter {
    inline-size: 31.6rem;
}

.text-capitalize {
    text-transform: capitalize;
}

.user-list-name:not(:hover) {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
