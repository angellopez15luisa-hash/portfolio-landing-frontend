<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        isVisible.value = entry.isIntersecting;
      }
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    id="contacto"
    class="py-20 md:py-28 border-t border-emerald-200/50 dark:border-slate-800 relative overflow-hidden bg-gradient-to-br from-emerald-50/40 via-emerald-50/20 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-1000"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado de la sección -->
      <div
        :class="[
          'text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ]"
      >
        <h2
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          Vamos a
          <span
            class="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent"
            >Conversar</span
          >
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          ¿Tienes algún proyecto en mente, una propuesta laboral o simplemente
          quieres saludar? Escríbeme y te respondo lo antes posible.
        </p>
      </div>

      <!-- Contenedor principal Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- Tarjeta de Información de Contacto (Izquierda) -->
        <div
          :class="[
            'md:col-span-5 flex transition-all duration-700 delay-200 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <div
            class="w-full bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                Información de contacto
              </h3>

              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Estoy disponible para oportunidades freelance, proyectos a
                medida o colaboraciones de desarrollo full-stack.
              </p>

              <div class="space-y-4 pt-2">
                <!-- Correo electrónico -->
                <div class="flex items-center gap-4 text-slate-700 dark:text-slate-200 text-sm">
                  <div
                    class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0"
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
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="text-slate-400 dark:text-slate-400 block text-xs"
                      >Correo electrónico</span
                    >
                    <span class="text-slate-800 dark:text-slate-200 font-medium"
                      >angellopez15luisa@gmail.com</span
                    >
                  </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex items-center gap-4 text-slate-700 dark:text-slate-200 text-sm">
                  <div
                    class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0"
                  >
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="text-slate-400 dark:text-slate-400 block text-xs">WhatsApp</span>
                    <a
                      href="https://wa.me/959369835?text=Hola%20Angel,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20contigo."
                      target="_blank"
                      class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                    >
                      Escríbeme al WhatsApp
                    </a>
                  </div>
                </div>

                <!-- Ubicación -->
                <div class="flex items-center gap-4 text-slate-700 dark:text-slate-200 text-sm">
                  <div
                    class="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0"
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
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span class="text-slate-400 dark:text-slate-400 block text-xs">Ubicación</span>
                    <span class="text-slate-800 dark:text-slate-200 font-medium"
                      >Remoto / Global</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Redes profesionales abajo alineadas -->
            <div class="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
              <span class="text-xs text-slate-400 dark:text-slate-400 block mb-3"
                >Redes profesionales</span
              >
              <div class="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  class="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
                  >GitHub</a
                >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
                  >LinkedIn</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario de Contacto (Derecha) -->
        <div
          :class="[
            'md:col-span-7 flex transition-all duration-700 delay-400 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <form
            @submit.prevent
            class="w-full bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div class="space-y-6">
              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >Tu Nombre</label
                >
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  class="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-sm transition-colors"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >Tu Correo</label
                >
                <input
                  type="email"
                  placeholder="juan@correo.com"
                  class="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >Asunto</label
                >
                <input
                  type="text"
                  placeholder="Propuesta de proyecto / Oportunidad laboral"
                  class="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  >Mensaje</label
                >
                <textarea
                  rows="4"
                  placeholder="Cuéntame sobre los detalles de tu requerimiento..."
                  class="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-sm transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-sm shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20 transition-all hover:scale-[1.01]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>