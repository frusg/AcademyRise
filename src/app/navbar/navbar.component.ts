import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}
  
  openLogin() {
    // Lógica para redirigir a la página de inicio de sesión
    this.navCtrl.navigateForward('/login');
  }

  openRegister() {
    // Lógica para redirigir a la página de registro
    this.navCtrl.navigateForward('/register');
  }

}
