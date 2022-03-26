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
import { Global } from 'Global';
import * as moment from 'moment';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
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
export class ActionComponent implements OnInit {
  [x: string]: any;
  public TabIndex = 0;
  EntityId: '';
  stageType: string;
  activityType: string;
  entityname: string;
  getDefaultData: any;
  contactlistData: any;
  nextAction: boolean = false;
  closeAction: boolean = false;

  Discussions: any;
  actionStartDate: any = moment();
  ActionStartTime: any;
  actionEndDate: any = moment();
  ActionEndTime: any;

  Comefrompdfsend: any;
  SelectActionType: '';
  SelectActionData: any;
  ScheduleActionId: any;
  EntityName: any;
  moveStageData: any;
  activitydata: any;
  newlyActionData: any;
  id: any;
  notContactableData: any;
  clientNo: any;
  activityByData: any;
  DefaultSelectActionType: any;
  CoustomerContactName: any;
  ActivityType: any;
  MoveTostage: any;
  ActivityBy: any;
  commanActionFormData: any;
  get ConvertToLeadButton() {
    return ['prospect'].includes(this.EntityName.toLowerCase());
  }
  get CloseLeadButton() {
    return [
      'lead',
      'payment',
      'salesorderlist',
      'polist',
      'payable',
      'ticket',
      'amc',
      'repair',
      'work',
      'molist',
      'milist',
      'voucher',
    ].includes(this.EntityName.toLowerCase());
  }
  get emailReport() {
    return ['ticket'].includes(this.EntityName.toLowerCase());
  }
  get travel() {
    return ['ticket'].includes(this.EntityName.toLowerCase());
  }
  constructor(
    private actionService: ActionService,
    private global: Global,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.EntityId = data.EntityID;
    this.EntityName = data.EntityName;
    this.clientNo = data.clientNo;

    if (this.EntityName === 'POList') {
      this.activityType = 'SoActivitytype';
      this.stageType = 'SOStage';
      this.entityname = 'PO';
    } else if (this.EntityName === 'SalesOrderLIst') {
      this.activityType = 'SoActivitytype';
      this.stageType = 'SOStage';
      this.entityname = 'SO';
    } else if (this.EntityName === 'Prospect') {
      this.activityType = 'ProspectContactCode';
      this.stageType = 'ProspectSatge';
      this.entityname = 'Prospect';
    } else if (this.EntityName === 'Lead') {
      this.activityType = 'Lead';
      this.stageType = 'Lead';
      this.entityname = 'Lead';
    } else if (this.EntityName === 'Payable') {
      this.activityType = 'PayableActivityType';
      this.stageType = 'PayableStage';
      this.entityname = 'Payable';
    } else if (this.EntityName === 'MoList') {
      this.activityType = 'MOActivityType';
      this.stageType = 'MOStage';
      this.entityname = 'MO';
    } else if (this.EntityName === 'MIList') {
      this.activityType = 'MIActivityType';
      this.stageType = 'MIStage';
      this.entityname = 'MI';
    } else if (this.EntityName === 'Repair') {
      this.activityType = 'RepairActivityType';
      this.stageType = 'RepairStage';
      this.entityname = 'Repair';
    } else if (this.EntityName === 'Payment') {
      this.activityType = 'PaymentActivityType';
      this.stageType = 'PaymentStage';
      this.entityname = 'Payment';
    } else if (this.EntityName === 'AMC') {
      this.activityType = 'AmcActivityType';
      this.stageType = 'Amcstage';
      this.entityname = 'Amc';
    }
    //  else if (this.EntityName === 'Work') {
    //   this.activityType = 'Work';
    //   this.stageType = 'todolist';
    //   this.entityname = 'todolist';
    // }
    //  else if (this.EntityName === 'Ticket') {
    //   this.activityType = 'Ticket';
    //   this.stageType = 'Ticket';
    //   this.entityname = 'Ticket';
    // }
    const param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.EntityId,
      EntityName: this.entityname,
    };
    this.actionService.getDefaultData(param).subscribe((data: any) => {
      this.getDefaultData = JSON.parse(data);
      this.DefaultSelectActionType = this.getDefaultData[0].ScheduleActionType;
      this.CoustomerContactName = this.getDefaultData[0].ContactId;
      this.ActivityType = this.getDefaultData[0].NextScheduleActivityType;
      this.MoveTostage = this.getDefaultData[0].MoveToStage;
      this.ActivityBy = this.getDefaultData[0].ScheduleUserId;
      console.log(this.ActivityType);
      console.log(this.getDefaultData);
      this.getNewlyData();
    });
  }
  updateOptionalLabel() {}
  CloseLead() {
    this.closeAction = true;
  }
  NextAction() {
    this.nextAction = true;
  }
  getNewlyData() {
    const params = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.EntityId,
      EntityName: this.entityname,
      CompanyId: this.getDefaultData[0].clientId,
      ContactId: this.getDefaultData[0].ContactId,
      TargetOwner: this.getDefaultData[0].OwnerId,
      ActionActor: this.getDefaultData[0].UpdatedBy,
    };

    this.actionService.getCommonDataNewlyData(params).subscribe((data: any) => {
      this.newlyActionData = JSON.parse(data);
      this.SelectActionData = this.newlyActionData.Table6;
      this.activitydata = this.newlyActionData.Table;
      this.moveStageData = this.newlyActionData.Table1;
      this.contactlistData = this.newlyActionData.Table2;
      this.activityByData = this.newlyActionData.Table3;
      this.notContactableData = this.newlyActionData.Table7;
    });
  }

  ActionForm(data: any) {
    this.commanActionFormData = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.EntityId,
      EntityName: this.entityname,
      ActionType: this.DefaultSelectActionType,
      ActivityType: data.ActivityType,
      Discussions: data.Discussion,
      ActionStartDate: moment(data.actionStartDate).format('DD/MM/YYYY'),
      ActionStartTime: data.ActionStartTime,
      ActionEndDate: moment(data.actionEndDate).format('DD/MM/YYYY'),
      ActionEndTime: data.ActionEndTime,
      ContactId: this.getDefaultData[0].ContactId,
      UserId: this.global.LOGGED_IN_USER.UserId,
      Moneys: '',
      KMS: '',
      UpdatedBy: this.global.LOGGED_IN_USER.Username,
      Id: this.getDefaultData[0].ScheduleActionId,
      CallBackIn: data.CallBackIn,
      Hours: 'hh',
      OtherContact: data.OtherCost,
      MoveTostage: data.MoveTostage,
      Converttolead: '0',
      CloseProspect: '0',
      CloseWork: '0',
      TravelTime: data.TravelTime,
      TravelCost: data.TravelCost,
      OtherCost: data.OtherCost,
      DCRNO: data.DCRNO,
      Comefrompdfsend: '',
    };
  }

  ngOnInit(): void {}
}
