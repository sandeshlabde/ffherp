import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Option } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( private http: HttpClient) { }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("assets/options.json");
  }

  setTheme(themeToSet) {
    // TODO(@SiddAjmera): Implement this later
  }
}
