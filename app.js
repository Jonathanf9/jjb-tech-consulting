document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const btnSubmit = formulario.querySelector("button[type='submit']");
            const textoOriginal = btnSubmit.innerHTML;
            
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
            btnSubmit.disabled = true;

            setTimeout(() => {
                alert("¡Gracias por contactar a JJB Tech Consulting! Hemos recibido tu solicitud.");
                formulario.reset(); 
                btnSubmit.innerHTML = textoOriginal;
                btnSubmit.disabled = false;
            }, 1500);
        });
    }
});