import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    if (this.user.password !== this.user.confirmPassword) {
      // Mostrar algún error al usuario
      return;
    }

    // Aquí implementarías la lógica de registro
    this.authService.register(this.user.email, this.user.password).subscribe((response) => {
      if (response.success) {
        this.router.navigate(['login']);
      } else {
        // Manejo de errores
      }
    });
  }
}
