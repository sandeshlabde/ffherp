import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'Global';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  companyName: any;
  userId: any;
  constructor(  private global: Global,private router: Router) {
    if (this.global.LOGGED_IN_USER) {
      this.companyName = this.global.LOGGED_IN_USER.CoName;
      this.userId = this.global.LOGGED_IN_USER.UserId;
    }
  }

  onSignOut() {
   localStorage.removeItem('Global.LOGGED_IN_USER');
   this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
