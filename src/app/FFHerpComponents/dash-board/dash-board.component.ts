import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
import { MatDialog } from '@angular/material/dialog';
import { DashListComponent } from './dash-list/dash-list.component';
import { Global } from 'src/app/shared/Global';

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
  userName: any;
  Today = moment();
  selectedValue = 'entActionType';
  ddData: any;
  jsonData: any;
  total: any;
  value: any;
  fromdate: any;
  From: any = this.Today;
  To: any = this.Today;
  minDate: any = this.Today;
  maxDate: any = this.Today;
  arr: any[];
  AllData: any;
  FooterTotal: any;
  pieChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean };
  pieChartLabels: string[];
  pieChartLegend: boolean;
  pieChartData: { data: any[] }[];
  tableData: any;
  Total: any;

  h: any;

  constructor(
    private listService: ProspectService,
    private global: Global,
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {
    this.httpClient.get('/assets/inputlabel.json').subscribe((data) => {
      this.jsonData = data;
      this.ddData = this.jsonData.DDvalue;
    });
    this.DashList();
  }
  today() {
    this.From = moment(this.Today);
    this.To = moment(this.Today);
    this.DashList();
  }
  yesterday() {
    this.From = moment(this.Today).add(-1, 'days');
    this.To = moment(this.Today).add('days');
    this.DashList();
  }
  lastWeek() {
    this.From = moment(this.Today).subtract(1, 'weeks').startOf('isoWeek');

    this.To = moment(this.Today).subtract(1, 'weeks').endOf('isoWeek');

    this.DashList();
  }
  getPivotTable(data, type) {
    const map = new Map();
    data.forEach((item) => {
      map.set(item['entActorName'], {
        ...map.get(item['entActorName']),
        [item[type]]:
          map.get(item['entActorName']) &&
          map.get(item['entActorName'])[item[type]]
            ? map.get(item['entActorName'])[item[type]] + 1
            : 1,
        total:
          map.get(item['entActorName']) && map.get(item['entActorName']).total
            ? map.get(item['entActorName']).total + 1
            : 1,
      });
    });

    return map;
  }

  DashList() {
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
    this.DashList();
  }

  getTotal(A) {
    return Array.from(this.tableData).reduce((sum, o) => {
      return o[1] && o[1][A] ? o[1][A] + sum : sum;
    }, 0);
  }
  piChart(x, user) {
    this.userName = user;
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

  ShowListDeatail(A) {
    console.log(A);
    const dialogRef = this.dialog.open(DashListComponent, {
      height: '70%',
      width: '80%',
      data: {
        ActorName: A,
        Data: this.AllData,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  ngOnInit(): void {}
}
