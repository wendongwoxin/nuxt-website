// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["animate.css/animate.min.css", "~/assets/css/index.scss"],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081',
          ws: true,
          changeOrigin: true,
        }
      }
    }
  }
});
