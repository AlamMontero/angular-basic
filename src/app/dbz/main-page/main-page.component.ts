import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';

@Component({
  selector: 'app-main-page', //usar este nombre para usar
  templateUrl: './main-page.component.html',
  //styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1299
  }

  // agregarNuevoPersonaje(argumento: Personaje){
  //     this.personajes.push(argumento);
  //   }

    constructor( private DbzService: DbzService  ){
      //inyecccion de dependencias
    }

  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }
}
