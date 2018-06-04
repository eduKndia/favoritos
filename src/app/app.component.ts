import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../app/vistas/home.html',
  styleUrls: ['../app/vistas/style.css']
})
export class AppComponent {
  public titulo :String;
  public descripcion: String;

  constructor(){
    this.titulo = "APP FAVORITOS";
    this.descripcion = "Aplicación web SPA con Angular 2 para gestionar marcadores online";
  }

}
