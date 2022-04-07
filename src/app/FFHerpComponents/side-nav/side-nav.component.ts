import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { PivortReportComponent } from 'src/app/shared/pivort-report/pivort-report.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  toggle = true;

  constructor(private titleService: Title, public dialog: MatDialog) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  PivortReport() {
    const dialogRef = this.dialog.open(PivortReportComponent, {
      width: '100%',
      height: '80%',

      data: {
        // EntityID: id,
        // EntityName: this.EntityName,
        // clientNo: clientNo,
        // EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  ngOnInit(): void {}

  changeTheme() {
    this.toggle = !this.toggle;
  }
}
