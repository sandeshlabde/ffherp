import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

import * as moment from 'moment';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
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
  minDate: any = moment().format('YYYY-MM-DD');
  maxDate: any = moment().format('YYYY-MM-DD');
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
    const map = new Map();
    data.forEach((item) => {
      map.set(item['entActionContactName'], {
        ...map.get(item['entActionContactName']),
        [item[type]]:
          map.get(item['entActionContactName']) &&
          map.get(item['entActionContactName'])[item[type]]
            ? map.get(item['entActionContactName'])[item[type]] + 1
            : 1,
        total:
          map.get(item['entActionContactName']) &&
          map.get(item['entActionContactName']).total
            ? map.get(item['entActionContactName']).total + 1
            : 1,
      });
    });

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
      console.log(this.tableData);
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

  getTotal(A) {
    return Array.from(this.tableData).reduce((sum, o) => {
      return o[1] && o[1][A] ? o[1][A] + sum : sum;
    }, 0);
  }
  piChart(x) {
    const A = Object.keys(x)
      .filter((key) => key !== 'total')
      .reduce((obj, key) => {
        obj[key] = x[key];
        return obj;
      }, {});

    const pieData = Object.values(A);
    this.pieChartLabels = Object.keys(A);

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
  ngOnInit(): void {}
}
