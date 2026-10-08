<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref<boolean>(false)
const isDarkMode = ref<boolean>(false)

// Función para verificar la posición del scroll
const handleScroll = () => {
  if (window.scrollY > 300) {
    showScrollTop.value = true
  } else {
    showScrollTop.value = false
  }
}

// Función para alternar el Modo Oscuro / Claro
const toggleDarkMode = () => {
  const htmlEl = document.documentElement
  
  if (htmlEl.classList.contains('dark')) {
    htmlEl.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    isDarkMode.value = false
  } else {
    htmlEl.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    isDarkMode.value = true
  }
}

// Sincronizar al cargar la página
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  } else {
    document.documentElement.classList.remove('dark')
    isDarkMode.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Función de scroll suave (duración de 1200ms para que suba despacio)
const scrollToTop = () => {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop
  if (startPosition === 0) return

  // Limpia el hash de la URL sin recargar la página
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname)
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
  <div class="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans relative transition-colors duration-300">
    <!-- Navbar fijo arriba -->
    <Navbar />
    
    <!-- Contenido principal -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer anclado al fondo -->
    <Footer />

    <!-- Contenedor de botones flotantes (Esquina inferior derecha en fila) -->
    <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">

         <!-- Botón para Subir Arriba -->
      <button 
        @click="scrollToTop"
        aria-label="Volver arriba"
        :class="[
          'w-11 h-11 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-full flex items-center justify-center shadow-md shadow-slate-900/5 transition-all duration-300 active:scale-90 cursor-pointer',
          showScrollTop ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
        ]"
      >
        <svg class="w-5 h-5 transition-transform hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      <!-- Botón de Modo Oscuro / Claro -->
      <button 
        @click="toggleDarkMode"
        :aria-label="isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        class="w-11 h-11 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-yellow-400 rounded-full flex items-center justify-center shadow-md shadow-slate-900/5 transition-all duration-300 active:scale-90 cursor-pointer"
      >
        <!-- Sol (Aparece en modo oscuro para volver a claro) -->
        <svg v-if="isDarkMode" class="w-5 h-5 transition-transform hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <!-- Luna (Aparece en modo claro para volver a oscuro) -->
        <svg v-else class="w-5 h-5 transition-transform hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>

     

      <!-- Botón de WhatsApp -->
      <a 
        href="https://wa.me/?text=Hola%20Angel,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20contigo." 
        target="_blank" 
        aria-label="Contactar por WhatsApp"
        class="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95"
      >
        <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
  </div>
</template>