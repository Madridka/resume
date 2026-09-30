<script setup lang="ts">
import ContactList from '@/components/sideBar/ContactList.vue'
import LanguagesSection from '@/components/sideBar/LanguagesSection.vue'
import SkillsSection from '@/components/sideBar/SkillsSection.vue'
</script>

<template>
  <aside class="resume-sidebar contents md:block md:space-y-7">
    <ContactList class="order-1" />
    <SkillsSection class="order-3" />
    <LanguagesSection class="order-7" />
  </aside>
</template>
