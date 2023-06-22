import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  datosNoticias: any[] = [
    {
      imagen: "https://jpegcomputer.com/wp-content/uploads/2021/12/img_28871.jpg", titulo: "PROTEGE TU EQUIIPO DE LOS VIRUS INFORMÁTICO", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
      imagen: "https://enterate24backup.s3.amazonaws.com/uploads/2020/09/internet_12529983_20191031174711.jpg", titulo: "INTERCONECCIÓN EN REDES", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
      imagen: "https://static.wixstatic.com/media/35ed10_cc1920031f354699a57c53ef5bf0441a~mv2.png/v1/fill/w_640,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35ed10_cc1920031f354699a57c53ef5bf0441a~mv2.png", titulo: "INTELIGENCIA ARTIFICIAL EN CONTABILIDAD", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
      imagen: "https://www.josedomingo.org/pledin/assets/wp-content/uploads/2016/02/docker2.png", titulo: "DOCKER", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
      imagen: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/06/angular.png?fit=1024%2C538&ssl=1", titulo: "ANGULAR", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }, {
      imagen: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg", titulo: "REACTJS", cotextos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  ]

}
