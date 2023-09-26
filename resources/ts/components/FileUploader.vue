<template>
    <div ref="uppyEl"></div>
</template>

<script setup lang="ts">
import Uppy, { UppyOptions } from "@uppy/core";
import Dashboard, { DashboardOptions } from "@uppy/dashboard";
import XHR, { XHRUploadOptions } from "@uppy/xhr-upload";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { useTheme } from "vuetify/lib/framework.mjs";

const props = defineProps<{
    uppyOptions?: Partial<UppyOptions<Record<string, unknown>>>;
    dashboardOptions?: Partial<DashboardOptions>;
    xhrOptions?: Partial<XHRUploadOptions>;
}>();

const emit = defineEmits(["upload-success", "complete", "done"]);

const theme = useTheme();
const uppyEl = ref<HTMLElement>();
let uppy: Uppy;

onMounted(() => {
    uppy = new Uppy(props.uppyOptions);
    //@ts-ignore
    uppy.use(Dashboard, {
        inline: true,
        target: uppyEl.value,
        proudlyDisplayPoweredByUppy: false,
        theme: theme.current.value.dark ? "dark" : "light",
        doneButtonHandler: () => {
            uppy.cancelAll();
            emit("done");
        },
        ...props.dashboardOptions
    });
    uppy.use(XHR, {
        endpoint: "/api/media",
        withCredentials: true,
        ...props.xhrOptions,
        headers: {
            //@ts-ignore
            // "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
            ...props.xhrOptions?.headers
        }
    });

    uppy.on("complete", res => emit("complete", res));
    uppy.on("upload-success", (file, res) => emit("upload-success", res, file));
});
</script>
<style>
.uppy-Dashboard-inner {
    width: 100%;
}
.uppy-Dashboard-browse:hover,
.uppy-Dashboard-browse:focus {
    border-bottom: 1px solid rgb(var(--v-theme-primary)) !important;
}
.uppy-DashboardContent-back,
.uppy-DashboardContent-addMore,
.uppy-Dashboard-browse,
.uppy-DashboardContent-save {
    color: rgb(var(--v-theme-primary)) !important;
}
.uppy-c-btn-primary,
.uppy-c-btn-primary {
    background-color: rgb(var(--v-theme-primary)) !important;
}
.uppy-Dashboard-AddFilesPanel {
    background-color: rgb(var(--v-theme-background)) !important;
    background-image: linear-gradient(0deg, rgb(var(--v-theme-background)) 35%, rgb(var(--v-theme-surface)) 100%) !important;
}
.uppy-Dashboard-inner {
    border: none !important;
}
.uppy-Dashboard-inner,
.uppy-DashboardContent-bar,
.uppy-StatusBar,
.uppy-StatusBar.is-waiting .uppy-StatusBar-actions {
    background: rgb(var(--v-theme-surface)) !important;
}
</style>
