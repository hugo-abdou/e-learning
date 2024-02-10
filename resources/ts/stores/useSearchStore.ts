export const useSearchStore = defineStore("SearchStore", {
  state: () => ({
    search: "",
    pageHassearch: false,
  }),
  actions: {
    clear() {
      this.search = "";
    },
  },
});
