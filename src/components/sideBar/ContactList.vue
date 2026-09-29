<script setup lang="ts">
import type { Contact } from '@/types/resume'

import ContactItem from '@/components/sideBar/ContactItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'

defineProps<{ contacts: Contact[] }>()
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
