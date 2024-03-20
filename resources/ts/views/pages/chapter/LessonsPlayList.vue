<script setup lang="ts">
import { secondsToMinutes } from "@/helpers";
import { Attachment, VideoPlayerMessage } from "@/types";
import { resolveAttachmentTypeIcon, debounce } from "@/helpers";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { useCourseStore } from "@/stores/useCourseStore";
import { MediaTypes } from "@/@core/enums";
import { useStudentsStore } from "@/stores/useStudentsStore";

type PlaylistAttachment = Attachment & {
    playing?: boolean;
    index: number;
    chapter_id: number;
};

interface Props {
    courseId: any;
}
const props = defineProps<Props>();

const emit = defineEmits<Emits>();
interface Emits {
    (e: "play", value: Attachment): void;
    (e: "progress", value: number): void;
}

type Playlist = (PlaylistAttachment | { type: "header"; title: string; id: number })[];
const isLoading = ref(false);
const playlist = ref<Playlist>([]);
const hasNext = ref(false);
const route = useRoute<"course-id-watch-media">();
const router = useRouter();
const search = ref();

const selected = computed(() => playlist.value.find((it) => it.type !== "header" && `${it.slug}-${it.id}-${it.chapter_id}` === route.params.media));
const selectedIndex = computed<number>(() => playlist.value.findIndex((it) => it.type !== "header" && `${it.slug}-${it.id}-${it.chapter_id}` === route.params.media));
watch(selectedIndex, () => {
    hasNext.value = playlist.value.length > selectedIndex.value + 1;
});

const next = () => {
    if (!hasNext.value) return;
    let nextAttachment = playlist.value[selectedIndex.value + 1];
    if (nextAttachment.type === "header") nextAttachment = playlist.value[selectedIndex.value + 2];
    router.push({
        name: "course-id-watch-media",
        params: {
            id: props.courseId,
            // @ts-ignore
            media: `${nextAttachment.slug}-${nextAttachment.id}-${nextAttachment.chapter_id}`,
        },
    });
};
const prev = () => {};

const studentStore = useStudentsStore();

const getPlaylist = debounce(async () => {
    try {
        isLoading.value = true;
        const { data } = await studentStore.fetchChapters(props.courseId, {});
        playlist.value = data.reduce((result: Playlist, { attachments, title, id }, i) => {
            const filterdAttachments = attachments.filter((item) => {
                if (!search.value) return true;
                return item.name.toLowerCase().includes(search.value.toLowerCase());
            });
            if (filterdAttachments.length) {
                result.push({ type: "header", title, id });
                result.push(
                    ...filterdAttachments.map((it) => ({
                        ...it,
                        index: i,
                        chapter_id: id,
                    }))
                );
            }
            return result;
        }, []);
    } finally {
        isLoading.value = false;
    }
}, 500);

watch(search, getPlaylist, { immediate: true });

const progress = (currentTime: number, duration: number) => {
    const percent = Math.ceil((Math.ceil(currentTime) / Math.ceil(duration)) * 100);
    // @ts-ignore
    selected.value.progress = Number(percent);
};

// @ts-ignore
defineExpose({ next, prev, progress, hasNext, selected });
</script>

<template>
    <VList
        v-if="!isLoading"
        lines="two"
    >
        <VListItem>
            <VTextField
                v-model="search"
                prepend-inner-icon="tabler-search"
                label="Search"
                class="mt-1"
                clearable
            />
        </VListItem>
        <template
            v-for="attachment in playlist"
            :key="`${attachment.slug}-${attachment.id}-${attachment.chapter_id}`"
        >
            <VListItem
                v-if="attachment.type !== 'header'"
                class="mt-2 ma-2 border rounded"
                :title="attachment.name.replace(/[^\w\s]/g, ' ').replace(/[_-]/g, ' ')"
                :to="{
                    name: 'course-id-watch-media',
                    params: {
                        id: courseId,
                        media: `${attachment.slug}-${attachment.id}-${attachment.chapter_id}`,
                    },
                }"
            >
                <template #prepend="{ isActive }">
                    <div>
                        <VProgressCircular
                            size="40"
                            width="1.5"
                            :model-value="attachment.progress"
                            color="on-primary"
                            class="mr-4"
                        >
                            <div
                                v-if="Number(attachment.progress) < 100"
                                class="d-flex align-center justify-center text-sm"
                            >
                                {{ Number(attachment.progress) }}
                                <span class="sr-only">%</span>
                            </div>

                            <VIcon
                                v-else-if="attachment.playing"
                                icon="tabler-pause"
                            />
                            <VIcon
                                v-else
                                icon="tabler-check"
                            />
                        </VProgressCircular>
                        <!-- <VImg
                            v-else
                            style="aspect-ratio: 16/9; inline-size: 100px"
                            class="rounded mr-2 bg-background border"
                            :src="attachment.thumb_url || resolveDefaultThumbnal(attachment)"
                            cover
                        /> -->
                    </div>
                </template>
                <VListItemSubtitle class="d-flex gap-2 pa-1 align-center">
                    <VIcon
                        size="16"
                        :icon="resolveAttachmentTypeIcon(attachment.type)"
                    />
                    <VChip
                        v-if="attachment.type === 'video'"
                        size="x-small"
                    >
                        <VIcon
                            icon="tabler-clock"
                            size="14"
                            class="mr-1"
                        />
                        {{ secondsToMinutes(attachment.duration) }}
                    </VChip>
                    <VSpacer />
                    <InfoTooltip
                        v-if="attachment.download"
                        v-slot="{ props }"
                        text="download"
                    >
                        <IconBtn
                            size="x-small"
                            icon="mdi-download"
                            download
                            :href="attachment.path"
                            v-bind="props"
                        />
                    </InfoTooltip>
                </VListItemSubtitle>
            </VListItem>
            <VListItem v-else>
                <VListItemTitle> {{ $t("Chapter") }} - {{ attachment.title }}</VListItemTitle>
            </VListItem>
        </template>
        <VListItem v-if="!playlist.length">
            <VListItemTitle>{{ $t("no_records_found") }}</VListItemTitle>
        </VListItem>
    </VList>
    <VSkeletonLoader
        v-else
        :type="Array(5).fill('list-item-avatar-three-line')"
    />
</template>
