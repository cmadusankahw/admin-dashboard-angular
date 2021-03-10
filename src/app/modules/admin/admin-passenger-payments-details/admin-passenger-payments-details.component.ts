import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { Payment } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-passenger-payments-details',
  templateUrl: './admin-passenger-payments-details.component.html',
  styleUrls: ['./admin-passenger-payments-details.component.scss']
})
export class AdminPassengerPaymentsDetailsComponent implements OnInit {

 
  displayedColumns: string[] = ['payId', 'passengerName',  'passengerMobile', 'vehicleNo','payAmount', 'payDate','payMonth',  'status', 'action'];
  dataSource: MatTableDataSource<Payment>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions

  private paymentSub: Subscription;

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  payments: Payment[] = [
    {
      payId: 'P01',
      driverId: 'D01',
      driverName:'Nimal Edirisuriya',
      driverContactNo: '0772345678',
      passengerContactNo: '0772345678',
      passengerId: 'P01',
      passengerName: 'Kamal Edirisuriya',
      payDate: {
        date: 23,
        month: 1,
        year: 2020
      },
      payAmount: 4300,
      serviceCharge: 6000,
      status: 'due',
      vehicleNo: 'CAD 3456'
    }
  ];

  payment: Payment;


  constructor( private adminService: AdminService) { }

  ngOnInit() {
       // get admin for child comp use
  //  this.adminService.getPassengerPayments();
  //  this.paymentSub = this.adminService.getPassengerPaymentsUpdateListener().subscribe(
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
