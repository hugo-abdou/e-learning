<script setup lang="ts">
import type { Options } from "@/@core/types";
import { formatDate } from "@/@core/utils/formatters";
import { useCourseStore } from "@/stores/useCourseStore";
import type { Course, DataTableHeader, TableOptions } from "@/types";
import ScheduleDialog from "@/views/pages/course/ScheduleDialog.vue";
import { CourseStatus } from "@core/enums";
import { debounce, resolveCourseDifficultyVariant, resolveCourseStatusVariant } from "@/helpers";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

const scheduledCourse = ref<number | null>(null);
const totalCours = ref(0);
const courses = ref<Course[]>([]);
const loading = ref<boolean>(false);

definePage({
    meta: {
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
        layout: "default",
        subject: "course",
        action: "read",
    },
});

const options = ref<TableOptions>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined,
});

const courseStore = useCourseStore();

const deleteCourse = (id: number) => courseStore.deleteCourse(id).then(getCourses);
const publishCourse = (id: number, status: keyof typeof CourseStatus = "Published") => courseStore.publishCourse(id, status).then(getCourses);

const getCourses = debounce(() => {
    if (!courses.value.length) loading.value = true;
    courseStore
        .getCourses(options.value)
        .then(({ data, meta }) => {
            courses.value = data;
            totalCours.value = meta.total;
        })
        .finally(() => (loading.value = false));
}, 500);

// Headers
const headers: DataTableHeader[] = [
    { title: "Title", key: "title" },
    { title: "Students", key: "studentsCount", width: 70, sortable: false },
    { title: "Status", key: "status", width: 70 },
    { title: "Difficulty", key: "difficulty", width: 70 },
    { title: "", key: "actions", sortable: false, width: 70 },
];

const scheduleCourse = async (e: string) => {
    await courseStore.scheduleCourse(Number(scheduledCourse.value), e);
    scheduledCourse.value = null;
    getCourses();
};

watch(
    Object.keys(options.value).map((item) => () => options.value[item as keyof Options]),
    ([page, perPage, search]) => {
        getCourses();
    }
);
</script>

