//EJERCICIO #3
function calcularNumeroDeOsos(meses, numOsos) {
    var mes = 0;
    while (++mes < meses) {
        numOsos *= 4;
        if (numOsos > 10000) {
            numOsos /= 2;
            console.log("Removiendo " + numOsos + " osos de anteojos de la población.");
        }
        console.log("Van a existir " + numOsos + " osos de anteojos después del mes " + mes + ".")
    }
}
//TEST
var meses = 6;
var numOsosIniciales = 50;
calcularNumeroDeOsos(meses, numOsosIniciales);
