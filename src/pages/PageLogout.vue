<template>
  <div class="container">
    <form-logout @submit="logoutUser" />
  </div>
</template>

<script setup>
import FormLogout from '../widgets/FormLogout.vue'
import { useNotificationStore } from '@/stores/notification'
import { useRestApi } from '../services/restapi.js'
import { useRouter } from 'vue-router'

const { showSuccess, showDanger } = useNotificationStore()
const { post } = useRestApi()
const router = useRouter()

const logoutUser = async () => {
  const response = await post('/api/v1/logout')
  if (!response.error) {
    showSuccess('Пока-пока!')
    router.push({ name: 'home' })
    localStorage.removeItem("token")
  } else {
    showDanger('Кажется дверь заклинило.')
  }
}
</script>