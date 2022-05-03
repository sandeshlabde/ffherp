import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {}
@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css'],
})
export class DashListComponent implements OnInit {
  displayedColumns: any[] = [
    'entActionId',
    'entActionContactName',
    'entActionCompanyName',
    'entEntityName',
    'entActivityType',
    'entActionType',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dashDetailList: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource.data = this.filteredEntity(data.ActorName, data.Data);

    console.log(this.dataSource.data);
  }
  filteredEntity(entity: any, data: any) {
    if (data != null) {
      return data.filter((item) => item.entActorName == entity);
    }
    return [];
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {}
}
