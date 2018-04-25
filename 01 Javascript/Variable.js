console.log('Hola Mundo!');
var mutar;
var nombre = 'Darwin';
mutar = nombre
var edad = 28;
mutar = edad
var peso = 305.1
mutar = peso
var casado = false;
mutar = casado
var fechaNacimiento = new Date();
mutar = fechaNacimiento
var noExisto = null
var noEstoyDefinido = undefined

//identar
//cmd + A
//cmd + alt + L
if (noExisto) {
    console.log('Verdadero Existo')
} else {
    console.log('Falso Existo')
}

if (noEstoyDefinido) {
    console.log('Verdadero Definido')
} else {
    console.log('Falso Definido')
}

//en javascript
//0=false
//1=true
//-1=true
var num = 0;
if (num) {
    console.log('Verdadero Numero')
} else {
    console.log('Falso Numero')
}

//Objeto JSON aunque en Javascript simplemente
//Objetos
var usuario = {
    "nombre": "Darwin",
    apellido: "Eguez",
    cedula: 'Eguez',
    edad: 28, //buena practica poner coma al final
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
};
console.log(usuario.nombre);
console.log(usuario);
//eliminar atributos
delete usuario.edad
console.log(usuario);
//agregar atributos
usuario.fechaNacimiento = new Date();
console.log(usuario)
usuario.mascotas = {};
usuario.mascotas.nombre = "Gato";
console.log(usuario);

//ARREGLOS
var arreglo = [
    1,
    "Adrian",
    //se imprime solo el nombre
    usuario.imprimir,
    //se imprime undefined
    usuario.imprimir(),
    true,
    undefined,
    null,
    new Date(),
    {
        nombre: "Darwin"
    },
    [1, 2, 3, true]
]
console.log(arreglo)

//se sobreentiende que es var los parametros
function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1, 3));
console.log(sumarNumeros(1, 4554.34));

var potenciaDeDos = function noEsNecesarioPonerElNombre(numero) {

};
//funciones anonimas
var potenciaDeDos = function (numero) {

};
//java
//papas estrictos: no te deja tener novia, salir, etc
//javascript
//papas drogadictos: que le deja chupar, beber
//typescript
//papa intermedio: como que estricto y un poco liberal


var usuario2 = {
    "nombre": "Darwin",
    apellido: "Eguez",
    cedula: 'Eguez',
    edad: 28, //buena practica poner coma al final
    edadAlCuadrado: potenciaDeDos(this.edad),
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad)
    }
};

usuario2.imprimir();

usuario2.imprimir;
console.log








