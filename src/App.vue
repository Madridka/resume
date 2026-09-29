<script setup lang="ts">
import ResumeLayout from '@/components/resume/ResumeLayout.vue'
import { resumeData } from '@/data/resume'
</script>

<template>
  <ResumeLayout :resume="resumeData" />
</template>
