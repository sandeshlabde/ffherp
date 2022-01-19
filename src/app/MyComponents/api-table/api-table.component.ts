import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { listDataFieldName } from 'src/apitable';
import { listDataService } from 'src/app/services/list-data.service';
 

 
@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css']
})
export class ApiTableComponent implements OnInit {
  ELEMENT_DATA!: listDataFieldName[];
  displayedColumns:string[]=['id','userId','title','body'  ]
  dataSource=new MatTableDataSource<listDataFieldName>(this.ELEMENT_DATA);
   
  
 
  constructor(private service:listDataService ) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
     
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllData();
  }
public getAllData(){
  let resp=this.service.listTableData();
  resp.subscribe(report=>this.dataSource.data=report as listDataFieldName[] )
}

}
 

