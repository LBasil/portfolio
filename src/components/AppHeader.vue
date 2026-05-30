<template>
  <header id="header" class="vh-100 d-flex align-items-center justify-content-center position-relative">
    <div class="overlay"></div>

    <div class="container text-center position-relative z-index-2">
      <h1 class="display-4 fw-bold mb-3">
        Développeur Front-end JavaScript
        <br>
        <span class="text-gradient">Basil L'hôte</span>
      </h1>

      <p class="lead mb-4">
        Création d'interfaces web performantes, interactives et optimisées UX en JavaScript et Vue.js.
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
