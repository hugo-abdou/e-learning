<script setup lang="ts">
import { secondsToMinutes } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import { Course } from "@/types";
import LessonsPlayList from "@/views/pages/chapter/LessonsPlayList.vue";
import QuizzesPlayList from "@/views/pages/quiz/QuizzesPlayList.vue";
import "video.js/dist/video-js.css";

definePage({
    meta: {
        navActiveLink: "browse",
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
        subject: "course",
        action: "read",
    },
});

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const courseStore = useCourseStore();
const course = ref<Course>();
onBeforeMount(async () => {
    loading.value = true;
    try {
        // @ts-ignore
        course.value = await courseStore.getCourse(route.params.id, {});
    } catch (error: any) {
        if (error.status === 404) {
            router.push({ name: "course" });
        }
    }
    loading.value = false;
});
</script>

<template>
    <section class="course-details">
        <VRow>
            <!-- 👉 Course Details  -->
            <VCol
                cols="12"
                md="8"
            >
                <VCard>
                    <VImg
                        :src="course?.thumbnail"
                        style="aspect-ratio: 16/6"
                        cover
                    />
                    <VProgressLinear
                        v-if="course?.progress"
                        :model-value="course?.progress"
                        striped
                        class="rounded-0"
                    >
                        <template #default="{ value }">
                            <span class="text-xs">{{ Math.ceil(value) }}%</span>
                        </template>
                    </VProgressLinear>
                    <VList lines="three">
                        <VListItem lines="two">
                            <VListItemSubtitle style="font-family: 'Roboto', 'Arial', sans-serif; font-size: 1.6rem; line-height: 2.2rem; font-weight: 500">
                                {{ course?.title }}
                            </VListItemSubtitle>
                            <VListItemSubtitle class="mt-3">
                                <div class="d-flex align-center">
                                    <VAvatar
                                        size="34"
                                        :variant="!course?.author.avatar ? 'tonal' : undefined"
                                        class="me-3"
                                    >
                                        <VImg
                                            v-if="course?.author.avatar"
                                            :src="course?.author.avatar"
                                            cover
                                        />
                                        <span v-else>{{ avatarText(course?.author.name) }}</span>
                                    </VAvatar>
                                    <h6 class="text-base">
                                        {{ course?.author.name }}
                                    </h6>
                                </div>
                            </VListItemSubtitle>
                            <template #append>
                                <IconBtn icon="tabler-dots-vertical" />
                            </template>
                        </VListItem>
                    </VList>
                    <VDivider class="ma-3" />
                    <VCardTitle>Description</VCardTitle>
                    <VCardSubtitle>
                        {{ course?.description }}
                    </VCardSubtitle>
                    <VDivider class="ma-3" />
                    <VCardTitle>Course Categories</VCardTitle>
                    <VCardText class="d-flex gap-2 align-center pl-3">
                        <VChip
                            v-for="category in course?.categories"
                            color="primary"
                            class="text-capitalize"
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
                    </VCardText>
                    <VDivider class="ma-3" />
                    <VCardTitle>By the numbers</VCardTitle>
                    <VCardText>
                        <div class="d-flex gap-x-12 gap-y-5 flex-wrap">
                            <VList class="card-list">
                                <VListItem>
                                    <template #prepend>
                                        <VIcon icon="tabler-checks" />
                                    </template>
                                    <VListItemTitle class="text-body-1"> Skill Level : {{ course?.difficulty }} </VListItemTitle>
                                </VListItem>
                                <VListItem>
                                    <template #prepend>
                                        <VIcon icon="tabler-user" />
                                    </template>
                                    <VListItemTitle class="text-body-1"> Students : {{ course?.studentsCount }} </VListItemTitle>
                                </VListItem>
                            </VList>
                            <VList class="card-list">
                                <VListItem>
                                    <template #prepend>
                                        <VIcon icon="tabler-clock" />
                                    </template>
                                    <VListItemTitle class="text-body-1"> Video : {{ secondsToMinutes(course?.duration || 0) }} </VListItemTitle>
                                </VListItem>
                            </VList>
                        </div>
                    </VCardText>
                </VCard>
            </VCol>

            <!-- 👉 Course Progress -->
            <VCol
                cols="12"
                md="4"
            >
                <div class="course-content">
                    <AppCardActions
                        title="Chapters"
                        actionCollapsed
                    >
                        <LessonsPlayList
                            v-if="course"
                            :course-id="course?.slug"
                        />
                    </AppCardActions>
                    <AppCardActions
                        title="Quizes"
                        class="mt-4"
                        actionCollapsed
                    >
                        <QuizzesPlayList
                            v-if="course"
                            :course-id="course?.slug"
                        />
                    </AppCardActions>
                </div>
            </VCol>
        </VRow>
    </section>
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 1rem;
}

.course-content {
    position: sticky;
    inset-block-start: 8.25rem;
}
</style>
