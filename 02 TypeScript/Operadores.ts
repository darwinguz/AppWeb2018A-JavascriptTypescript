//operadores
let arregloNumeros = [1, 2, 3, 4, 5];

//FAT ARROW FUNCTIONS
//se usa en vez de las funciones anonimas
//en ves de hacer esto
let sumaDosNumeros1 = function () {

};
//hacemos esto
let sumaDosNumeros2 = (numeroUno: number, numeroDos: number): number => {
    return numeroUno + numeroDos;
};
console.log(sumaDosNumeros2(2, 5));

let potenciaDeUnNumero1 = numero => {
    return numero * numero;
};

let potenciaDeUnNumero2 = numero => numero * numero;

let sumarDosNumeros3 = (numeroUno: number, numeroDos: number): number => numeroUno + numeroDos;

let sumaTotal = 0;
let resultadoForEach = arregloNumeros.forEach((valorActual, indiceActual, arreglo) => {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
let resultadoSumaConReduce = arregloNumeros.reduce((valorAcumuladoActual, valorActualArreglo) => {
    console.log('valor acumulado actual: ', valorAcumuladoActual);
    console.log('valor actual arreglo: ', valorActualArreglo);
    return valorAcumuladoActual + valorActualArreglo
}, 0);

console.log(resultadoSumaConReduce);


let resultadoSumaConReduce2 = arregloNumeros.reduce((valorAcumuladoActual, valorActualArreglo) => {
    console.log('valor acumulado actual: ', valorAcumuladoActual);
    console.log('valor actual arreglo: ', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo
}, 20);

console.log(resultadoSumaConReduce2);

let arregloUsuarios1 = [
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
let arregloUsuarios2: UsuarioArreglo[] = [
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
let resultadoEdadUsuarios2 = arregloUsuarios2.reduce((acumuladorEdad: number, usuario: UsuarioArreglo) => {
    return acumuladorEdad + usuario.edad;
}, 0);

console.log(resultadoEdadUsuarios2);
let resultadoEdadUsuarios2P = arregloUsuarios2.reduce((acumuladorEdad: number, usuario: UsuarioArreglo) => acumuladorEdad + usuario.edad, 0);

console.log(resultadoEdadUsuarios2P);

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
    becado?: boolean;
}

let nuevoArregloDeUsuarios2AddDeuda = arregloUsuarios2.map((usuario: UsuarioArreglo) => {
    usuario.deuda = 0;
    return usuario;
});
console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios2AddDeuda);

let nuevoArregloDeUsuarios2CalculaDeuda = arregloUsuarios2.map((usuario: UsuarioArreglo) => {
    usuario.becado = false;
    return usuario;
}).map(
    (usuario: UsuarioArreglo) => {
        usuario.deuda = calcularDeuda(usuario.edad);
        return usuario;
    }
).filter((usuario: UsuarioArreglo) => usuario.edad < 50 //true or false y hace unadd or remove
).some((usuario: UsuarioArreglo) => usuario.edad < 18); //OR: solo devuelve true o false: da true ya que algunos si son menores
    //.every((usuario: UsuarioArreglo) => usuario.edad < 18);// AND: solo devuelve true o false: ya que no hay menores de edad en este caso como no todos son menores de edad da false

function calcularDeuda(edad: number) {
    const totalEdad = arregloUsuarios2.reduce(
        (total,
         usuario: UsuarioArreglo) => total + usuario.edad,
        0
    );
    return totalEdad * (edad / 100);
}

console.clear();
console.log(nuevoArregloDeUsuarios2CalculaDeuda);

