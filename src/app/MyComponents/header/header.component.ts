import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'Global';
import { ThemeService } from 'src/app/services/theme.service';
import { Observable } from 'rxjs';
import { Option } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  companyName: any;
  userName: any;
  toggle = true;

  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(
    private global: Global,
    private router: Router,
    private themeService: ThemeService
  ) {
    if (this.global.LOGGED_IN_USER) {
      this.companyName = this.global.LOGGED_IN_USER.CoName;
      this.userName = this.global.LOGGED_IN_USER.Username;
    }
  }

  onSignOut() {
    localStorage.removeItem('Global.LOGGED_IN_USER');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.themeService.setTheme('deeppurple-amber');
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  changeTheme() {
    this.toggle = !this.toggle;
  }
}
