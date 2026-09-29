<script setup lang="ts">
import type { Education } from '@/types/resume'

import EducationItem from '@/components/mainBar/EducationItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const education: Education[] = [
  {
    id: 'asap-education',
    institution: 'ASAP Education',
    period: '02/2025 — 07/2025',
    qualification: 'Frontend-разработчик',
  },
  {
    id: 'tomsk-polytechnic-university',
    institution: 'НИ Томский политехнический университет',
    period: '2012 — 2016',
    qualification: 'Институт природных ресурсов',
    details: 'Кафедра химической технологии топлива и химической кибернетики',
  },
]
</script>

<template>
  <ResumeSection id="education" title="Образование">
    <div class="space-y-5">
      <EducationItem v-for="item in education" :key="item.id" :education="item" />
    </div>
  </ResumeSection>
</template>
