export default defineNuxtConfig({
  ssr: true,

  css: [
    'quasar/dist/quasar.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@/assets/styles/global.css'
  ],

  plugins: [
    { src: '~/plugins/quasar.client.ts', mode: 'client' }
  ],

  compatibilityDate: '2025-01-08',
})