// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@600;700&display=swap",
          rel: 'stylesheet'
        },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect"
        },
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect"
        }
      ]
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
