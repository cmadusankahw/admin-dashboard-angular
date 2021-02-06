import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { SignupSelectComponent } from './modules/auth/signup-select/signup-select.component';
import { SignupMerchantComponent } from './modules/auth/signup-merchant/signup-merchant.component';
import { NotFoundPageComponent } from './modules/home/not-found-page/not-found-page.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { AdminDashHomeComponent } from './modules/admin/admin-dash/pages/admin-dash-home/admin-dash-home.component';
import { AdminDashboardComponent } from './modules/admin/admin-dash/admin-dashboard/admin-dashboard.component';
import { AdminDashVerificationsComponent } from './modules/admin/admin-dash/pages/admin-dash-verifications/admin-dash-verifications.component';
import { AdminDashPaymentsComponent } from './modules/admin/admin-dash/pages/admin-dash-payments/admin-dash-payments.component';
import { AdminDashUsersComponent } from './modules/admin/admin-dash/pages/admin-dash-users/admin-dash-users.component';
import { AdminDashProfileComponent } from './modules/admin/admin-dash/pages/admin-dash-profile/admin-dash-profile.component';
import { AdminDashCategoriesComponent } from './modules/admin/admin-dash/pages/admin-dash-categories/admin-dash-categories.component';
import { AdminDashReportsComponent } from './modules/admin/admin-dash/pages/admin-dash-reports/admin-dash-reports.component';


const routes: Routes = [
  { path: 'register', component: SignupSelectComponent },
  { path: 'register/common', component: SignupComponent },
  { path: 'register/merchant', component: SignupMerchantComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminDashHomeComponent },
      { path: 'verify', component: AdminDashVerificationsComponent },
      { path: 'payments', component: AdminDashPaymentsComponent },
      { path: 'users', component: AdminDashUsersComponent },
      { path: 'categories', component: AdminDashCategoriesComponent },
      { path: 'reports', component: AdminDashReportsComponent },
      { path: 'profile', component: AdminDashProfileComponent },
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
