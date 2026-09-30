<script setup lang="ts">
defineProps<{ id: string; title: string }>()
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="min-w-0">
    <h2
      :id="`${id}-title`"
      class="mb-4 border-b border-slate-200 pb-2 text-[11px] leading-5 font-semibold tracking-[0.18em] text-teal-800 uppercase print:mb-2 print:pb-1"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
