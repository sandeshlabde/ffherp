import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { Global } from 'Global';
import * as moment from 'moment';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  AdvanceFilter: boolean = false;
  activityData: any;
  ddData: any;
  jsonData: any;
  todate: any;
  fromdate: any;
  From= ' ';
  To = ' ';
  entVisits: any
  entCallsReport: any
  entMailsReport: any
  entOtherActivityReport: any
  pieChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean; };
  pieChartLabels: string[];
  pieChartLegend: boolean;
  pieChartData: { data: any[]; }[];
  
  AllData: any;
  tableConfig: any;
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
  showAdvanceFilter() {
    this.AdvanceFilter = true;
  }

  submitValue() {
    this.tableConfig= {
      'rows': 'entUserName',
      'columns': "entActionType" 
    };
    let param = {
      eDbname: this.global.LOGGED_IN_USER.DbName,
      eFromDate: this.From,
      eMissedFlag: '1',
      eModuleFlag: 'All',
      ePassword: this.global.LOGGED_IN_USER.encryptPswd,
      eToDate: this.To,
    };
    this.listService.showtotalActivity(param).subscribe((data: any) => {
      this.AllData=JSON.parse(data)
      console.warn("all"+data)
    });
    
     
  }
 
  piChart(
    entVisits: any,
    entCallsReport: any,
    entMailsReport: any,
    entOtherActivityReport: any
  ) {
    this.entVisits=  entVisits,
    this.entCallsReport=entCallsReport
    this.entMailsReport= entMailsReport,
    this.entOtherActivityReport=entOtherActivityReport
    
    this.pieChartOptions  = {
      scaleShowVerticalLines: false,
   responsive: true
 };
 this.pieChartLabels  = ['Visits', 'CallsReport', 'MailsReport', 'OtherActivityReport' ];
   
 this.pieChartLegend = true;

 this.pieChartData  = [
   { data: [this.entVisits, this.entCallsReport, this.entMailsReport, this.entOtherActivityReport ],   },
  
 ];
  }

  

  



   
  ngOnInit(): void {}
}
