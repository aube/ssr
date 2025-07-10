<template>
  <n-menu v-if="menuVisible" :options="menuOptions" @update:value="handleUpdateValue" />

  <n-popover v-if="menuVisible"  trigger="hover">
    <template #trigger>
      <n-button> Hover </n-button>
    </template>
    <span>Maybe I don't really want to know how your garden grows</span>
  </n-popover>

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

</template>


<script setup>
import { ref, h, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { NPopover, NMenu, NButton } from 'naive-ui'

const menuVisible = ref(false)

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "home",
          params: {
            lang: "en-US"
          }
        }
      },
      { default: () => "Going Home" }
    ),
    key: "go-back-home",
    // icon: renderIcon(HomeIcon)
  },
];


const options=  [
        {
          label: 'Marina Bay Sands',
          key: 'marina bay sands',
          disabled: true
        },
        {
          label: 'Brown\'s Hotel, London',
          key: 'brown\'s hotel, london'
        },
        {
          label: 'Atlantis Bahamas, Nassau',
          key: 'atlantis nahamas, nassau'
        },
        {
          label: 'The Beverly Hills Hotel, Los Angeles',
          key: 'the beverly hills hotel, los angeles'
        }
      ]

onMounted(() => {
  // Simulate a delay to show the menu
  setTimeout(() => {
    menuVisible.value = true;
  }, 1000);
});

const handleUpdateValue = (value) => {
  console.log("Menu value updated:", value);
  // Handle the menu value update here
};

</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>