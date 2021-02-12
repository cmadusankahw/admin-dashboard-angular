import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AdminService } from '../admin.service';
import { Admin } from '../admin.model';


@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              public datepipe: DatePipe,
              public adminService: AdminService) { }

  ngOnInit() {
    // get merchant temp
    //this.merchantTemp = this.authService.getMerchantTemp();

    // router scroll
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  ngOnDestroy() {
  }

   signupUser(signupForm: NgForm) {
    if (signupForm.invalid) {
      console.log('Form Invalid');
    } else {
      const admin: Admin = {
        userId: '',
        userType: signupForm.value.user_type,
        userName: signupForm.value.user_name,
        profilePic: './assets/images/merchant/nopic.png',
        userEmail: signupForm.value.email,
        userContactNo: signupForm.value.contact_no,
        gender: signupForm.value.gender,
        };
      this.adminService.createAdmin(admin);
      console.log('User created successfully!');
      signupForm.resetForm();
    }
  }


}
