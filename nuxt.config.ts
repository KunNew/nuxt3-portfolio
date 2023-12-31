// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
