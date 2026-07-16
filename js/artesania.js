/* ==========================================================================
   CHARTRES — Interacciones de artesania.html
   ========================================================================== */

// Animación reveal-on-scroll para elementos con esa clase
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// Efecto parallax suave en la imagen del hero al hacer scroll
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const heroImage = document.querySelector('header img');
    if (heroImage) {
        heroImage.style.transform = `scale(${1 + scroll * 0.0005})`;
    }
});

const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('mobile-menu-icon');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        menuIcon.textContent = isHidden ? 'close' : 'menu';
        menuBtn.setAttribute('aria-expanded', String(isHidden));
    });
}