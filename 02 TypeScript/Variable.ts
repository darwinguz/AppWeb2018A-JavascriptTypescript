console.log("Hola mundo");

//VARIABLES Y CONSTANTES
//mala practica declarar el tipo de dato si se asigna un valor
let hola1: String = 'Hola';

//buena practica si no se asigna el valor
let hola2: String;

let hola3 = 'Hola';
//constante
const adios = 'Adios';
hola3 = 'Adios';

//error por las constantes
//adios = 'asdasd';

//duck typing
//hola3 = 1;

let hola4: number | string | boolean;

// buena practica usar ;
let nombre: string = 'Adrian';
let edad: number = 28.23;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

//CLASES
class Usuario {
    //por defecto es public
    public nombre: string;
    apellido: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean, edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}

let vicente = {
    nombre: 'Vicente',
    casado: true,
    edad: 53
};

let darwin: Usuario = new Usuario('Darwin', false, 22);
console.log(darwin);
console.log(vicente);

// ahorramos codigo ya que nos evitamos codigo innecesario
class Usuario2 {
    //si corremos asi se quitan las propiedad
    //constructor( nombre:string, casado:boolean,protected edad:number){
    //}

    //se usa siempre _ en variables privates o protected
    constructor(public nombre: string, private _casado: boolean, protected _edad: number) {

    }

    //solo si se va a debuggear (cuando se usa breakspoints ya que no se puede acceder directamente), validar, transformar usar gets and sets
    get casado() {
        return this._casado
    }

    set casado(casado: boolean) {
        this._casado = casado;
    }

    //por defecto publica y void
    //public imprimirUsuario():void{
    //}
    //public imprimirUsuario(){
    //}
    public imprimirUsuario(saludo: string): string {
        //template strings
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ´${this.casado}, mi edad es ${this._edad}`;
    }
}

let darwin2 = new Usuario2('Darwin', false, 22);
console.log(darwin2);
console.log(darwin2.imprimirUsuario("Hola k ase!"));

//INTERFACES
interface Usuario3 {
    nombre: string;
    //campo opcional
    casado?: boolean;
    edad: number;
}

//las interfaces sirven para tipar datos y tambien para su funcion original que es implementar clases
let carla: Usuario3 = {
    nombre: 'Darwinsito',
    //casado: false,
    edad: 28
};
