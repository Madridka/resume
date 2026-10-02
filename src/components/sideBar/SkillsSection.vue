<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { SkillGroup as SkillGroupData } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'

const { t, tm } = useI18n()
const skills = computed((): SkillGroupData[] => tm('skills') as unknown as SkillGroupData[])
</script>

<template>
  <ResumeSection id="skills" :title="t('sections.skills')">
    <div class="grid gap-4 min-[540px]:grid-cols-2 md:grid-cols-1">
      <div v-for="group in skills" :key="group.id" class="skill-group break-inside-avoid">
        <h3 class="mb-2 text-[13px] leading-5 font-semibold text-slate-900">{{ group.title }}</h3>
        <ul class="flex flex-wrap gap-x-1.5 gap-y-1 text-sm leading-[1.65] text-slate-600">
          <li v-for="(skill, index) in group.items" :key="skill">
            {{ skill
            }}<span
              v-if="index < group.items.length - 1"
              class="ml-1.5 text-slate-300"
              aria-hidden="true"
              >/</span
            >
          </li>
        </ul>
        <p v-if="group.note" class="mt-2 text-xs leading-relaxed text-slate-500">
          {{ group.note }}
        </p>
      </div>
    </div>
  </ResumeSection>
</template>
