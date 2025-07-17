import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";
import { GenerosCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router);

  

  guardarCambios(genero : GenerosCreacionDTO){ 
    //this.router.navigate(['/generos']);
    console.log('creando el genero',genero);
  }
}
