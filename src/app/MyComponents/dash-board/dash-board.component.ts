import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

import * as moment from 'moment';

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
  total: any;
  value: any;
  fromdate: any;
  From: any = moment().format('YYYY-MM-DD');
  To: any = moment().format('YYYY-MM-DD');
  arr: any[];
  AllData: any;
  FooterTotal: any;
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
    const map2 = new Map();
    const map = new Map();
    data.forEach((item) => {
      map.set(item['entActionActorName'], {
        ...map.get(item['entActionActorName']),
        [item[type]]:
          map.get(item['entActionActorName']) &&
          map.get(item['entActionActorName'])[item[type]]
            ? map.get(item['entActionActorName'])[item[type]] + 1
            : 1,
        total:
          map.get(item['entActionActorName']) &&
          map.get(item['entActionActorName']).total
            ? map.get(item['entActionActorName']).total + 1
            : 1,
      });
      map2.set(item[type], {
        total2:
          map2.get(item[type]) && map2.get(item[type]).total2
            ? map2.get(item[type]).total2 + 1
            : 1,
      });
    });
    this.FooterTotal = map2;
    console.log(map2);
    console.log(map);
    return map;
  }

  submitValue() {
    const FormDate = moment(this.From).format('YYYY-MM-DD');
    const ToDate = moment(this.To).format('YYYY-MM-DD');

    let param = {
      eDbname: this.global.LOGGED_IN_USER.DbName,
      eFromDate: FormDate,
      eMissedFlag: '1',
      eModuleFlag: 'All',
      ePassword: this.global.LOGGED_IN_USER.encryptPswd,
      eToDate: ToDate,
    };
    this.listService.showtotalActivity(param).subscribe((data: any) => {
      this.AllData = JSON.parse(data);
      this.tableData = this.getPivotTable(this.AllData, this.selectedValue);
      this.pieChartLabels = Array.from(this.columns.values());
    });
  }

  get columns(): Array<string> {
    if (this.tableData) {
      const c: any = Array.from(this.tableData).reduce(
        (cols: Set<string>, o) => {
          Object.keys(o[1]).forEach((key) => {
            cols.add(key.trim());
          });
          return cols;
        },
        new Set()
      );
      return Array.from(c);
    }
    return [];
  }

  updateTable() {
    this.submitValue();
  }

  piChart(x) {
    console.log(x);
    const pieData = Object.values(x);
    this.pieChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };

    this.pieChartLegend = true;

    this.pieChartData = [
      {
        data: pieData,
      },
    ];
  }
  getTotal(A) {
    return Array.from(this.tableData).reduce((sum, o) => {
      return o[1] && o[1][A] ? o[1][A] + sum : sum;
    }, 0);
  }
  ngOnInit(): void {}
}
