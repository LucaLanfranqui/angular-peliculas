import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroDTO, GenerosCreacionDTO } from '../generos';

@Component({
  selector: 'app-formulario-generos',
  imports: [MatButtonModule,RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-generos.component.html',
  styleUrl: './formulario-generos.component.css'
})
export class FormularioGenerosComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  @Input()
  modelo: GeneroDTO | undefined;

  @Output()
  posteoFormulario = new EventEmitter<GenerosCreacionDTO>()

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['',{validators: [Validators.required, primeraLetraMayuscula()]}]
  })

  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return "El campo nombre es requerido.";
    }
    else{
    }
    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }
      return " ";
  }
  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const genero = this.form.value as GenerosCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
