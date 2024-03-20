<script setup lang="ts">
import { Quiz } from "@/types";
import { debounce } from "@/helpers";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { useCourseStore } from "@/stores/useCourseStore";

type Playlist = Quiz[];

interface Props {
    courseId: any;
}
const props = defineProps<Props>();

interface Emits {
    (e: "play", value: any): void;
    (e: "selected", value: Quiz): void;
}
const emit = defineEmits<Emits>();

const playlist = ref<Playlist>([]);
const hasNext = ref(false);
const isLoading = ref(false);
const route = useRoute<"course-id-quiz-quiz">();
const router = useRouter();
const search = ref();

const selected = computed<Quiz | undefined>(() => {
    return playlist.value.find(({ slug, id }) => `${slug}-${id}` === route.params.quiz);
});
watch(selected, () => {
    if (!selected.value) return;
    emit("selected", selected.value);
});
const selectedIndex = computed<number>(() => {
    return playlist.value.findIndex(({ slug, id }) => `${slug}-${id}` === route.params.quiz);
});
watch(selectedIndex, () => {
    hasNext.value = playlist.value.length > selectedIndex.value + 1;
});
const next = () => {
    if (!hasNext.value) return;
    router.push({ name: "course-id-quiz-quiz", params: { id: props.courseId, quiz: `${playlist.value[selectedIndex.value + 1].slug}-${playlist.value[selectedIndex.value + 1].id}` } });
};
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

onMounted(async () => {
    if (!props.courseId) return;
    getPlaylist();
});
defineExpose({ next, prev, selected, hasNext });
</script>

<template>
    <VList
        v-if="!isLoading"
        lines="two"
    >
        <VListItem>
            <VTextField
                v-model="search"
                prepend-inner-icon="tabler-search"
                label="Search"
                class="mt-1"
                clearable
            />
        </VListItem>
        <template
            v-for="(quiz, i) in playlist"
            :key="`${quiz.slug}-${quiz.id}-${quiz.chapter_id}`"
        >
            <VListItem
                class="mt-2"
                :to="{
                    name: 'course-id-quiz-quiz',
                    params: { id: courseId, quiz: `${quiz.slug}-${quiz.id}` },
                }"
                :value="quiz"
            >
                <template #prepend>
                    <VProgressCircular
                        size="40"
                        width="3"
                        :model-value="quiz.progress"
                        color="on-primary"
                        class="mr-4"
                    >
                        <div
                            v-if="Number(quiz.progress) < 100"
                            class="d-flex align-center justify-center text-sm"
                        >
                            {{ Number(quiz.progress) }}
                            <span class="sr-only">%</span>
                        </div>
                        <VIcon
                            v-else
                            icon="tabler-check"
                        />
                    </VProgressCircular>
                </template>
                <VListItemTitle>{{ quiz.title }}</VListItemTitle>
                <VListItemSubtitle class="mt-1">
                    {{ quiz.description }}
                </VListItemSubtitle>
            </VListItem>
        </template>
        <VListItem v-if="!playlist.length">
            <VListItemTitle>{{ $t("no_records_found") }}</VListItemTitle>
        </VListItem>
    </VList>
    <VSkeletonLoader
        v-else
        :type="Array(5).fill('list-item-avatar-three-line')"
    />
</template>
