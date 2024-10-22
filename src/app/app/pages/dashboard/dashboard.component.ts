import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isAuthenticated: boolean = false;  // Simulamos autenticación, puedes integrarlo con tu servicio de auth

  constructor(private router: Router) {
    this.checkAuthStatus();
  }

  // Desplazamiento suave a secciones
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Navegación a otras páginas
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
  }

  // Verifica si está autenticado y maneja la navegación a "Mis Paquetes"
  handlePackages() {
    if (this.isAuthenticated== false) {
      const confirmRedirect = confirm('No estás autenticado. ¿Deseas iniciar sesión?');
      if (confirmRedirect) {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/packages']);
    }
  }

  // Cerrar sesión si el usuario está autenticado y quiere registrarse
  logoutAndRegister() {
    if (this.isAuthenticated) {
      const confirmLogout = confirm('Ya tienes una sesión activa. ¿Deseas cerrar sesión para crear una nueva cuenta?');
      if (confirmLogout) {
        this.logout();
        this.router.navigate(['/register']);
      }
    } else {
      this.router.navigate(['/register']);
    }
  }

  // Simulamos el cierre de sesión (deberías usar el servicio real de auth)
  logout() {
    this.isAuthenticated = false;
    alert('Has cerrado sesión');
  }
}
