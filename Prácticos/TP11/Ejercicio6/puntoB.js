function valorSeleccionado(valor) {
    let resultado;
    if (valor < 0) {
        resultado = -1;
    }
    else if (valor >= 0 && valor < 10) {
        resultado = 0;
    }
    else if (valor >= 10 && valor < 50) {
        resultado = 1;
    }
    else if (valor >= 50 && valor < 100) {
        resultado = 2;
    }
    else {
        resultado = 3;
    }
    return resultado;
}