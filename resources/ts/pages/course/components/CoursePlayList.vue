<script setup lang="ts">
import { secondsToMinutes } from "@/helpers";
import type { Attachment } from "@/types";
import { resolveAttachmentTypeIcon, resolveDefaultThumbnal } from "@/utils";
import { debounce } from "lodash";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

type PlaylistAttachment = Attachment & {
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
}

type Playlist = (
  | PlaylistAttachment
  | { type: "header"; title: string; id: number }
)[];
const isLoading = ref(false);
const playlist = ref<Playlist>([]);
const hasNext = ref(false);
const route = useRoute();
const router = useRouter();
const search = ref();

const getPlayListItemIndex = (mediaId: number, chapterId: number) => {
  return playlist.value.findIndex(
    (it) =>
      it.type !== "header" && it.chapter_id === chapterId && it.id === mediaId
  );
};
const getActive = () => {
  // @ts-ignore
  const media = route.params.media as string;
  if (media) {
    const mediaMeta = media.split("-");
    const mediaId: number = Number(mediaMeta[mediaMeta.length - 2]);
    const chapterId: number = Number(mediaMeta[mediaMeta.length - 1]);
    return playlist.value.find(
      (it) =>
        it.type !== "header" && it.chapter_id === chapterId && it.id === mediaId
    );
  }
};
const goToIndex = (index: number) => {
  const nextItem = playlist.value[index];
  if (!nextItem) return;
  if (nextItem.type !== "header") {
    router.push({
      name: "course-id-watch-media",
      params: {
        id: props.courseId,
        media: `${nextItem.slug}-${nextItem.id}-${nextItem.chapter_id}`,
      },
    });
  } else {
    goToIndex(index + 1);
  }
};
const next = () => {
  const { chapter_id, id } = getActive() as PlaylistAttachment;
  const currentIndex = getPlayListItemIndex(id, chapter_id);
  goToIndex(currentIndex + 1);
  checkForNext();
};
const prev = () => {};

const chaptersStore = useCourseStore();

const getPlaylist = debounce(async () => {
  try {
    isLoading.value = true;
    const { data } = await chaptersStore.getChapters(props.courseId, {
      itemsPerPage: 1000,
    });
    playlist.value = data.reduce(
      (result: Playlist, { attachments, title, id }, i) => {
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
      },
      []
    );
    checkForNext();
  } catch (error) {
    throw error;
  }
  isLoading.value = false;
}, 500);

watch(search, getPlaylist);

onMounted(() => {
  if (!props.courseId) return;
  getPlaylist();
});

const checkForNext = () => {
  const active = getActive() as PlaylistAttachment | undefined;
  if (active) {
    const currentIndex = getPlayListItemIndex(active.id, active.chapter_id);
    hasNext.value = playlist.value.length > currentIndex + 1;
  }
};

// @ts-ignore
watch(() => route.params.media, checkForNext);
defineExpose({ next, prev, hasNext });
</script>

<template>
  <!-- @vue-ignore -->
  <VCardItem>
    <VTextField
      class="mt-2"
      v-model="search"
      prepend-inner-icon="tabler-search"
      label="Search"
      clearable
    />
  </VCardItem>
  <VList v-if="!isLoading" lines="two">
    <template
      v-for="attachment in playlist"
      :key="`${attachment.slug}-${attachment.id}-${attachment.chapter_id}`"
    >
      <VListItem
        v-if="attachment.type !== 'header'"
        class="mt-2"
        :title="attachment.name"
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
            <VImg
              style="aspect-ratio: 16/9; inline-size: 100px"
              class="rounded mr-2 bg-background border"
              :src="attachment.thumb_url || resolveDefaultThumbnal(attachment)"
              cover
            />
          </div>
        </template>
        <template #title="{ title }">
          <VCardSubtitle class="">
            {{ title }}
          </VCardSubtitle>
        </template>
        <VListItemSubtitle class="d-flex gap-2 pa-1 align-center">
          <VIcon size="16" :icon="resolveAttachmentTypeIcon(attachment.type)" />
          <VChip v-if="attachment.type === 'video'" size="x-small">
            <VIcon icon="mdi-clock-fast" size="16" class="mr-1" />
            {{ secondsToMinutes(attachment.duration) }}
          </VChip>
          <VSpacer />
          <InfoTooltip
            v-if="attachment.download"
            v-slot="{ props }"
            text="download"
          >
            <ActionButton
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
        <VListItemTitle>
          {{ $t("Chapter") }} - {{ attachment.title }}</VListItemTitle
        >
      </VListItem>
    </template>
    <VListItem v-if="!playlist.length">
      <VListItemTitle>Chapter empty</VListItemTitle>
    </VListItem>
  </VList>
  <VSkeletonLoader
    v-else
    :type="Array(5).fill('list-item-avatar-three-line')"
  />
</template>
