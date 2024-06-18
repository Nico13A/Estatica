function mostrarPares() {
    // Capturo el elemento div.
    let contenedorNumeros = document.getElementById("numeros");
    for (let i = 0; i < 500; i++) {
        let span = document.createElement("span");
        if (i % 2 == 0) {
            span.textContent = i + " ";
            contenedorNumeros.appendChild(span);
        }
    }
}