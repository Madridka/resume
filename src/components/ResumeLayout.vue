<script setup lang="ts">
// import ResumeHeader from '@/components/header/ResumeHeader.vue'
import AboutSection from '@/components/mainBar/AboutSection.vue'
import EducationSection from '@/components/mainBar/EducationSection.vue'
import ExperienceSection from '@/components/mainBar/ExperienceSection.vue'
import ProjectsSection from '@/components/mainBar/ProjectsSection.vue'
import ResumeSidebar from '@/components/sideBar/ResumeSidebar.vue'
</script>

<template>
  <div
    class="resume-page min-h-screen bg-[#f2f3f1] px-0 py-0 font-sans text-slate-700 antialiased sm:px-6 sm:py-8 lg:py-12"
  >
    <a
      href="#about"
      class="sr-only fixed top-4 left-4 z-10 rounded-sm bg-white px-4 py-3 text-sm text-teal-800 focus:not-sr-only focus:outline-2 focus:outline-offset-4 focus:outline-teal-700 print:hidden"
      >К содержанию резюме</a
    >
    <main
      class="resume-sheet mx-auto max-w-[1120px] border-y border-slate-200 bg-white sm:border"
      aria-label="Резюме"
    >
      <!-- TODO: тут скрыт header -->
      <!-- <ResumeHeader /> -->
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
  </div>
</template>
