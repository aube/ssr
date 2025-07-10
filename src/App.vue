<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'

if (import.meta.env.SSR) {
  console.log("server")
} else {
  console.log("client")
}
</script>

<template>
  <NavBar />
  <RouterView />
</template>
