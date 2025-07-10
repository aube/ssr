import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'


const history = import.meta.env.SSR
    ? createMemoryHistory()
    : createWebHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/PageHome.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/PageLogin.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/PageRegister.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../pages/PageUpload.vue'),
    },
  ],
})

export default router
