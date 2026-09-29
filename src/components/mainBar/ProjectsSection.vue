<script setup lang="ts">
import type { Project } from '@/types/resume'

import ProjectItem from '@/components/mainBar/ProjectItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const projects: Project[] = [
  {
    id: 'vkleika',
    name: 'Вклейка',
    description:
      'Коллекционная футбольная web-игра с цифровыми альбомами и карточками. Реализованы открытие наборов, редкости, коллекция, игровые цели и мини-игры. Хранение в IndexedDB, аккаунты, серверные сохранения, админ-панель и синхронизация прогресса между устройствами.',
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'PrimeVue',
      'Tailwind CSS',
      'Dexie / IndexedDB',
      'Fastify',
      'SQLite',
      'Vite',
      'Vitest',
    ],
  },
  {
    id: 'fm-simulator',
    name: 'FM Simulator',
    description:
      'Браузерный футбольный менеджер с многосезонной карьерой, симуляцией матчей, трансферным рынком, академиями, национальными лигами и кубками. Реализованы сохранения карьеры, статистика и развитие игроков. Фоновые расчёты вынесены в Web Worker; игровая логика покрыта тестами.',
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'PrimeVue',
      'Tailwind CSS',
      'Vite',
      'Vitest',
      'Web Workers',
    ],
  },
  {
    id: 'sibneftecart-redesign',
    name: 'Редизайн сайта Сибнефтекарт',
    description:
      'Концепт полной переработки корпоративного сайта: новая структура страниц, навигация и каталог оборудования. Адаптивный интерфейс и обновлённый UI/UX для нескольких направлений компании.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'UI/UX'],
  },
  {
    id: 'local-market',
    name: 'Local Market',
    description:
      'Интерактивный прототип локальной площадки объявлений. Реализованы каталог, категории, поиск, фильтрация по городу и радиусу, карточки объявлений, избранное, сообщения и пользовательские сценарии.',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  },
  {
    id: 'ai-helpers',
    name: 'AI Helpers & Automation',
    description:
      'Небольшие прикладные инструменты для повседневных задач: Telegram-боты, автоматизация, интеграции с AI API и вспомогательные скрипты.',
    stack: ['Python', 'Telegram API', 'asyncio', 'REST API', 'AI API'],
  },
]
</script>

<template>
  <ResumeSection id="projects" title="Pet-проекты">
    <div class="space-y-6 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-6">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </ResumeSection>
</template>
