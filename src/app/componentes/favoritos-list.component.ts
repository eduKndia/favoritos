import { Component } from "@angular/core";

@Component({
    selector:"favoritos-list",
    templateUrl: "../../app/vistas/favoritos-list.html"
})

export class  FavoritosListComponent {
    public title : String;

    constructor(){
        this.title = 'Listado de marcadores:';
    }
}