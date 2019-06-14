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
    {nom:"uno",edad:10,color:"blue",hidden:true},
    {nom:"dos",edad:20,color:"red",hidden:false},
    {nom:"tres",edad:30,color:"yellow",hidden:true},
    {nom:"cuatros",edad:40,color:"pink",hidden:true}
  ];


  constructor() { }

  ngOnInit() {
  }

}
