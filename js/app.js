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
    consultarAPI()
    consultarAPI2()
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

function consultarAPI(ciudad, pais) {

    const urlgeo = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&appid=${apiKey}`;

    fetch(urlgeo)
        .then(respuesta => respuesta.json())
        .then(datos => consultarAPI2(datos[0].lat, datos[0].lon))
}

function consultarAPI2(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
    .then( respuesta => respuesta.json())
    .then(datos => console.log(datos))
}
