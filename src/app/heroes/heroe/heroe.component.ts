import { Component } from "@angular/core";




@Component({
selector: 'app-herore',
templateUrl: 'heroe.component.html' //usa el template html que esta en el directorio heroe
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{//funcion
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
    this.nombre='Spiderman';
    }

    cambiarEdad(): void{
        this.edad= 30;
    }
}

