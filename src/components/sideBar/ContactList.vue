<script setup lang="ts">
import type { Contact } from '@/types/resume'

import ContactItem from '@/components/sideBar/ContactItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

const contacts: Contact[] = [
  {
    id: 'phone',
    kind: 'phone',
    label: 'Телефон',
    value: '+7-923-433-18-16',
    href: 'tel:+79234331816',
  },
  {
    id: 'email',
    kind: 'email',
    label: 'Email',
    value: 'serbin_kirill1807@mail.ru',
    href: 'mailto:serbin_kirill1807@mail.ru',
  },
  {
    id: 'telegram',
    kind: 'telegram',
    label: 'Telegram',
    value: '@madrid_ka',
    href: 'https://t.me/madrid_ka',
  },
  {
    id: 'github',
    kind: 'github',
    label: 'GitHub',
    value: 'github.com/Madridka',
    href: 'https://github.com/Madridka',
  },
]
</script>

<template>
  <ResumeSection id="contacts" title="Контакты">
    <address class="not-italic">
      <ul class="grid gap-2 min-[440px]:grid-cols-2 md:grid-cols-1">
        <ContactItem v-for="contact in contacts" :key="contact.id" :contact="contact" />
      </ul>
    </address>
  </ResumeSection>
</template>
