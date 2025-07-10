<template>
  <div class="container">
    <form-upload @upload="handleFileUpload" />
  </div>
</template>

<script setup>
import FormUpload from '../widgets/FormUpload.vue'

const handleFileUpload = ({ file, description }) => {
    console.log('Загрузка файла:', file, description)
    // Отправка файла на сервер
}
</script>