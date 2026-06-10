<template>
  <footer class="py-4 bg-dark text-light">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

        <p class="mb-0 small footer-copy">
          © {{ new Date().getFullYear() }} Basil L'Hôte &nbsp;·&nbsp; Fait avec
          <i class="fab fa-vuejs mx-1" style="color: #42b883;"></i>Vue 3 + TypeScript
        </p>

        <div class="d-flex gap-3">
          <a href="#about" class="footer-link">À propos</a>
          <a href="#experience" class="footer-link">Expérience</a>
          <a href="#portfolio" class="footer-link">Projets</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>

        <div class="d-flex gap-3">
          <a href="https://github.com/LBasil" target="_blank" rel="noopener" class="footer-social" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/basil-l-hote-a653b8213" target="_blank" rel="noopener" class="footer-social" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:basil.lhote@gmail.com" class="footer-social" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-copy {
  color: rgba(255, 255, 255, 0.5);
}

.footer-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.82rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer-social {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  transition: color 0.2s, transform 0.2s;
  display: inline-block;
}

.footer-social:hover {
  color: white;
  transform: translateY(-2px);
}
</style>
