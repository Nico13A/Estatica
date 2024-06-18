function oponentes(P) {
    let paisRival = null;

    const paises1 = ["Argentina", "Bolivia", "Brasil", "Venezuela"];
    const paises2 = ["Colombia", "Costa Rica", "Paraguay", "Ecuador"];

    let indice = paises1.indexOf(P);

    if (indice != -1) {
        paisRival = paises2[indice];
    }

    return paisRival;
}