import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclasss',
  templateUrl: './ngclasss.component.html',
  styleUrls: ['./ngclasss.component.css']
})
export class NgclasssComponent implements OnInit {

  titleNgClass ='Ejemplo ngClass';

  //Defino un array de nombres
  public nombres = [
    {nom:"uno",edad:10,color:"blue"},
    {nom:"dos",edad:20,color:"red"},
    {nom:"tres",edad:30,color:"yellow"}
  ];


  constructor() { }

  ngOnInit() {
  }

}
