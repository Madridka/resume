<script setup lang="ts">
import type { Education } from '@/types/resume'

defineProps<{ education: Education }>()
</script>

<template>
  <article :aria-labelledby="`${education.id}-title`" class="education-item break-inside-avoid">
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 :id="`${education.id}-title`" class="text-[14px] leading-6 font-semibold text-slate-900">{{ education.institution }}</h3>
      <p class="text-[11px] leading-5 whitespace-nowrap text-slate-500 tabular-nums">{{ education.period }}</p>
    </div>
    <p class="mt-1.5 text-sm leading-[1.8] text-slate-600">{{ education.qualification }}</p>
    <p v-if="education.details" class="mt-1 text-xs leading-relaxed text-slate-500">{{ education.details }}</p>
  </article>
</template>
