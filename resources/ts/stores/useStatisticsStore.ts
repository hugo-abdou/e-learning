import { defineStore } from "pinia";
import { StatisticsCardType } from "@/types";
import { FetchOptions } from "ofetch";
export const useStatisticsStore = defineStore("useStatisticsStore", {
    actions: {
        fetchStatistics(type: string, options?: FetchOptions<"json"> | undefined) {
            return $api.get<any>(`/statistics/${type}`, options);
        },
        fetchCardStatistics(type: string, options?: FetchOptions<"json"> | undefined): Promise<StatisticsCardType> {
            return this.fetchStatistics(`${type}-card`, options);
        },
    },
});
