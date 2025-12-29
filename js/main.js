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
}
