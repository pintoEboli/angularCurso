export class Alumnos {

    nombre: string;
    apellido: string;
    edad: number;
    curso: number;
    fecha: Date;
    telefono: number;

    
    constructor(nombre:string,apellido:string,edad:number,curso:number,fecha:Date,telefono:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.fecha = fecha;
        this.telefono = telefono;
    }
}   
