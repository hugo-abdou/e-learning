<script lang="ts" setup>
import axiosIns from "@axios";

const isDialogVisible = ref(false);
const iframe = ref<HTMLIFrameElement | null>(null);

axiosIns.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 500 && typeof error.response.data === "string") {
            isDialogVisible.value = true;
            setTimeout(() => {
                if (!iframe.value || !iframe.value.contentWindow) return;
                iframe.value.contentWindow.document.open();
                iframe.value.contentWindow.document.write(error.response.data);
                iframe.value.contentWindow.document.close();
            }, 50);
        }
        return Promise.reject(error);
    }
);
</script>

<template>
    <VDialog v-model="isDialogVisible" fullscreen :scrim="false" transition="dialog-bottom-transition">
        <!-- Dialog Content -->
        <VCard>
            <!-- Toolbar -->
            <div>
                <VToolbar color="primary" :height="30">
                    <VBtn icon variant="plain" @click="isDialogVisible = false">
                        <VIcon color="white" icon="tabler-x" />
                    </VBtn>
                </VToolbar>
            </div>
            <iframe style="border: 0; height: 100%" ref="iframe"></iframe>
        </VCard>
    </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform 0.2s ease-in-out;
}
</style>
