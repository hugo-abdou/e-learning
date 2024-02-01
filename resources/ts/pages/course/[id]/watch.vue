<template>
  <VRow align="start">
    <VCol cols="9" class="py-0">
      <div v-if="selected" class="position-relative h-100 border">
        <Media
          v-bind="events"
          :key="selected?.id"
          aspect-ratio="1.77"
          :media="selected"
        >
          <template v-if="selected.type === MediaTypes.image" #toolbar>
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
    <VCol cols="3" class="rounded pa-0">
      <VCard>
        <PerfectScrollbar :options="{ wheelPropagation: true }">
          <CoursePlayList
            ref="playList"
            v-model:selected="selected"
            :course-id="Number(route.params.id)"
          />
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
const auth = useUserStore();
const plyr = ref<Plyr>();
const playList = ref();
const events = computed(() => {
  if (!selected.value) return {};
  if (selected.value.type === MediaTypes.video) {
    return {
      onReady: (e: any) => (plyr.value = e.target?.plyr),
      onEnded: (e: any) => (finished.value = true),
      // @ts-ignore
      onPause: (e: any) => (selected.value.playing = false),
      // @ts-ignore
      onPlay: (e: any) => (selected.value.playing = true),
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

watch(selected, (val) => {
  if (val && val.type === "video") {
    setTimeout(() => {
      plyr.value?.play();
    }, 500);
    finished.value = false;
  }
});
</script>

<style lang="scss">
.ps {
  height: calc(100vh - 182px);
}
</style>
