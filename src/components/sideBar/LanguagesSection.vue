<script setup lang="ts">
import type { Language } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'

defineProps<{ languages: Language[] }>()
</script>

<template>
  <ResumeSection id="languages" title="Языки" class="break-inside-avoid">
    <dl class="space-y-2.5 text-sm leading-5">
      <div
        v-for="language in languages"
        :key="language.name"
        class="flex flex-wrap justify-between gap-x-4 gap-y-1"
      >
        <dt class="text-slate-700">{{ language.name }}</dt>
        <dd class="text-slate-500">{{ language.level }}</dd>
      </div>
    </dl>
  </ResumeSection>
</template>
