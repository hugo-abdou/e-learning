<script lang="ts" setup>
import { VDataTable } from "vuetify/labs/VDataTable";

// import UserInvoiceTable from "./UserInvoiceTable.vue";
import { paginationMeta } from "@/utils/paginationMeta";

// Images
import avatar2 from "@images/avatars/avatar-2.png";

// Project Table Header
const projectTableHeaders = [
    { title: "PROJECT", key: "name" },
    { title: "TOTAL TASK", key: "totalTask" },
    { title: "PROGRESS", key: "progress" },
    { title: "HOURS", key: "hours" },
];

const search = ref("");

const options = ref({ itemsPerPage: 5, page: 1 });

const projects = [
    {
        logo: "",
        name: "BGC eCommerce App",
        project: "React Project",
        totalTask: "122/240",
        progress: 78,
        hours: "18:42",
    },
];

const resolveUserProgressVariant = (progress: number) => {
    if (progress <= 25) return "error";
    if (progress > 25 && progress <= 50) return "warning";
    if (progress > 50 && progress <= 75) return "primary";
    if (progress > 75 && progress <= 100) return "success";

    return "secondary";
};
</script>

<template>
    <VRow>
        <VCol cols="12">
            <VCard title="User's Projects List">
                <template #prepend>
                    <VChip variant="tonal" color="warning">
                        Comming Soon
                    </VChip>
                </template>
                <VCardText>
                    <div class="d-flex">
                        <AppSelect
                            :model-value="options.itemsPerPage"
                            :items="[10, 20, 50, 100]"
                            style="inline-size: 6.25rem"
                            @update:model-value="
                                options.itemsPerPage = parseInt($event, 10)
                            "
                        />
                        <div class="flex-grow-1" />
                        <AppTextField v-model="search" />
                    </div>
                </VCardText>
                <VDivider />
                <!-- 👉 User Project List Table -->

                <!-- SECTION Datatable -->
                <VDataTable
                    v-model:page="options.page"
                    :headers="projectTableHeaders"
                    :items="projects"
                    :search="search"
                    :items-per-page="options.itemsPerPage"
                    @update:options="options = $event"
                >
                    <!-- projects -->
                    <template #item.name="{ item }">
                        <div class="d-flex">
                            <!-- <VAvatar :size="34" class="me-3" :image="item.logo" /> -->
                            <div>
                                <p class="font-weight-medium mb-0">
                                    {{ item.name }}
                                </p>
                                <p class="text-xs text-medium-emphasis mb-0">
                                    {{ item.project }}
                                </p>
                            </div>
                        </div>
                    </template>

                    <!-- Progress -->
                    <template #item.progress="{ item }">
                        <span>{{ item.progress }}%</span>
                        <VProgressLinear
                            :height="6"
                            :model-value="item.progress"
                            rounded
                            :color="resolveUserProgressVariant(item.progress)"
                        />
                    </template>

                    <!-- pagination -->
                    <template #bottom>
                        <VDivider />
                        <div
                            class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"
                        >
                            <p class="text-sm text-disabled mb-0">
                                {{ paginationMeta(options, projects.length) }}
                            </p>

                            <VPagination
                                v-model="options.page"
                                :length="
                                    Math.ceil(
                                        projects.length / options.itemsPerPage
                                    )
                                "
                                :total-visible="
                                    Math.ceil(
                                        projects.length / options.itemsPerPage
                                    )
                                "
                            >
                                <template #prev="slotProps">
                                    <VBtn
                                        variant="tonal"
                                        color="default"
                                        v-bind="slotProps"
                                        :icon="false"
                                    >
                                        Previous
                                    </VBtn>
                                </template>

                                <template #next="slotProps">
                                    <VBtn
                                        variant="tonal"
                                        color="default"
                                        v-bind="slotProps"
                                        :icon="false"
                                    >
                                        Next
                                    </VBtn>
                                </template>
                            </VPagination>
                        </div>
                    </template>
                </VDataTable>
                <!-- !SECTION -->
            </VCard>
        </VCol>

        <VCol cols="12">
            <!-- 👉 Activity timeline -->
            <VCard title="User Activity Timeline">
                <template #prepend>
                    <VChip variant="tonal" color="warning">
                        Comming Soon
                    </VChip>
                </template>
                <VCardText>
                    <VTimeline
                        density="compact"
                        align="start"
                        truncate-line="both"
                        class="v-timeline-density-compact"
                    >
                        <VTimelineItem dot-color="error" size="x-small">
                            <div
                                class="d-flex justify-space-between align-center flex-wrap gap-2 mb-3"
                            >
                                <span class="app-timeline-title">
                                    12 Invoices have been paid
                                </span>
                                <span class="app-timeline-meta"
                                    >12 min ago</span
                                >
                            </div>

                            <p class="app-timeline-text mb-2">
                                Invoices have been paid to the company
                            </p>
                            <div class="d-flex align-center mt-2">
                                <VIcon
                                    color="error"
                                    icon="tabler-file"
                                    size="18"
                                    class="me-2"
                                />
                                <h6 class="font-weight-medium text-sm">
                                    Invoices.pdf
                                </h6>
                            </div>
                        </VTimelineItem>

                        <VTimelineItem dot-color="primary" size="x-small">
                            <div
                                class="d-flex justify-space-between align-center flex-wrap gap-2 mb-3"
                            >
                                <span class="app-timeline-title">
                                    Meeting with john
                                </span>
                                <span class="app-timeline-meta"
                                    >45 min ago</span
                                >
                            </div>

                            <p class="app-timeline-text mb-1">
                                React Project meeting with john @10:15am
                            </p>

                            <div class="d-flex align-center mt-3">
                                <VAvatar
                                    size="34"
                                    class="me-2"
                                    :image="avatar2"
                                />
                                <div>
                                    <h6
                                        class="text-sm font-weight-medium mb-n1"
                                    >
                                        John Doe (Client)
                                    </h6>
                                    <span class="text-xs"
                                        >CEO of Kelly Group</span
                                    >
                                </div>
                            </div>
                        </VTimelineItem>

                        <VTimelineItem dot-color="info" size="x-small">
                            <div
                                class="d-flex justify-space-between align-center flex-wrap gap-2 mb-3"
                            >
                                <span class="app-timeline-title">
                                    Create a new react project for client
                                </span>
                                <span class="app-timeline-meta">2 day ago</span>
                            </div>

                            <p class="app-timeline-text mb-0">
                                Add files to new design folder
                            </p>
                        </VTimelineItem>

                        <VTimelineItem dot-color="success" size="x-small">
                            <div
                                class="d-flex justify-space-between align-center flex-wrap gap-2 mb-3"
                            >
                                <span class="app-timeline-title">
                                    12 Create invoices for client
                                </span>
                                <span class="app-timeline-meta">5 day ago</span>
                            </div>
                            <p class="app-timeline-text mb-0">
                                Weekly review of freshly prepared design for our
                                new app.
                            </p>
                        </VTimelineItem>
                    </VTimeline>
                </VCardText>
            </VCard>
        </VCol>

        <!--
      <VCol cols="12">
      <UserInvoiceTable />
      </VCol>
    -->
    </VRow>
</template>
