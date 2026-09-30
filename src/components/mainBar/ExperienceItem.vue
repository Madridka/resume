<script setup lang="ts">
import type { Experience } from '@/types/resume'

import TechStack from '@/components/sideBar/TechStack.vue'

defineProps<{ experience: Experience }>()
</script>

<template>
  <article :aria-labelledby="`${experience.id}-title`" class="experience-item break-inside-avoid">
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
      <h3
        :id="`${experience.id}-title`"
        class="text-base leading-snug font-semibold tracking-[-0.01em] text-slate-950"
      >
        {{ experience.company }}
      </h3>
      <p class="text-[11px] leading-5 whitespace-nowrap text-slate-500 tabular-nums">
        {{ experience.period }}
      </p>
    </div>
    <p class="mt-1.5 text-sm leading-6 font-medium text-teal-800">{{ experience.role }}</p>
    <p class="mt-2 text-sm leading-[1.65] text-slate-600">{{ experience.description }}</p>
    <ul
      class="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-[1.65] text-slate-700 marker:text-slate-400"
    >
      <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="pl-1">
        {{ responsibility }}
      </li>
    </ul>
    <TechStack :items="experience.stack" />
  </article>
</template>
