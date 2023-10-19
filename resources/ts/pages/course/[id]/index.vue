<template>
    <div class="card">
        <VRow>
            <VCol cols="12" md="8">
                <VCard>
                    <VCardText class="py-0 px-0">
                        <div v-if="isReady && activeAttachment" class="position-relative">
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
                                    <v-btn @click="replay" color="default" prepend-icon="mdi-rotate-left"> Start Over </v-btn>
                                    <v-btn v-if="nextIsavailable" @click="nextEpisod" color="default" append-icon="mdi-skip-forward">
                                        Continue
                                    </v-btn>
                                </div>
                            </div>
                            <div v-if="activeAttachment.type === MediaTypes.pdf">
                                <PdfViewer
                                    :key="activeAttachment.url"
                                    :watermark="course?.author.name"
                                    :src="activeAttachment.url"
                                    v-slot="{ page, pages, reset }"
                                    canOpenPreview
                                    style="aspect-ratio: 16/9"
                                >
                                    <div
                                        v-if="page === pages"
                                        class="position-absolute py-2 w-100 d-flex gap-1 align-center justify-center"
                                        style="background-color: rgba(0, 0, 0, 0.151); bottom: 75px"
                                    >
                                        <v-btn @click="reset" color="default" prepend-icon="mdi-rotate-left"> Start Over </v-btn>
                                        <v-btn v-if="nextIsavailable" @click="nextEpisod" color="default" append-icon="mdi-skip-forward">
                                            Continue
                                        </v-btn>
                                    </div>
                                </PdfViewer>
                            </div>
                            <div v-if="activeAttachment.type === MediaTypes.image">
                                <VImg :src="activeAttachment.url" class="border" style="aspect-ratio: 16/9" cover />
                                <VImg
                                    :src="activeAttachment.url"
                                    style="top: 0"
                                    class="w-100 h-100 position-absolute blurred-background rounded"
                                />
                            </div>
                        </div>
                        <v-skeleton-loader v-else :type="['image', 'image']"></v-skeleton-loader>
                    </VCardText>
                    <VCardItem>
                        <div v-if="isReady">
                            <VCardTitle class="text-capitalize text-h3 d-flex">
                                <span class="truncate">
                                    {{ course?.title }}
                                </span>
                                <VSpacer />
                                <div class="text-sm">
                                    <VMenu transition="speed-dial" location="top" class="mx-2">
                                        <template #activator="{ props }">
                                            <ActionButton variant="plain" color="default" v-bind="props" icon="mdi-dots-vertical" />
                                        </template>
                                        <div class="mb-1 d-flex flex-column gap-1">
                                            <ActionButton
                                                v-if="auth.user.id === course?.author.id"
                                                :to="{ name: 'course-id-edit', params: { id: course.id } }"
                                                variant="elevated"
                                                icon="tabler-edit"
                                            />
                                            <ActionButton variant="elevated" icon="tabler-share" />
                                            <ActionButton variant="elevated" icon="tabler-bookmarks" />
                                        </div>
                                    </VMenu>
                                </div>
                            </VCardTitle>
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
                    <VExpansionPanels v-model="selectedChapter" v-if="isReady" variant="accordion">
                        <VExpansionPanel
                            v-if="course?.chapters.length"
                            v-for="(item, ch_i) in course?.chapters"
                            :value="ch_i"
                            :key="item.id"
                        >
                            <VExpansionPanelTitle> {{ item.title }} </VExpansionPanelTitle>
                            <VExpansionPanelText>
                                <VList
                                    :selected="[selectedAttachment]"
                                    @update:selected="([e]:any[]) => ((e >=0) && (selectedAttachment = e))"
                                    lines="two"
                                >
                                    <VListItem
                                        class="mt-1"
                                        v-for="(doc, at_i) in item.attachments"
                                        :key="doc.id"
                                        :active="selectedAttachment === at_i && activeChapter?.id === item.id"
                                        @click="activateAttachment(at_i, item)"
                                        rounded="lg"
                                        border
                                        variant="flat"
                                    >
                                        <template #prepend="{ isActive }">
                                            <VAvatar
                                                v-if="doc.type === MediaTypes.video"
                                                :icon="isActive && doc.playing ? 'mdi-pause' : 'mdi-play'"
                                                variant="tonal"
                                            />
                                            <VAvatar v-else-if="doc.type === MediaTypes.image" icon="mdi-image-outline" variant="tonal" />
                                            <VAvatar
                                                v-else-if="doc.type === MediaTypes.pdf"
                                                icon="mdi-file-document-outline"
                                                variant="tonal"
                                            />
                                        </template>
                                        <VListItemTitle>
                                            {{ doc.name }}
                                        </VListItemTitle>
                                        <VChip v-if="doc.type == 'video'" size="x-small">
                                            <VIcon start size="16" icon="mdi-clock-fast" />
                                            <span>
                                                {{ secondsToMinutes(doc.duration) }}
                                            </span>
                                        </VChip>
                                    </VListItem>
                                    <VListItem>
                                        <VListItemTitle>Chapter empty</VListItemTitle>
                                    </VListItem>
                                </VList>
                            </VExpansionPanelText>
                        </VExpansionPanel>
                        <VExpansionPanel v-else>
                            <VExpansionPanelTitle> This course dosn't have any chapters yet </VExpansionPanelTitle>
                        </VExpansionPanel>
                    </VExpansionPanels>
                    <v-skeleton-loader v-else :type="Array(5).fill('list-item-avatar-three-line')" class="py-2"></v-skeleton-loader>
                </div>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { useCourseStore } from "@/stores/useCourseStore";
