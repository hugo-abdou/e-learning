<script setup lang="ts">
import { avatarText } from "@/@core/utils/formatters";
import { secondsToMinutes } from "@/helpers";
import { useCourseStore } from "@/stores/useCourseStore";
import type { Course } from "@/types";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
definePage({
  meta: {
    navActiveLink: "course",
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
  },
});
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const courseStore = useCourseStore();
const course = ref<Course>();
onBeforeMount(async () => {
  loading.value = true;
  try {
    // @ts-ignore
    course.value = await courseStore.getCourse(route.params.id);
  } catch (error) {
    router.push({ name: "course" });
  }
  loading.value = false;
});

const currentTab = ref(0);
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VImg
          v-if="!loading"
          :src="course?.thumbnail"
          style="aspect-ratio: 16/4"
          cover
        />
        <VSkeletonLoader v-else :type="['image', 'image']" />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard>
        <VTabs v-model="currentTab" grow>
          <VTab
            v-for="(item, i) in ['Overview', 'Lessons', 'Assignments']"
            :key="item"
            :value="i"
          >
            {{ item }}
          </VTab>
        </VTabs>
        <VWindow v-model="currentTab">
          <VWindowItem>
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
                <VAvatar size="35" class="me-2">
                  <VImg
                    v-if="course?.author.profile_photo_url"
                    :src="course?.author.profile_photo_url"
                    cover
                  />
                  <span v-else>{{
                    avatarText(course?.author.name || "")
                  }}</span>
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
                  <p class="text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              </VCardSubtitle>
            </VCardItem>
            <VSkeletonLoader
              v-else
              :type="['heading', 'list-item-avatar-three-line']"
            />
            <VDivider class="mx-6" />
            <VCardItem v-if="!loading" title="About this course">
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
            <VCardItem v-if="!loading" title="By the numbers">
              <div class="d-flex flex-wrap mt-5">
                <div class="me-5">
                  <p class="text-nowrap">
                    <VIcon icon="mdi-check-all" class="me-2 mt-n2" /> Skill
                    level:
                    {{ course?.difficulty }}
                  </p>
                  <p class="text-nowrap">
                    <VIcon icon="mdi-users" class="me-2 mt-n2" />Students:
                    38,815
                  </p>
                  <p class="text-nowrap">
                    <VIcon icon="mdi-flag" class="me-2 mt-n2" />Languages:
                    English
                  </p>
                </div>
                <div>
                  <p class="text-nowrap">
                    <VIcon icon="mdi-pencil" class="me-2 mt-n2" />Lectures: 19
                  </p>
                  <p class="text-nowrap">
                    <VIcon icon="mdi-clock" class="me-2 mt-n2" />Video:
                    {{ secondsToMinutes(course?.duration || 0) }} total minutes
                  </p>
                </div>
              </div>
            </VCardItem>
            <VSkeletonLoader
              v-else
              class="py-5"
              :type="['heading', 'paragraph']"
            />
          </VWindowItem>
          <VWindowItem>
            <LessonsPlayList v-if="course" :course-id="course?.slug" />
            <VSkeletonLoader
              v-else
              :type="Array(5).fill('list-item-avatar-three-line')"
            />
          </VWindowItem>
          <VWindowItem>
            <QuizzesPlayList v-if="course" :course-id="course?.slug" />
            <VSkeletonLoader
              v-else
              :type="Array(5).fill('list-item-avatar-three-line')"
            />
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>
