import { Injectable } from '@angular/core';
import { IUser } from './models';

@Injectable({
  providedIn: 'root',
})
export class Global {
  public LOGGED_IN_USER: IUser;
  // public ACTION_DEFAULT_DATA: ActionDefaultData;
}
