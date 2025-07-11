import { defineStore } from 'pinia'
import { name, version } from '../../package.json'


export const useGeneralStore = defineStore('general', () => {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const APP_NAVBAR_NAME = import.meta.env.VITE_APP_NAVBAR_NAME;
  const APP_TITLE_NAME = import.meta.env.VITE_APP_TITLE_NAME;
  const APP_LANG = import.meta.env.VITE_APP_LANG;

  return {
    app: {
      name,
      version,
      baseUrl: BASE_URL,
      navbarName: APP_NAVBAR_NAME || name,
      titleName: APP_TITLE_NAME || name,
      lang: APP_LANG || 'ru',
    }
  }
})
