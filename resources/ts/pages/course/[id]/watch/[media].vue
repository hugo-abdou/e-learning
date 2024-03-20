<template>
    <section class="course-details">
        <VRow align="start">
            <VCol
                cols="12"
                md="8"
            >
                <div :style="mediaStyle">
                    <Media
                        ref="mediaComponent"
                        v-bind="events"
                        :key="selected?.type + selected?.id"
                        :media="selected"
                        v-if="selected"
                    >
                        <template
                            v-if="selected.type === MediaTypes.image || (selected.type === MediaTypes.pdf && finished)"
                            #toolbar
                        >
                            <VBtn
                                v-bind="btnProps"
                                append-icon="tabler-skip-forward"
                                @click="nextAttachment"
                            >
                                {{ playList.hasNext ? $t("Next") : $t("Finish") }}
                            </VBtn>
                        </template>
                        <VOverlay
                            :model-value="finished && selected.type === MediaTypes.video"
                            persistent
                            contained
                            class="align-center justify-center"
                        >
                            <VBtn
                                prepend-icon="tabler-skip-back"
                                @click="replay"
                                v-bind="btnProps"
                            >
                                {{ $t("Start over") }}
                            </VBtn>
                            <VBtn
                                v-bind="btnProps"
                                append-icon="tabler-skip-forward"
                                @click="nextAttachment"
                            >
                                {{ playList.hasNext ? $t("Next") : $t("Finish") }}
                            </VBtn>
                        </VOverlay>
                    </Media>
                    <VSkeletonLoader
                        v-else
                        :type="['image', 'image']"
                    />
                </div>
            </VCol>
            <VCol
                cols="12"
                md="4"
            >
                <div class="course-content">
                    <AppCardActions
                        title="Course Chapters"
                        actionCollapsed
                    >
                        <LessonsPlayList
                            ref="playList"
                            :course-id="route.params.id"
                        />
                    </AppCardActions>
                </div>
            </VCol>
        </VRow>
        <CongratulationsDialog
            :isDialogVisible="congratulationsDialogVisible"
            :successTitle="$t('course.congratulations.title')"
            :successSubtitle="$t('course.congratulations.subtitle')"
            @ok="
                () => {
                    $router.push({ name: 'course-id', params: { id: route.params.id } });
                }
            "
        />
    </section>
</template>
<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import Media from "@/components/Media";
import { debounce } from "@/helpers";
import { useAuthStore } from "@/stores/useAuthStore";
import { useCourseStore } from "@/stores/useCourseStore";
import { useMediaStore } from "@/stores/useMediaStore";
import { Attachment, VideoPlayerMessage } from "@/types";
import LessonsPlayList from "@/views/pages/chapter/LessonsPlayList.vue";
import { StyleValue } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
definePage({
    meta: {
        navActiveLink: "browse",
        redirectIfNotLoggedIn: true,
        redirectIfNotVerified: true,
        roles: ["student"],
        subject: "course",
        action: "read",
    },
});
const route = useRoute<"course-id-watch-media">();

const selected = ref<Attachment & { playing?: boolean }>();
const mediaComponent = ref();

const finished = ref<boolean>(false);
const playList = ref();
const auth = useAuthStore();
const courseStore = useCourseStore();
const hasError = ref(false);
const congratulationsDialogVisible = ref(false);
const setAttachmentProgress = (currentTime: number, duration: number) => {
    if (selected.value && !hasError.value && auth.isStudent) {
        const percent = Math.ceil((Math.ceil(currentTime) / Math.ceil(duration)) * 100);
        // @ts-ignore
        if (selected.value.progress < percent) {
            courseStore.setAttachmentProgress(selected.value.id, percent).catch(() => (hasError.value = true));
            playList.value.progress(currentTime, duration);
        }
    }
};
const events = computed(() => {
    if (!selected.value) return {};
    if (selected.value.type === MediaTypes.video) {
        return {
            onEnded: (e: VideoPlayerMessage) => {
                setAttachmentProgress(1, 1);
                finished.value = true;
            },
            onProgress(e: VideoPlayerMessage) {
                setAttachmentProgress(e.status.currentTime, e.status.duration);
            },
            onPlay: () => {
                if (selected.value) selected.value.playing = true;
            },
            onPause: () => {
                if (selected.value) selected.value.playing = false;
            },
        };
    }
    if (selected.value.type === MediaTypes.pdf) {
        return {
            "onUpdate:pdf": ({ page, pages }: any) => {
                if (page == pages) finished.value = true;
                setAttachmentProgress(page, pages);
            },
        };
    }
});

const nextAttachment = () => {
    if (playList.value.hasNext) {
        if (selected.value?.type === MediaTypes.image) {
            setAttachmentProgress(1, 1);
        }
        playList.value.next();
        finished.value = false;
    } else {
        congratulationsDialogVisible.value = true;
    }
};

const replay = () => {
    if (selected.value?.type === MediaTypes.video) {
        mediaComponent.value?.play();
    } else if (selected.value?.type === MediaTypes.pdf) {
        // mediaComponent.value.reset();
        console.log(mediaComponent.value);
    }
    finished.value = false;
};

watch(
    () => playList.value?.selected,
    (newVal) => {
        if (newVal) {
            selected.value = newVal;
            if (newVal.type === MediaTypes.image) {
                setAttachmentProgress(1, 1);
                finished.value = true;
            }
        }
    }
);

const mediaStyle = computed(() => {
    if (!selected.value) return {};
    const style: StyleValue = {
        width: "100%",
        aspectRatio: (selected.value.width / selected.value.height) as number,
        maxHeight: "calc(100vh - 220px)",
        display: "flex",
        justifyContent: "center",
    };
    return style;
});

const btnProps = {
    size: "small",
    color: "default",
    variant: "elevated",
} as const;
</script>

<style lang="scss" scoped>
.course-content {
    position: sticky;
    inset-block-start: 8.25rem;
}
</style>
