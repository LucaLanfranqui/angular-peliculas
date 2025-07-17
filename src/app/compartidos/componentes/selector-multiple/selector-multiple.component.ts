import { Component, Input, input, Output } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {

  @Input({required:true})
  Seleccionados!: SelectorMultipleDTO[];

  @Input({required:true})
  NoSeleccionado!: SelectorMultipleDTO[];

seleccionar(elemento: SelectorMultipleDTO, indice:number){
  this.Seleccionados.push(elemento);
  this.NoSeleccionado.splice(indice,1);
}
deseleccionar(elemento:SelectorMultipleDTO, indice:number){
  this.NoSeleccionado.push(elemento);
  this.Seleccionados.splice(indice,1);

}
seleccionarTodo(){
  this.Seleccionados.push(...this.NoSeleccionado);
  this.NoSeleccionado.length=0;
}
deseleccionarTodo(){
  this.Seleccionados.push(...this.Seleccionados);
  this.Seleccionados.length=0;
}




}