<template>
    <VRow>
        <VCol cols="12">
            <VCard :title="$t('Cours')">
                <!-- 👉 Filters -->
                <VCardText>
                    <VRow align="end">
                        <!-- 👉 Select Plan -->
                        <VCol
                            cols="12"
                            sm="2"
                        >
                            <AppSelect
                                v-model="options.itemsPerPage"
                                :label="$t('Items Per Page')"
                                :items="[10, 20, 50, 100]"
                            />
                        </VCol>
                        <VCol class="d-flex gap-5">
                            <!-- 👉 Search  -->
                            <AppTextField
                                v-model="options.search"
                                :placeholder="$t('Search')"
                                density="compact"
                            />
                            <div class="d-flex justify-end flex-wrap gap-4">
                                <!-- 👉 Add user button -->
                                <VBtn
                                    prepend-icon="tabler-plus"
                                    :to="{ name: 'course-create' }"
                                >
                                    {{ $t("New Cour") }}
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
                    :headers="headers.map((i) => ({ ...i, title: $t(i.title) }))"
                    class="text-no-wrap"
                    :loading="loading"
                    @update:options="options = $event"
                >
                    <template #loading>
                        <VSkeletonLoader
                            class="pt-2"
                            :type="['table-tbody']"
                        />
                    </template>
                    <template #item.title="{ item }">
                        <div style="max-width: 20em">
                            <VCardTitle class="pl-0">
                                <RouterLink
                                    :to="$can('update', 'course') ? { name: 'course-id-edit', params: { id: item.slug } } : {}"
                                    class="font-weight-medium text-link"
                                >
                                    {{ item.title }}
                                </RouterLink>
                                <div class="d-flex gap-2 flex-wrap py-2">
                                    <VChip
                                        v-for="category in item.categories"
                                        color="primary"
                                        class="text-capitalize"
                                        size="x-small"
                                    >
                                        <template #prepend>
                                            <InfoTooltip
                                                max-width="720"
                                                :text="category.path"
                                            />
                                        </template>
                                        <span class="text-capitalize ml-1">
                                            {{ category.name }}
                                        </span>
                                    </VChip>
                                </div>
                            </VCardTitle>
                        </div>
                    </template>
                    <template #item.studentsCount="{ item }">
                        <VChip :color="item.studentsCount === 0 ? 'error' : 'success'">
                            {{ item.studentsCount }}
                        </VChip>
                    </template>
                    <!-- Status -->
                    <template #item.status="{ item }">
                        <VChip :color="resolveCourseStatusVariant(item.status).color">
                            <template #prepend>
                                <InfoTooltip
                                    v-if="item.status === CourseStatus.Scheduled"
                                    icon="mdi-clock-time-five-outline"
                                    :text="formatDate(item.schedule_at)"
                                />
                                <VIcon
                                    v-else
                                    :icon="resolveCourseStatusVariant(item.status).icon"
                                />
                            </template>

                            <span class="text-capitalize ml-1">
                                {{ item.status }}
                            </span>
                            <span
                                v-if="item.status === CourseStatus.Error"
                                class="text-capitalize ml-1"
                            >
                                {{ `#${item.id}` }}
                            </span>
                        </VChip>
                    </template>
                    <!-- difficulty -->
                    <template #item.difficulty="{ item }">
                        <VChip :color="resolveCourseDifficultyVariant(item.difficulty).color">
                            <VIcon
                                :icon="resolveCourseDifficultyVariant(item.difficulty).icon"
                                class="ma-1"
                            />
                            <span class="text-capitalize">
                                {{ item.difficulty }}
                            </span>
                        </VChip>
                    </template>
                    <!-- Actions -->
                    <template #item.actions="{ item }">
                        <VBtn
                            icon
                            variant="text"
                            size="x-small"
                            color="medium-emphasis"
                        >
                            <VIcon
                                size="24"
                                icon="tabler-dots-vertical"
                            />
                            <VMenu activator="parent">
                                <VList>
                                    <VListItem
                                        v-if="$can('update', 'course')"
                                        :to="{ name: 'course-id-edit', params: { id: item.slug } }"
                                    >
                                        <template #prepend>
                                            <VIcon icon="tabler-edit" />
                                        </template>
                                        <VListItemTitle>{{ $t("Edit") }}</VListItemTitle>
                                    </VListItem>
                                    <VListItem
                                        v-if="item.status === CourseStatus.Published"
                                        @click="publishCourse(item.id, 'Closed')"
                                        prepend-icon="tabler-x"
                                        :title="$t('Close')"
                                    />
                                    <VListItem
                                        v-if="item.status === CourseStatus.Published"
                                        @click="publishCourse(item.id, 'Private')"
                                        prepend-icon="tabler-lock"
                                        :title="$t('Private')"
                                    />
                                    <VListItem
                                        v-if="item.status !== CourseStatus.Published"
                                        @click="publishCourse(item.id)"
                                        prepend-icon="tabler-check"
                                        :title="$t('Publish')"
                                    />
                                    <VListItem
                                        v-if="item.status === CourseStatus.Draft || item.status === CourseStatus.Scheduled"
                                        @click="scheduledCourse = item.id"
                                        prepend-icon="tabler-clock"
                                        :title="$t('Schedule publish')"
                                    />
                                    <VListItem
                                        prepend-icon="tabler-trash"
                                        :title="$t('Delete')"
                                        @click="deleteCourse(item.id)"
                                    />
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
                                :length="Math.ceil(totalCours / options.itemsPerPage)"
                                :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalCours / options.itemsPerPage)"
                                @update:model-value="options = { ...options, page: $event }"
                            />
                        </div>
                    </template>
                </VDataTableServer>
                <!-- SECTION -->
            </VCard>
            <ScheduleDialog
                :is-dialog-visible="!!scheduledCourse"
                :course-id="scheduledCourse"
                @close="scheduledCourse = null"
                @select="scheduleCourse"
            />
        </VCol>
    </VRow>
</template>

<style lang="scss">
.text-capitalize {
    text-transform: capitalize;
}

.user-list-name:not(:hover) {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.staked-images > * {
    margin-inline-start: -2.8rem !important;
}
</style>
