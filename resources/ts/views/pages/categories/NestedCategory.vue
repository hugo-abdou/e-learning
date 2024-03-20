<template>
    <VueDraggable
        v-model="list"
        group="g1"
        chosen-class="bg-background"
        target=".v-list"
        @end="$emit('orderChanged')"
    >
        <VList
            v-model:opened="selected"
            v-bind="$attrs"
        >
            <VListGroup
                v-for="(el, i) in modelValue"
                :key="el.name"
                append-icon="tabler-chevron-right"
                :value="el.id"
            >
                <template #activator="{ props, isOpen }">
                    <VListItem
                        v-bind="props"
                        :title="`${el.type} : ${el.name}`"
                        :class="{ 'bg-background': isOpen }"
                        class="border rounded mb-1 flex-grow-1"
                    >
                        <template #append="{ isActive }">
                            <div @click.stop="">
                                <IconBtn
                                    v-if="$can('create', 'category')"
                                    @click.stop="$emit('add-new', el)"
                                    color="on-primary"
                                    icon="tabler-text-plus"
                                />
                                <IconBtn
                                    v-if="$can('update', 'category')"
                                    @click.stop="$emit('edit', el)"
                                    color="on-primary"
                                    icon="tabler-edit"
                                />
                                <IconBtn
                                    v-if="$can('delete', 'category')"
                                    @click.stop="$emit('delete', el)"
                                    color="error"
                                    icon="tabler-trash"
                                />
                            </div>
                            <VIcon
                                class="ml-2"
                                :icon="isActive ? 'tabler-chevron-up' : 'tabler-chevron-down'"
                            />
                        </template>
                    </VListItem>
                </template>
                <NestedCategory
                    @order-changed="emits('orderChanged')"
                    @delete="emits('delete', $event)"
                    @edit="emits('edit', $event)"
                    @add-new="emits('add-new', $event)"
                    v-model="list[i].children"
                    :deapth="deapth + 1"
                    class="ml-4 my-1 pa-1"
                />
                <!-- :class="{ 'bg-background': selected.includes(el.id) }" -->
            </VListGroup>
        </VList>
    </VueDraggable>
</template>
<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import { computed } from "vue";
import { Category } from "@/types";

interface Props {
    modelValue: Category[];
    deapth?: number;
}

const props = withDefaults(defineProps<Props>(), {
    deapth: 0,
});
defineOptions({ inheritAttrs: false });
interface Emits {
    (e: "update:modelValue", value: Category[]): void;
    (e: "delete", value: Category): void;
    (e: "edit", value: Category): void;
    (e: "add-new", value: Category): void;
    (e: "orderChanged"): void;
}

const selected = ref<number[]>([]);
const emits = defineEmits<Emits>();
const list = computed({
    get: () => props.modelValue,
    set: (value) => emits("update:modelValue", value),
});
</script>
