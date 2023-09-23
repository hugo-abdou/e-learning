<template>
    <VRow>
        <VCol v-for="meta in userListMeta" :key="meta.title" cols="12" sm="6" lg="3">
            <VCard>
                <VCardText class="d-flex justify-space-between">
                    <div>
                        <span>{{ meta.title }}</span>
                        <div class="d-flex align-center gap-2 my-1">
                            <h6 class="text-h4">
                                {{ meta.stats }}
                            </h6>
                            <span :class="meta.percentage > 0 ? 'text-success' : 'text-error'">
                                ( {{ meta.percentage > 0 ? "+" : "" }} {{ meta.percentage }}%)
                            </span>
                        </div>
                        <span class="text-body-2">{{ meta.subtitle }}</span>
                    </div>

                    <VAvatar rounded variant="tonal" :color="meta.color" :icon="meta.icon" />
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>

<script lang="ts" setup>
const userListMeta = Array(4).fill({
    icon: "tabler-user-exclamation",
    color: "warning",
    title: "Pending Users",
    stats: "237",
    percentage: +42,
    subtitle: "Last week analytics"
});
</script>

<route lang="yaml">
meta:
    redirectIfNotLoggedIn: true
    redirectIfNotVerified: true
</route>
