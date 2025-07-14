import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';

@NgModule({
  declarations: [ //Acá van componentes
    AppComponent, PadreComponent
  ],
  imports: [ // Acá van algunos módulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Acá pueden ir o no componentes dependiendo de si está conectado con otros
  bootstrap: [AppComponent]
})
export class AppModule { }
