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
    id="proyectos" 
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
          Proyectos <span class="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Destacados</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          Una selección de aplicaciones web full-stack, sistemas de gestión y plataformas que he desarrollado recientemente.
        </p>
      </div>

      <!-- Cuadrícula de Proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Proyecto 1: Sistema Inmobiliario -->
        <div 
          :class="[
            'bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-150 ease-out flex flex-col group',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="h-48 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-indigo-950/40 dark:to-slate-900/80 border-b border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/20 dark:group-hover:bg-indigo-500/30 transition-all"></div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-900/50 w-max">
              Full-Stack / Real-Time
            </span>
            <div class="text-slate-900 dark:text-white font-bold text-lg">Plataforma de Bienes Raíces</div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                Sistema completo para gestión y búsqueda de propiedades inmobiliarias con autenticación, filtrado avanzado, paneles de administración y eventos en tiempo real mediante Socket.io.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Vue 3</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Vuetify</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Express.js</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Sequelize</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Socket.io</span>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a href="#" target="_blank" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors">
                Ver repositorio &rarr;
              </a>
              <a href="#" target="_blank" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                Demo en vivo &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Proyecto 2: E-commerce & Admin CMS -->
        <div 
          :class="[
            'bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-300 ease-out flex flex-col group',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="h-48 bg-gradient-to-br from-cyan-50 to-slate-100 dark:from-cyan-950/40 dark:to-slate-900/80 border-b border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/30 transition-all"></div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-300 text-xs font-medium border border-cyan-100 dark:border-cyan-900/50 w-max">
              E-commerce / CMS
            </span>
            <div class="text-slate-900 dark:text-white font-bold text-lg">Tienda Online de Ropa & CMS</div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                Landing page comercial de alto rendimiento con carrito de compras integrado, gestión de inventario y panel de administración para control de productos desplegado en subdominios personalizados.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Nuxt</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Tailwind CSS</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">TypeScript</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Vercel / Hostinger</span>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a href="#" target="_blank" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors">
                Ver repositorio &rarr;
              </a>
              <a href="#" target="_blank" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                Demo en vivo &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Proyecto 3: Inspección y Control de Calidad -->
        <div 
          :class="[
            'bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-700 delay-450 ease-out flex flex-col group',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="h-48 bg-gradient-to-br from-emerald-50 to-slate-100 dark:from-emerald-950/40 dark:to-slate-900/80 border-b border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/30 transition-all"></div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 text-xs font-medium border border-emerald-100 dark:border-emerald-900/50 w-max">
              Landing / SEO Optimizado
            </span>
            <div class="text-slate-900 dark:text-white font-bold text-lg">Plataforma de Inspección Corporativa</div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                Sitio web corporativo y de control de calidad optimizado en rendimiento, con diseño modular basado en componentes interactivos y endpoints RESTful para gestión de formularios de contacto.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Astro</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Vue 3</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">Tailwind CSS</span>
                <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">PHP REST</span>
              </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a href="#" target="_blank" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors">
                Ver repositorio &rarr;
              </a>
              <a href="#" target="_blank" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                Demo en vivo &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Proyecto 4: Espacio para próximo proyecto -->
        <div 
          :class="[
            'bg-slate-50/50 dark:bg-slate-800/40 backdrop-blur-sm border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-700 delay-600 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 dark:text-slate-300 mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 class="text-slate-900 dark:text-white font-semibold mb-2">Próximo Proyecto</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
            Trabajando en nuevas aplicaciones y herramientas web innovadoras.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>