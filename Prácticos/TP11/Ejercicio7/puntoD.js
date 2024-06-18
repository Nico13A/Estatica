function factorial(n) {
    let valor = 1;
    if (n < 0) {
        valor = null;
    }
    else {
        for (let i = 1; i <= n; i++) {
            valor *= i;
        }
    }
    return valor;
}