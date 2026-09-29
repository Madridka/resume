<script setup lang="ts">
import ResumeIcon from './ResumeIcon.vue'

function printResume(): void {
  window.print()
}
</script>

<template>
  <button
    type="button"
    class="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-700 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 motion-reduce:transition-none print:hidden"
    @click="printResume"
  >
    <ResumeIcon name="print" />
    Печать / PDF
  </button>
</template>
