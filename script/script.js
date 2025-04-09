document.addEventListener('DOMContentLoaded', () => {
    // === ScrollReveal ===
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '25px',
        duration: 400,
        delay: 100,
        reset: false,
        mobile: true
    });

    sr.reveal('.section-title, h2, h3', {
        interval: 50,
        origin: 'top'
    });

    sr.reveal('.card, .skill-card', {
        interval: 50,
        origin: 'bottom',
        distance: '30px'
    });

    sr.reveal('.lead, p', {
        interval: 50,
        origin: 'left'
    });

    // === Theme toggle ===
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';

    htmlElement.setAttribute('data-bs-theme', currentTheme);
    updateThemeIcon(currentTheme);

    toggleButton.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = toggleButton.querySelector('svg');
        if (!icon) return;
    
        const newIcon = theme === 'dark' ? 'sun' : 'moon';
        icon.setAttribute('data-icon', newIcon);
        toggleButton.setAttribute(
            'aria-label',
            theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'
        );
    }

    // === Copyright year ===
    //document.getElementById('current-year').textContent = new Date().getFullYear();

    // === Smooth scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // === Active section on scroll ===
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // === Archives ===
    const toggleArchivesBtn = document.getElementById('toggle-archives');
    const archivesContent = document.getElementById('archives-content');
    const archivesSection = document.getElementById('archives');

    function toggleArchives() {
        const isHidden = archivesContent.style.display === 'none' || !archivesContent.style.display;
        if (isHidden) {
            archivesContent.style.display = 'flex';
            archivesSection.classList.add('show-content');
            toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-up me-2"></i> Masquer les projets archivés';
            setTimeout(() => {
                const archivedProjects = document.querySelectorAll('.archived');
                archivedProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 10);
        } else {
            archivesContent.style.display = 'none';
            archivesSection.classList.remove('show-content');
            toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-down me-2"></i> Voir les projets archivés';
        }
    }

    toggleArchivesBtn.addEventListener('click', toggleArchives);

    // === Archived project transitions ===
    const archivedProjects = document.querySelectorAll('.archived');
    archivedProjects.forEach(project => {
        project.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
    });
});
