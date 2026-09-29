<script setup lang="ts">
import type { Project } from '@/types/resume'

import ProjectItem from '@/components/mainBar/ProjectItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

defineProps<{ projects: Project[] }>()
</script>

<template>
  <ResumeSection id="projects" title="Pet-проекты">
    <div class="space-y-6 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-6">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </ResumeSection>
</template>
