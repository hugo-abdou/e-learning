<template>
    <div>
        <VSlideGroup v-model="activeTab" class="pa-4" selected-class="bg-primary" show-arrows>
            <VSlideGroupItem v-for="tab in tabs" :key="tab.tab" v-slot="{ isSelected, toggle, selectedClass }">
                <VChip size="large" :color="isSelected ? 'primary' : 'secondary'" class="ma-1" @click="toggle">
                    <VIcon start size="16" :icon="tab.icon" />
                    {{ tab.title }}
                </VChip>
            </VSlideGroupItem>
        </VSlideGroup>
        <VRow>
            <VCol v-for="(item, index) in 12" :key="index" cols="12" sm="6" md="4" lg="3">
                <VCard>
                    <VImg :src="pages1" cover />
                    <VCardItem>
                        <VCardTitle>Influencing The Influencer</VCardTitle>
                        <VCardSubtitle>
                            <VChip color="secondary">filming</VChip>
                        </VCardSubtitle>
                    </VCardItem>
                    <VCardText class="d-flex align-center gap-2">
                        <VAvatar color="primary" variant="tonal" icon="bi:book" />
                        <p class="ma-0">4 chapters</p>
                    </VCardText>
                    <VCardText>
                        <VProgressLinear rounded rounded-bar :model-value="50" :max="100" height="10" color="primary" />
                        <p class="mt-2">50% Complete</p>
                    </VCardText>
                </VCard>
            </VCol>
        </VRow>
    </div>
</template>

<script setup lang="ts">
import pages1 from "@images/pages/1.png";
const activeTab = ref(0);

// tabs
const tabs = [
    { title: "accounting", icon: "tabler-users", tab: "accounting" },
    { title: "computer science", icon: "tabler-lock", tab: "computer science" },
    { title: "enginnering", icon: "tabler-lock", tab: "enginnering" },
    { title: "filming", icon: "tabler-lock", tab: "filming" },
    { title: "fitness", icon: "tabler-lock", tab: "fitness" },
    { title: "music", icon: "tabler-lock", tab: "music" },
    { title: "photography", icon: "tabler-lock", tab: "photography" }
];
</script>

<style scoped></style>
