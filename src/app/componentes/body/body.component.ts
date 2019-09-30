import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent  {

  mostrar=true;

  frase: any ={
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };

personajes: string []= ['Spiderman','Venom','Dr.Octopus'];

 /*constructor() { }

  ngOnInit() {
  }*/

}
