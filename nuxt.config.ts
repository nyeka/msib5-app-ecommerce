// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-swiper",
    "@morpheme/nuxt",
    "@sidebase/nuxt-auth",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  swiper: {
    modules: ["navigation", "pagination"], // all modules are imported by default
  },
  css: [
    "~/assets/css/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  auth: {
    origin: process.env.AUTH_ORIGIN,
    strategies: {
      origin: process.env.AUTH_ORIGIN,
    },
    provider: {
      pages: {
        login: "/login",
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
