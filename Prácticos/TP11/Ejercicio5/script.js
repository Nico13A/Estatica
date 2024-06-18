/*
Desarrollar una librería javascript con las funciones de
suma(X,Y), resta(X,Y), división(X,Y), multiplicación(X,Y), potencia(X,Y),
cuadrado(X). 
*/

function suma(x, y) {
    return parseInt(x) + parseInt(y);
}
/*
function resta(x, y) {
    let resultado = null;
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 - num2;
    }
    return resultado;
}*/
function resta(x, y) {
    return parseInt(x) - parseInt(y);
}

function division(x, y) {
    let resultado = null;
    if (y > 0) {
        resultado = parseInt(x) / parseInt(y);
    }
    return resultado;
}

function multiplicacion(x, y) {
    return parseInt(x) * parseInt(y);
}

function potencia(x, y) {
    let resultado = 1;
    for (let i = 0; i < y; i++) {
        resultado *= parseInt(x);
    }
    return resultado;
}

function cuadrado(x) {
    return parseInt(x) * parseInt(x);
}

// Función operar

function operar(operacion) {
    let x = prompt(`Ingrese el primer número:`);
    let y;
    if (operacion != 'cuadrado') {
        y = prompt(`Ingrese el segundo número:`);
    }
    let resultado = null;
    switch (operacion) {
        case 'suma':
            resultado = suma(x, y);
            break;
        case 'resta':
            resultado = resta(x, y);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(x, y);
            break;
        case 'division':
            resultado = division(x, y);
            break; 
        case 'potencia':
            resultado = potencia(x, y);
            break;
        case 'cuadrado':
            resultado = cuadrado(x);
            break;
    }
    document.getElementById('salida').value += `${operacion}: ${resultado}\n`;
}