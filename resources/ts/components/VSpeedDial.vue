<template>
    <div class="speed-dial">
        <VBtn @click="toggleSpeedDial">
            {{ speedDialOpen ? "Close" : "Open" }}
        </VBtn>

        <transition name="slide-fade">
            <div v-show="speedDialOpen" class="speed-dial-items">
                <div v-for="(item, index) in items" :key="index" class="speed-dial-item" @click="handleItemClick(item)">
                    <span class="item-icon">{{ item.icon }}</span>
                    <span class="item-label">{{ item.label }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            speedDialOpen: false,
            items: [
                { icon: "🌟", label: "Star" },
                { icon: "📞", label: "Phone" },
                { icon: "✉️", label: "Mail" }
                // Add more items as needed
            ]
        };
    },
    methods: {
        toggleSpeedDial() {
            this.speedDialOpen = !this.speedDialOpen;
        },
        handleItemClick(item: any) {
            // Handle item click here
            console.log(`Clicked on ${item.label} button`);
            this.toggleSpeedDial(); // Close the speed dial after clicking an item
        }
    }
};
</script>

<style scoped>
.speed-dial {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.fab {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
}

.speed-dial-items {
    position: absolute;
    bottom: 70px;
    right: 20px;
}

.speed-dial-item {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.item-icon {
    margin-right: 8px;
}

.item-label {
    display: none; /* Hide labels by default */
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transition: all 0.5s;
}
</style>
