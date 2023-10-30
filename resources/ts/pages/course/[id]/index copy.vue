<script setup lang="ts">
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useCourseStore } from '@/stores/useCourseStore'
import type { Attachment, Course } from '@/types'
import { avatarText } from '@/@core/utils/formatters'
import { secondsToMinutes } from '@/helpers'
import { MediaTypes } from '@/@core/enums'
import { useUserStore } from '@/stores/user'
import Media from '@/components/Media/index.vue'

const route = useRoute()
const router = useRouter()
const loading = ref(false)
const courseStore = useCourseStore()
const course = ref<Course>()
const finished = ref<boolean>(false)
const activeAttachment = ref<Attachment>()
const playList = ref()

const auth = useUserStore()
const plyr = ref<Plyr>()

const menuItem = computed(() => {
  return [
    {
      title: 'edit',
      _if: auth.user.id === course.value?.author.id,
      props: { 'to': { name: 'course-id-edit', params: { id: course.value?.id } }, 'prepend-icon': 'mdi-edit' },
    },
    { title: 'share', _if: true, props: { 'prepend-icon': 'tabler-share' } },
  ]
})

const pdfPageUpdated = ({ page, pages }: any) => {
  console.log(page, pages)
  if (page == pages)
    finished.value = true
}

const nextAttachment = () => {
  playList.value.next()
  finished.value = false
}

const replay = () => {
  setTimeout(() => {
    plyr.value?.play()
  }, 500)
  finished.value = false
}

watch(activeAttachment, val => {
  if (val && val.type === 'video') {
    setTimeout(() => {
      plyr.value?.play()
    }, 500)
    finished.value = false
  }
})

onBeforeMount(async () => {
  loading.value = true
  try {
    course.value = await courseStore.getCourse(Number(route.params.id), { additional: { chapters: true } })
  }
  catch (error) {
    router.push({ name: 'course' })
  }
  loading.value = false
})
</script>

<template>
  <div class="card">
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <VCard>
          <VCardText
            v-if="!loading && activeAttachment"
            class="py-0 px-0"
          >
            <div class="position-relative">
              <div v-if="activeAttachment.type === MediaTypes.video">
                <VuePlyr
                  :src="activeAttachment.url"
                  :poster="activeAttachment.thumb_url"
                  :title="course?.title"
                  @ready="plyr = $event.target.plyr"
                  @ended="finished = true"
                  @pause="activeAttachment.playing = false"
                  @play="activeAttachment.playing = true"
                />
                <div
                  v-if="finished"
                  class="position-absolute w-100 h-100 d-flex gap-1 align-center justify-center"
                  style="inset: 0; background-color: rgba(0, 0, 0, 0.568)"
                >
                  <VBtn
                    color="default"
                    prepend-icon="mdi-rotate-left"
                    @click="replay"
                  >
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
              <Media
                v-else
                :key="activeAttachment.id"
                aspect-ratio="1.77"
                :media="activeAttachment"
                is-preview
                @update:pdf="pdfPageUpdated"
              >
                <template #bottom-toolbar>
                  <VBtn
                    v-if="activeAttachment.type === MediaTypes.pdf && finished"
                    variant="tonal"
                    color="default"
                    append-icon="mdi-skip-forward"
                    @click="nextAttachment"
                  >
                    Continue
                  </VBtn>
                  <VBtn
                    v-if="activeAttachment.type === MediaTypes.image"
                    variant="tonal"
                    color="default"
                    append-icon="mdi-skip-forward"
                    @click="nextAttachment"
                  >
                    Continue
                  </VBtn>
                </template>
              </Media>
            </div>
          </VCardText>
          <VSkeletonLoader
            v-else
            :type="['image', 'image']"
          />
        </VCard>
        <VCardItem v-if="!loading">
          <VCardTitle class="text-capitalize text-h3 text-wrap d-flex">
            <ResponsiveText
              v-slot="{ text }"
              :max-lines="2"
              :char-width="3.5"
              :text="course?.title || ''"
            >
              {{ text }}
            </ResponsiveText>
          </VCardTitle>
          <VCardSubtitle class="d-flex mt-3 px-1 align-center">
            <VAvatar
              size="35"
              class="me-2"
            >
              <VImg
                v-if="course?.author.profile_photo_url"
                :src="course?.author.profile_photo_url"
                cover
              />
              <span v-else>{{ avatarText(course?.author.name || "") }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-base">
                <RouterLink
                  to="#"
                  class="font-weight-medium user-list-name text-grey-600"
                >
                  {{ course?.author.name }}
                </RouterLink>
              </h6>
              <p class="text-xs">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <VSpacer />
            <VSlideGroup
              show-arrows
              center-active
            >
              <VSlideGroupItem
                v-for="action in menuItem.filter(({ _if }) => _if)"
                :key="action.title"
              >
                <VChip
                  v-bind="action.props"
                  class="ma-1"
                >
                  {{ action.title }}
                </VChip>
              </VSlideGroupItem>
            </VSlideGroup>

            <VMenu
              v-if="false"
              location="top right"
              class="mx-2"
            >
              <template #activator="{ props }">
                <VBtn
                  variant="tonal"
                  density="comfortable"
                  icon="mdi-dots-vertical"
                  color="default"
                  v-bind="props"
                />
              </template>
              <VList :items="menuItem.filter(({ _if }) => _if)" />
            </VMenu>
          </VCardSubtitle>
        </VCardItem>
        <VSkeletonLoader
          v-else
          :type="['heading', 'list-item-avatar-three-line']"
        />
        <VDivider class="mx-6" />
        <VCardItem
          v-if="!loading"
          title="About this course"
        >
          <p class="mb-0 pt-1">
            {{ course?.description }}
          </p>
        </VCardItem>
        <VSkeletonLoader
          v-else
          class="py-5"
          :type="['heading', 'paragraph']"
        />
        <VDivider class="mx-6" />
        <VCardItem
          v-if="!loading"
          title="By the numbers"
        >
          <div class="d-flex flex-wrap mt-5">
            <div class="me-5">
              <p class="text-nowrap">
                <VIcon
                  icon="mdi-check-all"
                  class="me-2 mt-n2"
                /> Skill level: {{ course?.difficulty }}
              </p>
              <p class="text-nowrap">
                <VIcon
                  icon="mdi-users"
                  class="me-2 mt-n2"
                />Students: 38,815
              </p>
              <p class="text-nowrap">
                <VIcon
                  icon="mdi-flag"
                  class="me-2 mt-n2"
                />Languages: English
              </p>
            </div>
            <div>
              <p class="text-nowrap">
                <VIcon
                  icon="mdi-pencil"
                  class="me-2 mt-n2"
                />Lectures: 19
              </p>
              <p class="text-nowrap">
                <VIcon
                  icon="mdi-clock"
                  class="me-2 mt-n2"
                />Video: {{ secondsToMinutes(course?.duration || 0) }} total
                minutes
              </p>
            </div>
          </div>
        </VCardItem>
        <VSkeletonLoader
          v-else
          class="py-5"
          :type="['heading', 'paragraph']"
        />
      </VCol>
      <VCol
        cols="12"
        md="4"
      >
        <div
          class="position-sticky"
          style="top: 90px"
        >
          <CoursePlayList
            v-if="course?.chapters"
            ref="playList"
            v-model:attachment="activeAttachment"
            :chapters="course?.chapters"
          />
          <VSkeletonLoader
            v-else
            :type="Array(5).fill('list-item-avatar-three-line')"
          />
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: course
  redirectIfNotLoggedIn: true
  redirectIfNotVerified: true
</route>
