import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModue } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule, //Importo el modulo hecho para heroes
    ContadorModue,
    DbzModule //importo modulo dbz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
