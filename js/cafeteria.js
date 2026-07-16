/* ==========================================================================
   CHARTRES — Interacciones de cafeteria.html
   ========================================================================== */

// Animación de aparición (fade-in) al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section:not(#mezcla)').forEach(section => {
        section.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
        observer.observe(section);
    });
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