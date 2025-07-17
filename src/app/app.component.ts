import { CurrencyPipe, DatePipe, NgFor, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { FetchBackend } from '@angular/common/http';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, DatePipe, CurrencyPipe, NgFor, NgOptimizedImage, ListadoPeliculasComponent, MenuComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  

  /*duplicarValor(valor : number) : number{
    return valor * 2;
  }
    */
}
