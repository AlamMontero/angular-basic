
import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>base</strong></h3>

        <button (click)="acomular(base)">{{base}}</button> 
        <!-- El evento va entre parentesis, despues del igual se indica la accion -->
        <span>{{ numero }}</span>
        <button (click)="acomular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador APP';
    public numero: number = 10;
    public base: number = 5;

    acomular(valor: number) {
    this.numero += valor;
}
}
