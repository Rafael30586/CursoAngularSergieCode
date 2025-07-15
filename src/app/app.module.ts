import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [ //Acá van componentes
    AppComponent, PadreComponent, HijoComponent
  ],
  imports: [ // Acá van algunos módulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Acá pueden ir o no componentes dependiendo de si está conectado con otros
  bootstrap: [AppComponent]
})
export class AppModule { }
