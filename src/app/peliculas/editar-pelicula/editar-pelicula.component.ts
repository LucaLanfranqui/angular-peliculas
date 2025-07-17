import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
@Input({transform : numberAttribute})
id!: number;

pelicula: PeliculaDTO = {id:1, titulo: 'spider-man', trailer: 'ABC',fechaLanzamiento: new Date('2018-07-25'),poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Moana.svg/220px-Moana.svg.png'};

generosSeleccionados:SelectorMultipleDTO[] = [
  {llave: 2, valor: "comedia"},
];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: "drama"},

    {llave: 3, valor: "accion"},

  ]

guardarCambios(pelicula: PeliculaCreacionDTO){
  console.log("Editando pelicula",pelicula)
}
}
