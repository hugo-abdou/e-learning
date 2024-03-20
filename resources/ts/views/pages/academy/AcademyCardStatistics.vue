<script setup lang="ts">
import { debounce } from "@/helpers";

type LogisticCard = {
    icon: string;
    color: string;
    title: string;
    value: number;
    change: number;
};
const dateRange = ref(`${new Date(new Date().getFullYear(), 0, 2).toJSON().slice(0, 10)} to ${new Date().toJSON().slice(0, 10)}`);
const logisticData = ref<LogisticCard[]>([]);
const colors = ["primary", "info", "success", "warning", "error"];

const getData = debounce(() => {
    const date = dateRange.value.split(" to ");
    $api.get<LogisticCard[]>("/prof/statistics/cards", {
        params: {
            start_date: date[0],
            end_date: date[1],
        },
    }).then((res) => {
        logisticData.value = res.map((item, i) => ({ ...item, isHover: false, color: colors[i] }));
    });
}, 500);

watch(dateRange, getData, { immediate: true });
</script>

<template>
    <VRow>
        <VCol cols="12" md="3" sm="6">
            <AppDateTimePicker class="calendar-date-picker" placeholder="Select date" :config="{ mode: 'range' }" v-model:model-value="dateRange" />
        </VCol>
        <VCol cols="12"></VCol>
        <VCol v-for="(data, index) in logisticData" :key="index" cols="12" md="3" sm="6">
            <div>
                <VCard
                    class="logistics-card-statistics cursor-pointer"
                    :style="
                        data.isHover
                            ? {
                                  'border-block-end': `2px solid rgba(var(--v-theme-${data.color}))`,
                              }
                            : {
                                  'border-block-end': `2px solid rgba(var(--v-theme-${data.color}), var(--v-disabled-opacity))`,
                              }
                    "
                    @mouseenter="data.isHover = true"
                    @mouseleave="data.isHover = false"
                >
                    <VCardText>
                        <div class="d-flex align-center gap-x-4 mb-2">
                            <VAvatar variant="tonal" :color="data.color" rounded>
                                <VIcon :icon="data.icon" size="28" />
                            </VAvatar>
                            <h5 class="text-h5 font-weight-medium">
                                {{ data.value }}
                            </h5>
                        </div>
                        <div class="text-body-1">
                            {{ data.title }}
                        </div>
                        <div class="d-flex gap-x-2">
                            <h6 class="text-h6 font-weight-medium">
                                {{ data.change > 0 ? "+" : "" }}
                                {{ data.change }}%
                            </h6>
                            <span class="text-disabled">than last week</span>
                        </div>
                    </VCardText>
                </VCard>
            </div>
        </VCol>
    </VRow>
</template>

<style lang="scss" scoped>
@use "@core-scss/base/mixins" as mixins;

.logistics-card-statistics:hover {
    @include mixins.elevation(12);

    transition: all 0.1s ease-out;
}
.date-picker-wrapper {
    inline-size: 17.5rem;
}
</style>
