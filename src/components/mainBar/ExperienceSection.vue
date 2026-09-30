<script setup lang="ts">
import type { Experience } from '@/types/resume'

import ExperienceItem from '@/components/mainBar/ExperienceItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const experience: Experience[] = [
  {
    id: 'sibneftecart',
    company: 'ООО «Сибнефтекарт»',
    role: 'Frontend-разработчик',
    period: '06/2025 — н. в.',
    description:
      'Личный кабинет топливных карт и системы автоматизации АЗС и нефтебаз.',
    responsibilities: [
      'Разрабатываю модули, компоненты и composables на Vue 3, TypeScript и Pinia.',
      'Поддерживаю Vue 2 и переношу функциональность на Vue 3 без изменения бизнес-логики.',
      'Интегрирую REST API; создаю формы, таблицы, фильтры, отчёты и экспорт данных.',
      'Диагностирую frontend/API-ошибки, читаю и точечно изменяю Go-код; участвую в code review и CI/CD.',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'PrimeVue',
      'Tailwind CSS',
      'Axios',
      'REST API',
      'Go',
      'GitLab',
    ],
  },
  {
    id: 'gazprom-transgaz-project',
    company: 'Проект для ООО «Газпром трансгаз Томск»',
    role: 'Frontend-разработчик',
    period: '02/2025 — 06/2025',
    description:
      'Система контроля обучения и аттестации производственного персонала.',
    responsibilities: [
      'С нуля разработал frontend на Vue 3 и JavaScript, включая UI-компоненты по макетам Figma.',
      'Интегрировал API и дорабатывал интерфейсы административной части на PHP/Laravel.',
      'Работал в кросс-функциональной команде по GitFlow; MVP передан заказчику за три месяца.',
    ],
    stack: [
      'Vue 3',
      'JavaScript',
      'SCSS',
      'Axios',
      'REST API',
      'Figma',
      'GitLab',
      'PHP/Laravel',
    ],
  },
]
</script>

<template>
  <ResumeSection id="experience" title="Опыт работы">
    <div class="space-y-5 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-5">
      <ExperienceItem v-for="item in experience" :key="item.id" :experience="item" />
    </div>
  </ResumeSection>
</template>
