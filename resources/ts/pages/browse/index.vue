<script setup lang="ts">
import { debounce } from 'lodash'
import type { Options } from '@/@core/types'
import { useCourseStore } from '@/stores/useCourseStore'
import type { Course } from '@/types'

const activeTab = ref(0)

// tabs
const tabs = [
  { title: 'accounting', icon: 'tabler-users', tab: 'accounting' },
  { title: 'computer science', icon: 'tabler-lock', tab: 'computer science' },
  { title: 'enginnering', icon: 'tabler-lock', tab: 'enginnering' },
  { title: 'filming', icon: 'tabler-lock', tab: 'filming' },
  { title: 'fitness', icon: 'tabler-lock', tab: 'fitness' },
  { title: 'music', icon: 'tabler-lock', tab: 'music' },
  { title: 'photography', icon: 'tabler-lock', tab: 'photography' },
]

const courses = ref<Course[]>([])

const options = ref<Options>({
  page: 1,
  itemsPerPage: 100,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const courseStore = useCourseStore()

const getCourses = debounce(() => {
  courseStore.getCourses({ ...options.value, additional: { chaptersCount: true } }).then(({ data, meta }) => {
    courses.value = data
  })
}, 500)

onMounted(getCourses)
</script>

<template>
  <div>
    <VSlideGroup
      v-model="activeTab"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <VSlideGroupItem
        v-for="tab in tabs"
        :key="tab.tab"
        v-slot="{ isSelected, toggle }"
      >
        <VChip
          size="large"
          :color="isSelected ? 'primary' : 'secondary'"
          class="ma-1"
          @click="toggle"
        >
          <VIcon
            start
            size="16"
            :icon="tab.icon"
          />
          {{ tab.title }}
        </VChip>
      </VSlideGroupItem>
    </VSlideGroup>
    <VRow>
      <VCol
        v-for="(course, index) in courses"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <VCard>
          <VImg
            :src="course.thumbnail || ''"
            cover
            height="200px"
          />
          <VCardItem>
            <VCardTitle>{{ course.title }}</VCardTitle>
            <VCardSubtitle>
              <VChip color="secondary">
                filming
              </VChip>
            </VCardSubtitle>
          </VCardItem>
          <VCardText class="d-flex align-center gap-2">
            <VAvatar
              color="primary"
              variant="tonal"
              icon="bi:book"
            />
            <p
              v-if="course.chaptersCount"
              class="ma-0"
            >
              {{ course.chaptersCount }} chapters
            </p>
            <p
              v-else
              class="ma-0"
            >
              no chapters
            </p>
          </VCardText>
          <VCardText>
            <VProgressLinear
              rounded
              rounded-bar
              :model-value="50"
              :max="100"
              height="10"
              color="primary"
            />
            <p class="mt-2">
              50% Complete
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped></style>
