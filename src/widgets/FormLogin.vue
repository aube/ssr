<template>
  <o-field
    label="Email"
    :message="errors.email"
    :type="{'is-danger': errors.email}"
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
    :type="{'is-danger': errors.password}"
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
        to="/forgot-password"
        variant="primary"
      >
        Забыли пароль?
      </o-button>
    </div>
  </o-field>
</template>

<script setup>
import {reactive, ref} from 'vue'

defineOptions({
  name: 'FormLogin',
})

const emit = defineEmits(['submit'])

const form = reactive({
  email: '',
  password: '',
})

const errors = reactive({
  email: '',
  password: '',
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