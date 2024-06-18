/**
 * Función para crear un elemento <span> de error junto al campo y mostrar un mensaje de error.
 * @param {HTMLInputElement | HTMLSelectElement} campo 
 * @param {string} mensaje 
 */
const crearSpanError = (campo, mensaje) => {
    let spanError = campo.nextElementSibling;
    if (!spanError || spanError.tagName.toLowerCase() !== "span") {
        spanError = document.createElement("span");
        spanError.classList.add("span-error");
        agregarBordeError(campo);
        campo.parentNode.insertBefore(spanError, campo.nextElementSibling);
    }
    spanError.textContent = mensaje;
}

/**
 * Función que agrega una clase borde.
 * @param {HTMLInputElement | HTMLSelectElement} campo 
 * @returns 
 */
const agregarBordeError = campo => campo.classList.add("border-error");

/**
 * Función que borra una clase borde.
 * @param {HTMLInputElement | HTMLSelectElement} campo 
 * @returns 
 */
const borrarBordeError = campo => campo.classList.remove("border-error");

/**
 * Valida el campo de entrada según reglas específicas y muestra mensajes de error visuales 
 * si es necesario.
 * @param {HTMLInputElement | HTMLSelectElement} nombreCampo 
 * @param {string} mensajeIncompleto 
 * @param {string} mensajeValidacion 
 * @param {RegExp} regex 
 * @returns {boolean}
 */
const validarCampo = (nombreCampo, mensajeIncompleto, mensajeValidacion, regex = null) => {
    let validacion = false;
    if (nombreCampo.value.trim() === "") {
        crearSpanError(nombreCampo, mensajeIncompleto);
    } else if (regex && !regex.test(nombreCampo.value.trim())) {
        crearSpanError(nombreCampo, mensajeValidacion);
    } else {
        let spanError = nombreCampo.nextElementSibling;
        if (spanError && spanError.tagName.toLowerCase() === "span") {
            spanError.remove();
            borrarBordeError(nombreCampo);
        }
        validacion = true;
    }
    return validacion;
};

/**
 * Dado un año, retorna verdadero si es bisiesto, falso en caso contrario.
 * @param {number} anio 
 * @returns {boolean}
 */
const esAnioBisiesto = anio => (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

/**
 * Valida si un día dado es válido para un mes y año específico.
 * @param {number} dia 
 * @param {number} mes 
 * @param {number} anio 
 * @returns {boolean}
 */
const validarDia = (dia, mes, anio) => {
    const intDia = parseInt(dia, 10);
    const diasPorMes  = [31, 28 + (esAnioBisiesto(anio) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return intDia >= 1 && intDia <= diasPorMes[mes-1];
}

/**
 * Valida si un número dado representa un mes válido.
 * @param {number} mes 
 * @returns {boolean}
 */
const validarMes = mes => {
    const intMes = parseInt(mes, 10);
    return intMes >= 1 && intMes <= 12;
}

/**
 * Valida si un número dado representa un año válido.
 * @param {number} anio 
 * @returns {boolean}
 */
const validarAnio = anio => {
    const intAnio = parseInt(anio, 10);
    return intAnio > 0;
}

/**
 * Verifica si una fecha formada por día, mes y año es válida.
 * @param {number} dia 
 * @param {number} mes 
 * @param {number} anio 
 * @returns {boolean}
 */
const verificarFecha = (dia, mes, anio) => {
    return validarDia(dia, mes, anio) && validarMes(mes) && validarAnio(anio);
}

/**
 * Valida la fecha ingresada en un formulario, mostrando mensajes de error visuales si es necesario.
 * @param {HTMLInputElement} campoDia
 * @param {HTMLInputElement} campoMes 
 * @param {HTMLInputElement} campoAnio 
 * @param {string} mensajeIncompleto  
 * @param {string} mensajeValidacion 
 * @returns {boolean}
 */
const validarFecha = (campoDia, campoMes, campoAnio, mensajeIncompleto, mensajeValidacion) => {
    let validacion = false;
    const dia = campoDia.value;
    const mes = campoMes.value;
    const anio = campoAnio.value;
    if (dia === "" || mes === "" || anio === "") {
        agregarBordeError(campoDia);
        agregarBordeError(campoMes);
        crearSpanError(campoAnio, mensajeIncompleto);
    }
    else if (!verificarFecha(dia, mes, anio)) {
        agregarBordeError(campoDia);
        agregarBordeError(campoMes);
        crearSpanError(campoAnio, mensajeValidacion);
    }
    else {
        let spanError = campoAnio.nextElementSibling;
        if (spanError && spanError.tagName.toLowerCase() === "span") {
            spanError.remove();
            borrarBordeError(campoDia);
            borrarBordeError(campoMes);
            borrarBordeError(campoAnio);
        }
        validacion = true;
    }
    return validacion;
}

/**
 * Valida todos los campos del formulario antes de enviarlo. Muestra mensajes de error visuales si es necesario.
 * @returns {boolean}
 */
function validar() {

    let validacion = false;

    const campoNombre = document.getElementById('nombre');
    const campoApellido = document.getElementById('apellido');
    const campoEmail = document.getElementById('email');
    const campoDia = document.getElementById('dia');
    const campoMes = document.getElementById('mes');
    const campoAnio = document.getElementById('anio');
    const campoObrasSociales = document.getElementById('obras_sociales');

    let nombreValido = validarCampo(campoNombre, "El nombre es obligatorio", "El nombre contiene caracteres inválidos", /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/);
    let apellidoValido = validarCampo(campoApellido, "El apellido es obligatorio", "El apellido contiene caracteres inválidos", /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/);
    let emailValido = validarCampo(campoEmail, "El email es obligatorio", "El email no es válido", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    let obraSocialValida = validarCampo(campoObrasSociales, "Debe seleccionar una obra social", "");
    let fechaValida = validarFecha(campoDia, campoMes, campoAnio, "La fecha es obligatoria", "Fecha inválida");

    if (nombreValido && apellidoValido && emailValido && obraSocialValida && fechaValida) {
        validacion = true;
        alert("Formulario enviado con éxito");
        document.getElementById("miFormulario").submit();
    
    }

    return validacion;

}

