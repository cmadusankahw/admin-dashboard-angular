import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashStat } from '../../admin.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-dash-stat',
  templateUrl: './admin-dash-stat.component.html',
  styleUrls: ['./admin-dash-stat.component.scss']
})
export class AdminDashStatComponent implements OnInit, OnDestroy {


  // subscribers
  private dashStatSub: Subscription;


  orderCounts: DashStat;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    // this.adminService.getreportData();
    // this.reportStatSub = this.adminService.getReportDataUpdateListener()
    //   .subscribe((recievedData: boolean) => {
    //     if (recievedData) {
    //       this.adminService.getDashStat();
    //       this.dashStatSub = this.adminService.getDashStatUpdateListener()
    //         .subscribe((recievedStat: DashStat) => {
    //           this.orderCounts = recievedStat;
    //           console.log(this.orderCounts);
    //         });
    //     }
    //   });
  }

  ngOnDestroy() {
    if (this.dashStatSub) {
      this.dashStatSub.unsubscribe();
    }
  }


}
