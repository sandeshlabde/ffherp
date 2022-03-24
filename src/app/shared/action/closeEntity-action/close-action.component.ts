import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'Global';
import * as moment from 'moment';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-close-action',
  templateUrl: './close-action.component.html',
  styleUrls: ['./close-action.component.css'],
})
export class CloseActionComponent implements OnInit {
  @Input() EntityId: string;

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
  Win: boolean = true;
  Close: boolean = false;
  ValueLost: boolean = false;
  SelectedStatus: any;
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
      this.Win = true;
      this.Close = false;
      this.Lost = false;
      this.ValueLost = false;
    } else if (e == 13) {
      this.Win = false;
      this.Close = false;
      this.Lost = true;
      this.ValueLost = true;
    } else if (e == 15) {
      this.Win = false;
      this.Close = true;
      this.Lost = false;
      this.ValueLost = true;
    }
  }
  closeActionForm(data: any) {}
  ngOnInit(): void {
    console.log(this.newlyActionData);

    this.OpportunityStatusData = this.newlyActionData.Table9;
    this.InstrumentTypeData = this.newlyActionData.Table24;
    // this.moveStageData = this.newlyActionData.Table1;
    // this.contactlistData = this.newlyActionData.Table2;
    // this.activityByData = this.newlyActionData.Table16;
    // this.CoustamerContactData = this.newlyActionData.Table4;
    this.SelectedStatus = 12;
    console.log(this.SelectedStatus);
  }
}
