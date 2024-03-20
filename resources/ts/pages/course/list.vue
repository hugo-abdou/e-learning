<script setup lang="ts">
import { debounce, secondsToMinutes } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import { Course } from "@/types";
import AcademyMyCourses from "@/views/pages/academy/AcademyMyCourses.vue";
import boyAppAcademy from "@images/illustrations/boy-app-academy.png";
import girlAppAcademy from "@images/illustrations/girl-app-academy.png";
import academyCourseIllustration1 from "@images/pages/academy-course-illustration1.png";
import academyCourseIllustration2 from "@images/pages/academy-course-illustration2.png";
import { VideoPlayer } from "@videojs-player/vue";
import { VCardItem } from "vuetify/lib/components/index.mjs";

definePage({
    path: "/my-courses",
    meta: {
        redirectIfNotLoggedIn: true,
        roles: ["student"],
        subject: "course",
        action: "read",
    },
});
const options = ref({
    page: 1,
    itemsPerPage: 10,
    search: undefined,
});
const totalPages = ref(1);
const courses = ref<Course[]>([]);
const courseStore = useCourseStore();
const getCourses = debounce((opt: any, clean: boolean = false) => {
    if (opt.page <= totalPages.value) {
        courseStore.getCourses(opt).then(({ data, meta }) => {
            if (clean) {
                courses.value = data;
            } else {
                courses.value.push(...data);
            }
            totalPages.value = Math.ceil(meta.total / options.value.itemsPerPage);
        });
    }
}, 500);
watch(
    () => options.value.search,
    () => getCourses({ ...options.value, page: 1 }, true),
    { immediate: true }
);
</script>

