import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Asegúrate de que el servicio esté registrado correctamente en el inyector
})
export class AuthService {
  private baseUrl = 'http://localhost:4000'; // URL de tu backend

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/clientes/login`, { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
