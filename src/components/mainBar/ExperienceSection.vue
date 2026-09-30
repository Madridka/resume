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
    description: 'Личные кабинеты владельцев топливных карт и систем автоматизации АЗС и нефтебаз.',
    responsibilities: [
      'Разрабатываю модули, компоненты и composables на Vue 3, TypeScript и Pinia.',
      'Миграция проекта с Vue 2 на Vue 3 с переносом функциональности без изменения бизнес-логики.',
      'Самостоятельная реализация новых функциональных модулей: от проработки структуры компонентов до интеграции с backend API.',
      'Анализ и отладка клиент-серверного взаимодействия; при необходимости работа с backend-кодом на Go для поиска причин ошибок, понимания контрактов API и внесения небольших изменений.',
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
    description: 'Система адаптивного планирования обучения.',
    responsibilities: [
      'Разработка с нуля клиентской части на Vue 3 (Composition API) и JavaScript: проектирование структуры приложения, маршрутизации и клиентской бизнес-логики.',
      'Интегрировал API, создавал UI-компоненты по макетам Figma и дорабатывал интерфейсы административной части на PHP/Laravel.',
      'Работал в кросс-функциональной команде по GitFlow; MVP передан заказчику за три месяца.',
    ],
    stack: ['Vue 3', 'JavaScript', 'SCSS', 'Axios', 'REST API', 'Figma', 'GitLab', 'PHP/Laravel'],
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
