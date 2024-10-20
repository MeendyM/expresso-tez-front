import { Component } from '@angular/core';
import { AuthService } from '../../../app/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Asegúrate de importar FormsModule y CommonModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.authService.saveToken(response.token); // Guardar token
        this.router.navigate(['/packages']);         // Redirigir a paquetes
      },
      (error) => {
        this.errorMessage = 'Credenciales inválidas';
      }
    );
  }
}
