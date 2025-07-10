<script setup lang="ts">
import { ref } from 'vue';

const darkMode = ref(false);
function toggleDark() {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
}
</script>

<template>
  <main class="pt-4 mt-4">

  </main>

</template>



