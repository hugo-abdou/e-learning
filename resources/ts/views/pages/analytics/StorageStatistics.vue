<script setup lang="ts">
import { formatBytes } from "@/helpers";
import useAnalyticsStore from "@/stores/useAnalyticsStore";
import { hexToRgb } from "@layouts/utils";
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify/lib/framework.mjs";

interface State {
  count: number;
  icon: string;
  name: string;
}
interface StorageDataResponce {
  data: {
    max_storage: number;
    used_storage: number;
    states: State[];
  };
}
const vuetifyTheme = useTheme();

const series = ref<number[]>([0]);
const total_storage = ref("0Mb");

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;

  return {
    labels: ["Used Storage"],
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: {
          size: "65%",
        },
        track: {
          background: currentTheme.background,
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: `rgba(${hexToRgb(currentTheme["on-background"])},${
              variableTheme["disabled-opacity"]
            })`,
            fontSize: "13px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          },
          value: {
            offsetY: 10,
            color: `rgba(${hexToRgb(currentTheme["on-background"])},${
              variableTheme["high-emphasis-opacity"]
            })`,
            fontSize: "38px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          },
        },
      },
    },
    colors: [currentTheme.primary],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.5,
        gradientToColors: [currentTheme.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: { dashArray: 0 },
    grid: { padding: { top: -20, bottom: 5 } },
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
  };
});

const states = ref<State[]>([]);
const isLoading = ref(false);
const analyticsStore = useAnalyticsStore();

const fetch = () => {
  series.value[0] = 0;
  isLoading.value = true;
  analyticsStore
    .fetchStorageAnalytics()
    .then(({ data }: StorageDataResponce) => {
      total_storage.value = formatBytes(data.used_storage, 1);
      states.value = data.states;
      if (data.max_storage && data.used_storage) {
        const useage =
          data.max_storage >= 0
            ? (data.used_storage / data.max_storage) * 100
            : 0;

        series.value[0] = Number(useage.toFixed(2));
      }
    })
    .finally(() => (isLoading.value = false));
};

onBeforeMount(fetch);
</script>

<template>
  <VCard
    title="Storage"
    :subtitle="`Total ${total_storage} Usage Rate`"
    class="h-100"
    :loading="isLoading"
  >
    <template #append>
      <IconBtn @click="fetch">
        <VIcon size="20" icon="tabler-refresh" />
      </IconBtn>
    </template>
    <VCardText>
      <VRow align="center">
        <VCol v-if="states.length" cols="12" sm="6" order="2" order-sm="1">
          <VList class="card-list d-flex flex-wrap">
            <VCol
              v-for="state in states"
              :key="state.name"
              cols="6"
              class="text-no-wrap pb-2"
            >
              <VListItem>
                <VListItemTitle class="font-weight-medium text-capitalize">
                  {{ state.name }}
                </VListItemTitle>
                <VListItemSubtitle class="text-disabled">
                  count: {{ state.count }}
                </VListItemSubtitle>
                <template #prepend>
                  <VAvatar rounded size="34">
                    <VImg :src="state.icon" />
                  </VAvatar>
                </template>
              </VListItem>
            </VCol>
          </VList>
        </VCol>
        <VCol
          style="margin-block-start: -20px"
          order="1"
          order-sm="2"
          class="d-flex justify-center align-center pa-0 pb-5"
        >
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="340"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 18px;
}
</style>
