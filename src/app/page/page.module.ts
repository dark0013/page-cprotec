import { NgModule } from '@angular/core';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PlatafotmaeducativaComponent } from './platafotmaeducativa/platafotmaeducativa.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PageRoutingModule } from './page-routing.module';
import { CommonModule } from '@angular/common';
import { ServiciopadreComponent } from './serviciopadre/serviciopadre.component';



@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule
    ],
    exports: [],
    declarations: [
        ContactanosComponent,
        CapacitacionesComponent,
        ProduccionComponent,
        SolucionesComponent,
        ServiciosComponent,
        ServiciosComponent,
        PlatafotmaeducativaComponent,
        NoticiasComponent,

        NosotrosComponent,
        ServiciopadreComponent,
    ],
    providers: [],
})
export class PageModule { }
