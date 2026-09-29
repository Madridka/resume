<script setup lang="ts">
import { resumeData } from '@/data/resume'

import ResumeLayout from '@/components/ResumeLayout.vue'
</script>

<template>
  <ResumeLayout :resume="resumeData" />
</template>
