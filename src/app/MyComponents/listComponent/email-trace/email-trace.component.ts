import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-email-trace',
  templateUrl: './email-trace.component.html',
  styleUrls: ['./email-trace.component.css'],
})
export class EmailTraceComponent implements OnInit {
  emailData: any;
  emailData2: any;
  flag: any;
  id: any;
  Entityid: any;
  EntityName: any;

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    (this.Entityid = this.data.EntityID),
      (this.EntityName = this.data.EntityName);
    let params = {
      EntityID: this.Entityid,
      EntityName: this.EntityName,
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      EmailAddress: this.global.LOGGED_IN_USER.EmailId,
    };

    this.listService.emailtrace(params).subscribe((data: any) => {
      this.emailData = JSON.parse(data);
    });
  }
  ngOnInit(): void {}
}
