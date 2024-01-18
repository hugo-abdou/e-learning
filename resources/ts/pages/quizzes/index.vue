<script setup lang="ts">
import { QuizStatus } from "@/@core/enums";
import type { Options } from "@/@core/types";
import { useQuizzesStore } from "@/stores/useQuizzesStore";
import type { DataTableHeader } from "@/types";
import { paginationMeta, resolveCourseStatusVariant } from "@/utils";
import { debounce } from "lodash";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
const scheduledQuiz = ref<number | null>(null);
const totalQuizzes = ref(0);
const quizzes = ref<any[]>([]);
const loading = ref<boolean>(false);

definePage({
  meta: {
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
    layout: "default",
    navActiveLink: "quizzes",
  },
});

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
});

const quizzesStore = useQuizzesStore();

const getQuizzes = debounce(() => {
  if (!quizzes.value.length) loading.value = true;
  // @ts-ignore
  quizzesStore
    .getQuizzes({ query: options.value })
    .then(({ data, meta }) => {
      quizzes.value = data;
      totalQuizzes.value = meta.total;
    })
    .finally(() => (loading.value = false));
}, 500);

// Headers
const headers: DataTableHeader[] = [
  { title: "Title", key: "title" },
  { title: "Description", key: "description" },
  { title: "Status", key: "status" },
  { title: "Created at", key: "created_at" },
  { title: "", key: "actions", sortable: false, width: 70 },
];

watch(
  Object.keys(options.value).map(
    (item) => () => options.value[item as keyof Options]
  ),
  ([page, perPage, search]) => {
    getQuizzes();
  }
);

const quizStore = useQuizzesStore();
const deleteQuiz = (id: number) => quizStore.deleteQuiz(id).then(getQuizzes);
const isScheduleDialogVisible = ref(false);
const scheduleQuiz = (date: string) => {
  if (scheduledQuiz.value) {
    quizStore.scheduleQuiz(scheduledQuiz.value, date).finally(() => {
      isScheduleDialogVisible.value = false;
      scheduledQuiz.value = null;
      getQuizzes();
    });
  }
};
const publishQuiz = (
  id: number,
  status: keyof typeof QuizStatus = "Published"
) => quizStore.publishQuiz(id, status).then(getQuizzes);
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard :title="$t('Quizzes')">
        <!-- 👉 Filters -->
        <VCardText>
          <VRow align="end">
            <!-- 👉 Select Plan -->
            <VCol cols="12" sm="2">
              <AppSelect
                v-model="options.itemsPerPage"
                :label="$t('Items Per Page')"
                :items="[10, 20, 50, 100]"
              />
            </VCol>
            <VCol class="d-flex gap-5">
              <!-- 👉 Search  -->
              <AppTextField
                v-model="options.search"
                :placeholder="$t('Search')"
                density="compact"
              />
              <div class="d-flex justify-end flex-wrap gap-4">
                <!-- 👉 Add user button -->
                <VBtn
                  prepend-icon="tabler-plus"
                  :to="{ name: 'quizzes-create' }"
                >
                  {{ $t("New Quiz") }}
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>

        <VDivider />

        <!-- SECTION datatable -->
        <!-- @vue-ignore -->
        <VDataTableServer
          v-model:items-per-page="options.itemsPerPage"
          v-model:page="options.page"
          :items="quizzes"
          :items-length="totalQuizzes"
          :headers="headers.map((i) => ({ ...i, title: $t(i.title) }))"
          class="text-no-wrap"
          :loading="loading"
          @update:options="options = $event"
        >
          <template #loading>
            <VSkeletonLoader class="pt-2" :type="['table-tbody']" />
          </template>
          <template #item.title="{ item }">
            {{ item.title }} - ({{ item.duration }} min)
          </template>
          <template #item.description="{ item }">
            <div class="truncate" style="max-width: 30vw">
              <VTooltip max-width="600" activator="parent">
                {{ item.description }}
              </VTooltip>
              {{ item.description }}
            </div>
          </template>
          <!-- Status -->
          <template #item.status="{ item }">
            <VChip :color="resolveCourseStatusVariant(item.status).color">
              <template #prepend>
                <InfoTooltip
                  v-if="item.status === QuizStatus.Scheduled"
                  icon="mdi-clock-time-five-outline"
                  :text="formatDate(item.schedule_at)"
                />
                <VIcon
                  v-else
                  :icon="resolveCourseStatusVariant(item.status).icon"
                />
              </template>

              <span class="text-capitalize ml-1">
                {{ item.status }}
              </span>
              <span
                v-if="item.status === QuizStatus.Error"
                class="text-capitalize ml-1"
              >
                {{ `#${item.id}` }}
              </span>
            </VChip>
          </template>
          <!-- Actions -->
          <template #item.actions="{ item }">
            <VBtn icon variant="text" size="x-small" color="medium-emphasis">
              <VIcon size="24" icon="tabler-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem prepend-icon="tabler-edit" :title="$t('Edit')" />
                  <VListItem
                    v-if="item.status === QuizStatus.Published"
                    @click="publishQuiz(item.id, 'Closed')"
                    prepend-icon="material-symbols:close-rounded"
                    :title="$t('Close')"
                  />
                  <VListItem
                    v-if="item.status === QuizStatus.Published"
                    @click="publishQuiz(item.id, 'Private')"
                    prepend-icon="material-symbols:private-connectivity-outline"
                    :title="$t('Private')"
                  />
                  <VListItem
                    v-if="item.status !== QuizStatus.Published"
                    @click="publishQuiz(item.id)"
                    prepend-icon="material-symbols:publish-rounded"
                    :title="$t('Publish')"
                  />
                  <VListItem
                    v-if="
                      item.status === QuizStatus.Draft ||
                      item.status === QuizStatus.Scheduled
                    "
                    @click="
                      (isScheduleDialogVisible = true),
                        (scheduledQuiz = item.id)
                    "
                    prepend-icon="solar:calendar-broken"
                    :title="$t('Schedule publish')"
                  />
                  <VListItem
                    prepend-icon="tabler-trash"
                    :title="$t('Delete')"
                    @click="deleteQuiz(item.id)"
                  />
                </VList>
              </VMenu>
            </VBtn>
          </template>
          <!-- pagination -->
          <template #bottom>
            <VDivider />
            <div
              class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"
            >
              <p class="text-sm text-disabled mb-0">
                {{ paginationMeta(options, totalQuizzes) }}
              </p>

              <VPagination
                :model-value="options.page"
                :length="Math.ceil(totalQuizzes / options.itemsPerPage)"
                :total-visible="
                  $vuetify.display.xs
                    ? 1
                    : Math.ceil(totalQuizzes / options.itemsPerPage)
                "
                @update:model-value="options = { ...options, page: $event }"
              />
            </div>
          </template>
        </VDataTableServer>
        <!-- SECTION -->
      </VCard>
      <ScheduleDialog
        @select="scheduleQuiz"
        v-model:is-dialog-visible="isScheduleDialogVisible"
      />
    </VCol>
  </VRow>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}
.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
