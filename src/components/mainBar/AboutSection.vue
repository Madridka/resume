<script setup lang="ts">
import ResumeSection from '@/components/ResumeSection.vue'

const summary =
  'Frontend-разработчик: создаю корпоративные веб-приложения на Vue 3 и TypeScript, интегрирую REST API, поддерживаю Vue 2 и миграцию на Vue 3. Работаю с компонентами, формами, таблицами и отчётностью; читаю Go-код и участвую в полном цикле разработки.'
</script>

<template>
  <ResumeSection id="about" title="Обо мне">
    <p class="text-[14px] leading-[1.7] font-medium text-slate-700">{{ summary }}</p>
  </ResumeSection>
</template>
