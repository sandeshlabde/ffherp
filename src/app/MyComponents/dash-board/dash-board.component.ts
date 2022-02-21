import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  [x: string]: any;
  selectedValue = 'entActionType'; 
  ddData: any;
  jsonData: any;

  fromdate: any; 
  From: any = '';
  To: any = '';

  AllData: any;

  pieChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean };
  pieChartLabels: string[];
  pieChartLegend: boolean;
  pieChartData: { data: any[] }[];
  tableData: any;

  h: any;
  constructor(
    private listService: ProspectService,
    private global: Global,
    private httpClient: HttpClient
  ) {
     
    this.httpClient.get('/assets/inputlabel.json').subscribe((data) => {
      this.jsonData = data;
      this.ddData = this.jsonData.DDvalue;
    });
  }
   

  getPivotTable(data, type) {
    const map = new Map();
    data.forEach((item) => {
      map.set(item['entActionActorName'], {
        ...map.get(item['entActionActorName']),
        [item[type]]:
          map.get(item['entActionActorName']) &&
          map.get(item['entActionActorName'])[item[type]]
            ? map.get(item['entActionActorName'])[item[type]] + 1
            : 1,
      });
    });
    return map;
  }

  submitValue() {
    
    let param = {
      eDbname: this.global.LOGGED_IN_USER.DbName,
      eFromDate: this.From,
      eMissedFlag: '1',
      eModuleFlag: 'All',
      ePassword: this.global.LOGGED_IN_USER.encryptPswd,
      eToDate: this.To,
    };
    this.listService.showtotalActivity(param).subscribe((data: any) => {
      this.AllData = JSON.parse(data);
    });
    
  }

  get columns(): Array<string> {
    if (this.tableData) {
      const c: any = Array.from(this.tableData).reduce(
        (cols: Set<string>, o) => {
          Object.keys(o[1]).forEach((key) => {
            cols.add(key);
          });
          return cols;
        },
        new Set()
      );
      // console.log(c);
      return Array.from(c);
    }
    return [];
  }

  updateTable() {
    
    this.tableData = this.getPivotTable(this.AllData, this.selectedValue);
    this.pieChartLabels = Array.from(this.columns.values());
    const Total=Array.from(this.tableData.values())
    console.log(Total);
  }

  piChart(x) {
    const  pieData = Object.values(x);
      (this.pieChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
      });

    this.pieChartLegend = true;

    this.pieChartData = [
      {
        data:pieData,
      },
    ];
  }
  ngOnInit(): void {}
}
