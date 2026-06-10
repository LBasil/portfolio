<template>
  <section id="contact" class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mb-4">Contact</h2>

          <p class="lead mb-2">
            Développeur front-end en poste chez <strong>Ankama Games</strong>, ouvert aux nouvelles opportunités.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <span class="location-chip"><i class="fas fa-location-dot me-1"></i>Belgique</span>
            <span class="location-chip"><i class="fas fa-location-dot me-1"></i>Métropole Lilloise</span>
            <span class="location-chip"><i class="fas fa-wifi me-1"></i>Remote</span>
          </div>

          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="https://github.com/LBasil"
              class="btn btn-dark btn-lg rounded-pill px-4"
              target="_blank" rel="noopener">
              <i class="fab fa-github me-2"></i>GitHub
            </a>

            <a href="https://www.linkedin.com/in/basil-l-hote-a653b8213"
              class="btn btn-primary btn-lg rounded-pill px-4"
              target="_blank" rel="noopener">
              <i class="fab fa-linkedin-in me-2"></i>LinkedIn
            </a>

            <a href="mailto:basil.lhote@gmail.com"
              class="btn btn-secondary btn-lg rounded-pill px-4">
              <i class="fas fa-envelope me-2"></i>basil.lhote@gmail.com
            </a>
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
