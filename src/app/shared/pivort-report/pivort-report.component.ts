import { Component, OnInit } from '@angular/core';
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
import { Global } from 'Global';
import * as moment from 'moment';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import { ListComponent } from 'src/app/MyComponents/listComponent/list.component';
import { CommanService } from 'src/app/services/comman.service';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-pivort-report',
  templateUrl: './pivort-report.component.html',
  styleUrls: ['./pivort-report.component.css'],
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
export class PivortReportComponent implements OnInit {
  reportCommanData: any;
  todatdate = moment();
  to = this.todatdate;
  from = this.todatdate;
  Entity: any;
  Row: any;
  Column: any;
  reportMappingData: any;
  VReportData: any;
  Headings: any;
  pieChartLabels: string[];
  pieChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean };
  pieChartLegend: boolean;
  pieChartData: { data: unknown[] }[];
  AmcListData: any;
  EntityName: any;
  pieData: any;
  AD: any;
  AmcFilterData: any;
  displyaPieChart: boolean = false;
  username: any;
  constructor(
    private commanService: CommanService,
    private global: Global,
    public dialog: MatDialog
  ) {
    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      Type: 'ReportTypeRow',
    };
    this.commanService
      .GetCommanDataPivortReport(param)
      .subscribe((data: any) => {
        this.reportCommanData = JSON.parse(data);
      });
  }
  reportMapping() {
    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      Type: this.Entity,
      contactType: this.Row,
    };
    this.commanService.GetReportMapping(param).subscribe((data: any) => {
      this.reportMappingData = JSON.parse(data);
      console.log(this.reportMappingData);
    });
  }
  generateReport() {
    let param = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      ReportType: this.Column,
      Users: this.global.LOGGED_IN_USER.UserId,
      V_fromdate: moment(this.from).format('DD/MM/YYYY'),
      V_todate: moment(this.to).format('DD/MM/YYYY'),
      Rollid: this.global.LOGGED_IN_USER.RoleId,
      ModuleType: this.Entity,
      // Dbname: 'Vol187',
      // ReportType: '427',
      // Users: 'Director',
      // V_fromdate: '05/04/2021',
      // V_todate: '05/04/2022',
      // Rollid: 1,
      // ModuleType: '1',
    };

    this.commanService.GetVReport(param).subscribe((data: any) => {
      this.VReportData = data;
      console.log(this.VReportData);
      let res = this.VReportData.map((x) => Object.keys(x));
      this.Headings = res[0];
    });
  }
  getRowData(row: any, columnName: any) {
    if (
      columnName == 'entityOwnerName' ||
      columnName == 'user Name' ||
      columnName == 'name'
    ) {
      this.piChart(row);
    } else {
      if (this.Entity == '1') {
        this.EntityName = 'Lead';
      } else if (this.Entity == '2') {
        this.EntityName = 'SalesOrderLIst';
      } else if (this.Entity == '3') {
        this.EntityName = 'Prospect';
      }

      const dialogRef = this.dialog.open(ListComponent, {
        width: '100%',
        height: '100%',

        data: {
          EntityName: this.EntityName,
          Ownername: row.entityOwnerName || row.name || row['user Name'],
          categoryId: columnName,
          fromdate: moment(this.from).format('DD/MM/YYYY'),
          todate: moment(this.to).format('DD/MM/YYYY'),
          columnId: this.Column,
        },
      });

      dialogRef.afterClosed().subscribe();
    }
  }

  piChart(x: any) {
    (this.username = x.entityOwnerName || x.name || x['user Name']),
      (this.displyaPieChart = true);
    const A = Object.keys(x)
      .filter(
        (key) =>
          key !== 'entityOwnerName' && key !== 'user Name' && key !== 'name'
      )
      .reduce((obj, key) => {
        obj[key] = x[key];
        return obj;
      }, {});

    this.pieData = Object.values(A);
    this.pieData.forEach((x: string, i) => {
      this.pieData[i] = x.replace(',', '');
    });

    this.pieChartLabels = Object.keys(A);

    this.pieChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
    };

    this.pieChartLegend = true;

    this.pieChartData = [
      {
        data: this.pieData,
      },
    ];
  }

  // filteredEntity(e) {
  //   if (this.Entity == '1') {
  //     return this.AmcListData.filter((item) => item.Stage == e);
  //   }
  //   return [];
  // }
  // groupSelectedValue(data) {
  //   const map = new Map();
  //   data.forEach((item) => {
  //     map.set(item['Stage'], {});
  //   });

  //   this.AmcFilterData = this.filteredEntity(Array.from(map.keys()));
  // }

  ngOnInit(): void {}
}
