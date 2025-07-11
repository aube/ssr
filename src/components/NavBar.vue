<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink
        class="navbar-brand"
        to="/"
      >{{ generalStore.app.navbarName }}</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
        :class="{ show: isOpenMenu }"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(item, index) in navigationStore.topNav" :key="index">
            <RouterLink
              class="nav-link"
              :class="{active: item.path === $route.path}"
              :to="{ path: item.path }"
              aria-current="page"
              @click.native="isOpenMenu = false"
            >{{ item.name }}</RouterLink>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                >Action</a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                >Another action</a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                >Something else here</a>
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>


  <!-- <o-navbar type="is-primary" wrapper-class="container" mobile-burger>
    <template #brand>
      <o-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>My Vue App</strong>
      </o-navbar-item>
    </template>

<template #start>
      <o-navbar-item tag="router-link" :to="{ path: '/' }">
        Главная
      </o-navbar-item>
      <o-navbar-item tag="router-link" :to="{ path: '/upload' }">
        Загрузка файлов
      </o-navbar-item>
    </template>

<template #end>
      <o-navbar-item tag="router-link" :to="{ path: '/login' }" v-if="!isAuthenticated">
        Вход
      </o-navbar-item>
      <o-navbar-item tag="router-link" :to="{ path: '/register' }" v-if="!isAuthenticated">
        Регистрация
      </o-navbar-item>
      
      <o-navbar-dropdown :label="userName" v-if="isAuthenticated">
        <o-navbar-item tag="router-link" :to="{ path: '/profile' }">
          Профиль
        </o-navbar-item>
        <o-navbar-item @click="logout">
          Выход
        </o-navbar-item>
      </o-navbar-dropdown>
    </template>
</o-navbar> -->
</template>

<script setup>
import { ref, defineComponent } from "vue";
import {useNavigationStore} from "@/stores/navigation";
import {useGeneralStore} from "@/stores/general";

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
const localStorage = isBrowser ? window.localStorage : {
  getItem: () => null,
  setItem: () => { },
  removeItem: () => { }
}

defineComponent({
  name: 'NavBar',
})

const generalStore = useGeneralStore()
const navigationStore = useNavigationStore()

const isAuthenticated = ref(false)
const userName = ref(false)
const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style>
.collapse:not(.show) {
  display: none !important;
}

/* @import './NavBar. css' */
</style>