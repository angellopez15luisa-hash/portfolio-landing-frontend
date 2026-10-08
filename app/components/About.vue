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
        // Al activarse true al entrar, y false al salir, la animación se repetirá siempre
        isVisible.value = entry.isIntersecting
      }
    },
    { 
      threshold: 0.05, // Se dispara apenas un 5% de la sección entra en pantalla
      rootMargin: '0px 0px -50px 0px' // Margen extra para asegurar la detección al subir/bajar
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
    id="sobre-mi"
    class="py-20 md:py-28 border-t border-emerald-200/50 dark:border-slate-800 relative overflow-hidden bg-gradient-to-br from-emerald-50/40 via-emerald-50/20 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-1000"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado de la sección -->
      <div 
        :class="[
          'text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        ]"
      >
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Sobre <span class="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">mí</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          Conoce un poco más sobre mi trayectoria, enfoque y pasión por el desarrollo web.
        </p>
      </div>

      <!-- Contenido Principal (Grid de 2 columnas) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        <!-- Columna de Texto / Historia -->
        <div
          :class="[
            'md:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed transition-all duration-700 delay-200 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <p>
            ¡Hola de nuevo! Soy
            <strong class="text-slate-900 dark:text-white font-semibold">Angel Lopez Ruiz</strong>, desarrollador web freelance y programador full-stack apasionado por transformar ideas complejas en aplicaciones digitales limpias, rápidas y funcionales.
          </p>
          <p>
            A lo largo de mi camino en la tecnología, me he especializado en el ecosistema de
            <strong class="text-indigo-600 dark:text-indigo-400 font-semibold">Vue.js / Nuxt</strong>
            y en la arquitectura de backends robustos con Node.js, Express y bases de datos relacionales y no relacionales. Disfruto cada parte del proceso: desde la maquetación detallada con Tailwind CSS hasta la optimización de servidores y despliegues.
          </p>
          <p>
            Siempre estoy en constante aprendizaje, explorando nuevas herramientas y enfocado en escribir código mantenible que aporte un valor real a cada proyecto o cliente.
          </p>
        </div>

        <!-- Columna de Datos Clave / Tarjeta de Resumen -->
        <div
          :class="[
            'md:col-span-5 bg-slate-50/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-700 delay-400 ease-out backdrop-blur-sm',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <h3 class="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">
            Detalles Rápidos
          </h3>

          <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <li class="flex items-start gap-3">
              <span class="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">▹</span>
              <div>
                <strong class="text-slate-900 dark:text-white block">Enfoque Actual:</strong>
                Desarrollo Full-Stack con Vue 3, Nuxt 4, TypeScript y NestJS / Express.
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">▹</span>
              <div>
                <strong class="text-slate-900 dark:text-white block">Modalidad:</strong>
                Freelance, proyectos personalizados y oportunidades de colaboración.
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">▹</span>
              <div>
                <strong class="text-slate-900 dark:text-white block">Filosofía:</strong>
                Clean code, rendimiento óptimo y experiencias de usuario impecables.
              </div>
            </li>
          </ul>

          <div class="pt-2">
            <a
              href="#contact"
              class="w-full inline-block text-center px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-sm transition-all hover:scale-[1.02] shadow-sm shadow-indigo-600/20"
            >
              ¡Conversemos sobre tu proyecto!
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>