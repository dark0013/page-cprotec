import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {
  imagenes: string[] = [
    'assets/img/Logo convenios y aliados/C_ITSGUAYAQUIL_.png',
  ];
  imagenesCliente: string[] = [
    'assets/img/Logo convenios y aliados/CL_LIS_FASHION.png',
    'assets/img/Logo convenios y aliados/CL_MR.COMPU.png',
    'assets/img/Logo convenios y aliados/CL_Consorcio-Pichincha.png',
  ];
  ngOnInit() {}
}
