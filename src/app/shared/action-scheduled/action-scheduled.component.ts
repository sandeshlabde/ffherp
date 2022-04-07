import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-action-scheduled',
  templateUrl: './action-scheduled.component.html',
  styleUrls: ['./action-scheduled.component.css'],
})
export class ActionScheduledComponent implements OnInit {
  Entityid: any;
  EntityName: any;
  EntityNameTitle: any;
  dataSource: any;
  displayedColumns = [
    'ID',
    'SchID',
    'Date',
    'Time',
    'By',
    'ActionDone',
    'RevisedPDF',
  ];
  PendingColumns = ['SchID', 'Date', 'Time', 'By', 'WorkTODO'];
  dataSource2: any;
  companyName: any;
  dataSource3: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private actionService: ActionService,
    private global: Global
  ) {
    console.log(data);
    this.Entityid = this.data.EntityID;
    this.EntityName = this.data.EntityName;
    this.EntityNameTitle = this.data.EntityNameTitle;
    this.companyName = this.data.companyName;

    const param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.Entityid,
      EntityName: this.EntityName,
    };
    this.actionService.GetActualDataRandom(param).subscribe((data: any) => {
      this.dataSource = JSON.parse(data);
      console.log(this.dataSource);
    });
    this.actionService.GetSheduledData(param).subscribe((data: any) => {
      this.dataSource2 = JSON.parse(data);
      console.log(this.dataSource2);
    });
    this.actionService.GetRevisedPDFData(param).subscribe((data: any) => {
      this.dataSource3 = JSON.parse(data);
      console.log(this.dataSource3);
    });
  }

  ngOnInit(): void {}
}
