<script lang="ts" setup>
import { User } from "@/types";

const props = withDefaults(defineProps<{ users: User[]; max?: number }>(), { max: 2 });
defineOptions({ inheritAttrs: false });
</script>

<template>
    <div
        v-if="users?.length"
        class="v-avatar-group"
    >
        <template
            v-for="(user, index) in users"
            :key="user"
        >
            <Avatar
                v-bind="$attrs"
                :size="32"
                v-if="(users.length > max + 1 && index < max) || users.length <= max + 1"
                :user="user"
            />
        </template>
        <VAvatar
            :size="32"
            v-if="users.length > max + 1"
            :color="$vuetify.theme.current.dark ? '#4A5072' : '#f6f6f7'"
        >
            <span class="text-sm"> +{{ users.length < 100 ? users.length - 3 : 99 }} </span>
        </VAvatar>
    </div>
</template>
