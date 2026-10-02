<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'
import TechStack from '@/components/sideBar/TechStack.vue'

const { t, tm } = useI18n()
const projects = computed((): Project[] => tm('projects') as unknown as Project[])
</script>

<template>
  <ResumeSection id="projects" :title="t('sections.projects')">
    <div class="space-y-4 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-4">
      <article
        v-for="project in projects"
        :key="project.id"
        :aria-labelledby="`${project.id}-title`"
        class="project-item break-inside-avoid"
      >
        <h3
          :id="`${project.id}-title`"
          class="text-[15px] leading-6 font-semibold tracking-[-0.01em] text-slate-950"
        >
          {{ project.name }}
        </h3>
        <p class="mt-1.5 text-sm leading-[1.65] text-slate-600">{{ project.description }}</p>
        <TechStack class="project-stack" :items="project.stack" />
      </article>
    </div>
  </ResumeSection>
</template>
