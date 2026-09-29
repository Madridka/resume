<script setup lang="ts">
import type { Contact, Language, SkillGroup } from '@/types/resume'
import ContactList from './ContactList.vue'
import LanguagesSection from './LanguagesSection.vue'
import SkillsSection from './SkillsSection.vue'

defineProps<{
  contacts: Contact[]
  skills: SkillGroup[]
  languages: Language[]
}>()
</script>

<template>
  <aside class="resume-sidebar contents md:block md:space-y-9">
    <ContactList :contacts="contacts" class="order-1" />
    <SkillsSection :skills="skills" class="order-3" />
    <LanguagesSection :languages="languages" class="order-7" />
  </aside>
</template>
