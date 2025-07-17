import { CurrencyPipe, DatePipe, NgFor, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [RouterOutlet, UpperCasePipe, DatePipe, CurrencyPipe, NgFor, NgOptimizedImage, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input({required:true})
  peliculas!: any[]
}
