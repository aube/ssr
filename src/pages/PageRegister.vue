<template>
  <div class="container">
    <form-register @submit="registerUser" />
  </div>
</template>

<script setup>
import FormRegister from '../widgets/FormRegister.vue'
import {useRestApi} from '../services/restapi.js'

const {post} = useRestApi()


const registerUser = async (formData) => {
  const response = await post('/api/v1/register', formData)
  console.log(response)
}
</script>