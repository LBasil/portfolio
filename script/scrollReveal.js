document.addEventListener('DOMContentLoaded', () => {
    // ===========================
    // ScrollReveal Animations
    // ===========================
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

    // ===========================
    // (Optional) Set current year
    // ===========================
    // document.getElementById('current-year').textContent = new Date().getFullYear();
});
