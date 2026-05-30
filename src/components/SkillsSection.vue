<script setup lang="ts">
import type { SkillCategory } from '@/types'

const skills: SkillCategory[] = [
  {
    icon: 'fa-code',
    title: 'Développement Front-end',
    items: ['JavaScript (ES6+)', 'Vue.js', 'HTML5 / CSS3', 'Less', 'Intégration responsive', 'Git']
  },
  {
    icon: 'fa-brain',
    title: 'Approche & Méthode',
    items: ['Code propre et maintenable', 'Optimisation des performances', 'Expérience utilisateur fluide', 'Résolution de problèmes', 'Autonomie', 'Travail en équipe']
  }
]
</script>

<template>
  <section id="skills" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5">Compétences</h2>

      <div class="row g-4">
        <div v-for="skill in skills" :key="skill.title" class="col-md-6">
          <div class="card h-100 skill-card">
            <div class="card-body text-center">
              <div class="skill-icon mb-3">
                <i class="fas fa-3x" :class="skill.icon"></i>
              </div>
              <h3 class="h4 mb-3">{{ skill.title }}</h3>
              <ul class="list-unstyled">
                <li v-for="item in skill.items" :key="item" class="mb-2">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
