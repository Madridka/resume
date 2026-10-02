<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ResumeHeader from '@/components/header/ResumeHeader.vue'
import AboutSection from '@/components/mainBar/AboutSection.vue'
import EducationSection from '@/components/mainBar/EducationSection.vue'
import ExperienceSection from '@/components/mainBar/ExperienceSection.vue'
import ProjectsSection from '@/components/mainBar/ProjectsSection.vue'
import ResumeSidebar from '@/components/sideBar/ResumeSidebar.vue'

const { t } = useI18n()
</script>

<template>
  <main
    class="resume-sheet mx-auto max-w-[1120px] border-y border-slate-200 bg-white sm:border"
    :aria-label="t('accessibility.resume')"
  >
    <ResumeHeader />
    <!-- Mobile sections interleave without duplicating the resume content. -->
    <div
      class="resume-body flex flex-col gap-7 px-6 py-7 sm:px-10 sm:py-8 md:grid md:grid-cols-[minmax(0,0.29fr)_minmax(0,0.71fr)] md:items-start md:gap-0 lg:px-12"
    >
      <ResumeSidebar class="md:pr-6 lg:pr-8" />
      <div
        class="resume-main contents md:block md:space-y-7 md:border-l md:border-slate-200 md:pl-7 lg:pl-10"
      >
        <AboutSection
          tabindex="-1"
          class="order-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        />
        <ExperienceSection class="order-4" />
        <ProjectsSection class="order-5" />
        <EducationSection class="order-6" />
      </div>
    </div>
  </main>
</template>
