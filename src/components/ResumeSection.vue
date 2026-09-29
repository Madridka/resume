<script setup lang="ts">
defineProps<{ id: string; title: string }>()
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="min-w-0">
    <h2
      :id="`${id}-title`"
      class="mb-5 border-b border-slate-200 pb-3 text-[11px] leading-5 font-semibold tracking-[0.18em] text-teal-800 uppercase print:mb-3 print:pb-2"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
