<script lang="ts" setup>
import congoImg from "@images/pages/boy-illustration.png";
import { useReward } from "vue-rewards";
import { onMounted } from "vue";
interface Props {
    failed?: boolean;
    successTitle?: string;
    successSubtitle?: string;
    failedTitle?: string;
    failedSubtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
    failed: false,
});

onMounted(() => {
    if (!props.failed) {
        useReward("congratulation-title", "confetti", { spread: 200, startVelocity: 30, elementCount: 300 }).reward();
        useReward("congratulation-subtitle", "emoji", { spread: 200, startVelocity: 30, elementCount: 30 }).reward();
    }
});
</script>

<template>
    <VCard>
        <VCardText>
            <h6
                id="congratulation-title"
                class="text-h3 text-no-wrap font-weight-medium"
            >
                {{ failed ? failedTitle : successTitle }}
            </h6>
            <p
                id="congratulation-subtitle"
                class="mb-2 text-h6"
            >
                {{ failed ? failedSubtitle : successSubtitle }}
            </p>
            <VCardActions>
                <VBtn
                    variant="tonal"
                    @click="$emit('ok')"
                >
                    Ok
                </VBtn>
            </VCardActions>
        </VCardText>
        <VImg
            :src="congoImg"
            class="congo-john-img"
        />
    </VCard>
</template>

<style lang="scss">
.congo-john-img {
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 1rem;
    min-inline-size: 25%;
}
</style>
