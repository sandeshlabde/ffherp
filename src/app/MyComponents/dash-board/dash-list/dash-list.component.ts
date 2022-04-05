import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css'],
})
export class DashListComponent implements OnInit {
  displayedColumns: [
    'ID',
    'ContactName',
    'CompanyName',
    'EntityName',
    'ActivityType',
    'ActionType '
  ];
  dashDetailList: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dashDetailList = this.filteredEntity(data.ActorName, data.Data);
  }
  filteredEntity(entity: any, data: any) {
    if (data && data.length > 0) {
      return data.filter((item) => item.entActionContactName == entity);
    }
    return [];
  }
  ngOnInit(): void {}
}
