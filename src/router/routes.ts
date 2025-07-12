
export const routes = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<typeof import('*.vue')> => import('../pages/PageHome.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: (): Promise<typeof import('*.vue')> => import('../pages/PageLogin.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: (): Promise<typeof import('*.vue')> => import('../pages/PageRegister.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: (): Promise<typeof import('*.vue')> => import('../pages/PageUpload.vue'),
  },
  {
    path: '/reminder',
    name: 'reminder',
    component: (): Promise<typeof import('*.vue')> => import('../pages/PageReminder.vue'),
  },
]
