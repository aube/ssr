<template>
  <div class="container">
    <form-login @submit="loginUser" />
  </div>
</template>

<script setup>
import FormLogin from '../widgets/FormLogin.vue'

const loginUser = (formData)=> {
    console.log('Вход:', formData)
    // Отправка данных на сервер
}
</script>