<script setup lang="ts">
import type { SkillGroup as SkillGroupData } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'
import SkillGroup from '@/components/sideBar/SkillGroup.vue'

const skills: SkillGroupData[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['Vue 3', 'Composition API', 'Vue 2', 'TypeScript', 'JavaScript', 'Pinia', 'PrimeVue'],
  },
  {
    id: 'ui-styling',
    title: 'UI / Styling',
    items: ['Tailwind CSS', 'SCSS', 'Responsive UI', 'Figma'],
  },
  { id: 'api', title: 'API', items: ['REST API', 'Axios'] },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Go — базовый', 'Чтение кода', 'Debug API', 'Dexie / IndexedDB', 'Fastify', 'SQLite'],
  },
  {
    id: 'development',
    title: 'Development',
    items: ['Git', 'GitLab', 'GitFlow', 'Code Review', 'CI/CD', 'Vite'],
  },
]
</script>

<template>
  <ResumeSection id="skills" title="Технический стек">
    <div class="grid gap-4 min-[540px]:grid-cols-2 md:grid-cols-1">
      <SkillGroup v-for="group in skills" :key="group.id" :group="group" />
    </div>
  </ResumeSection>
</template>
