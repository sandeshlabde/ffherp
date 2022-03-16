import { Component, Inject, OnInit } from '@angular/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as moment from 'moment';
import { MY_FORMATS } from 'src/app/matdatepickerformat';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css'],
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
export class AdditionalDetailsComponent implements OnInit {
  EntityName: any;
  openDate: any = moment().format('YYYY-MM-DD');
  get CostOfsupply() {
    return ['lead', 'prospect'].includes(this.EntityName.toLowerCase());
  }
  get ChallanSO() {
    return [
      'salesorderlist',
      'molist',
      'polist',
      'milist',
      'payment',
      'payable',
    ].includes(this.EntityName.toLowerCase());
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.EntityName = this.data.EntityName;
  }

  ngOnInit(): void {}
}
