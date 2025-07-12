<template>
  <div class="container">
    <form-register @submit="registerUser" />
  </div>
</template>

<script setup>
import FormRegister from '../widgets/FormRegister.vue'
import { useNotificationStore } from '@/stores/notification'
import { useRestApi } from '../services/restapi.js'

const { showSuccess, showDanger } = useNotificationStore()

const { post } = useRestApi()

const registerUser = async (formData) => {
  const response = await post('/api/v1/register', formData)
  if (!response.error) {
    showSuccess('Вы успешно зарегистрированы! Проверьте ваш email для подтверждения.')
  } else {
    showDanger('Ошибка регистрации. Попробуйте позже.')
  }
}
</script>