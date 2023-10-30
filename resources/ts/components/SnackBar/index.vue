<script setup lang="ts">
import axiosIns from "@axios";
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
        if (response.data.message) snackbarStore.add({ text: response.data.message, timeout: 2000 });

        return response;
    },
    error => {
        const status = error.response.status;
        if (status >= 400 && status < 500 && status !== 404) {
            snackbarStore.add({
                text: error.response.data.errors || error.response.data.message || error.message || "",
                color: "error",
                timeout: 5000
            });
        }

        return Promise.reject(error);
    }
);

function getTime() {
    return new Date().getTime();
}
</script>

<template>
    <VSnackbar
        v-for="(s, i) in snackbarStore.snackbars"
        :key="getTime"
        v-model:model-value="s.active"
        :style="{ 'margin-top': calcMargin(i) }"
        location="top end"
        :timeout="s.timeout || 2000"
        :color="s.color || 'success'"
        multi-line
    >
        <template v-for="(item, index) in s.text" v-if="typeof s.text === 'object'" :key="index">
            <span> {{ index }} : </span>
            <template v-for="(message, _index) in item" v-if="typeof item === 'object'" :key="_index">
                <span> {{ message }}</span>
            </template>
            <span v-else>{{ item }}</span>
            <br />
        </template>
        <span v-else>{{ s.text }}</span>
        <template #actions>
            <VBtn color="default" size="38" @click="hide(i)">
                <VIcon icon="mdi-close" size="22" />
            </VBtn>
        </template>
    </VSnackbar>
</template>
