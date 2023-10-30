<script setup lang="ts">
import { secondsToMinutes } from '@/helpers';
import type { Attachment, Chapter } from '@/types';
import { resolveAttachmentTypeIcon, resolveDefaultThumbnal } from '@/utils';

type PlaylistAttachment = Attachment

interface Props {
  chapters: Chapter[]
  attachment?: PlaylistAttachment
}
const props = defineProps<Props>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:attachment', value: PlaylistAttachment): void
  (e: 'play', value: PlaylistAttachment): void
}

// TODO: make this dinamique
const isBorderd = false
type Playlist = (PlaylistAttachment | { type: 'header'; title: string; id: number })[]
const playlist = ref<Playlist>([])

const updateSelected = (e: PlaylistAttachment[]) => {
  if (e[0])
    emit('update:attachment', e[0])
}

const next = () => {
  if (props.attachment) {
    // @ts-expect-error
    const activeIndex = props.attachment?.index
    let nextIndex = activeIndex + 1

    // check if the index is a header or attachment
    if (playlist.value[nextIndex]?.type === 'header')
      nextIndex++

    // @ts-expect-error
    const attachment = playlist.value.find(({ index }) => nextIndex === index)
    if (attachment)
      emit('update:attachment', attachment as Attachment)
  }
}

const prev = () => { }

defineExpose({ next, prev })
onMounted(() => {
  playlist.value = props.chapters
    .reduce((result: Playlist, { attachments, title, id }) => {
      if (attachments.length) {
        result.push({ type: 'header', title, id })
        result.push(...JSON.parse(JSON.stringify(attachments.map(it => ({ ...it, chapter_id: id })))))
      }

      return result
    }, [])
    .map((it, i) => ({ ...it, index: i }))

  const first = playlist.value.filter(({ type }) => type !== 'header')[0]

  emit('update:attachment', first as PlaylistAttachment)
})
</script>

<template>
  <!-- @vue-ignore -->
  <VList
    lines="three"
    :border="isBorderd"
    :selected="[attachment]"
    @update:selected="updateSelected"
  >
    <template
      v-for="attachment in playlist"
      :key="attachment.id"
    >
      <VListItem
        v-if="attachment.type !== 'header'"
        class="mt-2"
        :value="attachment"
        :title="attachment.name"
      >
        <template #prepend="{ isActive }">
          <VIcon
            v-if="attachment.type === 'video' && attachment.playing && isActive"
            class="position-absolute"
            style="inset-inline-start: 3px"
            size="14"
            icon="tabler-pause"
          />
          <VImg
            style=" aspect-ratio: 16/9;inline-size: 100px"
            class="rounded mr-2 bg-background border"
            :src="attachment.thumb_url || resolveDefaultThumbnal(attachment.type)"
            cover
          />
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
          <VChip
            v-if="attachment.type === 'video'"
            size="x-small"
          >
            <VIcon
              icon="mdi-clock-fast"
              size="16"
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
            <ActionButton
              size="x-small"
              icon="mdi-download"
              download
              :href="attachment.path"
              v-bind="props"
            />
            <!--
              <VBtn icon size="x-small" color="default" @click.stop="" download :href="attachment.path" v-bind="props">
              <VIcon size="16" icon="mdi-download" />
              </VBtn>
            -->
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
import { resolveAttachmentTypeIcon } from '@/resolveAttachmentTypeIcon';
import { resolveDefaultThumbnal } from '@/resolveDefaultThumbnal';
