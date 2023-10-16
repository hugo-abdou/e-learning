<template>
    <div class="card">
        <VRow>
            <VCol cols="12" md="8">
                <VCard>
                    <VCardText class="py-0 px-0">
                        <div v-if="player && isReady">
                            <div class="position-relative">
                                <VuePlyr
                                    ref="plyr"
                                    @ended="finished = true"
                                    :src="player.url"
                                    :poster="player.thumb_url"
                                    :title="course?.title"
                                >
                                </VuePlyr>
                                <div
                                    v-if="finished"
                                    class="position-absolute w-100 h-100 d-flex gap-1 align-center justify-center"
                                    style="inset: 0; background-color: rgba(0, 0, 0, 0.568)"
                                >
                                    <v-btn @click="replay" color="default" prepend-icon="mdi-rotate-left"> Start Over </v-btn>
                                    <v-btn
                                        v-if="selectedVideo < playlist.length - 1"
                                        @click="nextEpisod"
                                        color="default"
                                        append-icon="mdi-skip-forward"
                                    >
                                        Continue
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                        <v-skeleton-loader v-else :type="['image', 'image']"></v-skeleton-loader>
                    </VCardText>
                    <VCardItem>
                        <div v-if="isReady">
                            <VCardTitle class="text-capitalize text-h3"> {{ course?.title }} </VCardTitle>
                            <VCardSubtitle class="d-flex align-center">
                                <div class="d-flex mt-3">
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
                                </div>
                            </VCardSubtitle>
                        </div>
                        <v-skeleton-loader v-else :type="['heading', 'list-item-avatar-three-line']"></v-skeleton-loader>
                        <VSpacer />
                        <template #append>
                            <VBtn color="default" variant="text" size="28" icon="tabler-share"></VBtn>
                            <VBtn color="default" variant="text" size="28" icon="tabler-bookmarks"></VBtn>
                        </template>
                    </VCardItem>
                    <VDivider class="mx-6" />
                    <VCardItem v-if="isReady" title="About this course">
                        <p class="mb-0 pt-1">
                            {{ course?.description }}
                        </p>
                    </VCardItem>
                    <v-skeleton-loader class="py-5" v-else :type="['heading', 'paragraph']"></v-skeleton-loader>
                    <VDivider class="mx-6" />
                    <VCardItem v-if="isReady" title="By the numbers">
                        <div class="d-flex flex-wrap mt-5">
                            <div class="me-5">
                                <p class="text-nowrap">
                                    <VIcon icon="mdi-check-all" class="me-2 mt-n2" /> Skill level: {{ course?.difficulty }}
                                </p>
                                <p class="text-nowrap"><VIcon icon="mdi-users" class="me-2 mt-n2" />Students: 38,815</p>
                                <p class="text-nowrap"><VIcon icon="mdi-flag" class="me-2 mt-n2" />Languages: English</p>
                                <!-- <p class="text-nowrap"><VIcon icon="mdi-file" class="me-2 mt-n2" />Captions: Yes</p> -->
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
                </VCard>
            </VCol>
            <VCol cols="12" md="4">
                <div class="position-sticky" style="top: 90px">
                    <VExpansionPanels variant="accordion">
                        <VExpansionPanel v-for="(item, i) in course?.chapters" :key="item.id">
                            <VExpansionPanelTitle> {{ item.title }} </VExpansionPanelTitle>
                            <VExpansionPanelText>
                                <!-- @vue-ignore -->
                                <VList :multiple="false" v-model:selected="selectedVideo">
                                    <VListItem
                                        prepend-icon="tabler-play"
                                        v-if="item.video && item.video.type === 'video'"
                                        :value="i"
                                        :active="selectedVideo === i"
                                        rounded="lg"
                                        variant="tonal"
                                        :title="item.video.name"
                                        :subtitle="secondsToMinutes(item.video.duration)"
                                    />
                                    <VListItem
                                        prepend-icon="fluent:document-16-regular"
                                        v-for="media in item.documents"
                                        :key="media.id"
                                        :value="media.id"
                                        disabled
                                        rounded="shaped"
                                        :title="media.name"
                                    />
                                </VList>
                            </VExpansionPanelText>
                        </VExpansionPanel>
                    </VExpansionPanels>
                </div>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { useCourseStore } from "@/stores/useCourseStore";
import { Course, Media } from "@/types";
import { avatarText } from "@/@core/utils/formatters";
import { secondsToMinutes } from "@/helpers";

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const course = ref<Course>();
const playlist = ref<Media[]>([]);
const selectedVideo = ref<number>(0);
const isReady = computed<boolean>(() => !!course.value);
const finished = ref<boolean>(false);
const plyr = ref();
const player = computed(() => playlist.value[selectedVideo.value]);

const nextEpisod = () => {
    finished.value = false;
    selectedVideo.value++;
    setTimeout(() => plyr.value.player.play(), 50);
};
const replay = () => {
    finished.value = false;
    setTimeout(() => plyr.value.player.play(), 50);
};

onBeforeMount(async () => {
    try {
        course.value = await courseStore.getCourse(Number(route.params.id), { additional: { chapters: true } });
        if (course.value) {
            playlist.value = course.value.chapters.reduce((result, { video }) => {
                if (video) result.push(video);
                return result;
            }, [] as Media[]);
            // selectedVideo.value = playlist.value[0].id;
        }
    } catch (error) {
        router.push({ name: "course" });
    }
});
</script>
<route lang="yaml">
meta:
    navActiveLink: course
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
