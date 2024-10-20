import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router instead of RouterOutlet
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private router: Router) {  // Inject Router here
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigate(['/']);  // Use the Router service to navigate
  }
}
