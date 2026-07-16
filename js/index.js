/* ==========================================================================
   CHARTRES — Interacciones de index.html (página principal)
   ========================================================================== */

// Sombra en la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});

// Animación de aparición (fade-in) al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('stagger-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
        el.style.opacity = "0";
        observer.observe(el);
    });
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