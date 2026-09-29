<script setup lang="ts">
import ResumeSection from '@/components/ResumeSection.vue'

const paragraphs = [
  'Frontend-разработчик с коммерческим опытом развития веб-приложений и внутренних корпоративных систем. Основной стек — Vue 3, Composition API, TypeScript, JavaScript, Pinia, PrimeVue, Tailwind CSS и REST API.',
  'Проектирую компоненты, разрабатываю функциональные модули, формы, таблицы, отчётность и визуализацию данных; интегрирую интерфейсы с backend API. Поддерживаю legacy-код на Vue 2 и участвую в поэтапной миграции на Vue 3.',
  'При необходимости читаю смежный backend-код на Go, анализирую API, разбираю причины ошибок и вношу небольшие изменения. Работаю в полном цикле командной разработки: от анализа задачи и реализации до code review, merge request и выпуска изменений.',
]
</script>

<template>
  <ResumeSection id="about" title="Обо мне">
    <div class="space-y-3 text-[14px] leading-[1.8] text-slate-600">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        :class="{ 'font-medium text-slate-800': index === 0 }"
      >
        {{ paragraph }}
      </p>
    </div>
  </ResumeSection>
</template>
