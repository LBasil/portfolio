<template>
  <header id="header" class="vh-100 d-flex align-items-center justify-content-center position-relative">
    <div class="overlay"></div>

    <div class="container text-center position-relative z-index-2">
      <p class="text-uppercase fw-semibold mb-3 header-label">
        Développeur front-end &nbsp;·&nbsp; Ankama Games
      </p>

      <h1 class="display-4 fw-bold mb-3">
        <span class="text-gradient">Basil L'hôte</span>
      </h1>

      <p class="lead mb-4">
        JavaScript · Vue 3 · TypeScript = interfaces de jeu, debugging, gestion de features et outils web.
      </p>

      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <a href="#portfolio" class="btn game-btn px-4 py-3">
          <i class="fas fa-laptop-code me-2"></i>Voir mes projets
        </a>
        <a href="#contact" class="btn btn-outline-light px-4 py-3">
          <i class="fas fa-paper-plane me-2"></i>Me contacter
        </a>
      </div>
    </div>

    <a href="#about" class="position-absolute bottom-0 start-50 translate-middle-x mb-5 scroll-down">
      <i class="fas fa-chevron-down fa-2x"></i>
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
