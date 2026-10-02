import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import ru from '@/locales/ru'

export type SupportedLocale = 'ru' | 'en'

function getInitialLocale(): SupportedLocale {
  const savedLocale = localStorage.getItem('resume-locale')
  return savedLocale === 'en' || savedLocale === 'ru' ? savedLocale : 'ru'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'ru',
  messages: { ru, en },
})
