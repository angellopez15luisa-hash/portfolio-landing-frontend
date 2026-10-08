<script setup lang="ts">
useHead({
  title: "Angel López Ruiz — Desarrollador Full Stack & Vue/Nuxt",
  meta: [
    {
      name: "description",
      content:
        "Portafolio profesional de Angel López Ruiz. Especialista en desarrollo web full-stack, Vue.js, Nuxt, Node.js y Laravel. Creación de aplicaciones web y APIs.",
    },

    // Open Graph (Para cuando compartas tu link en WhatsApp, Facebook, LinkedIn, etc.)
    {
      property: "og:title",
      content: "Angel López Ruiz — Desarrollador Full Stack & Vue/Nuxt",
    },
    {
      property: "og:description",
      content:
        "Explora mis proyectos y habilidades en desarrollo web moderno. ¡Hablemos de tu próximo proyecto!",
    },
    { property: "og:type", content: "website" },
    // { property: 'og:image', content: 'https://tu-dominio.com/tu-imagen-og.jpg' }, // Opcional: una captura bonita de tu portafolio

    // Twitter Card (Para cuando compartas en X / Twitter)
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Angel López Ruiz — Desarrollador Full Stack & Vue/Nuxt",
    },
    {
      name: "twitter:description",
      content:
        "Portafolio profesional de desarrollo web con Vue, Nuxt y Node.js.",
    },
  ],
  link: [
    { rel: "canonical", href: "https://tu-dominio.com" }, // Reemplaza con tu dominio real o de Vercel
  ],
});
</script>

<template>
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
</template>
