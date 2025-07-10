<template>
  <b-form @submit.prevent="handleSubmit">
    <b-field label="Имя" :message="errors.name" :type="{'is-danger': errors.name}">
      <b-input v-model="form.name" placeholder="Введите ваше имя" />
    </b-field>

    <b-field label="Email" :message="errors.email" :type="{'is-danger': errors.email}">
      <b-input v-model="form.email" type="email" placeholder="Введите ваш email" />
    </b-field>

    <b-field label="Пароль" :message="errors.password" :type="{'is-danger': errors.password}">
      <b-input v-model="form.password" type="password" placeholder="Введите пароль" password-reveal />
    </b-field>

    <b-field label="Подтверждение пароля" :message="errors.password_confirmation" :type="{'is-danger': errors.password_confirmation}">
      <b-input v-model="form.password_confirmation" type="password" placeholder="Повторите пароль" password-reveal />
    </b-field>

    <b-field>
      <b-button native-type="submit" type="is-primary" :loading="isLoading" expanded>
        Зарегистрироваться
      </b-button>
    </b-field>
  </b-form>
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