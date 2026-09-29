<script setup lang="ts">
import type { Contact } from '@/types/resume'

import ResumeIcon from '@/components/ui/ResumeIcon.vue'

defineProps<{ contact: Contact }>()
</script>

<template>
  <li>
    <a
      :href="contact.href"
      class="group flex min-h-11 items-start gap-3 rounded-sm py-1.5 text-slate-700 transition-colors hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 motion-reduce:transition-none"
    >
      <ResumeIcon :name="contact.kind" class="mt-1 text-slate-500 group-hover:text-teal-800" />
      <span class="min-w-0">
        <span
          class="block text-[10px] leading-4 font-medium tracking-[0.08em] text-slate-500 uppercase"
          >{{ contact.label }}</span
        >
        <span
          class="mt-0.5 block text-sm leading-5 [overflow-wrap:anywhere] group-hover:underline group-hover:decoration-teal-800/30 group-hover:underline-offset-4"
        >
          {{ contact.value }}
        </span>
      </span>
    </a>
  </li>
</template>
