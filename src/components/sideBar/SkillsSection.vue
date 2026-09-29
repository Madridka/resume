<script setup lang="ts">
import type { SkillGroup as SkillGroupData } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'
import SkillGroup from '@/components/sideBar/SkillGroup.vue'

const skills: SkillGroupData[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      'Vue 3',
      'Composition API',
      'Vue 2',
      'TypeScript',
      'JavaScript',
      'Pinia',
      'Vue Router',
      'PrimeVue',
    ],
  },
  {
    id: 'ui-styling',
    title: 'UI / Styling',
    items: ['Tailwind CSS', 'SCSS', 'Responsive UI', 'Component-based UI', 'Figma'],
  },
  { id: 'api', title: 'API', items: ['REST API', 'Axios', 'Client-server integration'] },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Go — базовый уровень', 'Чтение backend-кода', 'Debug API', 'Небольшие изменения'],
  },
  {
    id: 'development',
    title: 'Development',
    items: ['Git', 'GitLab', 'GitFlow', 'Merge Requests', 'Code Review', 'CI/CD', 'Vite'],
  },
  {
    id: 'ai-assisted-development',
    title: 'AI-assisted development',
    items: [
      'AI coding agents',
      'Task decomposition',
      'Generated code review',
      'Solution verification',
      'Refactoring',
    ],
    note: 'AI-агенты — инструмент разработки. Проверяю архитектуру, типы, граничные случаи и соответствие изменений требованиям; ответственность за техническое решение остаётся на мне.',
  },
]
</script>

<template>
  <ResumeSection id="skills" title="Технический стек">
    <div class="grid gap-5 min-[540px]:grid-cols-2 md:grid-cols-1">
      <SkillGroup v-for="group in skills" :key="group.id" :group="group" />
    </div>
  </ResumeSection>
</template>
