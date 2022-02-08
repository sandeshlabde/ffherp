import { Component, OnInit } from '@angular/core';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  companyName:any
  userId:any
  constructor( private listService: ProspectService,) { 
    this.companyName=Global.LOGGED_IN_USER.CoName;
    this.userId=Global.LOGGED_IN_USER.UserId
    
  }
 
  onSignOut(){
  // this.listService.signOut();
  }
  ngOnInit(): void {
  }

}
