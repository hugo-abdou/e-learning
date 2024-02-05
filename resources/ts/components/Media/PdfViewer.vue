<script setup lang="ts">
import { useMediaStore } from "@/stores/useMediaStore";
import { useUserStore } from "@/stores/user";
import { DocumentMedia } from "@/types";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import "@tato30/vue-pdf/style.css";
import { ref } from "vue";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

interface Props {
  document: DocumentMedia;
  canOpenPreview?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:pdf", value: { page: number; pages: number }): void;
}>();

const mediaStore = useMediaStore();
const page = ref(1);
const progress = ref({
  loaded: 0,
  total: 0,
});
const { pdf, pages, info } = usePDF(
  {
    useWorkerFetch: true,
    url: props.document.url,
  },
  { onProgress: (e) => (progress.value = e) }
);
const reset = () => {
  page.value = 1;
};
const next = () => page.value < pages.value && page.value++;
const prev = () => page.value > 1 && page.value--;
const auth = useUserStore();
const sanetizedWatermark = computed(() =>
  props.document.watermark?.replace("%user_name%", auth.user.name)
);
watch([page, pages], ([page, pages]) => {
  emit("update:pdf", { page, pages });
});
defineExpose({ reset, next, prev, page, pages });
</script>

<template>
  <div
    @contextmenu.prevent=""
    class="overflow-auto"
    style="max-block-size: 100%"
  >
    <VuePDF
      v-if="progress.loaded"
      :pdf="pdf"
      :page="page"
      :watermark-text="sanetizedWatermark"
      fit-parent
    />
    <v-skeleton-loader
      v-else
      class="py-5"
      :type="['heading', 'paragraph', 'paragraph']"
    ></v-skeleton-loader>
    <slot v-bind="{ reset, next, prev, page, pages }" />
  </div>
</template>
