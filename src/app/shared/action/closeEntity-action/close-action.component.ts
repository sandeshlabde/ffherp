import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/shared/Global';
import * as moment from 'moment';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-close-action',
  templateUrl: './close-action.component.html',
  styleUrls: ['./close-action.component.css'],
})
export class CloseActionComponent implements OnInit {
  @Input() EntityId: string;

  @Input() commanActionFormData: any;
  @Input() entityname: string;
  @Input() getDefaultData: any;

  @Input() newlyActionData: any;
  userlistData: any;
  OpportunityStatusData: any;
  InstrumentTypeData: any;
  date: any = moment();
  delivery: any = moment();
  lostDate: any = moment();
  closedDate: any = moment();
  Lost: boolean = false;
  Won: boolean = true;
  Close: boolean = false;
  ValueLost: boolean = false;
  SelectedStatus: any;
  lostReasonData: any;
  LostReason: any = '90';
  constructor(private actionService: ActionService, private global: Global) {}
  getuserdata() {
    const param4 = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      id11: this.global.LOGGED_IN_USER.Username,
    };
    this.actionService.getUserlist(param4).subscribe((data: any) => {
      this.userlistData = JSON.parse(data);
    });
  }
  selectStatus(e) {
    console.log(e);
    if (e == 12) {
      this.Won = true;
      this.Close = false;
      this.Lost = false;
      this.ValueLost = false;
    } else if (e == 13) {
      this.Won = false;
      this.Close = false;
      this.Lost = true;
      this.ValueLost = true;
    } else if (e == 15) {
      this.Won = false;
      this.Close = true;
      this.Lost = false;
      this.ValueLost = true;
    }
  }
  closeActionForm(data: any) {
    // console.log(data);
    // console.log(this.getDefaultData);
    console.log(this.commanActionFormData);
    const param = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      EntityId: this.EntityId,
      EntityName: this.entityname,
      ActionType: this.commanActionFormData.ScheduleActionType,
      ActivityType: this.commanActionFormData.ScheduleActivityType,
      Discussions: this.commanActionFormData.Discussions,
      ActionStartDate: this.commanActionFormData.ActionStartDate,
      ActionStartTime: this.commanActionFormData.ActionStartTime,
      ActionEndDate: this.commanActionFormData.ActionEndDate,
      ActionEndTime: this.commanActionFormData.ActionEndTime,
      ContactId: this.getDefaultData[0].ContactId,
      UserId: this.commanActionFormData.ActivityBy,
      Moneys: '',
      KMS: '',
      UpdatedBy: this.global.LOGGED_IN_USER.Username,
      Id: this.getDefaultData[0].ScheduleUserId,
      CallBackIn: '',
      Hours: 'hh',
      OtherContact: '',
      MoveTostage: this.commanActionFormData.MoveTostage,
      Converttolead: '0',
      CloseProspect: '0',
      CloseWork: '0',
      TravelTime: this.commanActionFormData.TravelTime,
      TravelCost: this.commanActionFormData.TravelCost,
      OtherCost: this.commanActionFormData.OtherCost,
      DCRNO: this.commanActionFormData.DCRNO,
      CallingResponseCode: '',
      Comefrompdfsend: '',
      CloseLead: '0',
      CloseLeadStatus: '? number:0 ?',
      CloseLeadPONumber: data.CoustomerPONO,
      CloseLeadPODATE: '26/03/2022',
      CloseLeadDeliveryDATE: moment(data.closedDate).format('DD/MM/YYYY'),
      CloseLeadAdv: '0',
      CloseLeadINS: '',
      CloseLeadBank: '',
      CloseLeadMode: data.Instrument,
      CloseLeadRemarks: data.Remark,
      CloseLeadLostReason: data.LostReason,
      CloseLeadLostDate: moment(data.LostDate).format('DD/MM/YYYY'),
      CloseLeadCloseReason: data.ClosedReason,
      CloseLeadCloseDate: moment(data.closedDate).format('DD/MM/YYYY'),
      CloseLeadLeadValue: '6472.92',
      CloseLeadLeadCloseValue: data.selectedStatus,
      CloseLeadLeadContactSMS: '9835488546',
      CloseLeadLeadOwnerSMS: '',
      CloseLeadLeadActorSMS: '',
      chkContactSMSClose: 'false',
      chkContactEmailClose: 'false',
      chkOwnerSMS: 'false',
      chkOwnerEmail: 'false',
      chkActorSMSClose: 'false',
      chkActorEmailClose: 'false',
      ContactSMSClose: '9835488546',
      ContactEmailClose: 'dharmesh.jivani@rasnaltelecom.com',
      OwnerEmail: 'saidirector@gmail.com',
      OwnerSMS: '',
      ActorSMSClose: '',
      ActorEmailClose: 'aadi111@gmail.com',
    };
    console.log(param);
    // this.actionService
    //   .saveActualCommanAction(param)
    //   .subscribe((data: any) => {});
  }
  ngOnInit(): void {
    this.OpportunityStatusData = this.newlyActionData.Table9;
    this.InstrumentTypeData = this.newlyActionData.Table11;
    this.lostReasonData = this.newlyActionData.Table10;

    this.SelectedStatus = 12;
    this.LostReason = 90;
    // console.log(this.newlyActionData);
  }
}
