import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

get personajes(){
  return this.DbzService.personajes; //es el getter de personajes que se encuentra en services
}

constructor(private DbzService: DbzService){
}

}
