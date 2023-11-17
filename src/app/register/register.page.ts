import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, ReactiveFormsModule]
})

export class RegisterPage implements OnInit {
  //registerForm: any;
  registerForm: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router, private alertController: AlertController, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required]],
      role: ['alumno', [Validators.required]]
    });
  }

  ngOnInit() {
    console.log("Se a cargado el onInit de register");
  }
  
  register() {
    if (!this.registerForm.valid) {
      // Mostrar algún error al usuario, como una alerta
      this.showAlert('Error', 'El formulario no es válido.');
      return;
    }

    const formValue = this.registerForm.value;
    if (formValue.password !== formValue.confirmPassword) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    
    this.authService.register(formValue.email, formValue.password, formValue.username, formValue.role).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error(err);
        this.showAlert('Error de Registro', err.error.message);
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
