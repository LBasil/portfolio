<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')
const themeIcon = computed(() => isDark.value ? 'fa-sun' : 'fa-moon')
const themeLabel = computed(() => isDark.value ? 'Passer en mode clair' : 'Passer en mode sombre')
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" :data-bs-theme="themeStore.theme">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/" aria-label="Accueil">
        <img src="/images/avatar.jpg" width="40" height="40" alt="Avatar Basil L'Hôte" class="rounded-circle me-2">
        <span class="d-none d-md-inline">Basil L'HÔTE</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/#about">À propos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#portfolio">Portfolio</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#skills">Compétences</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#contact">Contact</router-link></li>
          <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ms-2" :aria-label="themeLabel" @click="themeStore.toggle()">
              <i class="fas" :class="themeIcon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
