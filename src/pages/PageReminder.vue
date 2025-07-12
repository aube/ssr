<template>
  <div class="container">
    <form-login @submit="loginUser" />
  </div>
</template>

<script setup>
import FormLogin from '../widgets/FormLogin.vue'
import {useRestApi} from '../services/restapi.js'

const {post} = useRestApi()


const loginUser = async (formData) => {
  const response = await post('/login', formData)
  console.log(response)
}
</script>