import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputsModule,
        InputUtilitiesModule,
        WavesModule,
        ButtonsModule,
        ModalModule,
        TableModule,
        ChartsModule,
        CarouselModule } from 'angular-bootstrap-md';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatDialogModule } from '@angular/material';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgbModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatSliderModule} from '@angular/material/slider';
import { DatePipe } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { QuillModule } from 'ngx-quill';
import { QRCodeModule } from 'angularx-qrcode';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/auth/header/header.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { SignupSelectComponent } from './modules/auth/signup-select/signup-select.component';
import { FooterComponent } from './modules/home/footer/footer.component';
import { SignupMerchantComponent } from './modules/auth/signup-merchant/signup-merchant.component';
import { CardDetailsComponent } from './modules/auth/card-details/card-details.component';
import { IdVerifyComponent } from './modules/auth/id-verify/id-verify.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BusinessVerifyComponent } from './modules/auth/business-profile/business-verify/business-verify.component';
import { BprofileComponent } from './modules/auth/business-profile/bprofile/bprofile.component';
import { BusinessOpenDaysComponent } from './modules/auth/business-profile/business-open-days/business-open-days.component';
import { MerchantProfileComponent } from './modules/auth/merchant-profile/merchant-profile.component';
import { ContactUsComponent } from './modules/home/contact-us/contact-us.component';
import { NotFoundPageComponent } from './modules/home/not-found-page/not-found-page.component';
import { AuthInterceptor } from './modules/auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { TeramsConditionsComponent } from './modules/home/terams-conditions/terams-conditions.component';
import { AdminDashboardComponent } from './modules/admin/admin-dash/admin-dashboard/admin-dashboard.component';
import { AdminDashHomeComponent } from './modules/admin/admin-dash/pages/admin-dash-home/admin-dash-home.component';
import { AdminDashVerificationsComponent } from './modules/admin/admin-dash/pages/admin-dash-verifications/admin-dash-verifications.component';
import { AdminDashPaymentsComponent } from './modules/admin/admin-dash/pages/admin-dash-payments/admin-dash-payments.component';
import { AdminDashProfileComponent } from './modules/admin/admin-dash/pages/admin-dash-profile/admin-dash-profile.component';
import { AdminDashUsersComponent } from './modules/admin/admin-dash/pages/admin-dash-users/admin-dash-users.component';
import { AdminUsersComponent } from './modules/admin/admin-users/admin-users.component';
import { AdminPaymentsComponent } from './modules/admin/admin-payments/admin-payments.component';
import { AdminDashCategoriesComponent } from './modules/admin/admin-dash/pages/admin-dash-categories/admin-dash-categories.component';
import { AdminDashReportsComponent } from './modules/admin/admin-dash/pages/admin-dash-reports/admin-dash-reports.component';
import { AdminBackupComponent } from './modules/admin/admin-backup/admin-backup.component';
import { AdminPieChartComponent } from './modules/admin/admin-dash/charts/admin-pie-chart/admin-pie-chart.component';
import { AdminPaymentsChartComponent } from './modules/admin/admin-dash/charts/admin-payments-chart/admin-payments-chart.component';
import { AdminOrdersPieChartComponent } from './modules/admin/admin-dash/charts/admin-orders-pie-chart/admin-orders-pie-chart.component';
import { AdminUsersPieChartComponent } from './modules/admin/admin-dash/charts/admin-users-pie-chart/admin-users-pie-chart.component';
import { ServiceProductCategoriesComponent } from './modules/admin/service-product-categories/service-product-categories.component';
import { EventCatgoriesComponent } from './modules/admin/event-catgories/event-catgories.component';
import { AdminIdverifyComponent } from './modules/admin/admin-idverify/admin-idverify.component';
import { AdminBusinessverifyComponent } from './modules/admin/admin-businessverify/admin-businessverify.component';
import { AdminDashStatComponent } from './modules/admin/admin-dash/admin-dash-stat/admin-dash-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SignupSelectComponent,
    FooterComponent,
    SignupMerchantComponent,
    CardDetailsComponent,
    IdVerifyComponent,
    BusinessVerifyComponent,
    BprofileComponent,
    BusinessOpenDaysComponent,
    MerchantProfileComponent,
    ContactUsComponent,
    NotFoundPageComponent,
    ErrorComponent,
    SuccessComponent,
    TeramsConditionsComponent,
    AdminDashboardComponent,
    AdminDashHomeComponent,
    AdminDashVerificationsComponent,
    AdminDashPaymentsComponent,
    AdminDashProfileComponent,
    AdminDashUsersComponent,
    AdminUsersComponent,
    AdminPaymentsComponent,
    AdminDashCategoriesComponent,
    AdminDashReportsComponent,
    AdminBackupComponent,
    AdminPieChartComponent,
    AdminPaymentsChartComponent,
    AdminOrdersPieChartComponent,
    AdminUsersPieChartComponent,
    ServiceProductCategoriesComponent,
    EventCatgoriesComponent,
    AdminIdverifyComponent,
    AdminBusinessverifyComponent,
    AdminDashStatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CreditCardDirectivesModule,
    ModalModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule,
    MatProgressBarModule,
    NgbModule,
    MatCheckboxModule,
    FullCalendarModule,
    CarouselModule,
    MatSliderModule,
    MatDialogModule,
    NgbDropdownModule,
    DragDropModule,
    NgbProgressbarModule,
    QRCodeModule,
    MatTabsModule,
    QuillModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent, SuccessComponent]
})
export class AppModule { }
