<script setup lang="ts">
import type { Experience } from '@/types/resume'

import ExperienceItem from '@/components/mainBar/ExperienceItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

defineProps<{ experience: Experience[] }>()
</script>

<template>
  <ResumeSection id="experience" title="Опыт работы">
    <div class="space-y-7 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-7">
      <ExperienceItem v-for="item in experience" :key="item.id" :experience="item" />
    </div>
  </ResumeSection>
</template>
