<template>
    <VRow>
        <VCol cols="12">
            <VTextField
                :rules="[requiredValidator]"
                :model-value="chapter.title"
                @change="(e:any) => updateName(e)"
                label="Chapter Title"
            />
        </VCol>
        <VCol cols="12">
            <VCardItem>
                <VCardTitle class="mb-1"> <VIcon icon="system-uicons:video" />Video</VCardTitle>
                <VRow class="me-0">
                    <VCol cols="12" lg="4" md="6" sm="4">
                        <Media v-if="chapter.video" :media="chapter.video" hasTitle @on-delete="chapter.video = null"></Media>
                        <!-- @vue-ignore -->
                        <VBtn v-else @click="emit('upload', 'upload-chapter-video')" v-bind="UploadBunAttrs">
                            <VIcon icon="fluent:video-add-20-regular" size="28" />
                        </VBtn>
                    </VCol>
                </VRow>
            </VCardItem>
        </VCol>

        <VCol>
            <VCardItem class="pt-0">
                <VCardTitle class="mb-2"> <VIcon icon="system-uicons:document" /> Documents</VCardTitle>
                <VRow class="me-0">
                    <VCol cols="12" lg="4" md="6" sm="4" class="mb-10">
                        <!-- @vue-ignore -->
                        <VBtn v-bind="UploadBunAttrs" @click="emit('upload', 'upload-chapter-document')">
                            <VIcon icon="fluent:document-add-20-regular" size="28" />
                        </VBtn>
                    </VCol>
                    <VCol
                        v-bind="{ cols: 12, lg: 4, md: 6, sm: 4 }"
                        v-if="chapter.documents.length"
                        v-for="doc in chapter.documents"
                        :key="doc.id"
                    >
                        <Media :media="doc" hasTitle @on-delete="chapter.documents = chapter.documents.filter(({ id }) => id !== doc.id)">
                        </Media>
                    </VCol>
                </VRow>
            </VCardItem>
        </VCol>
    </VRow>
</template>

<script setup lang="ts">
import { debounce } from "lodash";
import { Chapter } from "@/types";
import { requiredValidator } from "@/@core/utils/validators";
import Media from "@/components/Media.vue";

const UploadBunAttrs = {
    class: "border-md border-dashed bg-background w-100 h-100",
    style: "min-height: 120px",
    variant: "plain",
    color: "secondary"
};
interface Emit {
    (e: "upload", value: string): void;
    (e: "update:title", value: string): void;
}
interface Props {
    chapter: Chapter;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const updateName = debounce(val => {
    emit("update:title", val.target.value);
}, 50);
</script>

<style scoped></style>
