import { Injectable } from '@angular/core';
import {   CanActivate, Router,   } from '@angular/router';
import { Observable } from 'rxjs';
import { ProspectService } from './services/prospect.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
    constructor(  private listService: ProspectService,private router:Router){ }
    canActivate( ): boolean  {
       if(this.listService.loggedIn()) {
           
           return true
       }else{
           this.router.navigate(['/page/Lead'])
           return false
       }
        
    }
  
}
 

