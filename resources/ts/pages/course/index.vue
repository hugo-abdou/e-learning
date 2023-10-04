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
                                    <VBtn prepend-icon="tabler-plus" :to="{ name: 'course-create' }">
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
                        <!-- Status -->
                        <template #item.status="{ item }">
                            <VChip :color="resolveCourseStatusVariant(item.raw.status).color">
                                <VIcon :icon="resolveCourseStatusVariant(item.raw.status).icon" class="ma-1" />
                                <span class="text-capitalize">
                                    {{ item.raw.status }}
                                </span>
                            </VChip>
                        </template>
                        <!-- difficulty -->
                        <template #item.difficulty="{ item }">
                            <VChip :color="resolveCourseDifficultyVariant(item.raw.difficulty).color">
                                <VIcon :icon="resolveCourseDifficultyVariant(item.raw.difficulty).icon" class="ma-1" />
                                <span class="text-capitalize">
                                    {{ item.raw.difficulty }}
                                </span>
                            </VChip>
                        </template>
                        <!-- Media -->
                        <template #item.media="{ item }">
                            <div class="v-avatar-group pa-2 staked-images">
                                <template v-for="(image, index) in item.raw.media" :key="index">
                                    <VAvatar v-if="index < 4" variant="text" rounded="lg" style="width: 70px" size="52">
                                        <VImg cover :src="image" />
                                    </VAvatar>
                                </template>
                            </div>
                        </template>
                        <!-- Actions -->
                        <template #item.actions="{ item }">
                            <VBtn icon variant="text" size="small" color="medium-emphasis">
                                <VIcon size="24" icon="tabler-dots-vertical" />

                                <VMenu activator="parent">
                                    <VList>
                                        <VListItem>
                                            <template #prepend><VIcon icon="tabler-eye" /></template>
                                            <VListItemTitle>{{ $t("View") }}</VListItemTitle>
                                        </VListItem>
                                        <VListItem
                                            v-if="item.raw.status === CourseStatus.Draft || item.raw.status === CourseStatus.Error"
                                            @click="publishCourse(item.raw.id)"
                                        >
                                            <template #prepend><VIcon icon="material-symbols:publish-rounded" /></template>
                                            <VListItemTitle>{{ $t("Publish") }}</VListItemTitle>
                                        </VListItem>
                                        <VListItem
                                            v-if="item.raw.status === CourseStatus.Draft || item.raw.status === CourseStatus.Scheduled"
                                            @click="scheduledCourseCours = item.raw.id"
                                        >
                                            <template #prepend><VIcon icon="solar:calendar-broken" /></template>
                                            <VListItemTitle>{{ $t("Schedule publish") }}</VListItemTitle>
                                        </VListItem>
                                        <VListItem @click="deleteCourse(item.raw.id)">
                                            <template #prepend><VIcon icon="tabler-trash" /></template>
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
                                />
                            </div>
                        </template>
                    </VDataTableServer>
                    <!-- SECTION -->
                </VCard>
                <ScheduleCourse @done="(scheduledCourseCours = null), getCourses()" :course-id="scheduledCourseCours" />
                <!-- 👉 Add New User -->
            </VCol>
        </VRow>
    </section>
</template>

<script setup lang="ts">
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { paginationMeta, resolveCourseDifficultyVariant, resolveCourseStatusVariant } from "@/utils";
import { Options } from "@/@core/types";
import { Course } from "@/types";
import { CourseStatus } from "@core/enums";
import { useCourseStore } from "@/stores/useCourseStore";
import { debounce } from "lodash";
import ScheduleCourse from "./components/ScheduleCourse.vue";

const scheduledCourseCours = ref<number | null>(null);
const totalCours = ref(0);
const courses = ref<Course[]>([]);

const options = ref<Options>({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    groupBy: [],
    search: undefined
});
const courseStore = useCourseStore();
const deleteCourse = (id: number) => courseStore.deleteCourse(id).then(getCourses);
const publishCourse = (id: number) => courseStore.publishCourse(id).then(getCourses);
const getCourses = debounce(() => {
    courseStore.getCourses({ ...options.value, additional: { hasMedia: true } }).then(({ data, meta }) => {
        courses.value = data;
        totalCours.value = meta.total;
    });
}, 500);
// Headers
const headers = [
    { title: "Title", key: "title" },
    { title: "Media", key: "media", width: "70", sortable: false },
    { title: "Status", key: "status", width: "70" },
    { title: "Difficulty", key: "difficulty", width: "70" },
    { title: "", key: "actions", sortable: false, width: "70" }
];

watch(
    Object.keys(options.value).map(item => () => options.value[item as keyof Options]),
    ([page, perPage, search]) => {
        getCourses();
    }
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
.staked-images > *:not(:first-child) {
    margin-inline-start: -2.8rem !important;
}
</style>
