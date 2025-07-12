<template>
  <o-field
    label="Имя"
    :message="errors.username"
    :variant="errors.username ? 'danger' : ''"
  >
    <o-input
      v-model="form.username"
      placeholder="Введите ваше имя"
    />
  </o-field>

  <o-field
    label="Email"
    :message="errors.email"
    :variant="errors.email? 'danger' : ''"
  >
    <o-input
      v-model="form.email"
      placeholder="Введите ваш email"
      type="email"
    />
  </o-field>

  <o-field
    label="Пароль"
    :message="errors.password"
    :variant="errors.password? 'danger' : ''"
  >
    <o-input
      v-model="form.password"
      password-reveal
      placeholder="Введите пароль"
      type="password"
    />
  </o-field>

  <o-field
    label="Подтверждение пароля"
    :message="errors.password_confirmation"
    :variant="errors.password_confirmation? 'danger' : ''"
  >
    <o-input
      v-model="form.password_confirmation"
      password-reveal
      placeholder="Повторите пароль"
      type="password"
    />
  </o-field>

  <o-field>
    <o-button
      :loading="isLoading"
      native-type="submit"
      type="is-primary"
      @click="handleSubmit"
    >
      Зарегистрироваться
    </o-button>
  </o-field>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useGeneralStore } from '../stores/general.js'

const generalStore = useGeneralStore()

defineOptions({
  name: 'FormRegister',
})

const emit = defineEmits(['submit'])


const username = generalStore.isDev ? 'qweqweqwe' : ''
const email = generalStore.isDev ? 'qwe@qwe.qwe' : ''
const password = generalStore.isDev ? 'password' : ''
const password_confirmation = generalStore.isDev ? 'password' : ''


const form = reactive({
  username,
  email,
  password,
  password_confirmation,
})

const errors = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const isLoading = ref(false)

const validate = () => {
  let isValid = true

  // Сброс ошибок
  Object.keys(errors).forEach(key => errors[key] = '')

  // Валидация
  if (!form.username.trim()) {
    errors.username = 'Имя обязательно'
    isValid = false
  }

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
  } else if (form.password.length < 6) {
    errors.password = 'Пароль должен быть не менее 6 символов'
    isValid = false
  }

  if (form.password !== form.password_confirmation) {
    errors.password_confirmation = 'Пароли не совпадают'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return

  isLoading.value = true
  try {
    emit('submit', {
      username: form.username,
      email: form.email,
      password: form.password,
    })
  } finally {
    isLoading.value = false
  }
}

</script>