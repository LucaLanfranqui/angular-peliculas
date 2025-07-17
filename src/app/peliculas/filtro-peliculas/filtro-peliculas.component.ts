import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtropelicula';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit{
  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas)
      this.escribirParametrosBusquedaEnURL(valores as FiltroPeliculas)
    });
  }
  buscarPeliculas(valores: FiltroPeliculas){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  escribirParametrosBusquedaEnURL(valores: FiltroPeliculas){
    let queryString = [];
    if(valores.titulo){
      queryString.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }
    if(valores.generoId!==0){
      queryString.push(`generoId=${valores.generoId}`);
    }
    if(valores.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }
    if(valores.enCines){
      queryString.push(`enCines=${valores.enCines}`);
    }
    this.location.replaceState('peliculas/filtrar',queryString.join('&'));
  }


  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let objeto: any = {};
      if(params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = params.generoId;
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if(params.enCines){
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);
    });
  }

  limpiar(){
    this.form.patchValue({titulo:'', generoId: 0, proximosEstrenos:false, enCines: false});
  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);


  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  })

  generos = [
    {id: 1, nombre: "Drama"},
    {id: 2, nombre: "Accion"},
    {id: 3, nombre: "Comedia"}

  ]
  peliculasOriginal = [
      {
        titulo: 'moana',
        fecha: new Date(),
        precio: 20,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Moana.svg/220px-Moana.svg.png',
        generos : [1],
        enCines: true,
        proximosEstrenos: false
      },
      {
        titulo: 'zootopia',
        fecha: new Date(),
        precio: 100,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zootopia_logo.svg/260px-Zootopia_logo.svg.png',
        generos : [1,2],
        enCines: false,
        proximosEstrenos: true
      },
      {
        titulo: 'batman',
        fecha: new Date(),
        precio: 120,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Batman_Begins_logo.png/250px-Batman_Begins_logo.png',
        generos : [3],
        enCines: false,
        proximosEstrenos: false
      },
      {
        titulo: 'x-men',
        fecha: new Date(),
        precio: 400,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/X-Men_movie_logo.png/220px-X-Men_movie_logo.png',
        generos : [1,3],
        enCines: false,
        proximosEstrenos: true
      }
    ];
    peliculas = this.peliculasOriginal;
}
