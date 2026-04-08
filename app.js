/* ==========================================================================
UNIVERSIDAD DE ESPECIALIDADES ESPÍRITU SANTO
FACULTAD DE INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN

Materia: DESARROLLO DE APLICACIONES WEB
Actividad 1: Estructura Base de un sitio web.
ACTIVIDAD DEL PRIMER PARCIAL

Autores: José Escobar, Bernabé Ruiz, Jonathan Ochoa
Tutor: Ing. Alex Andrés Santamaría Philco, Mgs.
Paralelo: A | Loja, Abril de 2026
========================================================================== 
*/

// Nos aseguramos que el script se ejecute únicamente cuando todo el HTML haya sido procesado por el navegador
document.addEventListener("DOMContentLoaded", function() {
    
    // Capturamos el formulario mediante su ID para asignar lógica a sus eventos
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        // Interrumpimos el comportamiento por defecto de recargar la página al hacer "submit"
        formulario.addEventListener("submit", function(evento) {
            
            evento.preventDefault();

            const btnSubmit = formulario.querySelector("button[type='submit']");
            
            // UX: Deshabilitamos el botón temporalmente para prevenir múltiples envíos accidentales
            const textoOriginal = btnSubmit.innerText;
            btnSubmit.innerText = "Enviando...";
            btnSubmit.disabled = true;

            // Simulamos un envío asíncrono con un retraso (setTimeout) imitando una petición HTTP
            setTimeout(function() {
                alert("¡Gracias por contactar a JJB Tech Consulting! Hemos recibido tu solicitud y te responderemos pronto.");
                
                // Limpiamos los campos del formulario tras el éxito del envío
                formulario.reset(); 
                btnSubmit.innerText = textoOriginal;
                btnSubmit.disabled = false;
            }, 1500);
        });
    }

    // Recorremos múltiples elementos del DOM (Iteración)
    // Seleccionamos todas las tarjetas de servicios/equipo para añadir interactividad por consola al pasar el mouse.
    const tarjetas = document.querySelectorAll('.card-jjb');

    // Usamos el ciclo forEach para asignar un evento a cada elemento NodeList
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            // Evidenciamos el uso de la consola para depuración y seguimiento (Debugging)
            console.log('El usuario está revisando una de las tarjetas de servicios o equipo.');
        });
    });
});