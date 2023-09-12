// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap",
      },
      {
        meta: [
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        ],
      },
    ],
  },
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
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
