<script setup lang="ts">
import type { Project } from '@/types/resume'

import ProjectItem from '@/components/mainBar/ProjectItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const projects: Project[] = [
  {
    id: 'vkleika',
    name: 'Вклейка',
    description:
      'Коллекционная футбольная web-игра: альбомы, карточки, мини-игры, аккаунты и синхронизация прогресса.',
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Tailwind CSS',
      'Dexie / IndexedDB',
      'Fastify',
      'SQLite',
      'Vitest',
    ],
  },
  {
    id: 'fm-simulator',
    name: 'FM Simulator',
    description:
      'Футбольный менеджер с карьерой, симуляцией матчей, трансферами и фоновыми расчётами в Web Worker.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Vitest', 'Web Workers'],
  },
  {
    id: 'ai-helpers',
    name: 'AI-хелперы и автоматизация рутины',
    description:
      'Telegram-боты, автоматизация, интеграции с AI API и вспомогательные скрипты (в т.ч. заказы на фрилансе).',
    stack: ['Python', 'Telegram API', 'asyncio', 'REST API', 'AI API и пр.'],
  },
]
</script>

<template>
  <ResumeSection id="projects" title="Pet-проекты">
    <div class="space-y-4 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-4">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </ResumeSection>
</template>
