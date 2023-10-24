<template>
    <!-- @vue-ignore -->
    <VList lines="three" :border="isBorderd" :selected="[attachment]" @update:selected="updateSelected">
        <template v-for="(attachment, i) in playlist" :key="attachment.id" class="mt-2">
            <VListItem v-if="attachment.type !== 'header'" :value="attachment" :title="attachment.name">
                <template #prepend="{ isActive }">
                    <VIcon
                        class="position-absolute"
                        style="left: 3px"
                        v-if="attachment.type == 'video' && attachment.playing && isActive"
                        size="14"
                        icon="tabler-pause"
                    />
                    <VImg
                        style="width: 100px; aspect-ratio: 16/9"
                        class="rounded mr-2 bg-background border"
                        :src="attachment.thumb_url || resolveDefaultThumbnal(attachment.type)"
                        cover
                    />
                </template>
                <template #title="{ title }">
                    <ResponsiveText :text="title" :max-lines="2" :char-width="2" v-slot="{ text }">
                        {{ text }}
                    </ResponsiveText>
                </template>
                <VListItemSubtitle class="d-flex gap-2 pa-1 align-center">
                    <VIcon size="16" :icon="resolveAttachmentTypeIcon(attachment.type)" />
                    <VChip v-if="attachment.type == 'video'" size="x-small">
                        <VIcon icon="mdi-clock-fast" size="16" class="mr-1" />
                        {{ secondsToMinutes(attachment.duration) }}
                    </VChip>
                    <VSpacer />
                    <InfoTooltip v-if="attachment.download" text="download" v-slot="{ props }">
                        <ActionButton size="x-small" icon="mdi-download" download :href="attachment.path" v-bind="props" />
                        <!-- <VBtn icon size="x-small" color="default" @click.stop="" download :href="attachment.path" v-bind="props">
                            <VIcon size="16" icon="mdi-download" />
                        </VBtn> -->
                    </InfoTooltip>
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
import { secondsToMinutes, calculateWordsToDisplay } from "@/helpers";
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
