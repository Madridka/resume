<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/i18n'

import ResumeLayout from '@/components/ResumeLayout.vue'
import ResumeIcon from '@/components/ui/ResumeIcon.vue'

const { locale, t } = useI18n()

const setLocale = (value: SupportedLocale): void => {
  locale.value = value
}

const printResume = async (): Promise<void> => {
  await nextTick()
  window.print()
}

watch(
  locale,
  (value: string) => {
    const currentLocale = value as SupportedLocale
    document.documentElement.lang = currentLocale
    document.title = t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t('meta.title'))
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t('meta.description'))
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', currentLocale === 'ru' ? 'ru_RU' : 'en_US')
    localStorage.setItem('resume-locale', currentLocale)
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="resume-page min-h-screen bg-[#f2f3f1] px-0 py-0 font-sans text-slate-700 antialiased sm:px-6 sm:py-8 lg:py-12"
  >
    <a
      href="#about"
      class="sr-only fixed top-4 left-4 z-10 rounded-sm bg-white px-4 py-3 text-sm text-teal-800 focus:not-sr-only focus:outline-2 focus:outline-offset-4 focus:outline-teal-700 print:hidden"
    >
      {{ t('accessibility.skipToResume') }}
    </a>

    <div
      class="resume-actions mx-auto mb-4 flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-4 sm:px-0"
    >
      <div
        class="inline-flex rounded-md border border-slate-300 bg-white p-1 shadow-sm"
        role="group"
        :aria-label="t('actions.language')"
      >
        <button
          v-for="item in [
            { code: 'ru', label: t('actions.russian') },
            { code: 'en', label: t('actions.english') },
          ] as const"
          :key="item.code"
          type="button"
          class="rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 hover:cursor-pointer"
          :class="
            locale === item.code ? 'bg-teal-800 text-white' : 'text-slate-600 hover:bg-slate-100'
          "
          :aria-pressed="locale === item.code"
          :title="item.label"
          @click="setLocale(item.code)"
        >
          {{ item.code.toUpperCase() }}
        </button>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-md bg-teal-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 hover:cursor-pointer"
        @click="printResume"
      >
        <ResumeIcon name="print" />
        {{ t('actions.print') }}
      </button>
    </div>

    <ResumeLayout />
  </div>
</template>
