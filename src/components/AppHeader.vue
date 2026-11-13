<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header id="header" class="vh-100 d-flex align-items-center justify-content-center position-relative">
    <div class="overlay"></div>

    <div class="container text-center position-relative z-index-2">
      <p class="text-uppercase fw-semibold mb-3 header-label">
        {{ t('hero.label') }}
      </p>

      <h1 class="display-4 fw-bold mb-3">
        <span class="text-gradient">{{ t('nav.brand') }}</span>
      </h1>

      <p class="lead mb-4">
        {{ t('hero.lead') }}
      </p>

      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <a href="#portfolio" class="btn game-btn px-4 py-3">
          <span class="game-btn-content"><i class="fas fa-laptop-code me-2" aria-hidden="true"></i>{{ t('hero.projects') }}</span>
        </a>
        <a href="#contact" class="btn btn-outline-light px-4 py-3">
          <i class="fas fa-paper-plane me-2" aria-hidden="true"></i>{{ t('hero.contact') }}
        </a>
        <a href="/CV-Basil-LHote.pdf" class="btn btn-outline-light px-4 py-3" download>
          <i class="fas fa-file-arrow-down me-2" aria-hidden="true"></i>{{ t('hero.cv') }}
        </a>
      </div>
    </div>

    <a href="#about" class="position-absolute bottom-0 start-50 translate-middle-x mb-5 scroll-down" :aria-label="t('hero.scroll')">
      <i class="fas fa-chevron-down fa-2x" aria-hidden="true"></i>
    </a>
  </header>
</template>

<style scoped>
.header-label {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.7);
}
</style>
