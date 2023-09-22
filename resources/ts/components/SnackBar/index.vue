<template>
    <v-snackbar
        :style="{ 'margin-top': calcMargin(i) }"
        v-for="(s, i) in snackbarStore.snackbars"
        :key="i"
        v-model:model-value="s.active"
        location="top end"
        :timeout="s.timeout || 2000"
        :color="s.color || 'success'"
        multi-line
    >
        <template v-if="typeof s.text === 'object'" v-for="(item, index) in s.text" :key="index">
            <span> {{ index }} : </span>
            <template v-if="typeof item === 'object'" v-for="(message, _index) in item" :key="_index">
                <span> {{ message }}</span>
            </template>
            <span v-else>{{ item }}</span>
            <br />
        </template>
        <span v-else>{{ s.text }}</span>
        <template #actions>
            <VBtn @click="hide(i)" color="default" size="38">
                <VIcon icon="mdi-close" size="22" />
            </VBtn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
import axiosIns from "@/plugins/axios";
import useSnackBarStore from "./useSnackBarStore";

const snackbarStore = useSnackBarStore();
function calcMargin(i: number) {
    return `${(i + 0.1) * 70}px`;
}
function hide(i: number) {
    snackbarStore.snackbars[i].active = false;
}

axiosIns.interceptors.response.use(
    response => {
        if (response.data.message) {
            snackbarStore.add({ text: response.data.message, timeout: 2000 });
        }
        return response;
    },
    error => {
        const status = error.response.status;
        if (status >= 400 && status < 500) {
            snackbarStore.add({
                text: error.response.data.errors || error.response.data.message || error.message || "",
                color: "error",
                timeout: 5000
            });
        }
        return Promise.reject(error);
    }
);
</script>
