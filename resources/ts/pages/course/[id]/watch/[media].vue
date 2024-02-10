<template>
  <VRow align="start" class="gap-y-2 page-container">
    <VCol cols="12" md="8" class="py-0 h-100">
      <div v-if="selected" class="position-relative h-100">
        <Media v-bind="events" :key="selected?.type" :media="selected">
          <template
            v-if="selected.type === MediaTypes.image && playList?.hasNext"
            #toolbar
          >
            <VBtn
              variant="elevated"
              color="default"
              append-icon="mdi-skip-forward"
              @click="nextAttachment"
            >
              Continue
            </VBtn>
          </template>
        </Media>
        <div
          v-if="finished"
          class="position-absolute w-100 h-100 d-flex gap-1 align-center justify-center"
          style="background-color: rgba(0, 0, 0, 56.8%); inset: 0"
        >
          <VBtn color="default" prepend-icon="mdi-rotate-left" @click="replay">
            Start Over
          </VBtn>
          <VBtn
            v-if="playList?.hasNext"
            color="default"
            append-icon="mdi-skip-forward"
            @click="nextAttachment"
          >
            Continue
          </VBtn>
        </div>
      </div>
      <VSkeletonLoader v-else :type="['image', 'image']" />
    </VCol>
    <VCol cols="12" md="4" class="rounded py-0">
      <VCard>
        <PerfectScrollbar :options="{ wheelPropagation: true }">
          <CoursePlayList ref="playList" :course-id="route.params.id" />
        </PerfectScrollbar>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup lang="ts">
import { MediaTypes } from "@/@core/enums";
import Media from "@/components/Media";
import { Attachment } from "@/types";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
definePage({
  meta: {
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});
const route = useRoute();

const selected = ref<Attachment>();

const finished = ref<boolean>(false);
const plyr = ref<Plyr>();
const playList = ref();
const events = computed(() => {
  if (!selected.value) return {};
  if (selected.value.type === MediaTypes.video) {
    return {
      onReady: (e: any) => {
        console.log(e);
        // plyr.value = e.target?.plyr;
        // plyr.value?.play();
      },
      onEnded: (e: any) => (finished.value = true),
      // @ts-ignore
      onPause: (e: any) => (selected.value.playing = false),
      // @ts-ignore
      onPlay: (e: any) => {
        selected.value.playing = true;
        console.log(e);
      },
    };
  }
  if (selected.value.type === MediaTypes.pdf) {
    return {
      "onUpdate:pdf": pdfPageUpdated,
    };
  }
});

const pdfPageUpdated = ({ page, pages }: any) => {
  if (page == pages) finished.value = true;
};

const nextAttachment = () => {
  playList.value.next();
  finished.value = false;
};

const replay = () => {
  if (selected.value?.type === MediaTypes.video) {
    setTimeout(() => {
      plyr.value?.play();
    }, 500);
  }
  finished.value = false;
};
const mediaStore = useMediaStore();
const loadMedia = () => {
  if (route.params.media) {
    const mediaMeta = (route.params.media as string).split("-");
    const mediaId: number = Number(mediaMeta[mediaMeta.length - 2]);
    const chapterId: number = Number(mediaMeta[mediaMeta.length - 1]);

    mediaStore
      .getAttachmentById(chapterId, "chapters", mediaId)
      .then((attachment) => {
        selected.value = attachment;
      });
    finished.value = false;
  }
};

watch(() => route.params.media, loadMedia, { immediate: true });
</script>

<style lang="scss">
@media (min-width: 958px) {
  .page-container,
  .ps {
    height: calc(100vh - 100px);
  }
}
</style>
