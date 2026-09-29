<script setup lang="ts">
import type { Education } from '@/types/resume'
import EducationItem from './EducationItem.vue'
import ResumeSection from './ResumeSection.vue'

defineProps<{ education: Education[] }>()
</script>

<template>
  <ResumeSection id="education" title="Образование">
    <div class="space-y-5">
      <EducationItem v-for="item in education" :key="item.id" :education="item" />
    </div>
  </ResumeSection>
</template>
