<script lang="ts" setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useChatStore } from "@/views/pages/chat/useChatStore";

defineEmits<{
  (e: "close"): void;
}>();

const store = useChatStore();
</script>

<template>
  <template v-if="store.activeChat">
    <!-- Close Button -->
    <div
      class="pt-2 me-2"
      :class="$vuetify.locale.isRtl ? 'text-left' : 'text-right'"
    >
      <IconBtn @click="$emit('close')">
        <VIcon
          icon="tabler-x"
          color="disabled"
          class="text-medium-emphasis"
        />
      </IconBtn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6">
      <Avatar
        :size="64"
        :user="store.activeChat.contact"
      />
      <h5 class="text-h5">
        {{ store.activeChat.contact.name }}
      </h5>
      <p class="text-capitalize text-medium-emphasis">
        {{ store.activeChat.contact.roles[0] }}
      </p>
    </div>

    <!-- User Data -->
    <PerfectScrollbar
      class="ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5"
      :options="{ wheelPropagation: false }"
    >
      <!-- About -->
      <div class="my-8">
        <span class="text-sm text-disabled">ABOUT</span>
        <p class="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, maxime quisquam a voluptatum rem minima velit quia nemo excepturi facere repellat eaque nostrum, aliquam pariatur aspernatur voluptate distinctio molestias natus.</p>
      </div>

      <!-- Personal Information -->
      <div class="mb-8">
        <span class="d-block text-sm text-disabled mb-3">PERSONAL INFORMATION</span>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="tabler-mail"
            size="24"
          />
          <!-- @vue-skip -->
          <span>{{ store.activeChat.contact.email }}</span>
        </div>
        <!-- <div class="d-flex align-center my-3">
                    <VIcon
                        class="me-2"
                        icon="tabler-phone-call"
                        size="24"
                    />
                    <span>+1(123) 456 - 7890</span>
                </div> -->
        <!-- <div class="d-flex align-center">
                    <VIcon
                        class="me-2"
                        icon="tabler-clock"
                        size="24"
                    />
                    <span>Mon - Fri 10AM - 8PM</span>
                </div> -->
      </div>

      <!-- Options -->
      <div v-if="false">
        <span class="d-block text-sm text-disabled mb-3">OPTIONS</span>
        <div class="d-flex align-center">
          <VIcon
            class="me-2"
            icon="tabler-badge"
            size="24"
          />
          <span>Add Tag</span>
        </div>
        <div class="d-flex align-center my-3">
          <VIcon
            class="me-2"
            icon="tabler-star"
            size="24"
          />
          <span>Important Contact</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="tabler-photo"
            size="24"
          />
          <span>Shared Media</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-2"
            icon="tabler-trash"
            size="24"
          />
          <span>Delete Contact</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-2 ms-1"
            size="18"
            icon="tabler-ban"
          />
          <span>Block Contact</span>
        </div>
      </div>
    </PerfectScrollbar>
  </template>
</template>
