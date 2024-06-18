function mostrarValoresFuncion() {
    let valoresFuncion = document.getElementById("valoresFuncion");
    for (let i = 0; i < 100; i++) {
        let valor = 3 * i + 5 - (i * i);
        let span = document.createElement("span");
        span.textContent = valor + " ";
        valoresFuncion.appendChild(span);
    }
}