<template>
    <div>
        <VCard class="mb-6">
            <VCardText class="py-12 position-relative">
                <div
                    class="d-flex flex-column gap-y-4 mx-auto"
                    :class="$vuetify.display.mdAndUp ? 'w-50' : $vuetify.display.xs ? 'w-100' : 'w-75'"
                >
                    <h3
                        class="text-h3 text-center text-wrap mx-auto"
                        :class="$vuetify.display.mdAndUp ? 'w-75' : 'w-100'"
                    >
                        Education, talents, and career opportunities.
                        <span class="text-primary font-weight-bold"> All in one place.</span>
                    </h3>
                    <p class="text-center text-wrap text-body-1 mx-auto mb-0">Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science.</p>
                    <div class="d-flex justify-center align-center gap-4 flex-wrap">
                        <AppTextField
                            v-model="options.search"
                            placeholder="Find your course"
                            density="compact"
                            style="min-inline-size: 200px"
                        />
                        <VBtn
                            color="primary"
                            density="comfortable"
                            icon="tabler-search"
                            class="rounded"
                        />
                    </div>
                </div>
                <img
                    :src="academyCourseIllustration1"
                    class="illustration1 d-none d-md-block"
                    height="180"
                />
                <img
                    :src="academyCourseIllustration2"
                    class="illustration2 d-none d-md-block"
                    height="100"
                />
            </VCardText>
        </VCard>
        <Masonry
            :items="courses"
            @load="getCourses({ ...options, page: options.page++ })"
        >
            <template #default="{ item: course }">
                <VCard>
                    <VImg
                        :src="course.thumbnail"
                        class="cursor-pointer"
                        aspect-ratio="1.75"
                        cover
                        @click="() => $router.push({ name: 'course-id', params: { id: course.slug } })"
                    />
                    <VDivider />
                    <VCardTitle class="mb-2 flex-grow-1"> {{ course?.title }}</VCardTitle>
                    <VCardSubtitle>
                        Prof.
                        <span class="font-weight-medium text-high-emphasis ms-1">
                            {{ course?.author.name }}
                        </span>
                    </VCardSubtitle>
                    <VCardItem>
                        <div class="d-flex justify-space-between align-center mb-4 gap-2 flex-wrap">
                            <!-- <VChip
                                variant="tonal"
                                label
                                rounded="xl"
                                v-for="item in course.categories"
                                :key="item.id"
                            >
                                {{ item.name }}
                            </VChip> -->
                        </div>
                        <div class="d-flex mb-4">
                            <VIcon
                                v-for="i in 5"
                                icon="tabler-star-filled"
                                color="warning"
                                class="me-2"
                                size="20"
                            />
                            <span class="text-body-1 text-disabled font-weight-medium">(565)</span>
                        </div>

                        <div class="mb-6">
                            <div class="d-flex align-center mb-1 w-100">
                                <div class="d-flex align-center">
                                    <VIcon
                                        icon="tabler-clock"
                                        size="20"
                                        class="me-1"
                                    />
                                    <span class="text-body-1 my-auto">{{ secondsToMinutes(course?.duration || 0) }}</span>
                                </div>
                                <VSpacer />
                                <div v-if="Number(course.progress) >= 100">
                                    <VIcon
                                        icon="tabler-checks"
                                        color="success"
                                        class="me-1"
                                    />
                                    <span class="text-success text-body-1">Completed</span>
                                </div>
                                <span
                                    v-else
                                    class="text-body-1 text-disabled font-weight-medium"
                                >
                                    {{ course.progress }}%
                                </span>
                            </div>
                            <VProgressLinear
                                :model-value="course.progress"
                                rounded
                                :color="Number(course.progress) >= 100 ? 'success' : 'primary'"
                                height="8"
                            />
                        </div>
                        <div class="d-flex flex-wrap gap-4">
                            <VBtn
                                v-if="Number(course.progress) >= 100"
                                variant="tonal"
                                color="secondary"
                                class="flex-grow-1"
                            >
                                <template #append>
                                    <VIcon
                                        icon="tabler-reload"
                                        class="flip-in-rtl"
                                    />
                                </template>
                                {{ $t("Start Over") }}
                            </VBtn>
                            <VBtn
                                v-else
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
                                {{ Number(course.progress) ? $t("Continue") : $t("Start") }}
                            </VBtn>
                        </div>
                    </VCardItem>
                </VCard>
            </template>
        </Masonry>
        <div class="mb-6">
            <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                    <VCard
                        flat
                        color="rgba(115, 103, 240, 0.08)"
                    >
                        <VCardText>
                            <div class="d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row">
                                <div class="text-center text-sm-start">
                                    <h5 class="text-h5 text-primary mb-1">
                                        <div class="d-flex justify-space-between gap-4 flex-column-reverse flex-sm-row">
                                            <div class="text-center text-sm-start">
                                                <h5 class="text-h5 text-primary mb-1">Earn a Certificate</h5>
                                                <p class="text-body-1 text-high-emphasis mb-6" />
                                            </div>
                                        </div>
                                    </h5>
                                    <p class="text-body-1 text-high-emphasis mb-6">Get the right professional certificate program for you.</p>
                                    <VBtn>View Programs</VBtn>
                                </div>

                                <div class="align-self-center">
                                    <div class="align-self-center">
                                        <img
                                            :src="boyAppAcademy"
                                            height="127"
                                        />
                                    </div>
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>

                <VCol
                    cols="12"
                    md="6"
                >
                    <VCard
                        variant="tonal"
                        flat
                        color="error"
                    >
                        <VCardText>
                            <div class="d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between">
                                <div class="text-center text-sm-start">
                                    <h5 class="text-h5 text-error mb-1">
                                        <div class="d-flex flex-column-reverse flex-sm-row gap-4 justify-space-between">
                                            <div class="text-center text-sm-start">
                                                <h5 class="text-h5 text-error mb-1">Best Rated Courses</h5>
                                                <p class="text-body-1 text-high-emphasis text-wrap mb-6" />
                                            </div>
                                        </div>
                                    </h5>
                                    <p class="text-body-1 text-high-emphasis text-wrap mb-6">Enroll now in the most popular and best rated courses.</p>
                                    <VBtn color="error"> View Courses </VBtn>
                                </div>

                                <div class="align-self-center">
                                    <div class="align-self-center">
                                        <img
                                            :src="girlAppAcademy"
                                            height="127"
                                        />
                                    </div>
                                </div>
                            </div>
                        </VCardText>
                    </VCard>
                </VCol>
            </VRow>
        </div>
        <VCard>
            <VCardText>
                <VRow>
                    <VCol
                        cols="12"
                        md="4"
                    >
                        <div class="d-flex flex-column align-center gap-y-4 h-100 justify-center">
                            <VAvatar
                                variant="tonal"
                                size="48"
                                rounded
                                color="primary"
                            >
                                <VIcon
                                    icon="tabler-gift"
                                    size="36"
                                />
                            </VAvatar>
                            <h3 class="text-h3 font-weight-medium">Today's Free Courses</h3>
                            <p class="text-body-1 text-center mb-2">We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today!</p>
                            <VBtn>Get Premium Courses</VBtn>
                        </div>
                    </VCol>
                    <VCol
                        cols="12"
                        md="4"
                        sm="6"
                    >
                        <VCard
                            flat
                            border
                        >
                            <div class="pa-2">
                                <VideoPlayer
                                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                                    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                    controls
                                    plays-inline
                                    :height="$vuetify.display.mdAndUp ? 200 : 150"
                                    class="w-100 rounded"
                                />
                            </div>
                            <VCardText>
                                <h5 class="text-h5 mb-1">Your First Singing Lesson</h5>
                                <p class="text-body-1 mb-0">In the same way as any other artistic domain, singing lends itself perfectly to self-teaching.</p>
                            </VCardText>
                        </VCard>
                    </VCol>
                    <VCol
                        cols="12"
                        md="4"
                        sm="6"
                    >
                        <VCard
                            flat
                            border
                        >
                            <div class="pa-2">
                                <VideoPlayer
                                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                                    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                    :height="$vuetify.display.mdAndUp ? 200 : 150"
                                    class="w-100 rounded"
                                />
                            </div>
                            <VCardText>
                                <h5 class="text-h5 mb-1">Guitar for Beginners</h5>
                                <p class="text-body-1 mb-0">The Fender Acoustic Guitar is best choice for beginners and professionals.</p>
                            </VCardText>
                        </VCard>
                    </VCol>
                </VRow>
            </VCardText>
        </VCard>
    </div>
</template>

<style lang="scss">
@import "video.js/dist/video-js.css";

.illustration1 {
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 0;
}

.illustration2 {
    position: absolute;
    inset-block-start: 2rem;
    inset-inline-start: 2.5rem;
}
.course-title {
    &:not(:hover) {
        color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis));
    }
}
</style>
