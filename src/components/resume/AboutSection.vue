<script setup lang="ts">
import ResumeSection from './ResumeSection.vue'

defineProps<{ paragraphs: string[] }>()
</script>

<template>
  <ResumeSection id="about" title="Обо мне">
    <div class="space-y-3 text-[14px] leading-[1.8] text-slate-600">
      <p v-for="(paragraph, index) in paragraphs" :key="index" :class="{ 'font-medium text-slate-800': index === 0 }">{{ paragraph }}</p>
    </div>
  </ResumeSection>
</template>
