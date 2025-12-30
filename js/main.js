/* =========================================
   LÓGICA DEL CARRUSEL DE EQUIPO
   ========================================= */

let slideIndex = 1;
showSlides(slideIndex);

// Función para flechas (avanzar o retroceder)
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Función para los puntos (dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("team-slide");
    let dots = document.getElementsByClassName("dot");

    // Si llegamos al final, volver al primero
    if (n > slides.length) {slideIndex = 1}    
    // Si retrocedemos desde el primero, ir al último
    if (n < 1) {slideIndex = slides.length}

    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        // Quitamos la clase active y forzamos display none
        slides[i].classList.remove("active");
        slides[i].style.display = "none"; 
    }

    // Desactivar todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar el slide actual
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "flex"; 
        
        // Pequeño retraso para permitir que el navegador procese el display:flex antes de añadir la clase de animación
        setTimeout(() => {
             slides[slideIndex-1].classList.add("active");
        }, 10);
        
        dots[slideIndex-1].className += " active";
    }

/* =========================================
   LÓGICA DEL MENÚ MÓVIL
   ========================================= */

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.movil-menu a'); // Seleccionamos TODOS los enlaces

// 1. ABRIR / CERRAR AL TOCAR EL BOTÓN
if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        toggleMenu();
    });
}

// 2. CERRAR AUTOMÁTICAMENTE AL TOCAR UN ENLACE
// Recorremos cada enlace del menú (Inicio, Servicios, Contacto...)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Si el menú está abierto, ciérralo
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// FUNCIÓN AUXILIAR PARA NO REPETIR CÓDIGO
function toggleMenu() {
    navMenu.classList.toggle('active');
    
    // Cambiar el icono de Rayitas a X
    const icon = hamburgerBtn.querySelector('i');
    if (icon) {
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }
}



}