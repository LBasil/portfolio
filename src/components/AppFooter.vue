<template>
  <footer class="py-4 bg-dark text-light">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

        <p class="mb-0 small footer-copy">
          © {{ new Date().getFullYear() }} Basil L'Hôte &nbsp;·&nbsp; Fait avec
          <i class="fab fa-vuejs mx-1" style="color: #42b883;"></i>Vue 3 + TypeScript
        </p>

        <div class="d-flex gap-3 flex-wrap justify-content-center">
          <a href="#about" class="footer-link">À propos</a>
          <a href="#experience" class="footer-link">Expérience</a>
          <a href="#portfolio" class="footer-link">Projets</a>
          <a href="#contact" class="footer-link">Contact</a>
          <a href="/universe.html" class="footer-link footer-link-universe" aria-label="X-Universe — archives de conception">
            <i class="fas fa-flask me-1" aria-hidden="true" style="font-size:0.8em;"></i>X-Universe
          </a>
        </div>

        <div class="d-flex gap-3">
          <a href="https://github.com/LBasil" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="GitHub">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/basil-l-hote-a653b8213" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a href="mailto:basil.lhote@gmail.com" class="footer-social" aria-label="Email">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-copy {
  color: rgba(255, 255, 255, 0.85);
}

.footer-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.82rem;
  transition: color 0.2s;
  border-radius: 3px;
}

.footer-link:hover {
  color: white;
}

.footer-link:focus-visible {
  outline: 2px solid white;
  outline-offset: 3px;
}

.footer-link-universe {
  color: #47a5c9 !important;
}
.footer-link-universe:hover {
  color: #7dd3f0 !important;
}

.footer-social {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  transition: color 0.2s, transform 0.2s;
  display: inline-block;
  border-radius: 3px;
}

.footer-social:hover {
  color: white;
  transform: translateY(-2px);
}

.footer-social:focus-visible {
  outline: 2px solid white;
  outline-offset: 3px;
}
</style>
