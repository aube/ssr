<template>
  <div class="fixed-top notifications-wrapper">
    <o-notification
      v-for="notification in notifications"
      :key="notification.id"
      aria-close-label="Close notification"
      class="notification m-2"
      :class="`notification--${notification.type}`"
      :closeable="false"
      role="alert"
      :variant="notification.type"
      @click="remove(notification.id)"
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
.notifications-wrapper {
  position: fixed;
  z-index: 1050; /* Bootstrap's z-index for notifications */
  right: 0;
  max-width: 555px;
  left: auto !important;
}
/* .collapse:not(.show) {
  display: none !important;
} */

</style>