import { defineStore } from "pinia";

interface SnackBar {
    text: string;
    color?: string;
    timeout?: number;
    active?: boolean;
}

const useSnackBarStore = defineStore("useSnackBarStore", {
    state: () => ({
        list: [] as SnackBar[]
    }),
    getters: {
        snackbars: state => state.list.filter(({ active }) => active)
    },
    actions: {
        add(item: SnackBar) {
            this.list.push({ ...item, active: true });
        }
    }
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSnackBarStore, import.meta.hot));
}

export default useSnackBarStore;
