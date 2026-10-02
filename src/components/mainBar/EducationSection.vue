<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Education } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'

const { t, tm } = useI18n()
const education = computed((): Education[] => tm('education') as unknown as Education[])
</script>

<template>
  <ResumeSection id="education" :title="t('sections.education')">
    <div class="space-y-3">
      <article
        v-for="item in education"
        :key="item.id"
        :aria-labelledby="`${item.id}-title`"
        class="education-item break-inside-avoid"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 :id="`${item.id}-title`" class="text-[14px] leading-6 font-semibold text-slate-900">
            {{ item.institution }}
          </h3>
          <p class="text-[11px] leading-5 whitespace-nowrap text-slate-500 tabular-nums">
            {{ item.period }}
          </p>
        </div>
        <p class="mt-1.5 text-sm leading-[1.8] text-slate-600">{{ item.qualification }}</p>
        <p v-if="item.details" class="mt-1 text-xs leading-relaxed text-slate-500">
          {{ item.details }}
        </p>
      </article>
    </div>
  </ResumeSection>
</template>
