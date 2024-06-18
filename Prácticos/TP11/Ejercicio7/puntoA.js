const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.addEventListener('DOMContentLoaded', function() {
    var listaDeMeses = document.getElementById("listaDeMeses");
    //recorrerMesesConFor();
    //recorrerMesesConWhile();
    //recorrerMesesConDoWhile();
    recorrerMesesConForIn();
});

function limpiarLista() {
    listaDeMeses.innerHTML = ''; // Limpiar la lista antes de agregar elementos
}

function recorrerMesesConFor() {
    limpiarLista();
    for (let i = 0; i < meses.length; i++) {
        let li = document.createElement("li");
        li.textContent = meses[i];
        listaDeMeses.appendChild(li);
    }
}

function recorrerMesesConWhile() {
    limpiarLista();
    let i = 0;
    while (i<meses.length) {
        let li = document.createElement("li");
        li.textContent = meses[i];
        listaDeMeses.appendChild(li);
        i++;
    }
}

function recorrerMesesConDoWhile() {
    limpiarLista();
    let i = 0;
    do {
        let li = document.createElement("li");
        li.textContent = meses[i];
        listaDeMeses.appendChild(li);
        i++;
    } while (i < meses.length);
}

function recorrerMesesConForIn() {
    limpiarLista();
    for (let index in meses) {
        let li = document.createElement("li");
        li.textContent = meses[index];
        listaDeMeses.appendChild(li);
    }
}

