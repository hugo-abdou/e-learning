<template>
    <VRow>
        <!-- SECTION User Details -->
        <VCol cols="12">
            <VCard v-if="props.userData">
                <VCardText class="text-center pt-15">
                    <!-- 👉 Avatar -->
                    <VAvatar
                        rounded
                        :size="100"
                        :color="!props.userData.avatar ? 'primary' : undefined"
                        :variant="!props.userData.avatar ? 'tonal' : undefined"
                    >
                        <VImg v-if="props.userData.avatar" :src="props.userData.avatar" />
                        <span v-else class="text-5xl font-weight-medium">
                            {{ avatarText(props.userData.name) }}
                        </span>
                    </VAvatar>

                    <!-- 👉 User fullName -->
                    <h6 class="text-h4 mt-4">
                        {{ props.userData.name }}
                    </h6>
                </VCardText>

                <VCardText class="d-flex justify-center flex-wrap mt-3">
                    <!-- 👉 Done Project -->
                    <div class="d-flex align-center me-4">
                        <VAvatar :size="38" rounded color="primary" variant="tonal" class="me-3">
                            <VIcon icon="tabler-briefcase" />
                        </VAvatar>

                        <div>
                            <h6 class="text-h6">
                                {{ kFormatter(90000) }}
                            </h6>
                            <span class="text-sm">Project Done</span>
                        </div>
                    </div>
                </VCardText>

                <VDivider />

                <!-- 👉 Details -->
                <VCardText>
                    <p class="text-sm text-uppercase text-disabled">{{ $t("Details") }}</p>

                    <!-- 👉 User Details list -->
                    <VList class="card-list mt-2">
                        <VListItem>
                            <VListItemTitle>
                                <h6 class="text-h6">
                                    {{ $t("Username") }}:
                                    <span class="text-body-1">
                                        {{ props.userData.name }}
                                    </span>
                                </h6>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle>
                                <h6 class="text-h6">
                                    {{ $t("Email") }}:
                                    <span class="text-body-1">{{ props.userData.email }}</span>
                                </h6>
                            </VListItemTitle>
                        </VListItem>

                        <VListItem>
                            <VListItemTitle>
                                <h6 class="text-h6 d-flex align-center">
                                    {{ $t("Role") }}:
                                    <div class="d-flex gap-2 flex-wrap w-100 ml-2">
                                        <VChip
                                            v-for="(item, index) in props.userData.role"
                                            label
                                            color="default"
                                            density="comfortable"
                                            :key="index"
                                        >
                                            {{ item }}
                                        </VChip>
                                    </div>
                                </h6>
                            </VListItemTitle>
                        </VListItem>
                    </VList>
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->

        <!-- SECTION Current Plan -->
        <VCol cols="12">
            <VCard>
                <VCardText class="d-flex flex-wrap gap-1">
                    <VChip v-for="item in userData.role" :key="item" label color="primary" size="small" class="font-weight-medium">
                        {{ item }}
                    </VChip>
                </VCardText>

                <VCardText>
                    <FeatureProgress label="projects" title="Projects" :max="20" :used="5" />
                </VCardText>
            </VCard>
        </VCol>
        <!-- !SECTION -->
    </VRow>
</template>

<script setup lang="ts">
import { UserProperties } from "@/types";
import { avatarText, kFormatter } from "@core/utils/formatters";
import FeatureProgress from "./FeatureProgress.vue";

interface Props {
    userData: UserProperties;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 0.75rem;
}

.text-capitalize {
    text-transform: capitalize !important;
}
</style>
