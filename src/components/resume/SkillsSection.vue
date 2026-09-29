<script setup lang="ts">
import type { SkillGroup as SkillGroupData } from '@/types/resume'
import ResumeSection from './ResumeSection.vue'
import SkillGroup from './SkillGroup.vue'

defineProps<{ skills: SkillGroupData[] }>()
</script>

<template>
  <ResumeSection id="skills" title="Технический стек">
    <div class="grid gap-5 min-[540px]:grid-cols-2 md:grid-cols-1">
      <SkillGroup v-for="group in skills" :key="group.id" :group="group" />
    </div>
  </ResumeSection>
</template>
