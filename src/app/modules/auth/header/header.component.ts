import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor(private router: Router, private authService: AuthService) { }

  private authSubs: Subscription;
  private headerDetailsSubs: Subscription;

  // check if user is authneticated
  userIsAuthenticated = true;

  // get signed user type
  headerDetails: {userType:string, userName: string, profilePic: string} = {
    userType:"admin",
    userName:"Test",
    profilePic:"./assets/images/merchant/user.jpg"
  };


  ngOnInit() {

    this.authService.getHeaderDetails();
    this.headerDetailsSubs = this.authService.getHeaderDetailsListener().subscribe(
      headerDetails => {
        if (headerDetails) {
          this.headerDetails = headerDetails;
          console.log(headerDetails);
          this.userIsAuthenticated = this.authService.getisAuth();
          this.authSubs = this.authService.getAuhStatusListener().subscribe(
          isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            console.log(isAuthenticated);
          }
        );
        }
      }
    );


    // hide login and signup button depend on route
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }

  ngOnDestroy() {
    if (this.authSubs) {
      this.authSubs.unsubscribe();
    }
    if (this.headerDetailsSubs) {
      this.headerDetailsSubs.unsubscribe();
    }

  }

  onSignOut() {
    this.authService.signOut();
  }

}
