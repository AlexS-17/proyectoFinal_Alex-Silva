const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima);
})

function buscarClima(evt) {
    evt.preventDefault();

    // Validar 
    const ciudad = document.querySelector("#ciudad").value;
    const pais = document.querySelector("#pais").value;

    if (ciudad === "" || pais === "") {
        // Datos invalidos
        mostrarError("Por favor, ingresa el nombre de la ciudad y selecciona el país para conocer el clima");

        return;
    }
    // Consultar la API
}

function mostrarError(mensaje) {
    const alerta = document.querySelector(".bg-red-100");

    if (!alerta) {
        // Mensaje de error
        const alerta = document.createElement("div");

        alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-md", "mx-auto", "mt-6", "text-center");

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    `;

        container.appendChild(alerta);

        // Eliminar el mensaje de error después de cinco segundos con setTimeout
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }


}