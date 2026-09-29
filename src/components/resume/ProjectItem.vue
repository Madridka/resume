<script setup lang="ts">
import type { Project } from '@/types/resume'
import TechStack from './TechStack.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <article :aria-labelledby="`${project.id}-title`" class="project-item break-inside-avoid">
    <h3 :id="`${project.id}-title`" class="text-[15px] leading-6 font-semibold tracking-[-0.01em] text-slate-950">{{ project.name }}</h3>
    <p class="mt-2 text-sm leading-[1.8] text-slate-600">{{ project.description }}</p>
    <TechStack :items="project.stack" />
  </article>
</template>
