import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../admin.model';

@Component({
  selector: 'app-admin-driver-details-popup',
  templateUrl: './admin-driver-details-popup.component.html',
  styleUrls: ['./admin-driver-details-popup.component.scss']
})
export class AdminDriverDetailsPopupComponent implements OnInit {

  @Input() driver: Driver;
  
  constructor() { }

  ngOnInit() {
  }

}
