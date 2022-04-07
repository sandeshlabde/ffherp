import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Global } from 'src/app/shared/Global';
import { Observable, of } from 'rxjs';
import { ProspectService } from './prospect.service';
@Injectable({
  providedIn: 'root',
})
export class Resolver implements Resolve<boolean> {
  constructor(private listService: ProspectService, private global: Global) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.listService.loggedIn()) {
      this.global.LOGGED_IN_USER = JSON.parse(
        localStorage.getItem('Global.LOGGED_IN_USER')
      );
      return of(true);
    } else {
      return of(false);
    }
    return of(false);
  }
}
