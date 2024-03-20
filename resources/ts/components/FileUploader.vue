<template>
    <div ref="uppyEl"></div>
</template>

<script setup lang="ts">
import { ConfigurationHash } from "@/utils/uppy/ResumableTypes";
import ResumableUppyPlugin from "@/utils/uppy/ResumableUppyPlugin";
import Uppy, { SuccessResponse, UploadResult, UppyFile, UppyOptions } from "@uppy/core";
import "@uppy/core/dist/style.css";
import Dashboard, { DashboardOptions } from "@uppy/dashboard";
import "@uppy/dashboard/dist/style.css";
import { XHRUploadOptions } from "@uppy/xhr-upload";
import { useTheme } from "vuetify/lib/framework.mjs";

const props = defineProps<{
    uppyOptions?: Partial<UppyOptions<Record<string, unknown>>>;
    dashboardOptions?: Partial<DashboardOptions>;
    xhrOptions?: Partial<XHRUploadOptions>;
    resumableOptions?: Partial<ConfigurationHash>;
}>();
interface Emit {
    (e: "uploadSuccess", file: UppyFile<any, Record<string, unknown>>, res: SuccessResponse): void;
    (e: "complete", result: UploadResult<any, Record<string, unknown>>): void;
    (e: "done"): void;
}
const emit = defineEmits<Emit>();

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
        ...props.dashboardOptions,
    });
    // Add a custom Uppy plugin
    // @ts-expect-error
    uppy.use(ResumableUppyPlugin, { ...props.resumableOptions });
    // uppy.use(XhrUpload, {
    //     endpoint: "/media/upload",
    //     ...props.xhrOptions
    // });
    uppy.on("complete", (res) => emit("complete", res));
    uppy.on("upload-success", (file, response) => {
        // @ts-ignore
        emit("uploadSuccess", file, response);
    });
    uppy.on("upload-error", (file, error) => {
        console.error(error);
    });
});
</script>
<style>
.uppy-Dashboard-inner {
    border: none !important;
    background: rgb(var(--v-theme-surface)) !important;
    inline-size: 100% !important;
}

.uppy-Dashboard-browse:hover,
.uppy-Dashboard-browse:focus {
    border-block-end: 1px solid rgb(var(--v-theme-primary)) !important;
}

.uppy-DashboardContent-back,
.uppy-DashboardContent-addMore,
.uppy-DashboardContent-save {
    color: rgb(var(--v-theme-primary)) !important;
}

.uppy-c-btn-primary {
    background-color: rgb(var(--v-theme-primary)) !important;
    color: rgb(var(--v-theme-on-primary)) !important;
}

.uppy-Dashboard-AddFilesPanel {
    background-color: rgb(var(--v-theme-background)) !important;
    background-image: linear-gradient(0deg, rgb(var(--v-theme-background)) 35%, rgb(var(--v-theme-surface)) 100%) !important;
}

.uppy-DashboardContent-bar,
.uppy-StatusBar,
.uppy-StatusBar.is-waiting .uppy-StatusBar-actions {
    background: rgb(var(--v-theme-surface)) !important;
}
</style>
@/utils/uppy/ResumableUppyPlugin
