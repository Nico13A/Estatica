const DOLAR = 1265;
const EURO = 1341.83;
const REAL = 223.75;

function pasarPesosADolares() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = parseFloat((valor / DOLAR).toFixed(2));
    salida = document.getElementById("salida");
    salida.value += `${valor} pesos = ${resultado} dólares\n`;
}

function pasarDolaresAPesos() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = valor * DOLAR;
    salida = document.getElementById("salida");
    salida.value += `${valor} dólares = ${resultado} pesos\n`;
}

function pasarPesosAEuros() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = parseFloat((valor / EURO).toFixed(2));
    salida = document.getElementById("salida");
    salida.value += `${valor} pesos = ${resultado} euros\n`;
}

function pasarEurosAPesos() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = valor * EURO;
    salida = document.getElementById("salida");
    salida.value += `${valor} euros = ${resultado} pesos\n`;
}

function pasarPesosAReal() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = parseFloat((valor / REAL).toFixed(2));
    salida = document.getElementById("salida");
    salida.value += `${valor} pesos = ${resultado} reales\n`;
}

function pasarRealesAPesos() {
    let valor, resultado, salida;
    valor = parseFloat(prompt("Ingrese el valor a convertir: "));
    resultado = valor * REAL;
    salida = document.getElementById("salida");
    salida.value += `${valor} reales = ${resultado} pesos\n`;
}