function moverDiv() {
    let topValue = document.getElementById("top").value;
    let leftValue = document.getElementById("left").value;
    let cajaRoja = document.getElementById("cajaRoja");

    // Validar los rangos
    if (topValue < 0 || topValue > 100 || leftValue < 0 || leftValue > 400) {
        cajaRoja.innerText = "Indices fuera de rango";
    } else {
        cajaRoja.style.top = topValue + "px";
        cajaRoja.style.left = leftValue + "px";
        cajaRoja.innerText = `Posición de div\nTop: ${topValue}px\nLeft: ${leftValue}px`;
    }
}