<script setup lang="ts">
import type { Experience } from '@/types/resume'

import ExperienceItem from '@/components/mainBar/ExperienceItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const experience: Experience[] = [
  {
    id: 'sibneftecart',
    company: 'ООО «Сибнефтекарт»',
    role: 'Инженер-программист / Frontend Developer',
    period: '06/2025 — настоящее время',
    description:
      'Разработка и развитие личного кабинета для держателей топливных карт и программных решений для автоматизации АЗС и нефтебаз.',
    responsibilities: [
      'Самостоятельно разрабатываю модули на Vue 3, Composition API и TypeScript: от структуры компонентов до интеграции с backend API.',
      'Поддерживаю Vue 2 и участвую в поэтапной миграции на Vue 3 с сохранением бизнес-логики.',
      'Проектирую компоненты и composables, устраняю дублирование. В Pinia типизирую state/getters/actions, разделяю локальное и глобальное состояние.',
      'Интегрирую REST API через Axios: авторизация, ошибки, серверная валидация и асинхронные UI-состояния. Согласовываю контракты с backend-командой.',
      'Создаю формы, таблицы, фильтры и пошаговые сценарии; адаптирую PrimeVue. Развиваю отчётность: диапазоны дат, большие наборы данных, визуализация и экспорт.',
      'Читаю смежный код на Go, диагностирую ошибки клиент-серверного взаимодействия и вношу небольшие изменения в API.',
      'Применяю AI-агентов для декомпозиции и рефакторинга; проверяю сгенерированный код, архитектуру, типы, граничные случаи и соответствие требованиям.',
      'Работаю через GitLab: feature branches, merge requests, code review и CI/CD pipelines.',
    ],
    stack: [
      'Vue 3',
      'Composition API',
      'Vue 2',
      'TypeScript',
      'Pinia',
      'Vue Router',
      'PrimeVue',
      'Tailwind CSS',
      'SCSS',
      'Axios',
      'REST API',
      'Go',
      'GitLab',
      'CI/CD',
    ],
  },
  {
    id: 'gazprom-transgaz-project',
    company: 'Проект для ООО «Газпром трансгаз Томск»',
    role: 'Frontend Developer',
    period: '02/2025 — 06/2025',
    description:
      'Внутренняя система контроля сроков обучения и аттестации производственного персонала.',
    responsibilities: [
      'Разрабатывал с нуля клиентскую часть системы на Vue 3, Composition API и JavaScript.',
      'Создавал собственные переиспользуемые UI-компоненты для форм, таблиц и навигации по макетам и UI Kit в Figma без готовой компонентной библиотеки.',
      'Интегрировал frontend с backend API и согласовывал контракты с backend-разработчиком.',
      'Работал в кросс-функциональной команде с Project Manager, аналитиком, UI/UX-дизайнером и backend-разработчиком; участвовал в спринтах, daily, planning и retrospective.',
      'Участвовал в обсуждении требований и демонстрациях продукта, дорабатывал функциональность по обратной связи заказчика.',
      'Вносил frontend-изменения в административную часть на PHP/Laravel и дорабатывал её интерфейсы.',
      'Работал по GitFlow: feature branches, merge requests и code review.',
      'За три месяца команда разработала с нуля и передала заказчику работоспособный MVP системы.',
    ],
    stack: [
      'Vue 3',
      'Composition API',
      'JavaScript',
      'Vue Router',
      'SCSS',
      'Axios',
      'REST API',
      'Figma',
      'GitLab',
      'GitFlow',
      'PHP/Laravel — frontend админки',
    ],
  },
]
</script>

<template>
  <ResumeSection id="experience" title="Опыт работы">
    <div class="space-y-7 divide-y divide-slate-200 [&>article:not(:first-child)]:pt-7">
      <ExperienceItem v-for="item in experience" :key="item.id" :experience="item" />
    </div>
  </ResumeSection>
</template>
