<template>
  <o-field
    label="Имя"
    :message="errors.name"
    :type="{'is-danger': errors.name}"
  >
    <o-input
      v-model="form.name"
      placeholder="Введите ваше имя"
    />
  </o-field>

  <o-field
    label="Email"
    :message="errors.email"
    :type="{'is-danger': errors.email}"
  >
    <o-input
      v-model="form.email"
      type="email"
      placeholder="Введите ваш email"
    />
  </o-field>

  <o-field
    label="Пароль"
    :message="errors.password"
    :type="{'is-danger': errors.password}"
  >
    <o-input
      v-model="form.password"
      type="password"
      placeholder="Введите пароль"
      password-reveal
    />
  </o-field>

  <o-field
    label="Подтверждение пароля"
    :message="errors.password_confirmation"
    :type="{'is-danger': errors.password_confirmation}"
  >
    <o-input
      v-model="form.password_confirmation"
      type="password"
      placeholder="Повторите пароль"
      password-reveal
    />
  </o-field>

  <o-field>
    <o-button
      native-type="submit"
      type="is-primary"
      :loading="isLoading"
      expanded
      @click="handleSubmit"
    >
      Зарегистрироваться
    </o-button>
  </o-field>
</template>

<script setup>
import { reactive, ref } from 'vue'

defineOptions({
  name: 'FormRegister'
})

defineEmits(['submit'])

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const errors = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const isLoading = ref(false)

const validate = () => {
    let isValid = true
    
    // Сброс ошибок
    Object.keys(errors).forEach(key => errors[key] = '')
    
    // Валидация
    if (!form.name.trim()) {
    errors.name = 'Имя обязательно'
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
        emit('submit', form)
    } finally {
        isLoading.value = false
    }
}

</script>