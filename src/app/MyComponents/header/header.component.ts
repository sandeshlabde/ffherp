import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'Global';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CommanService } from 'src/app/services/comman.service';
import { MatDialog } from '@angular/material/dialog';
import { ListComponent } from '../listComponent/list.component';

const THEME_DARKNESS_SUFFIX = `-dark`;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  companyName: any;
  userName: any;

  @HostBinding('class') activeThemeCssClass: string;
  isThemeDark = false;
  activeTheme: string;
  CountData: any;

  setTheme(theme: string, darkness: boolean = null) {
    if (darkness === null) darkness = this.isThemeDark;
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return;
    } else this.isThemeDark = darkness;

    this.activeTheme = theme;

    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;

    const classList = this.overlayContainer.getContainerElement().classList;
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass);
    else classList.add(cssClass);

    this.activeThemeCssClass = cssClass;
  }

  toggleDarkness() {
    this.setTheme(this.activeTheme, !this.isThemeDark);
  }

  constructor(
    private commanService: CommanService,
    private global: Global,
    private router: Router,
    private overlayContainer: OverlayContainer,
    public dialog: MatDialog
  ) {
    if (this.global.LOGGED_IN_USER) {
      this.companyName = this.global.LOGGED_IN_USER.CoName;
      this.userName = this.global.LOGGED_IN_USER.Username;
    }
    this.setTheme('indigo-pink', false); // Default Theme
    const param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      userid: this.global.LOGGED_IN_USER.UserId,
    };
    this.commanService.ApprovalCount(param).subscribe((data: any) => {
      this.CountData = JSON.parse(data);
    });
  }
  approvalNotificationList(count, entityName) {
    const dialogRef = this.dialog.open(ListComponent, {
      height: '100%',
      width: '100%',
      data: {
        Count: count,
        EntityName: entityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  onSignOut() {
    localStorage.removeItem('Global.LOGGED_IN_USER');
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
