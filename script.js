// Manejo del Menú Móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu ul li a');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Sombra en el Header al hacer Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Scroll Reveal Animaciones (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // El elemento aparece cuando el 15% es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Dejar de observar una vez animado
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionar todos los elementos con la clase 'hidden' y observarlos
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Simulación de Envío de Formulario
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;

        // Efecto visual de carga
        btn.innerText = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('¡Datos enviados con éxito! Nos comunicaremos contigo pronto para iniciar tu proyecto.');
            btn.innerText = originalText;
            btn.style.opacity = '1';
            quoteForm.reset();
        }, 1500);
    });
}