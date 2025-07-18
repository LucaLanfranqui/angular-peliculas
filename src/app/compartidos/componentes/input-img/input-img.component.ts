import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormularioGenerosComponent } from '../../../generos/formulario-generos/formulario-generos.component';
import { toBase64 } from '../../funciones/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGenerosComponent],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Input({required: true})
  titulo!: string

  @Input()
  urlImagenActual?: string;


  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  imagenBase64?: string;

  cambio(event: Event){
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length>0){
      const file: File = input.files[0];
      toBase64(file).then((valor: string) => this.imagenBase64 = valor)
      .catch(error => console.log(error));
      this.archivoSeleccionado.emit(file);
      this.urlImagenActual = undefined;
    }
  }
}
