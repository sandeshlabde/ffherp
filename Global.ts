import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class Global {
  public LOGGED_IN_USER: IUser;
}
