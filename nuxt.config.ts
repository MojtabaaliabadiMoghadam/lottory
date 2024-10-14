// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  css: [
      '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module'
  ],
  primevue: {
    locale: {
      rtl: true // فعال‌سازی حالت راست‌به‌چپ
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'light',
        },
      }
    }
  },

  runtimeConfig: {
    public: {
      BACK_END_URL: process.env.BACK_END_URL,
      TABLES_PER_PAGE: process.env.TABLES_PER_PAGE
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap' 
        }
      ],
      style: [],
      noscript: []
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2024-09-27'
})