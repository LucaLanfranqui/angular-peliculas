import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados:SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: "drama"},
    {llave: 2, valor: "comedia"},
    {llave: 3, valor: "accion"},

  ]
  
  cinesSeleccionados:SelectorMultipleDTO[] = [];
  cinessNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: "agora mall"},
    {llave: 2, valor: "acropolis"},
    {llave: 3, valor: "blue mall"},

  ]


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log("creando pelicula",pelicula)
  }
}
