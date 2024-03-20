<script lang="ts" setup>
import { useStatisticsStore } from "@/stores/useStatisticsStore";
import { StatisticsCardType } from "@/types";

const props = defineProps<{ type: string; date?: string; role: string }>();

const data = ref<StatisticsCardType>();

await useStatisticsStore()
    .fetchCardStatistics(props.type, { params: { date: props.date, role: props.role } })
    .then((res) => {
        data.value = res;
    });
</script>

<template>
    <VCard>
        <VCardText v-if="data">
            <div class="d-flex justify-space-between">
                <div class="d-flex flex-column gap-y-1">
                    <span class="text-body-1 text-medium-emphasis">{{ data.title }}</span>
                    <div>
                        <h4 class="text-h4">
                            {{ data.value }}
                            <span
                                class="text-base"
                                :class="data.change > 0 ? 'text-success' : 'text-error'"
                            >
                                ({{ prefixWithPlus(data.change) }}%)
                            </span>
                        </h4>
                    </div>
                    <span class="text-sm">{{ data.desc }}</span>
                </div>
                <VAvatar
                    :color="data.iconColor"
                    variant="tonal"
                    rounded
                    size="38"
                >
                    <VIcon
                        :icon="data.icon"
                        size="26"
                    />
                </VAvatar>
            </div>
        </VCardText>
    </VCard>
</template>
