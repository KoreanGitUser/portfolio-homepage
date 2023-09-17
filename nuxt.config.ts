export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    rootId: "portfolio-hompage",
    head: {
      title: "Yongho's Portfolio Hompage",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
