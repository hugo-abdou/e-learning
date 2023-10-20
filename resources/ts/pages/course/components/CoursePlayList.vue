<template>
    <!-- @vue-ignore -->
    <VList lines="two" :border="isBorderd" :selected="[attachment]" @update:selected="updateSelected">
        <template v-for="(attachment, i) in playlist" :key="attachment.id" class="mt-2">
            <VListItem v-if="attachment.type !== 'header'" variant="flat" :value="attachment">
                <template #prepend="{ isActive }">
                    <VAvatar style="width: 72px; height: 50px" rounded variant="tonal">
                        <VImg :src="attachment.thumb_url || resolveDefaultThumbnal(attachment.type)" cover />
                    </VAvatar>
                </template>
                <VListItemTitle :title="attachment.name">
                    {{ attachment.name }}
                </VListItemTitle>
                <VListItemSubtitle class="d-flex gap-2 align-center">
                    <VIcon size="16" :icon="resolveAttachmentTypeIcon(attachment.type)" />
                    <VChip v-if="attachment.type == 'video'" size="x-small">
                        <VIcon start size="16" icon="mdi-clock-fast" />
                        <span>
                            {{ secondsToMinutes(attachment.duration) }}
                        </span>
                    </VChip>
                </VListItemSubtitle>
            </VListItem>
            <VListItem v-else>
                <VListItemTitle> {{ $t("Chapter") }} - {{ attachment.title }}</VListItemTitle>
            </VListItem>
        </template>
        <VListItem v-if="!playlist.length">
            <VListItemTitle>Chapter empty</VListItemTitle>
        </VListItem>
    </VList>
</template>

<script setup lang="ts">
import { useThemeConfig } from "@/@core/composable/useThemeConfig";
import { resolveAttachmentTypeIcon, resolveDefaultThumbnal } from "@/utils";
import { secondsToMinutes } from "@/helpers";
import { Attachment, Chapter } from "@/types";

type PlaylistAttachment = Attachment;

interface Props {
    chapters: Chapter[];
    attachment?: PlaylistAttachment;
}
const props = defineProps<Props>();

interface Emits {
    (e: "update:attachment", value: PlaylistAttachment): void;
    (e: "play", value: PlaylistAttachment): void;
}
const emit = defineEmits<Emits>();

const theme = useThemeConfig();
const isBorderd = computed(() => theme.skin.value === "bordered");
type Playlist = (PlaylistAttachment | { type: "header"; title: string; id: number })[];
const playlist = ref<Playlist>([]);

const updateSelected = (e: PlaylistAttachment[]) => {
    if (e[0]) {
        emit("update:attachment", e[0]);
    }
};

const next = () => {
    if (props.attachment) {
        // @ts-ignore
        let activeIndex = props.attachment?.index;
        let nextIndex = activeIndex + 1;

        // check if the index is a header or attachment
        if (playlist.value[nextIndex]?.type === "header") nextIndex++;
        // @ts-ignore
        const attachment = playlist.value.find(({ index }) => nextIndex === index);
        if (attachment) {
            emit("update:attachment", attachment as Attachment);
        }
    }
};
const prev = () => {};

defineExpose({ next, prev });
onMounted(() => {
    playlist.value = props.chapters
        .reduce((result: Playlist, { attachments, title, id }) => {
            if (attachments.length) {
                result.push({ type: "header", title, id });
                result.push(...JSON.parse(JSON.stringify(attachments.map((it, i) => ({ ...it, chapter_id: id })))));
            }
            return result;
        }, [])
        .map((it, i) => ({ ...it, index: i }));

    const first = playlist.value.filter(({ type }) => type !== "header")[0];
    emit("update:attachment", first as PlaylistAttachment);
});
</script>

<style scoped></style>
