import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, NavController } from '@ionic/angular/standalone';
import { MyComponentModule } from "../navbar/components.module";
import { footerComponent } from '../footer/components.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, MyComponentModule,footerComponent,IonicModule,CommonModule]
    
})
export class HomePage {
  constructor(private navCtrl:NavController) {}

  cursos = [
    {
      titulo: 'Curso de Desarrollo Web',
      imagen: 'url_a_la_imagen_del_curso',
      descripcion: 'Aprende a crear sitios web increíbles con HTML, CSS y JavaScript.',
      video: 'url_al_video_del_curso'
    },
    // ... más cursos
  ];

  verVideo(curso: any) {
    // Lógica para manejar la visualización del video
    // Por ejemplo, abrir un modal con un reproductor de video
  }
  openLogin() {
    // Lógica para redirigir a la página de inicio de sesión
    this.navCtrl.navigateForward('/login');
  }

  openRegister() {
    // Lógica para redirigir a la página de registro
    this.navCtrl.navigateForward('/register');
  }
}
