
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { IdVerifications, BusinessVerifications } from '../../auth/auth.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin-payment-details',
  templateUrl: './admin-payment-details.component.html',
  styleUrls: ['./admin-payment-details.component.scss']
})
export class AdminPaymentDetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['user_id', 'issuer', 'action'];
  dataSource: MatTableDataSource<BusinessVerifications>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions

  private verifySub: Subscription;

  businessVerifications: BusinessVerifications[] = [];

  selectedVerification: BusinessVerifications;

  // pay type
  payType = 'due';

  constructor( private authService: AuthService) { }

  ngOnInit() {
       // get admin for child comp use
   this.authService.getBusinessVerifications();
   this.verifySub = this.authService.getBusinessVerificationsUpdateListener().subscribe(
     res => {
       if (res) {
         this.businessVerifications = res;
         console.log(this.businessVerifications);
         this.dataSource = new MatTableDataSource(this.businessVerifications);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      }
     });
  }


  ngOnDestroy() {

    if (this.verifySub) {
      this.verifySub.unsubscribe();
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
  showUsertDetails(id: string) {
    for (const app of this.businessVerifications) {
      if (app.user_id === id) {
        this.selectedVerification = app;
      }
    }
  }

  verifyBusiness(id: BusinessVerifications){
    this.authService.approveBusinessVerification(id);
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  // // classify reieved merchant payments
  // addPayments(payments: DriverPayments[], state: string): DriverPayments[] {
  //   const pendingBookings = [];
  //   for (const val of payments) {
  //     if (val.user_type === state) {
  //       pendingBookings.push(Object.assign({}, val));
  //     }
  //   }
  //   this.payments = [...pendingBookings];
  //   return this.payments;
  // }

  // // get selected payment details
  // showPaymentDetails(userId: string) {
  //   for (const app of this.payments) {
  //     if (app.user_id === userId) {
  //       this.selectedPayment = app;
  //     }
  //   }
  //   this.payDataSource = new MatTableDataSource(this.selectedPayment.pays);
  //   this.payDataSource.paginator = this.paginator;
  // }

  // // get last payment details
  // getLastPayData(payment: DriverPayments): PaymentData {
  //   let lastPay: PaymentData;
  //   for (var pay of payment.pays) {
  //     lastPay = pay;
  //   }
  //   return lastPay;
  // }

}
