import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Admin } from '../auth/auth.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from 'src/app/success/success.component';
import { DashStat, Driver, DuePayment, Income, Passenger, Payment } from './admin.model';
import {url, getAdmin, getDashStat, duePayments, duePayment, newDrivers, getDrivers,  getPassengers, getPayments, getAdmins, getIncomes} from './admin.config';

@Injectable({providedIn: 'root'})
export class AdminService {
  private duePaymentsUpdated = new Subject<DuePayment[]>();
  private duePaymentUpdated = new Subject<DuePayment>();
  private incomesUpdated = new Subject<Income[]>();
  private incomeUpdated = new Subject<Income>();
  private paymentsUpdated = new Subject<Payment[]>();
  private paymentUpdated = new Subject<Payment>();
  private adminUpdated = new Subject<Admin>();
  private adminsUpdated = new Subject<Admin[]>();
  private dashStatUpdated = new Subject<DashStat>();
  private driversUpdated = new Subject<Driver[]>();
  private driverUpdated = new Subject<Driver>();
  private passengersUpdated = new Subject<Passenger[]>();
  private passengerUpdated = new Subject<Passenger>();

  // logged in admin
  private admin: Admin;

  private dashStat: DashStat;

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog) {}


  // get methods

    // on login & settings : admin profile
    getAdmin() {
      this.http.get<{admin: Admin}>(url + getAdmin)
        .subscribe((recievedMerchant) => {
          this.admin = recievedMerchant.admin;
          this.adminUpdated.next(this.admin);
      });
    }

    // get admin users
    // settings
    getAdmins() {
      this.http.get<{admins: Admin[]}>(url + getAdmins)
        .subscribe((res) => {
          this.adminsUpdated.next(res.admins);
      });
    }

    // dashboard page
  getDashStat() {
    this.http.get<{dashboardData: DashStat}>(url + getDashStat)
    .subscribe((res) => {
      this.dashStat = res.dashboardData;
      this.dashStatUpdated.next(this.dashStat);
    });
  }

  // dashboard page
  getDuePayments(month: number) {
        this.http.get<{paymntData: DuePayment[]}>(url + duePayments + '/' + month.toString() )
        .subscribe((res) => {
          this.duePaymentsUpdated.next(res.paymntData);
        });
  }

  // dashboard page - due payment details
  getDuePayment(payId: string) {
    this.http.get<{paymntData: DuePayment[]}>(url + duePayment + '/' + payId )
    .subscribe((res) => {
      this.duePaymentsUpdated.next(res.paymntData);
    });
  }

  // dashboard page
  getNewDrivers(month: number) {
    this.http.get<{drivers: Driver[]}>(url + newDrivers + '/' +month.toString() )
    .subscribe((res) => {
      this.driversUpdated.next(res.drivers);
    });
  }

  // drivers page 
  getDrivers() {
    this.http.get<{drivers: Driver[]}>(url + getDrivers  )
    .subscribe((res) => {
      this.driversUpdated.next(res.drivers);
    });
  }

  // dashboard page - new driver detaisl
  // drivers page - driver details
  getDriver(driverId: string) {
    this.http.get<{driver: Driver}>(url + getDrivers +  '/' + driverId  )
    .subscribe((res) => {
      this.driverUpdated.next(res.driver);
    });
  }

   // passengers page
  getPassengers() {
    this.http.get<{passengers: Passenger[]}>(url + getPassengers  )
    .subscribe((res) => {
      this.passengersUpdated.next(res.passengers);
    });
  }

  // passengers page : passenger details
  getPassenger(passengerId: string) {
    this.http.get<{passenger: Passenger}>(url + getPassengers +  '/' + passengerId  )
    .subscribe((res) => {
      this.passengerUpdated.next(res.passenger);
    });
  }

  // payments page : driver/ passenger payments (depend on status)
  getPayments() {
    this.http.get<{payments: Payment[]}>(url + getPayments  )
    .subscribe((res) => {
      this.paymentsUpdated.next(res.payments);
    });
  }

  // payments page: payment details
  getPayment(payId: string) {
    this.http.get<{payment: Payment}>(url + getPayments +  '/' + payId  )
    .subscribe((res) => {
      this.paymentUpdated.next(res.payment);
    });
  }

    // payments page: incomes
    getIncome(payId: string) {
      this.http.get<{income: Income}>(url + getIncomes +  '/' + payId  )
      .subscribe((res) => {
        this.incomeUpdated.next(res.income);
      });
    }

      // payments page: incomes
    getIncomes() {
      this.http.get<{income: Income[]}>(url + getIncomes  )
      .subscribe((res) => {
        this.incomesUpdated.next(res.income);
      });
    }
  


  // POST requests

  // // collect sprovider payment
  // makePayment(amount: number) {
  //   this.http.post<{ message: string }>(this.url + 'admin/make/payment', {amount})
  //   .subscribe((recievedData) => {
  //     console.log(recievedData.message);
  //     this.dialog.open(SuccessComponent, {data: {message: recievedData.message}});
  // });
  // }



  // listners for subjects

  getAdminUpdateListener() {
    return this.adminUpdated.asObservable();
  }

  getAdminsUpdateListener() {
    return this.adminsUpdated.asObservable();
  }

  getDashStatUpdateListener() {
    return this.dashStatUpdated.asObservable();
  }

  getPaymentsUpdateListener() {
    return this.paymentsUpdated.asObservable();
  }

  getDriversUpdateListener() {
    return this.driversUpdated.asObservable();
  }

  getDriverUpdateListener() {
    return this.driverUpdated.asObservable();
  }

  getPassengersUpdateListener() {
    return this.passengersUpdated.asObservable();
  }

  getPassengerUpdateListener() {
    return this.passengerUpdated.asObservable();
  }

  getPaymentUpdateListener() {
    return this.paymentUpdated.asObservable();
  }

  getDuePaymentUpdateListener() {
    return this.duePaymentUpdated.asObservable();
  }

  getDuePaymentsUpdateListener() {
    return this.duePaymentsUpdated.asObservable();
  }

  getDIncomesUpdateListener() {
    return this.incomesUpdated.asObservable();
  }

  getIncomeUpdateListener() {
    return this.incomeUpdated.asObservable();
  }




}
