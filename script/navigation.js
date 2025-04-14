


// ===========================
// Theme Toggle (Light/Dark)
// ===========================
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

    const iconType = theme === 'dark' ? 'sun' : 'moon';
    icon.setAttribute('data-icon', iconType);
    toggleButton.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
}


// ===========================
// Smooth Scroll on Anchor Click
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            history.pushState?.(null, null, targetId);
        }
    });
});

// ===========================
// Navigation Active on Scroll
// ===========================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${currentSection}`);
    });
});
