// clase 1
// let a: string ='hola';
// a ='holas';
// a=2;

// let b:number =10;
// b= a;

// function suma(num1, num2) {
//     return num1 + num2;
    
// }


// Clase 2
// class Transporte{
//     private velocidad:number;
//     private formaDeMovilidad:string;

//     constructor(velocidad:number, formaDeMovilidad: string){
//         this.velocidad=velocidad;
//         this.formaDeMovilidad=formaDeMovilidad;

//     }

//     getVelocidad(velocidad:number){
//         this.velocidad =velocidad  ;
//     }
//     getFormaDeMovilidad(formaDeMovilidad:string){
//         this.formaDeMovilidad=formaDeMovilidad;
//     }
//     setFormaDeMovilidad(formaDeMovilidad:string){
//         this.formaDeMovilidad =formaDeMovilidad;
//     }
// }

// const transporte: Transporte =new Transporte(20,'suelo');

// class Auto extends Transporte {
//     private cantidadDePuertas:number;

//     constructor(velocidad:number, formaDeMovilidad: string, cantidadDePuertas:number){
//         super(velocidad, formaDeMovilidad);
//         this.cantidadDePuertas=cantidadDePuertas;
//     }
//     getVelocidad(){
//         return  super.getVelocidad();
//     }

//     getCantidadDePuertas(){
//         return this.cantidadDePuertas;
//     }
//     setCantidadDePuertas(cantidadDePuertas:number){
//         this.cantidadDePuertas=cantidadDePuertas;
//     }
// }
// const auto:Auto =new Auto(20,'suelo',4);

// type Dni=number;

// interface Persona{
//     altura:number;
//     edad?:number;
//     nombre:string;
//     apellido:string;
//     dni:Dni;
// }

// const persona:Persona ={
//     altura:1.69,
//     // edad:27,
//     nombre:'Alan',
//     apellido:'Buscaglia',
//     dni:35502521
// }

// clase 6 shapes
// class Persona{
//     private edad:number;
//     private altura:number;
//     private dni:string;

//     constructor(edad:number,altura:number,dni:string){
//         this.edad =edad;
//         this.altura =altura;
//         this.dni=dni;
//     }
// }
// class Alumno extends Persona{
//     private matricula:string;

//     constructor(edad:number,altura:number,dni:string,matricula:string){
//         super(edad,altura,dni);
//         this.matricula=matricula;

//     }
// }
// let persona:Persona= new Persona(27,1.69, '35502521');
// let alumno:Alumno= new Alumno(27,1.69, '35502521','123');
// persona =alumno;
// alumno =persona;

// clase 7 union types

// type SumaParameter = string | number;
// type SumaReturnType =string | number;

// function Suma(num1:SumaParameter, num2:SumaParameter):SumaReturnType {
//     // return Number(num1) + Number(num2);
//     return String(num1) + num2;
// }

// interface Interface1{
//     prop1:number;
// }
// interface Interface2{
//     prop2:number;
// }
// type InterfaceMix = Interface1 | Interface2;

// const interfaceMix: InterfaceMix ={
//     prop1:2,
//     prop2:2
// }

// clase 8 intersection types

// interface Interface1{
//     prop1:number;
// }
// interface Interface2{
//     prop2:number;
//     prop3:number;
// }

// type InterfaceMix =Interface1 & Interface2;

// const interfaceMix: InterfaceMix ={
//     prop1:2,
//     prop2:2,
//     prop3:2
// }

// clase 9 function type
// type CallBackError =Error | null;
// type CallBack = (error: CallBackError, reponse: object) => void;

// function sendRequest(cb:CallBack):void {
//     if(cb){
//         cb(null,{message:'todo salio como lo planeamos'});
//     }
// }

// clase 10 decorators

function log(target, key) {
    console.log(key + 'se ha llamado');
}

class Persona {
    private name:string;

    constructor(name:string){
        this.name=name;
    }
    @log
    sayMyName(){
        // return this.name;
        console.log( this.name);
        
    }
}

const persona : Persona = new Persona('alan');
persona.sayMyName(); //'alan'
