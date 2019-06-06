import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directiva dirNgFor';
  title2 = 'Cursos Opcionales';
    
  //Defino un array de nombres
  public nombres = [
    {nom:"uno",edad:10},
    {nom:"dos",edad:20},
    {nom:"tres",edad:30}
  ];

  //Defino un array de curso
  public cursos = [
    {nombreCurso:"Angular",codigo:123},
    {nombreCurso:"TypeScript",codigo:223},
    {nombreCurso:"bootstrap4",codigo:444},
    {nombreCurso:"J2EE",codigo:555}
  ]
  
  //Template de variable literal
  texto = `Hola ${ this.nombres[1].nom}, el curso tomado es: ${ this.cursos[0].nombreCurso }.
  ${ this.nombres[2].nom}, el curso tomado es: ${ this.cursos[1].nombreCurso }.          `;

}
