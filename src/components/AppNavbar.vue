<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/themeStore'
import { useActiveSection } from '@/composables/useActiveSection'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const themeStore = useThemeStore()
const { activeSection } = useActiveSection()
const { otherLocale, toggleLocale } = useLocale()

const sections = ['about', 'experience', 'portfolio', 'skills', 'contact'] as const

const isDark = computed(() => themeStore.theme === 'dark')
const themeIcon = computed(() => isDark.value ? 'fa-sun' : 'fa-moon')
const themeLabel = computed(() => isDark.value ? t('nav.themeLight') : t('nav.themeDark'))

function isActive(sectionId: string) {
  return activeSection.value === sectionId
}
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" :data-bs-theme="themeStore.theme" :aria-label="t('nav.main')">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/#header" :aria-label="t('nav.home')">
        <img src="/images/avatar.webp" width="40" height="40" :alt="t('nav.brand')" class="rounded-circle me-2">
        <span class="d-none d-md-inline">{{ t('nav.brand') }}</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" :aria-label="t('nav.toggle')">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="id in sections" :key="id" class="nav-item">
            <a class="nav-link" :class="{ active: isActive(id) }" :aria-current="isActive(id) ? 'page' : undefined" :href="`#${id}`">{{ t(`nav.${id}`) }}</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ms-2" :aria-label="t('nav.langLabel')" :lang="otherLocale" @click="toggleLocale()">
              {{ t('nav.langCode') }}
            </button>
          </li>
          <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ms-2" :aria-label="themeLabel" @click="themeStore.toggle()">
              <i class="fas" :class="themeIcon" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
