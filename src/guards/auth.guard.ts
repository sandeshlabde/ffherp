import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private listService: ProspectService, private router: Router) {}
  canActivate(): boolean {
    if (this.listService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
