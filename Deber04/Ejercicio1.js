//EJERCICIO #1
function validarNumeroDeStringsEnArreglo(arreglo) {
    if (Array.isArray(arreglo)) {
        contador = 0
        for (i = 0; i < arreglo.length; i++) {
            if (typeof arreglo[i] == "string") contador++
        }
        return contador
    } else {
        return 0;
    }
}

//TEST
var arreglo = ["HOLA", 1, "Adrian", true, undefined, null, new Date(), {nombre: "Darwin"}, [1, 2, 3, true]];
console.log("NUMERO TOTAL DE STRINGS = " + validarNumeroDeStringsEnArreglo(arreglo));
