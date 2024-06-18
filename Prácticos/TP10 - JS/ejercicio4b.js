let numeroUno = parseInt(prompt("Ingrese un número: "));
let numeroDos = parseInt(prompt("Ingrese otro número: "));

if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Error, no ingreso números para realizar las operaciones.");
}
else {
    let suma = numeroUno + numeroDos;
    let resta = numeroUno - numeroDos;
    let division = numeroUno / numeroDos;
    let multiplicacion = numeroUno * numeroDos;
    document.write(`Suma: ${suma} <br>`);
    document.write(`Resta: ${resta} <br>`);
    document.write(`División: ${division} <br>`);
    document.write(`Multiplicación: ${multiplicacion} <br>`);
}