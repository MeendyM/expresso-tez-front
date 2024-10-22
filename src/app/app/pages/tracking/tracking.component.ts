import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FormsModule, CommonModule], // Asegúrate de importar FormsModule y CommonModule
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
  trackingNumber: string = '';

  trackShipment() {
    if (this.trackingNumber) {
      console.log('Número de guía:', this.trackingNumber);
      // Aquí puedes añadir la lógica para consultar el estado del envío
    } else {
      alert('Por favor ingrese un número de guía válido.');
    }
  }
}
