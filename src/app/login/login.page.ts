import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  login() {
    if (!this.loginForm.valid) {
      // Mostrar algún error al usuario, como una alerta
      this.showAlert('Error', 'Por favor, ingrese todos los campos.');
      return;
    }

    const formValue = this.loginForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe({
      next: (response) => {
        // Aquí manejarías la lógica post inicio de sesión exitoso
        console.log(response);
        this.router.navigate(['/home']); // Cambiar '/home' por la ruta deseada
      },
      error: (err) => {
        // Aquí manejarías el error de inicio de sesión
        console.error(err);
        this.showAlert('Error de Inicio de Sesión', 'Usuario o contraseña incorrectos.');
      }
    });
  }

  private showAlert(header: string, message: string) {
    this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }
}
