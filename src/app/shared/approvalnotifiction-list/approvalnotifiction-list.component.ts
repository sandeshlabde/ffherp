import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-approvalnotifiction-list',
  templateUrl: './approvalnotifiction-list.component.html',
  styleUrls: ['./approvalnotifiction-list.component.css'],
})
export class ApprovalnotifictionListComponent implements OnInit {
  EntityName: any;
  Title: string;
  notificationCountData: any;
  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    if (data.EntityName == 'SalesOrder') {
      this.EntityName = 'SalesOrderLIst';
      this.Title = 'Sales Order';
    } else if (data.EntityName == 'Payable') {
      this.EntityName = 'Payable';
    } else {
      this.EntityName = 'Voucher';
    }
    console.log(data);

    const param = {
      DbName: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      RoleID: this.global.LOGGED_IN_USER.RoleId,
      Userid: this.global.LOGGED_IN_USER.UserId,
      Flag: this.EntityName,
      Approval: '296',
    };
    this.listService.getList(param).subscribe((data: any) => {
      this.notificationCountData = JSON.parse(data);
      console.log(this.notificationCountData);
    });
  }

  ngOnInit(): void {}
}
