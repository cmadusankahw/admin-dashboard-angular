import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { Driver, Passenger } from '../../../admin.model';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-admin-dash-passengers',
  templateUrl: './admin-dash-passengers.component.html',
  styleUrls: ['./admin-dash-passengers.component.scss']
})
export class AdminDashPassengersComponent implements OnInit {

  displayedColumns: string[] = ['passengerId', 'passengerName','passengerMobile', 'pickup', 'dropoff','regDate', 'status', 'action'];
  dataSource: MatTableDataSource<Passenger>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions

  private passengerSub: Subscription;

  passengers: Passenger[] = [
    {
      passengerId: 'D01',
      passengerName: 'Chiran HW',
      passengerContactNo: '0778956789',
      passengerEmail: 'abc@gmail.com',
      profilePic: './assets/images/merchant/user.jpg',
      pickup: 'Matara',
      dropoff: 'Colombo',
      passengerRegDate: '2021-01-23',
      status: ' pending'
    },
  ];

  passenger: Passenger;

  constructor( private adminService: AdminService) { }

  ngOnInit() {
  //  this.adminService.getPassengers();
  //  this.passengerSub = this.adminService.getPassengersUpdateListener().subscribe(
  //    res => {
  //      if (res) {
        //  this.passengers = res;
         this.dataSource = new MatTableDataSource(this.passengers);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
    //   }
    //  });
  }


  ngOnDestroy() {

    if (this.passengerSub) {
      this.passengerSub.unsubscribe();
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // get selected driver details
  showUsertDetails(passengerId: string) {
    for (const app of this.passengers) {
      if (app.passengerId === passengerId) {
        this.passenger = app;
      }
    }
  }


}
