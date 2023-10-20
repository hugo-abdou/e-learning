<template>
    <div class="card">
        <VRow>
            <VCol cols="12" md="8">
                <VCard>
                    <VCardText v-if="!loading && activeAttachment" class="py-0 px-0">
                        <div class="position-relative">
                            <div v-if="activeAttachment.type === MediaTypes.video">
                                <VuePlyr
                                    @ready="plyr = $event.target.plyr"
                                    @ended="finished = true"
                                    @pause="activeAttachment.playing = false"
                                    @play="activeAttachment.playing = true"
                                    :src="activeAttachment.url"
                                    :poster="activeAttachment.thumb_url"
                                    :title="course?.title"
                                />
                                <div
                                    v-if="finished"
                                    class="position-absolute w-100 h-100 d-flex gap-1 align-center justify-center"
                                    style="inset: 0; background-color: rgba(0, 0, 0, 0.568)"
                                >
                                    <v-btn @click="replay" color="default" prepend-icon="mdi-rotate-left">Start Over</v-btn>
                                    <v-btn @click="nextAttachment" color="default" append-icon="mdi-skip-forward">Continue</v-btn>
                                </div>
                            </div>

                            <Media v-else :media="activeAttachment" :key="activeAttachment.type" @update:pdf="pdfPageUpdated" is-preview>
                                <template #bottom-toolbar>
                                    <v-btn
                                        v-if="activeAttachment.type === MediaTypes.pdf && finished"
                                        @click="nextAttachment"
                                        variant="tonal"
                                        color="default"
                                        append-icon="mdi-skip-forward"
                                    >
                                        Continue
                                    </v-btn>
                                    <v-btn
                                        v-if="activeAttachment.type === MediaTypes.image"
                                        @click="nextAttachment"
                                        variant="tonal"
                                        color="default"
                                        append-icon="mdi-skip-forward"
                                    >
                                        Continue
                                    </v-btn>
                                </template>
                            </Media>
                        </div>
                    </VCardText>
                    <v-skeleton-loader v-else :type="['image', 'image']"></v-skeleton-loader>
                </VCard>
                <VCardItem v-if="!loading">
                    <VCardTitle class="text-capitalize text-h3 d-flex">
                        <span class="truncate">
                            {{ course?.title }}
                        </span>
                    </VCardTitle>
                    <VCardSubtitle class="d-flex mt-3 px-1">
                        <VAvatar size="35" class="me-2">
                            <VImg v-if="course?.author.profile_photo_url" :src="course?.author.profile_photo_url" cover />
                            <span v-else>{{ avatarText(course?.author.name || "") }}</span>
                        </VAvatar>
                        <div class="d-flex flex-column">
                            <h6 class="text-base">
                                <RouterLink to="#" class="font-weight-medium user-list-name text-grey-600">
                                    {{ course?.author.name }}
                                </RouterLink>
                            </h6>
                            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                        <VSpacer />
                        <VMenu location="top right" class="mx-2">
                            <template #activator="{ props }">
                                <VBtn variant="tonal" density="comfortable" icon="mdi-dots-vertical" color="default" v-bind="props" />
                            </template>
                            <VList :items="menuItem.filter(({ _if }) => _if)" />
                        </VMenu>
                    </VCardSubtitle>
                </VCardItem>
                <v-skeleton-loader v-else :type="['heading', 'list-item-avatar-three-line']"></v-skeleton-loader>
                <VDivider class="mx-6" />
                <VCardItem v-if="!loading" title="About this course">
                    <p class="mb-0 pt-1">
                        {{ course?.description }}
                    </p>
                </VCardItem>
                <v-skeleton-loader class="py-5" v-else :type="['heading', 'paragraph']"></v-skeleton-loader>
                <VDivider class="mx-6" />
                <VCardItem v-if="!loading" title="By the numbers">
                    <div class="d-flex flex-wrap mt-5">
                        <div class="me-5">
                            <p class="text-nowrap">
                                <VIcon icon="mdi-check-all" class="me-2 mt-n2" /> Skill level: {{ course?.difficulty }}
                            </p>
                            <p class="text-nowrap"><VIcon icon="mdi-users" class="me-2 mt-n2" />Students: 38,815</p>
                            <p class="text-nowrap"><VIcon icon="mdi-flag" class="me-2 mt-n2" />Languages: English</p>
                        </div>
                        <div>
                            <p class="text-nowrap"><VIcon icon="mdi-pencil" class="me-2 mt-n2" />Lectures: 19</p>
                            <p class="text-nowrap">
                                <VIcon icon="mdi-clock" class="me-2 mt-n2" />Video: {{ secondsToMinutes(course?.duration || 0) }} total
                                minutes
                            </p>
                        </div>
                    </div>
                </VCardItem>
                <v-skeleton-loader class="py-5" v-else :type="['heading', 'paragraph']"></v-skeleton-loader>
            </VCol>
            <VCol cols="12" md="4">
                <div class="position-sticky" style="top: 90px">
                    <CoursePlayList
                        ref="playList"
                        v-model:attachment="activeAttachment"
                        v-if="course?.chapters"
                        :chapters="course?.chapters"
                    />
                    <v-skeleton-loader v-else :type="Array(5).fill('list-item-avatar-three-line')"></v-skeleton-loader>
                </div>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { useCourseStore } from "@/stores/useCourseStore";
import { Attachment, Course } from "@/types";
import { avatarText } from "@/@core/utils/formatters";
import { secondsToMinutes } from "@/helpers";
import { MediaTypes } from "@/@core/enums";
import { useUserStore } from "@/stores/user";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const courseStore = useCourseStore();
const course = ref<Course>();
const finished = ref<boolean>(false);
const activeAttachment = ref<Attachment>();
const playList = ref();

const auth = useUserStore();
const plyr = ref<Plyr>();
const menuItem = computed(() => {
    return [
        {
            title: "edit",
            _if: auth.user.id === course.value?.author.id,
            props: { to: { name: "course-id-edit", params: { id: course.value?.id } }, "prepend-icon": "mdi-edit" }
        },
        { title: "download", _if: true, props: { "prepend-icon": "mdi-download" } },
        { title: "share", _if: true, props: { "prepend-icon": "tabler-share" } }
    ];
});

const pdfPageUpdated = ({ page, pages }: any) => {
    if (page == pages) finished.value = true;
};
const nextAttachment = () => {
    playList.value.next();
    finished.value = false;
};
const replay = () => {
    setTimeout(() => {
        plyr.value?.play();
    }, 500);
    finished.value = false;
};

watch(activeAttachment, val => {
    if (val && val.type === "video") {
        setTimeout(() => {
            plyr.value?.play();
        }, 500);
        finished.value = false;
    }
});

onBeforeMount(async () => {
    loading.value = true;
    try {
        course.value = await courseStore.getCourse(Number(route.params.id), { additional: { chapters: true } });
    } catch (error) {
        router.push({ name: "course" });
    }
    loading.value = false;
});
</script>
<route lang="yaml">
meta:
    navActiveLink: course
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
