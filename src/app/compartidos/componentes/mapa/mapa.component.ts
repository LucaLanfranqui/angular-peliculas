import { Component, EventEmitter, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, Marker, marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { MatIconAnchor } from '@angular/material/button';
import { Coordenada } from './Coordenada';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>()
  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
option = {
  layers: [
    tileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '...'
    })
  ],
  zoom: 14,
  center: latLng(-38.019696450846126, -57.57210761628704)
}
capas: Marker<any>[] = [];
manejarClick(event: LeafletMouseEvent){
  const latitud = event.latlng.lat;
  const longitud = event.latlng.lng;
  
  this.capas = [];
  this.capas.push(marker([latitud,longitud],this.markerOptions))
  this.coordenadaSeleccionada.emit({latitud, longitud})
}
}


