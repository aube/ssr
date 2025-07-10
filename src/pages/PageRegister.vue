<template>
  <div class="container">
    <form-register @submit="registerUser" />
  </div>
</template>

<script setup>
import FormRegister from '../widgets/FormRegister.vue'

const registerUser = (formData)=> {
    console.log('Регистрация:', formData)
    // Отправка данных на сервер
}
</script>