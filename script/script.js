ScrollReveal().reveal('.card', {
    interval: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('h2, h3, p', {
    interval: 200,
    origin: 'top',
    distance: '50px',
    duration: 800,
    reset: true
});

const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
const navbar = document.querySelector('.navbar');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    portfolio.classList.add('dark-mode');
    contact.classList.add('dark-mode');
    toggleButton.textContent = 'Basculer en mode clair';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    portfolio.classList.toggle('dark-mode');
    contact.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggleButton.textContent = theme === 'dark' ? 'Basculer en mode clair' : 'Basculer en mode sombre';
});
