import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Admin } from 'src/app/modules/auth/auth.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  // subscription
  private adminSub: Subscription;

  // navigation
  home = 'txt-white row';
  payments = 'txt-white row';
  drivers = 'txt-white row';
  passengers = 'txt-white row';
  settings = 'txt-white row';


  private headerSubs: Subscription;

  // recieved merchant
  headerDetails: {userType: string, userName: string, profilePic: string} =  {
    userType:"admin",
    userName:"Test",
    profilePic:"./assets/images/merchant/nopic.png"
  };

   // create new product
   editmode = true;

   // recieved admin
    admin: Admin;

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
   .pipe(
     map(result => result.matches),
     shareReplay()
   );

 constructor(private breakpointObserver: BreakpointObserver,
             private router: Router, private authService: AuthService) { }

 ngOnInit() {


   this.routerEvents();
   this.authService.getHeaderDetails();
   this.headerSubs = this.authService.getHeaderDetailsListener().subscribe (
     merchant => {
         this.headerDetails = merchant;
     });
 }

 ngOnDestroy() {
   if (this.headerSubs) {
     this.headerSubs.unsubscribe();
   }
 }

 routerEvents() {
   this.router.events.subscribe((e) => {
     if (e instanceof NavigationStart) {
       if (e.url === '/admin') {
         this.navHome();
       } else if (e.url === '/admin/payments') {
         this.navPayments();
       } else if (e.url === '/admin/drivers') {
         this.navDrivers();
       } else if (e.url === '/admin/passengers') {
         this.navPassengers();
       }else if (e.url === '/admin/settings') {
       this.navSettings();
   }
   }
 });
 }

 navHome() {
   this.home = 'txt-white row active-nav';
   this.payments = this.drivers = this.passengers = this.settings  = 'txt-white row';
 }

 navPayments() {
   this.payments = 'txt-white row active-nav';
   this.home = this.drivers = this.passengers  = this.settings  = 'txt-white row';
 }

 navDrivers() {
   this.drivers = 'txt-white row active-nav';
   this.payments = this.home = this.passengers  = this.settings  = 'txt-white row';
 }

 navPassengers() {
   this.passengers = 'txt-white row active-nav';
   this.payments = this.drivers = this.home  = this.settings  = 'txt-white row';
 }

 navSettings() {
   this.settings = 'txt-white row active-nav';
   this.payments = this.drivers = this.passengers  = this.home  = 'txt-white row';
 }

}
