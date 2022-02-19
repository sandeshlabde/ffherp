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
  selectedValue = '';
  AdvanceFilter: boolean = false;
  activityData: any;
  ddData: any;
  jsonData: any;

  fromdate: any;
  // eToDate	"2022-02-17"
  From: any = '';
  To: any = '';

  entVisits: any;
  entCallsReport: any;
  entRemotReport: any;
  entByPhoneReport: any;

  AllData: any;
  tableConfig: any;

  PivotData: any;
  entActionTypeData: any;

  pieChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean };
  pieChartLabels: string[];
  pieChartLegend: boolean;
  pieChartData: { data: any[] }[];
  tableData: any;
  entE_mailReport: any;

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
      // entActionActorID: "DC5254",
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
      console.log(c);
      return Array.from(c);
    }
    return [];
  }

  updateTable() {
    this.tableData = this.getPivotTable(this.AllData, this.selectedValue);
    this.pieChartLabels = Array.from(this.tableData.keys());
    console.log(this.tableData);
  }

  // "": 10
  // Billed: 1
  // Client Visit: 1
  // Collected Advance: 1
  // Collected PO: 1
  // Collection: 1
  // Deliverey Bills: 1
  // Demo: 15
  // Follow up: 24
  // FollowUp: 11
  // Inspect Material: 1
  // Make payment: 2
  // No Reply: 2
  // Req Understanding: 1

  piChart(x: any) {
    console.log(x.value);

    this.entVisits = x.value['Visit'];
    this.entCallsReport = x.value['Phone'];
    this.entRemotReport = x.value['Remote'];
    this.entByPhoneReport = x.value['ByPhone'];
    this.entE_mailReport = x.value['E-mail'];

    this.pieChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };
    // this.pieChartLabels = ['Visits', 'Phone', 'Remot', 'ByPhone','E-mail'];

    this.pieChartLegend = true;

    this.pieChartData = [
      {
        data: [
          this.entByPhoneReport,
          this.entE_mailReport,
          this.entCallsReport,
          this.entRemotReport,
          this.entVisits,
        ],
      },
    ];
  }
  ngOnInit(): void {}
}
