<script setup lang="ts">
import { RouterView } from 'vue-router'

import MainMenu from './components/MainMenu.vue'

if (import.meta.env.SSR) {
  console.log("server")
} else {
  console.log("client")
}
</script>

<template>
  <MainMenu />
  <RouterView />
</template>
