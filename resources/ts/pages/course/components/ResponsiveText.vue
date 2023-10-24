<template>
    <div class="text-wrap" ref="El">
        <slot :text="result" />
    </div>
</template>

<script setup lang="ts">
import { calculateWordsToDisplay } from "@/helpers";
interface Props {
    text: string;
    maxLines?: number;
    charWidth?: number;
}
const props = withDefaults(defineProps<Props>(), { maxLines: 1, charWidth: 8 });
const El = ref();
const windowSize = useWindowSize();
const result = computed(() => {
    if (El.value?.parentNode && windowSize.width.value) {
        return calculateWordsToDisplay(El.value.parentNode.clientWidth, props.text, {
            maxLines: props.maxLines,
            charWidth: props.charWidth
        });
    }
    return "";
});
</script>
