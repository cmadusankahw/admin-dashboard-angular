import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { NotFoundPageComponent } from './modules/home/not-found-page/not-found-page.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { AdminDashHomeComponent } from './modules/admin/admin-dash/pages/admin-dash-home/admin-dash-home.component';
import { AdminDashboardComponent } from './modules/admin/admin-dash/admin-dashboard/admin-dashboard.component';
import { AdminDashPaymentsComponent } from './modules/admin/admin-dash/pages/admin-dash-payments/admin-dash-payments.component';
import { AdminDashDriversComponent } from './modules/admin/admin-dash/pages/admin-dash-drivers/admin-dash-drivers.component';
import { AdminDashSettingsComponent } from './modules/admin/admin-dash/pages/admin-dash-settings/admin-dash-settings.component';
import { AdminDashPassengersComponent } from './modules/admin/admin-dash/pages/admin-dash-passengers/admin-dash-passengers.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminDashHomeComponent },
      { path: 'passengers', component: AdminDashPassengersComponent },
      { path: 'payments', component: AdminDashPaymentsComponent },
      { path: 'drivers', component: AdminDashDriversComponent },
      { path: 'settings', component: AdminDashSettingsComponent },
      { path: '**', component: NotFoundPageComponent },
    ], canActivate: [AuthGuard]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
