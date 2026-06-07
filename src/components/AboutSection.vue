<script setup lang="ts">
import { useCountUp } from '@/composables/useCountUp'


// TODO: Live update
const contributions = useCountUp(16)
const years         = useCountUp(2)
const sideProjects  = useCountUp(14)

const stats = [
  { countUp: contributions, suffix: '',  label: 'contributions',    sublabel: 'Dofus Touch' },
  { countUp: years,         suffix: '+', label: 'ans chez Ankama',  sublabel: 'Nov. 2023 → présent' },
  { countUp: sideProjects,  suffix: '',  label: 'projets perso',    sublabel: 'jeux, outils, expérimentations' },
]
</script>

<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mb-4">À propos</h2>

          <div class="avatar-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
            <img src="/images/avatar.jpg" alt="Basil L'Hôte développeur front-end"
              class="rounded-circle img-thumbnail w-100 h-100" style="object-fit: cover;">
          </div>

          <p class="lead mb-3">
            Développeur front-end JavaScript chez <strong>Ankama Games</strong>, je travaille depuis novembre 2023
            sur <strong>Dofus Touch</strong> - un MMORPG mobile à plusieurs millions de joueurs.
          </p>

          <p class="mb-3">
            Mon quotidien : concevoir et intégrer des <strong>interfaces de jeu complexes</strong>, piloter des
            features de bout en bout, maintenir la qualité sur une base de code existante et coordonner les
            livraisons. J'ai notamment piloté le développement complet du <strong>Dédale</strong>,
            l'une des plus grosses mises à jour du jeu.
          </p>

          <p class="mb-5">
            En parallèle, je construis mes projets perso en <strong>Vue 3 + TypeScript</strong> - principalement des
            jeux - pour explorer des architectures que je ne touche pas dans mon travail au quotidien.
          </p>

          <!-- Stats row -->
          <div class="row g-3 justify-content-center">
            <div
              v-for="stat in stats"
              :key="stat.label"
              :ref="(element) => { stat.countUp.el.value = element as HTMLElement | null }"
              class="col-4 col-md-auto"
            >
              <div class="stat-card">
                <div class="stat-number">
                  {{ stat.countUp.displayed }}<span class="stat-suffix">{{ stat.suffix }}</span>
                </div>
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-sublabel">{{ stat.sublabel }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-card {
  padding: 1rem 0.5rem;
  border-radius: 12px;
  min-width: 120px;
  background: rgba(var(--bs-primary-rgb), 0.05);
  border: 1px solid rgba(var(--bs-primary-rgb), 0.12);
  transition: transform 0.2s, border-color 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: rgba(var(--bs-primary-rgb), 0.3);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-suffix {
  font-size: 1.4rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0.35rem;
}

.stat-sublabel {
  font-size: 0.72rem;
  color: var(--bs-secondary-color, #888);
  margin-top: 0.15rem;
}

[data-bs-theme="dark"] .stat-card {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}
</style>
