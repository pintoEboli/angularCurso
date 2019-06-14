import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-fun-click',
  templateUrl: './fun-click.component.html',
  styleUrls: ['./fun-click.component.css']
})
export class FunClickComponent implements OnInit {
  titleFunClick: string = "Ejemplo de Funcion Click"; 
  arrayvacio:boolean =false;


  //Objetos de la clase Alumnos
   alumnos1 = new Alumnos("Pedro","Marquez",25,1222,new Date('13-06-2019'),68767868);
   alumnos2 = new Alumnos("David","Marquez",28,1223,new Date('16-06-2019'),68768888);
   alumnos3 = new Alumnos("José","Morales",22,1222,new Date('22-06-2009'),68700888);
   
   //Array de objetos alumnos
   public alumnosArr = [
     {nom: this.alumnos1.nombre, apellido: this.alumnos1.apellido, curso: this.alumnos1.curso, activo: true},
     {nom: this.alumnos2.nombre, apellido: this.alumnos2.apellido, curso: this.alumnos2.curso, activo: true},
     {nom: this.alumnos3.nombre, apellido: this.alumnos3.apellido, curso: this.alumnos3.curso, activo: true}
    ]
    
    eliminarDatos(event,i){
      alert("Registro eliminado n:" + i);
      this.alumnosArr.splice(i,1);
      if(this.alumnosArr.length<1){
        alert("longitud del arr: " + this.alumnosArr.length);
        this.arrayvacio=true;
      }
    }

    /**
   * Carga de nuevo los valores del Array y setea el valor de Vacio a true
   */
  cargarArr(){
    this.alumnosArr = [
      {nom: this.alumnos1.nombre, apellido: this.alumnos1.apellido, curso: this.alumnos1.curso, activo: true},
      {nom: this.alumnos2.nombre, apellido: this.alumnos2.apellido, curso: this.alumnos2.curso, activo: true},
      {nom: this.alumnos3.nombre, apellido: this.alumnos3.apellido, curso: this.alumnos3.curso, activo: true}
     ];
    this.arrayvacio=false;
  }

  constructor() { }

  ngOnInit() {
  }

}
