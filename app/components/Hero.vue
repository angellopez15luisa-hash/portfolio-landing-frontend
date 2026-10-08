<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        isVisible.value = entry.isIntersecting;
      }
    },
    { threshold: 0.1 },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="relative overflow-hidden py-24 md:py-36 flex items-center justify-center bg-gradient-to-br from-emerald-50/40 via-emerald-50/20 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-1000"
  >
    <div
      class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
    >
      <!-- Badge de disponibilidad -->
      <div
        :class="[
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-emerald-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs md:text-sm font-medium mb-8 shadow-sm transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ]"
      >
        <span
          class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"
        ></span>
        Disponible para proyectos y oportunidades full-stack
      </div>

      <!-- Título Principal -->
      <h1
        :class="[
          'text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 transition-all duration-700 delay-150 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        Hola, soy
        <span
          class="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 dark:from-emerald-400 dark:via-teal-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >Angel Lopez Ruiz</span
        >
      </h1>

      <!-- Subtítulo / Descripción -->
      <p
        :class="[
          'max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 transition-all duration-700 delay-300 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        Desarrollador web especializado en construir aplicaciones modernas,
        interfaces fluidas con
        <span class="text-emerald-700 dark:text-emerald-400 font-bold"
          >Vue / Nuxt</span
        >
        y sólidos backends orientados a rendimiento y escalabilidad.
      </p>

      <!-- Botones de Acción (CTA) -->
      <div
        :class="[
          'flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-450 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <a
          href="#projects"
          class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-600/25 dark:shadow-emerald-500/20 transition-all hover:scale-[1.02]"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-emerald-200/80 dark:border-slate-700 font-medium transition-all hover:scale-[1.02] shadow-sm"
        >
          Contáctame
        </a>
      </div>

      <!-- Mini sección de tecnologías clave -->
      <div
        :class="[
          'mt-16 pt-10 border-t border-emerald-200/50 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-700 delay-600 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <div
          class="flex items-center justify-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm py-3 px-4 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-sm transition-transform hover:scale-105"
        >
          <span class="text-emerald-600 dark:text-emerald-400 font-bold"
            >💚</span
          >
          Nuxt 4 & Vue 3
        </div>
        <div
          class="flex items-center justify-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm py-3 px-4 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-sm transition-transform hover:scale-105"
        >
          <span class="text-teal-600 dark:text-teal-400 font-bold">🎨</span>
          Tailwind CSS v4
        </div>
        <div
          class="flex items-center justify-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm py-3 px-4 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-sm transition-transform hover:scale-105"
        >
          <span class="text-indigo-600 dark:text-indigo-400 font-bold">🚀</span>
          Node.js & Express
        </div>
        <div
          class="flex items-center justify-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm py-3 px-4 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-sm transition-transform hover:scale-105"
        >
          <span class="text-amber-600 dark:text-amber-400 font-bold">🗄️</span>
          SQL & Databases
        </div>
      </div>
    </div>
  </section>
</template>
