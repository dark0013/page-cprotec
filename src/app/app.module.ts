import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { CapacitacionesComponent } from './page/capacitaciones/capacitaciones.component';
import { SolucionesComponent } from './page/soluciones/soluciones.component';
import { ProduccionComponent } from './page/produccion/produccion.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { ServiciospadreComponent } from './page/serviciospadre/serviciospadre.component';
import { PlatafotmaeducativaComponent } from './page/platafotmaeducativa/platafotmaeducativa.component';
import { NoticiasComponent } from './page/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    CapacitacionesComponent,
    ProduccionComponent,
    SolucionesComponent,
    ServiciosComponent,
    ServiciospadreComponent,
    PlatafotmaeducativaComponent,
    NoticiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
