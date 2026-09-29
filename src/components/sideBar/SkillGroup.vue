<script setup lang="ts">
import type { SkillGroup as SkillGroupData } from '@/types/resume'

defineProps<{ group: SkillGroupData }>()
</script>

<template>
  <div class="skill-group break-inside-avoid">
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
    <p v-if="group.note" class="mt-2 text-xs leading-relaxed text-slate-500">{{ group.note }}</p>
  </div>
</template>
