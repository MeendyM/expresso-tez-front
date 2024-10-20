import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Nueva forma recomendada en Angular 18

import { LoginComponent } from './app/pages/login/login.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { PackagesComponent } from './app/pages/packages/packages.component';
import { TrackingComponent } from './app/pages/tracking/tracking.component';
import { CompanyInfoComponent } from './app/pages/company-info/company-info.component';
import { CalculateShippingComponent } from './app/pages/calculate-shipping/calculate-shipping.component';
import { AuthGuard } from './app/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Public route (Dashboard)
  { path: 'login', component: LoginComponent }, // Public route (Login)
  { path: 'packages', component: PackagesComponent, canActivate: [AuthGuard] }, // Protected route (Packages)
  { path: 'tracking', component: TrackingComponent }, // Public route (Tracking)
  { path: 'company-info', component: CompanyInfoComponent }, // Public route (Company Info)
  { path: 'calculate-shipping', component: CalculateShippingComponent }, // Public route (Calculate Shipping)
  { path: '**', redirectTo: '/' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes),
    provideHttpClient()  // Nueva configuración para HttpClient
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
