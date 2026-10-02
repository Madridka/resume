<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ResumeSection from '@/components/ResumeSection.vue'

const { t } = useI18n()
</script>

<template>
  <ResumeSection id="about" :title="t('sections.about')">
    <p class="text-[14px] leading-[1.7] font-medium text-slate-700">{{ t('about') }}</p>
  </ResumeSection>
</template>
