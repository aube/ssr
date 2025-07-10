<template>
  <b-navbar type="is-primary" wrapper-class="container" mobile-burger>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>My Vue App</strong>
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Главная
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/upload' }">
        Загрузка файлов
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/login' }" v-if="!isAuthenticated">
        Вход
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/register' }" v-if="!isAuthenticated">
        Регистрация
      </b-navbar-item>
      
      <b-navbar-dropdown :label="userName" v-if="isAuthenticated">
        <b-navbar-item tag="router-link" :to="{ path: '/profile' }">
          Профиль
        </b-navbar-item>
        <b-navbar-item @click="logout">
          Выход
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>

import { BNavbar, BNavbarDropdown, BNavbarItem } from "buefy";
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
const localStorage = isBrowser ? window.localStorage : {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
}

export default {
  name: 'NavBar',
  data() {
    return {
      isAuthenticated: false,
      userName: ''
    }
  },
  components: {
    BNavbar,
    BNavbarDropdown,
    BNavbarItem
  },
  methods: {
    checkAuth() {
      // Здесь можно проверить наличие токена в localStorage
      const token = localStorage.getItem('token')
      this.isAuthenticated = !!token
      
      // Если нужно имя пользователя
      const user = localStorage.getItem('user')
      this.userName = user ? JSON.parse(user).name : ''
    },
    logout() {
      // Очищаем данные аутентификации
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.isAuthenticated = false
      this.userName = ''
      
      // Перенаправляем на страницу входа
      this.$router.push('/login')
    }
  },
  created() {
    this.checkAuth()
    
    // Можно добавить обработчик событий, если аутентификация меняется в других компонентах
    // this.$root.$on('auth-changed', () => {
    //   this.checkAuth()
    // })
  },
  beforeDestroy() {
    // Не забываем удалить обработчик событий при уничтожении компонента
    // this.$root.$off('auth-changed')
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
</style>