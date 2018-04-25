console.log("Hola mundo");
//VARIABLES Y CONSTANTES
//mala practica declarar el tipo de dato si se asigna un valor
var hola1 = 'Hola';
//buena practica si no se asigna el valor
var hola2;
var hola3 = 'Hola';
//constante
var adios = 'Adios';
hola3 = 'Adios';
//error por las constantes
//adios = 'asdasd';
//duck typing
//hola3 = 1;
var hola4;
// buena practica usar ;
var nombre = 'Adrian';
var edad = 28.23;
var casado = false;
var fechaNacimiento = new Date();
//CLASES
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var vicente = {
    nombre: 'Vicente',
    casado: true,
    edad: 53
};
var darwin = new Usuario('Darwin', false, 22);
console.log(darwin);
console.log(vicente);
// ahorramos codigo ya que nos evitamos codigo innecesario
var Usuario2 = /** @class */ (function () {
    //si corremos asi se quitan las propiedad
    //constructor( nombre:string, casado:boolean,protected edad:number){
    //}
    //se usa siempre _ en variables privates o protected
    function Usuario2(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(Usuario2.prototype, "casado", {
        //solo si se va a debuggear (cuando se usa breakspoints ya que no se puede acceder directamente), validar, transformar usar gets and sets
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    //por defecto publica y void
    //public imprimirUsuario():void{
    //}
    //public imprimirUsuario(){
    //}
    Usuario2.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado \u00B4" + this.casado + ", mi edad es " + this._edad;
    };
    return Usuario2;
}());
var darwin2 = new Usuario2('Darwin', false, 22);
console.log(darwin2);
console.log(darwin2.imprimirUsuario("Hola k ase!"));
//las interfaces sirven para tipar datos y tambien para su funcion original que es implementar clases
var carla = {
    nombre: 'Darwinsito',
    //casado: false,
    edad: 28
};
