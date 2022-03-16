import { Component, OnInit, Input } from '@angular/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { Global } from 'Global';
import * as moment from 'moment';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-next-action',
  templateUrl: './next-action.component.html',
  styleUrls: ['./next-action.component.css'],
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
export class NextActionComponent implements OnInit {
  @Input() EntityId: string;
  @Input() activityType: string;
  @Input() entityname: string;
  @Input() getDefaultData: any;
  @Input() contactlistData: any;
  @Input() activitydata: any;
  @Input() SelectActionData: any;

  ScheduleActionType: string;
  ActionType: any;
  moveStageData: any;
  userlistData: any;
  scheduleActionDate: any = moment().format('YYYY-MM-DD');
  ActionStartTime: any;

  today: Date = new Date();
  constructor(private actionService: ActionService, private global: Global) {}

  saveActionForm(data: any) {
    // this.ActionType = data.ActionType;
    // console.log(data);
    let param = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.EntityId,
      EntityName: this.entityname,
      ScheduleActionType: this.ScheduleActionType,
      ScheduleActivityType: data.ScheduleActivityType,
      Discussions: data.Discussions,
      ScheduleActionDate: moment(data.scheduleActionDate).format('DD/MM/YYYY'),
      ScheduleActionTime: data.ScheduleActionTime,
      ContactId: '211209001',
      ScheduleUserId: '0066',
      UpdatedBy: this.global.LOGGED_IN_USER.Username,
      FlagUpdateSheduleAction: '',
      NextOtherContactInfo: '',
      Id: 14285,
      CallBackIn: '',
      arr: [
        'false',
        'false',
        'false',
        'false',
        'false',
        'false',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      Hours: 'hh',
    };

    this.actionService
      .saveSheduleCommonAction(param)
      .subscribe((data: any) => {});
  }
  updateOptionalLabel() {}

  ngOnInit(): void {
    // const param1 = {
    //   DBNAME: this.global.LOGGED_IN_USER.DbName,
    //   password: this.global.LOGGED_IN_USER.encryptPswd,
    //   Type: 'LFollowUpType',
    // };
    // this.actionService.connanData(param1).subscribe((data: any) => {
    //   this.ScheduleSelectActionData = JSON.parse(data);
    // });
    // let params2 = {
    //   DBNAME: this.global.LOGGED_IN_USER.DbName,
    //   password: this.global.LOGGED_IN_USER.encryptPswd,
    //   Type: this.activityType,
    // };
    // this.actionService.connanData(params2).subscribe((data: any) => {
    //   this.activitydata = JSON.parse(data);
    // });

    // const param3 = {
    //   DBNAME: this.global.LOGGED_IN_USER.DbName,
    //   id11: '211209001',
    //   password: this.global.LOGGED_IN_USER.encryptPswd,
    // };
    // this.actionService.getContactList(param3).subscribe((data: any) => {
    //   this.contactlistData = JSON.parse(data);
    //   console.log(this.contactlistData);
    // });
    const param4 = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      id11: this.global.LOGGED_IN_USER.Username,
    };
    this.actionService.getUserlist(param4).subscribe((data: any) => {
      this.userlistData = JSON.parse(data);
    });
    console.log(this.getDefaultData);
  }
}
