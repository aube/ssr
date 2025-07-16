<template>
  <o-field
    label="Username"
    :message="errors.username"
    :variant="errors.username? 'danger' : ''"
  >
    <o-input
      v-model="form.username"
      placeholder="Введите ваше имя пользователя"
      type="username"
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

  <o-field>
    <div class="buttons">
      <o-button
        :loading="isLoading"
        native-type="submit"
        type="is-primary"
        @click="handleSubmit"
      >
        Войти
      </o-button>
      <o-button
        inverted
        tag="router-link"
        to="/reminder"
        variant="primary"
      >
        Забыли пароль?
      </o-button>
    </div>
  </o-field>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useGeneralStore } from '../stores/general.js'

const generalStore = useGeneralStore()

defineOptions({
  name: 'FormLogin',
})

const emit = defineEmits(['submit'])

const username = generalStore.isDev ? 'qweqweqwe' : ''
const password = generalStore.isDev ? 'password' : ''
const email = generalStore.isDev ? 'qwe@qwe.qwe' : ''

const form = reactive({
  username,
  password,
  email,
})

const errors = reactive({
  username: '',
  password: '',
  email: '',
})

const isLoading = ref(false)

const validate = () => {
  let isValid = true

  Object.keys(errors).forEach(key => errors[key] = '')

  if (!form.username.trim()) {
    errors.username = 'username обязателен'
    isValid = false
  // } else if (!/^\S+@\S+\.\S+$/.test(form.username)) {
  //   errors.username = 'Введите корректный username'
  //   isValid = false
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