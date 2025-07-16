<template>
  <div class="container">
    <form-upload @upload="handleFileUpload" />
  </div>
</template>

<script setup>
import FormUpload from '../widgets/FormUpload.vue'
import { useNotificationStore } from '@/stores/notification'
import { useRestApi } from '../services/restapi.js'


const { showSuccess, showDanger } = useNotificationStore()

const { post } = useRestApi()

const handleFileUpload = async ({ file, description }) => {
  var formData = new FormData()
  formData.append('file', file)
  formData.append('description', description)

  const response = await post('/api/v1/upload', formData, "multipart/form-data")
  if (!response.error) {
    showSuccess('Файл успешно загружен.')
  } else {
    showDanger('Ошибка загрузки. Попробуйте позже.')
  }
}
</script>