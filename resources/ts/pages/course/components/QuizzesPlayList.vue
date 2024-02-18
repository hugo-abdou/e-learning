<script setup lang="ts">
import { Quiz } from "@/types";
import { debounce } from "lodash";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

type Playlist = Quiz[];

interface Props {
  courseId: any;
}
const props = defineProps<Props>();

interface Emits {
  (e: "play", value: any): void;
}
const emit = defineEmits<Emits>();

const isLoading = ref(false);
const playlist = ref<Playlist>([]);
const hasNext = ref(false);
const route = useRoute();
const router = useRouter();
const search = ref();

const getActive = () => {};
const goToIndex = (index: number) => {};
const getPlayListItemIndex = (index: number) => {};
const next = () => {};
const prev = () => {};

const courseStore = useCourseStore();

const getPlaylist = debounce(async () => {
  try {
    isLoading.value = true;
    const { data } = await courseStore.getQuizzes(props.courseId, {
      search: search.value,
    });
    playlist.value = data;
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

const checkForNext = () => {};

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
      v-for="quiz in playlist"
      :key="`${quiz.slug}-${quiz.id}-${quiz.chapter_id}`"
    >
      <VListItem
        prepend-icon="material-symbols:quiz-outline"
        class="mt-2"
        :to="{
          name: 'course-id-quiz-quiz',
          params: {
            id: courseId,
            quiz: `${quiz.slug}-${quiz.id}`,
          },
        }"
      >
        <VListItemTitle>{{ quiz.title }}</VListItemTitle>
        <VListItemSubtitle class="mt-1">
          {{ quiz.description }}
        </VListItemSubtitle>
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
