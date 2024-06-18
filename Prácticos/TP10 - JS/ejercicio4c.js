let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let estadoCivil = prompt("Ingrese su estado civil: ");
let edad = prompt("Ingrese su edad: ");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento: ");
let dni = prompt("Ingrese su dni: ");

let confirmacionDeDatos = confirm("¿Desea mostrar sus datos?");

if (confirmacionDeDatos) {
    document.write("Datos personales <br>");
    document.write("Nombre: " + nombre + "<br>");
    document.write("Apellido: " + apellido + "<br>");
    document.write("Estado civil: " + estadoCivil + "<br>");
    document.write("Edad: " + edad + "<br>");
    document.write("Fecha de nacimiento: " + fechaNacimiento + "<br>");
    document.write("DNI: " + dni + "<br>");

    alert("Sus datos han sido impresos.");
}
else {
    alert("El usuario no ha querido mostrar sus datos.");
}
