import { Component, Input } from '@angular/core';
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
