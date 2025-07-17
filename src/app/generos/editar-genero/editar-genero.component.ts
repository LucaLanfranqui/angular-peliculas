import { Component, Input, input, numberAttribute } from '@angular/core';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";
import { GeneroDTO, GenerosCreacionDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
@Input({ transform: numberAttribute })
id!: number;

genero: GeneroDTO = {id: 1, nombre: "Comedia"};

guardarCambios(genero : GenerosCreacionDTO){
  console.log('editando el genero', genero);
}
}
