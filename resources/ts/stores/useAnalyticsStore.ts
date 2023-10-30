import type { JsonResponse, ResourceResponse } from '@/types';
import axiosIns from '@/utils/axios';
import { defineStore } from 'pinia';

const useAnalyticsStore = defineStore('useAnalyticsStore', {
  actions: {
    fetchAnalytics(type: string, params?: any) {
      return new Promise<JsonResponse<any>>((resolve, reject) => {
        axiosIns
          .get<JsonResponse<any>>(`/analytics/${type}`, { params })
          .then(res => resolve(res.data))
          .catch(reject)
      })
    },
    fetchStorageAnalytics(params?: any) {
      return this.fetchAnalytics('storage', params)
    },
    fetchProjectStatistics(params?: any) {
      return this.fetchAnalytics('project-statistics', params)
    },
    fetchProjectsTableStatistics(params?: any) {
      // return this.fetchAnalytics("project-table-statistics", params);
      return new Promise<ResourceResponse<any>>((resolve, reject) => {
        axiosIns
          .get<ResourceResponse<any>>('/analytics/project-table-statistics', { params })
          .then(res => resolve(res.data))
          .catch(reject)
      })
    },
    setProjectAnalytics(uuid: string, name: string, _data?: any) {
      const data = { type: 'project-action', name, uuid, ..._data }

      return new Promise<ResourceResponse<any>>((resolve, reject) => {
        axiosIns
          .post<ResourceResponse<any>>('/register-visit', data)
          .then(res => resolve(res.data))
          .catch(reject)
      })
    },
    setAnalytics(data: any) {
      return new Promise<ResourceResponse<any>>((resolve, reject) => {
        axiosIns
          .post<ResourceResponse<any>>('/register-visit', data)
          .then(res => resolve(res.data))
          .catch(reject)
      })
    },
  },
})

export default useAnalyticsStore
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAnalyticsStore, import.meta.hot))
