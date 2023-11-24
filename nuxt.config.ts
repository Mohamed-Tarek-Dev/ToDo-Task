// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/css/main.scss"],
  modules: ["@pinia/nuxt", "nuxt-icon"],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  ssr: false,
  target: "static",
});
