import { Component, Input, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';
//import * as EventEmitter from 'events';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {
  
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private DbzService: DbzService){
    //HAY que inyectar e importar el servicio
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre:"",
      poder: 0
    }

  }
  
}
