<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Experience } from '@/types/resume'

import ResumeSection from '@/components/ResumeSection.vue'
import TechStack from '@/components/sideBar/TechStack.vue'

const { t, tm } = useI18n()
const experience = computed((): Experience[] => tm('experience') as unknown as Experience[])
</script>

<template>
  <ResumeSection id="experience" :title="t('sections.experience')">
    <div class="space-y-5 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-5">
      <article
        v-for="item in experience"
        :key="item.id"
        :aria-labelledby="`${item.id}-title`"
        class="experience-item break-inside-avoid"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
          <h3
            :id="`${item.id}-title`"
            class="text-base leading-snug font-semibold tracking-[-0.01em] text-slate-950"
          >
            {{ item.company }}
          </h3>
          <p class="text-[11px] leading-5 whitespace-nowrap text-slate-500 tabular-nums">
            {{ item.period }}
          </p>
        </div>
        <p class="mt-1.5 text-sm leading-6 font-medium text-teal-800">{{ item.role }}</p>
        <p class="mt-2 text-sm leading-[1.65] text-slate-600">{{ item.description }}</p>
        <ul
          class="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-[1.65] text-slate-700 marker:text-slate-400"
        >
          <li v-for="responsibility in item.responsibilities" :key="responsibility" class="pl-1">
            {{ responsibility }}
          </li>
        </ul>
        <TechStack :items="item.stack" />
      </article>
    </div>
  </ResumeSection>
</template>
