// Initialize ScrollReveal with more modern settings
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 200,
    reset: false,
    mobile: true
});

// Reveal elements with different configurations
sr.reveal('.section-title, h2, h3', {
    interval: 100,
    origin: 'top'
});

sr.reveal('.card, .skill-card', {
    interval: 200,
    origin: 'bottom',
    distance: '50px'
});

sr.reveal('.lead, p', {
    interval: 150,
    origin: 'left'
});

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
htmlElement.setAttribute('data-bs-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event
toggleButton.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = toggleButton.querySelector('i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
        toggleButton.setAttribute('aria-label', 'Passer en mode clair');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        toggleButton.setAttribute('aria-label', 'Passer en mode sombre');
    }
}

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
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
            
            // Update URL without page jump
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Add active class to nav items on scroll
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