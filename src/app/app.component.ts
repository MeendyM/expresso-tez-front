import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';  // Import Router instead of RouterOutlet
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
  showNav: boolean = true;

  constructor(private router: Router) {  // Inject Router here
    this.checkAuthStatus();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is /dashboard
        this.showNav = !event.url.includes('/dashboard');
        //this.showNav = !event.url.includes('/');
      }
    });
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
  images = [
    'https://cdn.pixabay.com/photo/2019/04/12/18/39/landscape-4122841_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/02/09/24/shipping-container-4245980_1280.jpg',

  ];

  currentSlide = 0;

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.images.length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
