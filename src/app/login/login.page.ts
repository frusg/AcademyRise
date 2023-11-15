import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    // Aquí implementarías la lógica de autenticación
    this.authService.login(this.user.email, this.user.password).subscribe((response) => {
      if (response.success) {
        this.router.navigate(['home']);
      } else {
        // Manejo de errores
      }
    });
  }
}
