import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{ //para usar esta clase fuera de este archivo se debe exportar

    private _personajes: Personaje[] = [{ //Al ser de tipo personaje, deben cumplir con sus dos propiedades (nombre y poder)
        nombre: "Goku",
        poder:1900
      },
      {
        nombre: "Cell",
        poder:1500
      },
      {
        nombre:"Vulma",
        poder: 200
      }
      ];

      get personajes(): Personaje [] { //El getter redibuja en donde se utiliza
          return [...this._personajes];
      }

      constructor(){
        console.log('servicio inicializado')
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
        //se hace push en la propiedad privada del servicio
    }

}