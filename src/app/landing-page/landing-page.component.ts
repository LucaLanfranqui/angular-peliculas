import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'moana',
          fecha: new Date(),
          precio: 20,
          poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Moana.svg/220px-Moana.svg.png'
        },
        {
          titulo: 'zootopia',
          fecha: new Date(),
          precio: 100,
          poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zootopia_logo.svg/260px-Zootopia_logo.svg.png'
        }
      ]
      this.peliculasEstreno = [
        {
          titulo: 'batman',
          fecha: new Date(),
          precio: 120,
          poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Batman_Begins_logo.png/250px-Batman_Begins_logo.png'
        },
        {
          titulo: 'x-men',
          fecha: new Date(),
          precio: 400,
          poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/X-Men_movie_logo.png/220px-X-Men_movie_logo.png'
        }
      ]
    },2000)
  }
  
  peliculasEnCine!: any[]
  peliculasEstreno!: any []
  
}
