import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es", // ¡Clave para SEO en español!
      },
      title: "Angel López Ruiz — Desarrollador Full Stack & Vue/Nuxt",
      meta: [
        {
          name: "description",
          content:
            "Portafolio profesional de Angel López Ruiz. Especialista en desarrollo web full-stack, Vue.js, Nuxt, Node.js y Laravel.",
        },
      ],
    },
  },
});
