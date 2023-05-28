import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './page/contactanos/contactanos.component';

const routes: Routes = [
  {
    path: 'page/contactanos', component: ContactanosComponent
  },
  /*{
    path: '', component: ContactanosComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
