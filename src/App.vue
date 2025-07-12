<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Notification from './components/Notification.vue'
import { RouterView } from 'vue-router'

if (import.meta.env.SSR) {
  console.log("server")
} else {
  console.log("client")
}
</script>

<template>
  <Notification />
  <NavBar />
  <RouterView />
</template>
