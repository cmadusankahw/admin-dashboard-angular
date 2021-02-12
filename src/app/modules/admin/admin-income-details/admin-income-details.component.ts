import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { Income, Payment } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-income-details',
  templateUrl: './admin-income-details.component.html',
  styleUrls: ['./admin-income-details.component.scss']
})
export class AdminIncomeDetailsComponent implements OnInit {

 
  displayedColumns: string[] = ['payId', 'driverName',  'passengerName','payAmount', 'payDate','payMonth',  'status', 'reason'];
  dataSource: MatTableDataSource<Income>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions

  private paymentSub: Subscription;

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  incomes: Income[] = [
    {
      payId: 'P01',
      driverId: 'D01',
      driverName:'Nimal Edirisuriya',
      passengerId: 'P01',
      passengerName: 'Kamal Edirisuriya',
      payDate: {
        date: 23,
        month: 1,
        year: 2020
      },
      payAmount: 4300,
      reason: 'hire charges',
      status: 'paid',
    }
  ];

  netIncome = 0;
  netRepay = 0;

  constructor( private adminService: AdminService) { }

  ngOnInit() {
       // get admin for child comp use
  //  this.adminService.getIncomes();
  //  this.paymentSub = this.adminService.getIncomesUpdateListener().subscribe(
  //    res => {
  //      if (res) {
  //        this.incomes = res;
        this.incomes.map( i => {
          if ( i.status == "paid") {
            this.netIncome += i.payAmount;
           }
           if ( i.status == "refunded") {
            this.netRepay += i.payAmount;
           }
        })
         console.log(this.netIncome, this.netRepay);;
         this.dataSource = new MatTableDataSource(this.incomes);
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

}
