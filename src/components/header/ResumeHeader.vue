<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import photoUrl from '@/../photo/photo.png'

const { t } = useI18n()
</script>

<template>
  <header
    class="resume-header flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-8 sm:gap-8 sm:px-10 sm:py-10 lg:px-12"
  >
    <div class="min-w-0">
      <p
        class="mb-3 text-[10px] leading-5 font-medium tracking-[0.2em] text-slate-500 uppercase print:hidden"
      >
        {{ t('profile.eyebrow') }}
      </p>
      <h1
        class="text-[30px] leading-[1.12] font-semibold tracking-[-0.035em] text-slate-950 sm:text-[42px]"
      >
        {{ t('profile.name') }}
      </h1>
      <p class="mt-3 text-base leading-snug font-medium text-slate-800 sm:text-xl">
        {{ t('profile.title') }}
      </p>
      <p class="mt-2 font-mono text-[13px] leading-6 text-teal-800 sm:text-sm">
        {{ t('profile.specialization') }}
      </p>
    </div>
    <img
      :src="photoUrl"
      :alt="t('profile.photoAlt')"
      width="108"
      height="136"
      fetchpriority="high"
      class="resume-photo mt-1 h-25 w-20 shrink-0 rounded-sm bg-slate-100 object-cover object-[50%_42%] sm:h-34 sm:w-27"
    />
  </header>
</template>
