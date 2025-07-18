import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, RouterLink, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input({required:true})
  generosNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  generosSeleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  cinesNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  CinesSeleccionados!: SelectorMultipleDTO[];


  @Input()
  modelo?: PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['',{validators: [Validators.required]}],
    fechaLanzamiento: new FormControl<Date | null>(null,{validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string | null>(null)
  }
  )
  archivoSeleccionado(file: File){
    this.form.controls.poster.setValue(file)
  }
  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const pelicula = this.form.value as PeliculaCreacionDTO;
    
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    pelicula.generosIds = generosIds;

    const cinesIds = this.CinesSeleccionados.map(val => val.llave);
    pelicula.cinesIds = cinesIds;


    this.posteoFormulario.emit(pelicula)
  }
  obtenerErrorCampoTitulo(): string{
    let campo = this.form.controls.titulo;
    if(campo.hasError('required')){
      return "El campo es requerido"
    }
    return '';
  }
  obtenerErrorCampoFechaLanzamiento(): string{
    let campo = this.form.controls.fechaLanzamiento;
      if(campo.hasError('required')){
        return "El campo es requerido"
      }
      return '';
    }
}
