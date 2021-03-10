
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { DuePayment } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-payment-details',
  templateUrl: './admin-payment-details.component.html',
  styleUrls: ['./admin-payment-details.component.scss']
})
export class AdminPaymentDetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['profilePic', 'driverName', 'action'];
  dataSource: MatTableDataSource<DuePayment>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions

  private paymentSub: Subscription;

  payments: DuePayment[] = [
    {
      payId: 'P01',
      driverId: 'D01',
      driverName:'Nimal Edirisuriya',
      passengerId: 'P01',
      passengerName: 'Kamal Edirisuriya',
      driverProfilePic: './assets/images/merchant/user.jpg',
      passengerProfilePic: './assets/images/merchant/user.jpg',
      passengerContactNo: '0778906789',
      driverContactNo: '0712345678',
      dueDate: {
        date: 23,
        month: 1,
        year: 2020
      },
      dueAmount: 4300,
      monthlyPayment: 6000,
      pickup: 'Matara',
      dropoff: 'Galle',
      paymentStatus: 'due'
    }
  ];

  payment: DuePayment;


  constructor( private adminService: AdminService) { }

  ngOnInit() {
       // get admin for child comp use
  //  this.adminService.getDuePayments(1);
  //  this.paymentSub = this.adminService.getDuePaymentsUpdateListener().subscribe(
  //    res => {
  //      if (res) {
  //        this.payments = res;
         this.dataSource = new MatTableDataSource(this.payments);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
    //   }
    //  });
  }


  ngOnDestroy() {

    if (this.paymentSub) {
      this.paymentSub.unsubscribe();
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // get selected
  showUsertDetails(payId: string) {
    for (const app of this.payments) {
      if (app.payId === payId) {
        this.payment = app;
      }
    }
  }

}
