<template>
  <div class="fixed-top">
    <o-notification
      v-for="notification in notifications"
      :key="notification.id"
      aria-close-label="Close notification"
      class="notification"
      :class="`notification--${notification.type}`"
      closeable
      role="alert"
      variant="danger"
      @close="remove(notification.id)"
    >
      {{ notification.message }}
    </o-notification>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNotificationStore } from '@/stores/notification'

const store = useNotificationStore()
const { notifications } = storeToRefs(store)
const { remove } = store
</script>

<style>
.collapse:not(.show) {
  display: none !important;
}

/* @import './NavBar. css' */
</style>