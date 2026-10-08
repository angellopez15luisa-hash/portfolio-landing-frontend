<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const scrollToSection = (sectionId: string) => {
  isOpen.value = false;
  const element = document.getElementById(sectionId)
  if (!element) return

  const startPosition = window.pageYOffset || document.documentElement.scrollTop
  const targetPosition = element.getBoundingClientRect().top + startPosition
  const distance = targetPosition - startPosition
  
  const duration = 1800
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
      window.history.replaceState(null, '', `#${sectionId}`)
    }
  }

  window.requestAnimationFrame(animation)
}

const scrollToTop = () => {
  isOpen.value = false;
  const startPosition = window.pageYOffset || document.documentElement.scrollTop
  if (startPosition === 0) return

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
  <div>
    <!-- Barra de Navegación Principal (Fija arriba) -->
    <header
      class="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logotipo / Nombre con scroll suave hacia arriba -->
          <a
            @click.prevent="scrollToTop"
            href="/"
            class="flex items-center space-x-2 group cursor-pointer"
          >
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
            <span
              class="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors"
            >
              Angel Lopez Ruiz<span class="text-indigo-500 dark:text-indigo-400">.dev</span>
            </span>
          </a>

          <!-- Navegación de escritorio -->
          <nav
            class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <a
              @click.prevent="scrollToSection('sobre-mi')"
              href="#sobre-mi"
              class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >Sobre mí</a
            >
            <a
              @click.prevent="scrollToSection('habilidades')"
              href="#habilidades"
              class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >Habilidades</a
            >
            <a
              @click.prevent="scrollToSection('proyectos')"
              href="#proyectos"
              class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >Proyectos</a
            >
            <a
              @click.prevent="scrollToSection('contacto')"
              href="#contacto"
              class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >Contacto</a
            >
          </nav>

          <!-- Botón de acción rápida (CTA) de escritorio -->
          <div class="hidden md:block">
            <button
              @click="scrollToSection('contacto')"
              class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
            >
              ¡Hablemos!
            </button>
          </div>

          <!-- Botón menú hamburguesa (Móvil) -->
          <div class="md:hidden flex items-center">
            <button
              @click="isOpen = !isOpen"
              class="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white focus:outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 cursor-pointer transition-colors"
              aria-label="Menú"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </header>

    <!-- Menú Móvil Pantalla Completa (Adaptable a Modo Claro y Oscuro con z-index superior) -->
    <div
      v-if="isOpen"
      class="fixed inset-0 w-screen h-screen z-[9999] bg-white dark:bg-slate-950 flex flex-col justify-between px-6 py-6 md:hidden overflow-y-auto transition-colors"
    >
      <!-- Cabecera interna del menú móvil con el logotipo y la X para cerrar -->
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span class="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            Angel Lopez Ruiz<span class="text-indigo-600 dark:text-indigo-400">.dev</span>
          </span>
        </div>

        <button
          @click="isOpen = false"
          class="text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
          aria-label="Cerrar menú"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Enlaces de navegación centrados y grandes -->
      <nav class="flex flex-col items-center justify-center space-y-6 text-center w-full max-w-sm mx-auto my-auto">
        <div class="w-full pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <a
            href="#sobre-mi"
            @click.prevent="scrollToSection('sobre-mi')"
            class="text-2xl font-black tracking-wide text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer block"
          >
            Sobre mí
          </a>
        </div>
        <div class="w-full pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <a
            href="#habilidades"
            @click.prevent="scrollToSection('habilidades')"
            class="text-2xl font-black tracking-wide text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer block"
          >
            Habilidades
          </a>
        </div>
        <div class="w-full pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <a
            href="#proyectos"
            @click.prevent="scrollToSection('proyectos')"
            class="text-2xl font-black tracking-wide text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer block"
          >
            Proyectos
          </a>
        </div>
        <div class="w-full pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <a
            href="#contacto"
            @click.prevent="scrollToSection('contacto')"
            class="text-2xl font-black tracking-wide text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer block"
          >
            Contacto
          </a>
        </div>
      </nav>

      <!-- Botón CTA en la parte inferior del overlay -->
      <div class="w-full max-w-sm mx-auto pb-2">
        <button
          @click="scrollToSection('contacto')"
          class="w-full py-4 text-base font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
        >
          ¡Hablemos!
        </button>
      </div>
    </div>
  </div>
</template>