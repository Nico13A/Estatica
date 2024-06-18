// Ejercicio 3

/*
Hacer una página web con código javascript que inicialice una variable por cada
uno sus datos personales. Y luego las muestre en la página en el formato del
Ejercicio 1.
*/

/*
var nombre = "Nicolas";
var apellido = "Antinao";
var estadoCivil = "Soltero";
var edad = 25;
var fechaNacimiento = "13/07/1998";
var dni = "41050862";

document.write("Datos personales <br>");
document.write("Nombre: " + nombre + "<br>");
document.write("Apellido: " + apellido + "<br>");
document.write("Estado civil: " + estadoCivil + "<br>");
document.write("Edad: " + edad + "<br>");
document.write("Fecha de nacimiento: " + fechaNacimiento + "<br>");
document.write("DNI: " + dni + "<br>");
*/

/*
Hacer una página web con código javascript que inicialice una variable array
con los valores de cada uno sus datos personales. Y luego las imprima en el
formato del Ejercicio 1.
*/

const datosPersonales = ["Nicolas", "Antinao", "Soltero", 25, "13/07/1998", "41050862"];
document.write("Datos personales <br>");
document.write("Nombre: " + datosPersonales[0] + "<br>");
document.write("Apellido: " + datosPersonales[1] + "<br>");
document.write("Estado civil: " + datosPersonales[2] + "<br>");
document.write("Edad: " + datosPersonales[3] + "<br>");
document.write("Fecha de nacimiento: " + datosPersonales[4] + "<br>");
document.write("DNI: " + datosPersonales[5] + "<br>");