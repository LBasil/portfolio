<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <AppNavbar />
  <AppHeader />
  <AboutSection />
  <ExperienceSection />
  <PortfolioSection />
  <SkillsSection />
  <ContactSection />
  <AppFooter />
</template>
