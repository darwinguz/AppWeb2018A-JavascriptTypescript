//operadores
var arregloNumeros = [1, 2, 3, 4, 5];
//FAT ARROW FUNCTIONS
//se usa en vez de las funciones anonimas
//en ves de hacer esto
var sumaDosNumeros1 = function () {
};
//hacemos esto
var sumaDosNumeros2 = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumaDosNumeros2(2, 5));
var potenciaDeUnNumero1 = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumero2 = function (numero) { return numero * numero; };
var sumarDosNumeros3 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valor acumulado actual: ', valorAcumuladoActual);
    console.log('valor actual arreglo: ', valorActualArreglo);
    return valorAcumuladoActual + valorActualArreglo;
}, 0);
console.log(resultadoSumaConReduce);
var resultadoSumaConReduce2 = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valor acumulado actual: ', valorAcumuladoActual);
    console.log('valor actual arreglo: ', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaConReduce2);
var arregloUsuarios1 = [
    {
        nombre: "Darwin",
        edad: 22
    }, {
        nombre: "Carlos",
        edad: 10
    }, {
        nombre: "Joss",
        edad: 15
    }, {
        nombre: "Freddy",
        edad: 11
    }, {
        nombre: "Liz",
        edad: 54
    },
];
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios2 = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Gabriela',
        edad: 10
    },
    {
        nombre: 'Felipe',
        edad: 68
    },
    {
        nombre: 'Wendy',
        edad: 32
    },
    {
        nombre: 'Roberto',
        edad: 18
    }
];
var resultadoEdadUsuarios2 = arregloUsuarios2.reduce(function (acumuladorEdad, usuario) {
    return acumuladorEdad + usuario.edad;
}, 0);
console.log(resultadoEdadUsuarios2);
var resultadoEdadUsuarios2P = arregloUsuarios2.reduce(function (acumuladorEdad, usuario) { return acumuladorEdad + usuario.edad; }, 0);
console.log(resultadoEdadUsuarios2P);
var nuevoArregloDeUsuarios2AddDeuda = arregloUsuarios2.map(function (usuario) {
    usuario.deuda = 0;
    return usuario;
});
console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios2AddDeuda);
var nuevoArregloDeUsuarios2CalculaDeuda = arregloUsuarios2.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) { return usuario.edad < 50; } //true or false y hace unadd or remove
).some(function (usuario) { return usuario.edad < 18; }); //OR: solo devuelve true o false: da true ya que algunos si son menores
//.every((usuario: UsuarioArreglo) => usuario.edad < 18);// AND: solo devuelve true o false: ya que no hay menores de edad en este caso como no todos son menores de edad da false
function calcularDeuda(edad) {
    var totalEdad = arregloUsuarios2.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edad / 100);
}
console.clear();
console.log(nuevoArregloDeUsuarios2CalculaDeuda);
