document.addEventListener("DOMContentLoaded", () => {
    const inputBusqueda = document.querySelector("#inputBusqueda");
    const btnBuscar = document.querySelector("#btnBuscarTalento");
    const btnReintentar = document.querySelector("#btnReintentar");
    const contenedorResultados = document.querySelector("#estado-resultados");

    let ultimaQuery = "";

    // Función estricta para cambiar los 4 estados UX
    const cambiarEstado = (estadoActivo) => {
        ["estado-inicial", "estado-cargando", "estado-error", "estado-resultados"].forEach(id => {
            document.getElementById(id).classList.add("d-none");
        });
        document.getElementById(estadoActivo).classList.remove("d-none");
    };

    //// BLOQUE 1: PRIMER FETCH (Buscar por tecnología)////
    const buscarPerfilesAPI = async (query) => {
        cambiarEstado("estado-cargando");
        
        try {
            // URL con Template Literals
            const url = `https://api.github.com/search/users?q=${query}&per_page=6`;
            const response = await fetch(url);

            // Verificar response.ok estrictamente
            if (!response.ok) {
                if (response.status === 404) throw new Error("Recurso no encontrado (Error 404).");
                if (response.status >= 500) throw new Error("Error interno del servidor de GitHub (Error 5xx).");
                throw new Error("Fallo de red. Verifica tu conexión a internet.");
            }

            // Await para el JSON
            const data = await response.json();

            if (data.items.length === 0) {
                document.querySelector("#texto-error").textContent = "No se encontraron perfiles con esa tecnología.";
                cambiarEstado("estado-error");
                document.querySelector("#btnReintentar").classList.add("d-none");
                return;
            }

            renderizarTarjetas(data.items);

        } catch (error) {
            document.querySelector("#texto-error").textContent = error.message;
            document.querySelector("#btnReintentar").classList.remove("d-none");
            cambiarEstado("estado-error");
        }
    };

    // BLOQUE 2: RENDERIZADO DINÁMICO
    const renderizarTarjetas = (usuarios) => {
        // Limpiar contenedor antes de inyectar
        contenedorResultados.innerHTML = '';
        
        // Uso estricto de DocumentFragment
        const fragmento = document.createDocumentFragment();

        // Iteración con forEach
        usuarios.forEach(user => {
            const col = document.createElement("div");
            col.className = "col-md-4";
            // Extraer 3 propiedades (avatar_url, login, id) usando template literals
            col.innerHTML = `
                <div class="card p-3 shadow-sm h-100">
                    <img src="${user.avatar_url}" class="card-img-top rounded-circle mx-auto mt-2" style="width: 80px;" alt="Avatar">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${user.login}</h5>
                        <p class="text-muted small">ID: ${user.id}</p>
                        <button class="btn btn-outline-dark btn-sm btn-detalle" data-username="${user.login}">Ver Detalle Completo</button>
                    </div>
                </div>
            `;
            fragmento.appendChild(col);
        });

        // Inserción única al DOM
        contenedorResultados.appendChild(fragmento);
        cambiarEstado("estado-resultados");

        // Escuchar clics para el 2do Fetch
        document.querySelectorAll(".btn-detalle").forEach(btn => {
            btn.addEventListener("click", (e) => {
                obtenerDetalleUsuario(e.target.getAttribute("data-username"));
            });
        });
    };

    // BLOQUE 2.1: SEGUNDO FETCH (Vista de Detalle)
    const obtenerDetalleUsuario = async (username) => {
        const modal = new bootstrap.Modal(document.getElementById('modalDetalle'));
        modal.show();
        
        document.querySelector("#modal-cargando").classList.remove("d-none");
        document.querySelector("#modal-contenido").classList.add("d-none");

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error("No se pudo cargar el perfil.");
            
            const userDetails = await response.json();

            // Inyectar datos en el Modal
            document.querySelector("#mod-avatar").src = userDetails.avatar_url;
            document.querySelector("#mod-nombre").textContent = userDetails.name || userDetails.login;
            document.querySelector("#mod-bio").textContent = userDetails.bio || "Este usuario no tiene biografía.";
            document.querySelector("#mod-repos").textContent = userDetails.public_repos;
            document.querySelector("#mod-followers").textContent = userDetails.followers;

            document.querySelector("#modal-cargando").classList.add("d-none");
            document.querySelector("#modal-contenido").classList.remove("d-none");

        } catch (error) {
            document.querySelector("#mod-nombre").textContent = "Error de carga";
            document.querySelector("#modal-cargando").classList.add("d-none");
            document.querySelector("#modal-contenido").classList.remove("d-none");
        }
    };

    // EVENTOS CLICK
    btnBuscar.addEventListener("click", () => {
        ultimaQuery = inputBusqueda.value.trim();
        if (ultimaQuery) buscarPerfilesAPI(ultimaQuery);
    });

    btnReintentar.addEventListener("click", () => {
        if (ultimaQuery) buscarPerfilesAPI(ultimaQuery);
    });
});
