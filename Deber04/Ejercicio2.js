//EJERCICIO #2
function activarGeneradores(activador) {
    var genT1 = 62;
    var genT2 = 124;
    var generadores = [genT1, genT1, genT1, genT1, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2, genT2];
    var numGeneneradoresT1 = 4;
    var totalMW = 0;

    var contador = -1;
    while (++contador < numGeneneradoresT1) {
        imprimirTotalMW();
    }

    for (contador = numGeneneradoresT1; contador < generadores.length; contador++) {
        imprimirTotalMW();
    }

    function imprimirTotalMW() {
        totalMW += generadores[contador];
        console.log("Generador #" + (contador + 1) + " está " + (estaEncendido() ? "prendido, añadiendo " + generadores[contador] + " MW para un totalMW de " + totalMW + " MW." : "apagado."));
    }

    function estaEncendido() {
        switch (activador) {
            case "pares":
                return (contador + 1) % 2 == 0;
            case "impares":
                return (contador + 1) % 2 != 0;
            default: //"todos"
                return true;
        }
    }
}

//TEST
//"todos", "pares" o "impares"
activarGeneradores("pares");