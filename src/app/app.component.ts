import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Registro de usuarios';
  nombre:string="";
  apellido:string="";
  mensaje:string="";
  registrado:boolean=false;
  titulo:string="";
  cargo:string="";

  entradas: any[];

  constructor(){
    this.entradas=[
      {titulo:"python cada dia mas presente"},
      {titulo:"java aun vigente"},
      {titulo:"C# abarca mas mercado"},
      {titulo:"TS le gana terreno a js"}
    ]
  }

  registrarUsuario(){
    this.mensaje="Usuario registrado con exito:";
    this.registrado=true;
  }


}
