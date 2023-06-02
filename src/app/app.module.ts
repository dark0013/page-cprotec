import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { CapacitacionesComponent } from './page/capacitaciones/capacitaciones.component';
import { SolucionesComponent } from './page/soluciones/soluciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    CapacitacionesComponent,
    SolucionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
