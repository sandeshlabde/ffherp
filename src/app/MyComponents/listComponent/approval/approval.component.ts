import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
})
export class ApprovalComponent implements OnInit {
  approvalData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ProspectService,
    private global: Global
  ) {
    console.log(data.installno, data.entityName, data.entityid);
    const id = data.installno;
    const entityName = data.entityName;
    const entityId = data.entityid;

    let params: any = {
      id,
      entityName,
      entityId,
      dbname: this.global.LOGGED_IN_USER.DbName,
      encrypt: this.global.LOGGED_IN_USER.encryptPswd,
    };
    this.listService.showvoucharData(params).subscribe((data: any) => {
      console.log(JSON.parse(data));
      this.approvalData = JSON.parse(data);
    });
  }

  ngOnInit(): void {}
}
