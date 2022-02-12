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
  From: ' ';
  To = ' ';
  
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
    this.total();
    let param = {
      eDbname: this.global.LOGGED_IN_USER.DbName,
      eFromDate: this.From,
      ePassword: this.global.LOGGED_IN_USER.encryptPswd,
      eToDate: this.To,
      eUserId: this.global.LOGGED_IN_USER.UserId,
    };
    this.listService.showActivityDashRepo(param).subscribe((data: any) => {
      this.activityData = JSON.parse(data);
      console.log(data);
      console.log(this.To,this.From)
     
    });
  }

  piChart(
    entVisits: any,
    entCallsReport: any,
    entMailsReport: any,
    entOtherActivityReport: any
  ) {
    const myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Visits', 'CallsReport', 'MailsReport', 'OtherActivityReport'],
        datasets: [
          {
            label: '# of Activity',
            data: [
              entVisits,
              entCallsReport,
              entMailsReport,
              entOtherActivityReport,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  total() {
    let param = {
      eDbname: this.global.LOGGED_IN_USER.DbName,
      eFromDate: this.From,
      eMissedFlag: '1',
      eModuleFlag: 'All',
      ePassword: this.global.LOGGED_IN_USER.encryptPswd,
      eToDate: this.To,
    };
    this.listService.showtotalActivity(param).subscribe((data: any) => {
      console.log('All Data' + data);
    });
  }
  ngOnInit(): void {}
}
