<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{ items: string[] }>()

const { t } = useI18n()
</script>

<template>
  <p class="tech-stack mt-3 text-xs leading-[1.65] text-slate-500">
    <span class="mr-1.5 font-medium text-slate-600">{{ t('stackLabel') }}</span>
    {{ items.join(' · ') }}
  </p>
</template>
