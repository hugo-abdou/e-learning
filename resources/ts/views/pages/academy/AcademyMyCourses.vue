<script setup lang="ts">
import { debounce } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import { Course } from "@/types";

interface Props {
    searchQuery: string;
}

const props = defineProps<Props>();

const options = ref({
    page: 1,
    itemsPerPage: 10,
    search: undefined,
});
const totalCours = ref(0);
const courses = ref<Course[]>([]);

const hideCompleted = ref(false);
const label = ref("All Courses");

watch([hideCompleted, label], () => {
    options.value.page = 1;
});
const courseStore = useCourseStore();
const getCourses = debounce(() => {
    courseStore.getCourses(options.value).then(({ data, meta }) => {
        courses.value = data;
        totalCours.value = Math.ceil(meta.total / options.value.itemsPerPage);
    });
}, 500);
watch(
    // @ts-ignore
    Object.keys(options.value).map((item) => () => options.value[item]),
    ([page, perPage, search]) => {
        getCourses();
    },
    { immediate: true }
);
</script>

<template>
    <!-- 👉 Header -->

    <!-- 👉 Course List -->
    <div class="mb-6">
        <VRow>
            <VCol
                v-for="course in courses"
                :key="course.id"
                cols="12"
                md="4"
                sm="6"
            >
                <VCard>
                    <VImg
                        :src="course.thumbnail"
                        class="cursor-pointer"
                        cover
                        @click="() => $router.push({ name: 'course-id', params: { id: course.slug } })"
                    />
                    <VCardText>
                        <div class="d-flex justify-space-between align-center mb-4 gap-2 flex-wrap">
                            <VChip
                                variant="tonal"
                                label
                                rounded="xl"
                                v-for="item in course.categories"
                                :key="item.id"
                            >
                                {{ item.name }}
                            </VChip>
                        </div>
                        <div class="d-flex">
                            <VIcon
                                v-for="i in 5"
                                icon="tabler-star-filled"
                                color="warning"
                                class="me-2"
                                size="20"
                            />
                            <span class="text-body-1 text-disabled font-weight-medium">(565)</span>
                        </div>
                        <h5 class="text-h5 mb-1">
                            <RouterLink
                                :to="{ name: 'course-id', params: { id: course.slug } }"
                                class="course-title"
                            >
                                {{ course.title }}
                            </RouterLink>
                        </h5>
                        <p>
                            {{ course.description }}
                        </p>
                        <div
                            v-if="true"
                            class="d-flex align-center mb-4"
                        >
                            <VIcon
                                icon="tabler-clock"
                                size="20"
                                class="me-1"
                            />
                            <span class="text-body-1 my-auto">12:30</span>
                        </div>
                        <div
                            v-else
                            class="mb-2"
                        >
                            <VIcon
                                icon="tabler-checks"
                                color="success"
                                class="me-1"
                            />
                            <span class="text-success text-body-1">Completed</span>
                        </div>
                        <VProgressLinear
                            :model-value="70"
                            rounded
                            color="primary"
                            height="8"
                            class="mb-6"
                        />
                        <div class="d-flex flex-wrap gap-4">
                            <VBtn
                                variant="tonal"
                                color="secondary"
                                class="flex-grow-1"
                            >
                                <template #prepend>
                                    <VIcon
                                        icon="tabler-rotate-clockwise-2"
                                        class="flip-in-rtl"
                                    />
                                </template>
                                Start Over
                            </VBtn>
                            <VBtn
                                variant="tonal"
                                class="flex-grow-1"
                                :to="{ name: 'course-id', params: { id: course.slug } }"
                            >
                                <template #append>
                                    <VIcon
                                        icon="tabler-arrow-right"
                                        class="flip-in-rtl"
                                    />
                                </template>
                                Continue
                            </VBtn>
                        </div>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12">
                <VPagination
                    v-model="options.page"
                    :length="totalCours"
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
            </VCol>
        </VRow>
    </div>
</template>

<style lang="scss" scoped>
.course-title {
    &:not(:hover) {
        color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis));
    }
}
</style>
