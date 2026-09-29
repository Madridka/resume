<script setup lang="ts">
import type { ResumeData } from '@/types/resume'
import AboutSection from './AboutSection.vue'
import EducationSection from './EducationSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import PrintButton from './PrintButton.vue'
import ProjectsSection from './ProjectsSection.vue'
import ResumeHeader from './ResumeHeader.vue'
import ResumeSidebar from './ResumeSidebar.vue'

defineProps<{ resume: ResumeData }>()
</script>

<template>
  <div class="resume-page min-h-screen bg-[#f2f3f1] px-0 py-0 font-sans text-slate-700 antialiased sm:px-6 sm:py-8 lg:py-12">
    <a
      href="#about"
      class="sr-only fixed top-4 left-4 z-10 rounded-sm bg-white px-4 py-3 text-sm text-teal-800 focus:not-sr-only focus:outline-2 focus:outline-offset-4 focus:outline-teal-700 print:hidden"
    >К содержанию резюме</a>
    <div class="mx-auto mb-4 flex max-w-[1120px] items-center justify-between gap-4 px-6 pt-4 sm:px-0 sm:pt-0 print:hidden">
      <p class="text-[10px] leading-5 font-medium tracking-[0.16em] text-slate-500 uppercase">Профессиональный профиль</p>
      <PrintButton />
    </div>
    <main class="resume-sheet mx-auto max-w-[1120px] border-y border-slate-200 bg-white sm:border" aria-label="Резюме">
      <ResumeHeader :profile="resume.profile" />
      <!-- Mobile sections interleave without duplicating the resume content. -->
      <div class="resume-body flex flex-col gap-9 px-6 py-8 sm:px-10 sm:py-10 md:grid md:grid-cols-[minmax(0,0.29fr)_minmax(0,0.71fr)] md:items-start md:gap-0 lg:px-12">
        <ResumeSidebar :contacts="resume.contacts" :skills="resume.skills" :languages="resume.languages" class="md:pr-6 lg:pr-8" />
        <div class="resume-main contents md:block md:space-y-9 md:border-l md:border-slate-200 md:pl-7 lg:pl-10">
          <AboutSection :paragraphs="resume.profile.summary" tabindex="-1" class="order-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700" />
          <ExperienceSection :experience="resume.experience" class="order-4" />
          <ProjectsSection :projects="resume.projects" class="order-5" />
          <EducationSection :education="resume.education" class="order-6" />
        </div>
      </div>
    </main>
  </div>
</template>
