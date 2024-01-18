import type { Event, NewEvent } from "./types";

export const useCalendarStore = defineStore("calendar", {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: "error",
        label: "Personal",
      },
      {
        color: "primary",
        label: "Business",
      },
      {
        color: "warning",
        label: "Family",
      },
      {
        color: "success",
        label: "Holiday",
      },
      {
        color: "info",
        label: "ETC",
      },
    ],
    selectedCalendars: ["Personal", "Business", "Family", "Holiday", "ETC"],
  }),
  actions: {
    async fetchEvents() {
      const { data, error } = await useApi<any>(
        createUrl("/apps/calendar", {
          query: {
            calendars: this.selectedCalendars,
          },
        })
      );

      if (error.value) return error.value;

      return data.value;
    },
    async addEvent(event: NewEvent) {
      await $api.post("/apps/calendar", event);
    },
    async updateEvent(event: Event) {
      return await $api.put(`/apps/calendar/${event.id}`, event);
    },
    async removeEvent(eventId: string) {
      return await $api.delete(`/apps/calendar/${eventId}`);
    },
  },
});
