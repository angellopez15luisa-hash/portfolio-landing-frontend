<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (!element) return

  const startPosition = window.pageYOffset || document.documentElement.scrollTop
  const targetPosition = element.getBoundingClientRect().top + startPosition
  const distance = targetPosition - startPosition
  
  const duration = 1800 // Duración en milisegundos (1 segundo, puedes subirla a 1200 si lo quieres más pausado)
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2

    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation)
    } else {
      window.scrollTo(0, targetPosition)
      // Actualiza la URL limpia con el hash correspondiente
      window.history.replaceState(null, '', `#${sectionId}`)
    }
  }

  window.requestAnimationFrame(animation)
}

const scrollToTop = () => {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop
  if (startPosition === 0) return

  // Limpia el hash de la URL si lo hubiera
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname)
  }

  const duration = 1800
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2

    const run = startPosition * (1 - ease)
    window.scrollTo(0, run)

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation)
    } else {
      window.scrollTo(0, 0)
    }
  }

  window.requestAnimationFrame(animation)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logotipo / Nombre -->
        <!-- Logotipo Mejorado -->
      <!-- Logotipo / Nombre con scroll suave hacia arriba -->
<a
  @click.prevent="scrollToTop"
  href="/"
  class="flex items-center space-x-2 group cursor-pointer"
>
  <!-- Ícono minimalista de código con efecto brillante -->
  <div
    class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform"
  >
    <svg
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  </div>
  <!-- Tu Nombre o Marca -->
  <span
    class="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors"
  >
    Angel Lopez Ruiz<span class="text-indigo-400">.dev</span>
  </span>
</a>

        <nav
          class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300"
        >
          <a
            @click.prevent="scrollToSection('sobre-mi')"
            href="#sobre-mi"
            class="hover:text-indigo-400 transition-colors cursor-pointer"
            >Sobre mí</a
          >
          <a
            @click.prevent="scrollToSection('habilidades')"
            href="#habilidades"
            class="hover:text-indigo-400 transition-colors cursor-pointer"
            >Habilidades</a
          >
          <a
            @click.prevent="scrollToSection('proyectos')"
            href="#proyectos"
            class="hover:text-indigo-400 transition-colors cursor-pointer"
            >Proyectos</a
          >
          <a
            @click.prevent="scrollToSection('contacto')"
            href="#contacto"
            class="hover:text-indigo-400 transition-colors cursor-pointer"
            >Contacto</a
          >
        </nav>

        <!-- Botón de acción rápida (CTA) -->
        <div class="hidden md:block">
          <button
            @click="scrollToSection('contacto')"
            class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
          >
            ¡Hablemos!
          </button>
        </div>

        <!-- Botón menú hamburguesa (Móvil) -->
        <div class="md:hidden flex items=" -center>
          <button
            @click="isOpen = !isOpen"
            class="text-slate-300 hover:text-white focus:outline-none p-2"
            aria-label="Abrir menú"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú desplegable móvil -->
    <div
      v-show="isOpen"
      class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2"
    >
      <a
        href="#about"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
      >
        Sobre mí
      </a>
      <a
        href="#skills"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
      >
        Habilidades
      </a>
      <a
        href="#projects"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
      >
        Proyectos
      </a>
      <a
        href="#contact"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
      >
        Contacto
      </a>
    </div>
  </header>
</template>
