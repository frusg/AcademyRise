import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlRegister = 'https://your-api-url.com'; // Cambiar esto por la URL de la bbdd
  private urlLogin = 'https://your-api-url.com'; // Cambiar esto por la URL de la bbdd
  
  constructor(private http:HttpClient) { }
//TODO:HACERLO DE TIPO POST
/*   register(email: string, password: string) {
    let apiKey='a7a3243b69121355b0799ce4ebeb61e7';
    let mail =email;   
    let pass = password;
    
    let queryString=`https://api.openweathermap.org/data/2.5/weather?lat=${mail}&lon=${pass}&appid=${apiKey}&units=metric`;
    console.log(queryString);
    return this.http.get(queryString); //poner el post te saldra los parametros por separado variable params
  }

  login(email: string, password: string) {
    let apiKey='a7a3243b69121355b0799ce4ebeb61e7';
    let mail =email;   
    let pass = password;
    
    let queryString=`https://api.openweathermap.org/data/2.5/weather?lat=${mail}&lon=${pass}&appid=${apiKey}&units=metric`;
    console.log(queryString);
    return this.http.get(queryString);
  } */
  register(email: string, password: string, username: string, role: string): Observable<any> {
    const datosRegistro = {
      NombreUsuario: username,
      CorreoElectronico: email,
      ClaveAcceso: password,
      Rol: role
    };
    
    return this.http.post(`${this.urlRegister}/register`, datosRegistro);//poner el post te saldra los parametros por separado variable params
  }

  login(email: string, password: string): Observable<any> {
    const datosLogin = {
      CorreoElectronico: email,
      ClaveAcceso: password
    };
    
    return this.http.post(`${this.urlLogin}/login`, datosLogin);
  }
  



}
