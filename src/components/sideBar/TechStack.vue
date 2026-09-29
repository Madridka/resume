<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <p class="tech-stack mt-4 text-xs leading-[1.8] text-slate-500">
    <span class="mr-1.5 font-medium text-slate-600">Стек:</span>
    {{ items.join(' · ') }}
  </p>
</template>
