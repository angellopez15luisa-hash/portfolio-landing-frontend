<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref<boolean>(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      if (entry) {
        isVisible.value = entry.isIntersecting
      }
    },
    { 
      threshold: 0.05, 
      rootMargin: '0px 0px -50px 0px' 
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <section 
    ref="sectionRef"
    id="habilidades" 
    class="py-20 md:py-28 border-t border-emerald-200/50 dark:border-slate-800 relative overflow-hidden bg-gradient-to-br from-emerald-50/40 via-emerald-50/20 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-1000"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado de la sección -->
      <div 
        :class="[
          'text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        ]"
      >
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Habilidades y <span class="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Tecnologías</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          Herramientas y tecnologías que domino y utilizo en el día a día para construir aplicaciones web modernas y eficientes.
        </p>
      </div>

      <!-- Cuadrícula de categorías con animación escalonada -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Frontend -->
        <div 
          :class="[
            'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-150 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Frontend & UI</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-6">Creación de interfaces fluidas, reactivas y optimizadas.</p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Vue 3 / Nuxt 4</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">TypeScript</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Tailwind CSS v4</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">React / Next.js</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Vuetify / PrimeVue</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Astro</span>
          </div>
        </div>

        <!-- Backend -->
        <div 
          :class="[
            'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-300 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Backend & APIs</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-6">Desarrollo de servicios robustos y lógica de servidor.</p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Node.js</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Express.js</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">NestJS</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Laravel (PHP)</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">RESTful APIs</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Socket.io</span>
          </div>
        </div>

        <!-- Databases & DevTools -->
        <div 
          :class="[
            'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-450 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Bases de Datos & Herramientas</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-6">Gestión de datos, despliegues y control de versiones.</p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">MySQL / PostgreSQL</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">MongoDB</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Sequelize ORM</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Git & GitHub</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Vercel / Netlify / Railway</span>
            <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">Cloudinary</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>