import { Chapter, Course } from "@/types";
import { avatarText } from "@/@core/utils/formatters";
import { secondsToMinutes } from "@/helpers";
import { MediaTypes } from "@/@core/enums";
import { useUserStore } from "@/stores/user";
const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();
const course = ref<Course>();
const isReady = computed<boolean>(() => !!course.value);
const finished = ref<boolean>(false);
const selectedChapter = ref<number>(0);
const selectedAttachment = ref<number>(0);
const activeChapter = ref<Chapter>();
const activeAttachment = computed(() => activeChapter.value?.attachments[selectedAttachment.value]);
const isVideo = computed(() => activeAttachment.value?.type === MediaTypes.video);
const nextIsavailable = computed(() => {
    if (!course.value || !activeChapter.value) return false;
    return (
        activeChapter.value.attachments.length - 1 > selectedAttachment.value || course.value.chapters.length - 1 > selectedChapter.value
    );
});
const auth = useUserStore();
const plyr = ref<Plyr>();
const nextEpisod = () => {
    if (!activeChapter.value || !course.value) return;
    // check if the active chapter has more attachments then play next attachment
    if (activeChapter?.value.attachments.length - 1 > selectedAttachment.value) {
        selectedAttachment.value++;
    } else if (course.value?.chapters.length - 1 > selectedChapter.value) {
        selectedChapter.value++;
        activeChapter.value = course.value?.chapters[selectedChapter.value];
        selectedAttachment.value = 0;
    }
    if (isVideo.value) playVideo();
    finished.value = false;
};
const replay = () => {
    if (isVideo.value) playVideo();
    finished.value = false;
};
const activateAttachment = (att_i: number, chapter: Chapter) => {
    finished.value = false;
    selectedAttachment.value = att_i;
    activeChapter.value = chapter;
    if (isVideo.value) playVideo();
};

onMounted(() => {
    setTimeout(() => {
        if (isVideo.value) playVideo();
    }, 500);
});

const playVideo = () => {
    setTimeout(() => {
        if (plyr.value?.paused) {
            plyr.value.play();
        } else {
            plyr.value?.pause();
        }
    });
};

onBeforeMount(async () => {
    try {
        course.value = await courseStore.getCourse(Number(route.params.id), { additional: { chapters: true } });
        activeChapter.value = course.value?.chapters[selectedChapter.value];
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
