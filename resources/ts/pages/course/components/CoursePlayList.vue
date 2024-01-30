<script setup lang="ts">
import { secondsToMinutes } from "@/helpers";
import type { Attachment } from "@/types";
import { resolveAttachmentTypeIcon, resolveDefaultThumbnal } from "@/utils";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

type PlaylistAttachment = Attachment & { index: number; active: boolean };

interface Props {
  selected?: PlaylistAttachment;
  courseId: number;
}
const props = defineProps<Props>();

const emit = defineEmits<Emits>();
interface Emits {
  (e: "update:selected", value: Attachment): void;
  (e: "play", value: Attachment): void;
}

// TODO: make this dinamique
const isBorderd = false;
type Playlist = (
  | PlaylistAttachment
  | { type: "header"; title: string; id: number }
)[];
const playlist = ref<Playlist>([]);

const updateSelected = (index: number) => {
  if (index) {
    playlist.value.forEach((item) => {
      if (item.type !== "header" && item.index === index) {
        item.active = true;
        emit("update:selected", item as Attachment);
      } else {
        item.active = false;
      }
    });
  }
};

const next = () => {
  if (props.selected) {
    const activeIndex = props.selected?.index;
    let nextIndex = activeIndex + 1;
    // check if the index is a header or attachment
    if (playlist.value[nextIndex]?.type === "header") nextIndex++;

    updateSelected(nextIndex);
  }
};

const prev = () => {};

const chaptersStore = useCourseStore();
onMounted(async () => {
  if (!props.courseId) return;
  try {
    const { data } = await chaptersStore.getChapters(props.courseId, {
      itemsPerPage: 1000,
    });

    playlist.value = data.reduce(
      (result: Playlist, { attachments, title, id }) => {
        if (attachments.length) {
          result.push({ type: "header", title, id });
          result.push(
            ...attachments.map((it, i) => ({
              ...it,
              index: i,
              active: i === 0,
              chapter_id: id,
            }))
          );
        }
        return result;
      },
      []
    );

    const first = playlist.value.find(
      (item) => item.type === "video" && item.active
    );
    emit("update:selected", first as Attachment);
  } catch (error) {}
});

defineExpose({ next, prev });
</script>

<template>
  <!-- @vue-ignore -->
  <div>
    <VList v-if="playlist.length" lines="two" :border="isBorderd">
      <template v-for="attachment in playlist" :key="attachment.id">
        <VListItem
          v-if="attachment.type !== 'header'"
          class="mt-2"
          :title="attachment.name"
          :active="attachment.active"
          @click="updateSelected(attachment.index)"
        >
          <template #prepend="{ isActive }">
            <div>
              <VImg
                style="aspect-ratio: 16/9; inline-size: 100px"
                class="rounded mr-2 bg-background border"
                :src="
                  attachment.thumb_url || resolveDefaultThumbnal(attachment)
                "
                cover
              />
            </div>
          </template>
          <template #title="{ title }">
            <ResponsiveText
              v-slot="{ text }"
              :text="String(title)"
              :max-lines="2"
              :char-width="2"
            >
              {{ text }}
            </ResponsiveText>
          </template>
          <VListItemSubtitle class="d-flex gap-2 pa-1 align-center">
            <VIcon
              size="16"
              :icon="resolveAttachmentTypeIcon(attachment.type)"
            />
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
  </div>
</template>
