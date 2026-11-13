<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const copied = ref(false)

async function copyEmail() {
  await navigator.clipboard.writeText('basil.lhote@gmail.com')
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <section id="contact" class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mb-4">{{ t('contact.title') }}</h2>

          <p class="lead mb-2" v-html="t('contact.lead')"></p>
          <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <span class="location-chip"><i class="fas fa-location-dot me-1" aria-hidden="true"></i>{{ t('contact.belgium') }}</span>
            <span class="location-chip"><i class="fas fa-location-dot me-1" aria-hidden="true"></i>{{ t('contact.lille') }}</span>
            <span class="location-chip"><i class="fas fa-wifi me-1" aria-hidden="true"></i>{{ t('contact.remote') }}</span>
          </div>

          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="https://github.com/LBasil"
              class="btn btn-dark btn-lg rounded-pill px-4"
              target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github me-2" aria-hidden="true"></i>GitHub
            </a>

            <a href="https://www.linkedin.com/in/basil-l-hote-a653b8213"
              class="btn btn-primary btn-lg rounded-pill px-4"
              target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in me-2" aria-hidden="true"></i>LinkedIn
            </a>

            <a href="/CV-Basil-LHote.pdf" class="btn btn-outline-primary btn-lg rounded-pill px-4" download>
              <i class="fas fa-file-arrow-down me-2" aria-hidden="true"></i>{{ t('contact.cv') }}
            </a>

            <button class="btn btn-secondary btn-lg rounded-pill px-4" :aria-label="copied ? t('contact.copiedAria') : t('contact.copy')" @click="copyEmail">
              <i class="fas me-2" :class="copied ? 'fa-check' : 'fa-envelope'" aria-hidden="true"></i>
              {{ copied ? t('contact.copied') : 'basil.lhote@gmail.com' }}
            </button>
            <span role="status" class="visually-hidden">{{ copied ? t('contact.copiedStatus') : '' }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  background: rgba(var(--bs-primary-rgb), 0.08);
  border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
  color: inherit;
}

[data-bs-theme="dark"] .location-chip {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}
</style>
