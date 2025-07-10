<template>
  <b-form @submit.prevent="handleSubmit">
    <b-field label="Email" :message="errors.email" :type="{'is-danger': errors.email}">
      <b-input v-model="form.email" type="email" placeholder="Введите ваш email" />
    </b-field>

    <b-field label="Пароль" :message="errors.password" :type="{'is-danger': errors.password}">
      <b-input v-model="form.password" type="password" placeholder="Введите пароль" password-reveal />
    </b-field>

    <b-field>
      <div class="buttons">
        <b-button native-type="submit" type="is-primary" :loading="isLoading">
          Войти
        </b-button>
        <b-button tag="router-link" to="/forgot-password" type="is-text">
          Забыли пароль?
        </b-button>
      </div>
    </b-field>
  </b-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

defineOptions({
  name: 'FormLogin'
})

defineEmits(['submit'])

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const isLoading = ref(false)

const validate = () => {
  let isValid = true
  
  // Сброс ошибок
  Object.keys(errors).forEach(key => errors[key] = '')
  
  // Валидация
  if (!form.email.trim()) {
    errors.email = 'Email обязателен'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Введите корректный email'
    isValid = false
  }
  
  if (!form.password) {
    errors.password = 'Пароль обязателен'
    isValid = false
  }
  
  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return
  
  isLoading.value = true
  try {
    emit('submit', form)
  } finally {
    isLoading.value = false
  }
}

</script>