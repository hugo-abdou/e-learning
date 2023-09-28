<template>
    <VRow>
        <VCol cols="12">
            <VTextField :model-value="chapter.name" @change="e => updateName(e.target.value)" label="Chapter Title" />
        </VCol>
        <VCol cols="12">
            <VCardTitle class="mb-1"> <VIcon icon="system-uicons:video" />Video</VCardTitle>
            <VCardItem class="pt-0" style="width: 279px">
                <template v-if="chapter.video">
                    <VImg
                        style="max-width: 230px; height: 80%; aspect-ratio: 16/9"
                        cover
                        class="rounded relative"
                        :src="chapter.video.thumb_url"
                    >
                        <VToolbar color="#00000000" density="comfortable">
                            <VSpacer />
                            <ActionButton @click="chapter.video = null" color="error" icon="tabler-trash" class="chapter-media-action" />
                        </VToolbar>
                    </VImg>
                    <p class="truncate mt-2" :title="chapter.video.name">{{ chapter.video.name }}</p>
                </template>
                <VBtn
                    v-else
                    style="max-width: 230px; height: 80%; aspect-ratio: 16/9"
                    class="border-md border-dashed bg-background w-100"
                    variant="plain"
                    color="secondary"
                    @click="emit('upload', 'upload-chapter-video')"
                >
                    <VIcon icon="fluent:video-add-20-regular" size="28" />
                </VBtn>
            </VCardItem>
        </VCol>

        <VCol>
            <VCardItem class="pt-0">
                <VCardTitle class="mb-2"> <VIcon icon="system-uicons:document" /> Documents</VCardTitle>
                <VRow class="me-0">
                    <VCol cols="12" lg="4" md="6" sm="4">
                        <VBtn
                            style="max-width: 700px; height: 80%; aspect-ratio: 16/9"
                            class="border-md border-dashed bg-background w-100"
                            variant="plain"
                            color="secondary"
                            @click="emit('upload', 'upload-chapter-document')"
                        >
                            <VIcon icon="fluent:document-add-20-regular" size="28" />
                        </VBtn>
                    </VCol>
                    <VCol
                        v-bind="{ cols: 12, lg: 4, md: 6, sm: 4 }"
                        class="documents-slider"
                        v-if="chapter.documents.length"
                        v-for="doc in chapter.documents"
                        :key="doc.id"
                    >
                        <div class="ma-1" style="max-width: 700px">
                            <VImg class="rounded" cover :src="doc.thumb_url">
                                <VToolbar color="#00000000" density="comfortable">
                                    <VSpacer />
                                    <ActionButton
                                        @click="chapter.documents = chapter.documents.filter(({ id }) => id !== doc.id)"
                                        color="error"
                                        icon="tabler-trash"
                                        class="chapter-media-action"
                                    />
                                </VToolbar>
                            </VImg>
                            <p class="truncate mt-2" :title="doc.name">{{ doc.name }}</p>
                        </div>
                    </VCol>
                </VRow>
            </VCardItem>
        </VCol>
    </VRow>
</template>

<script setup lang="ts">
import { debounce } from "lodash";
import { Chapter } from "@/types";
interface Emit {
    (e: "upload", value: string): void;
    (e: "update:name", value: string): void;
}
interface Props {
    chapter: Chapter;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const updateName = debounce(val => {
    console.log(val);
    emit("update:name", val);
}, 500);
</script>

<style scoped></style>
