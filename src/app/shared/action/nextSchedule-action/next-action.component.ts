import { Component, OnInit, Input } from '@angular/core';

import { Global } from 'Global';
import * as moment from 'moment';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-next-action',
  templateUrl: './next-action.component.html',
  styleUrls: ['./next-action.component.css'],
})
export class NextActionComponent implements OnInit {
  @Input() EntityId: string;
  activityType: string;
  @Input() entityname: string;
  @Input() getDefaultData: any;
  contactlistData: any;
  @Input() newlyActionData: any;
  SelectActionData: any;
  DefaultSelect: any;
  ScheduleActionType: string;
  ActionType: any;
  moveStageData: any;
  userlistData: any;
  scheduleActionDate: any = moment().format('YYYY-MM-DD');
  ActionStartTime: any;
  activitydata: any;
  today: Date = new Date();
  CoustamerContactData: any;
  activityByData: any;
  ManagerAlert: any;
  selectedUserData: any;
  CoustomerContactName: any;

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
      ContactId: this.getDefaultData[0].ContactId,
      ScheduleUserId: this.getDefaultData[0].ScheduleUserId,
      UpdatedBy: this.global.LOGGED_IN_USER.Username,
      FlagUpdateSheduleAction: '',
      NextOtherContactInfo: '',
      Id: this.getDefaultData[0].ScheduleActionId,
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
  getuserdata(e: any) {
    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      id11: e,
    };
    this.actionService.getUserEmailMobile(param).subscribe((data: any) => {
      this.selectedUserData = JSON.parse(data);
    });
  }
  ngOnInit(): void {
    // this.SelectActionData = this.newlyActionData.Table6;
    // this.activitydata = this.newlyActionData.Table;
    // this.moveStageData = this.newlyActionData.Table1;
    // this.contactlistData = this.newlyActionData.Table2;
    // this.activityByData = this.newlyActionData.Table16;
    // this.CoustamerContactData = this.newlyActionData.Table4;
    // const param4 = {
    //   DBNAME: this.global.LOGGED_IN_USER.DbName,
    //   password: this.global.LOGGED_IN_USER.encryptPswd,
    //   id11: this.global.LOGGED_IN_USER.Username,
    // };
    // this.actionService.getUserlist(param4).subscribe((data: any) => {
    //   this.userlistData = JSON.parse(data);
    // });
  }
  ngAfterViewInit() {
    this.SelectActionData = this.newlyActionData.Table6;
    this.activitydata = this.newlyActionData.Table;
    this.moveStageData = this.newlyActionData.Table1;
    this.contactlistData = this.newlyActionData.Table2;
    this.activityByData = this.newlyActionData.Table3;
    this.CoustamerContactData = this.newlyActionData.Table4;
    this.DefaultSelect = this.getDefaultData[0].ScheduleActionType;

    this.CoustomerContactName = this.contactlistData[0].Id;
    this.ManagerAlert = this.getDefaultData[0].ScheduleUserId;
    this.selectedUserData = this.newlyActionData.Table4;
    // console.log(this.contactlistData);
    console.log(this.newlyActionData);
    console.log(this.ManagerAlert);
  }
}
