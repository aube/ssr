<template>
  <div class="container">
    <form-login @submit="loginUser" />
  </div>
</template>

<script setup>
import FormLogin from '../widgets/FormLogin.vue'
import { useNotificationStore } from '@/stores/notification'
import { useRestApi } from '../services/restapi.js'
import { useRouter } from 'vue-router'

const { showSuccess, showDanger } = useNotificationStore()
const { post } = useRestApi()
const router = useRouter()

const loginUser = async (formData) => {
  const response = await post('/api/v1/login', formData)
  if (!response.error) {
    showSuccess('Добро пожаловать, ' + formData.username + '!')
    router.push({ name: 'home' })
    localStorage.setItem("token", response.data.token)
  } else {
    showDanger('Ошибка аутентификации. Проверьте введённые данные.')
  }
}
</script>