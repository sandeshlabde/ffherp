import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ProspectService } from 'src/app/services/prospect.service';
import { __param } from 'tslib';
import { MatDialog } from '@angular/material/dialog';
import { EntityProductComponent } from '../entity-product/entity-product.component';
import { ShowEmailQuotComponent } from '../show-email-quot/show-email-quot.component';

import { NoteComponent } from '../note/note.component';
import { EmailTraceComponent } from '../email-trace/email-trace.component';
import { ChatComponent } from '../chat/chat.component';
import { FilterSearchComponent } from '../filter-search/filter-search.component';
import { Global } from 'Global';
import { EditListComponent } from '../edit-list/edit-list.component';

export interface DialogData {
  EntityID: number;
  EntityName: string;
}
@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css'],
})
export class ProspectListComponent implements OnInit {
  myStyles: any;
  filterTerm: any;
  dataSource: any;

  EntityName: any;

  ViewDataSource: any;
  ViewDataSource2: any;
  actionData: any;
  actionData2: any;
  id: any;

  entityIdDetailData: any;
  entityIdDetailData2: any;
  date: any;
  current_date: any;
  allColumnList: any;
  checked = false;
  checkbox = false;

  // table colum row show function start here

  get isShowDDate() {
    return ['salesorderlist'].includes(this.EntityName.toLowerCase());
  }
  get isStatus() {
    return [
      'lead',
      'molist',
      'payment',
      'prospect',
      'polist',
      'payable',
      'Ticket',
      'repair',
      'work',
      'voucher'
    ].includes(this.EntityName.toLowerCase());
  }
  get isSourceName() {
    return ['prospect', 'lead',  ].includes(this.EntityName.toLowerCase());
  }
  get expDate() {
    return [
      'lead',
      'payment',
      'prospect',
      'ticket',
      'amc',
      'repair',
      'work',
      'molist',
      'milist',
      'voucher'
    ].includes(this.EntityName.toLowerCase());
  }

  get isDeliveryDate() {
    return ['salesorderlist', 'polist', 'payable'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get isBilledStatus() {
    return ['salesorderlist', 'polist', 'payment'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get isDDeliveryStatus() {
    return ['payable'].includes(this.EntityName.toLowerCase());
  }
  get isBStatus() {
    return ['milist'].includes(this.EntityName.toLowerCase());
  }
  get isServiceType() {
    return ['Ticket', 'repair', 'work', 'amc'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get stage() {
    return ['prospect', 'lead' ].includes(this.EntityName.toLowerCase());
  }
 
  constructor(
    private listService: ProspectService,
    private root: ActivatedRoute,
    public dialog: MatDialog,
    private global: Global
  ) {
    this.root.params.subscribe((param) => {
      this.EntityName = param['EntityName'];
      let params = {
        flag: this.EntityName,
        Dbname: this.global.LOGGED_IN_USER.DbName,
        encrypt: this.global.LOGGED_IN_USER.encryptPswd,
        id: this.global.LOGGED_IN_USER.RoleId,
        userid: this.global.LOGGED_IN_USER.UserId,
      };
      this.listService.getLeadList(params).subscribe((data: any) => {
        this.dataSource = JSON.parse(data);

        // console.log( "date"+this.dataSource[0].EXPClosuredateDashboard);
      });
    });

    // const date = moment();
    // var A=this.dataSource[0].EXPClosuredateDashboard = date.format('DD MMM YYYY ');
    // console.log( "Date"+A);
  }

  // MODEL POP UP start here

  // entityid Dialog Model

  openEntity(id: any) {
    const dialogRef = this.dialog.open(EntityProductComponent, {
      height: '65%',
      width: '100%',

      data: {
        EntityID: id,
        EntityName: this.EntityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  //email Quate Dialog Model
  openEmailQuote(id: any) {
    const dialogRef = this.dialog.open(ShowEmailQuotComponent, {
      height: '900px',
      width: '1000px',
      data: {
        EntityID: id,
        EntityName: this.EntityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  // email Trace Dialog Model
  openEmailTrace(id: any) {
    const dialogRef = this.dialog.open(EmailTraceComponent, {
      height: '40%',
      width: '70%',
      data: {
        EntityID: id,
        EntityName: this.EntityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  // Notes Section Dialog Model
  openNotes(id: any) {
    const dialogRef3 = this.dialog.open(NoteComponent, {
      height: '50%',
      width: '60%',
      data: {
        EntityID: id,
        EntityName: this.EntityName,
      },
    });

    dialogRef3.afterClosed().subscribe();
  }
  // Chat Section Dialog Model
  openChat(id: any) {
    const dialogRef4 = this.dialog.open(ChatComponent, {
      height: 'auto',
      width: '40%',
      data: {
        EntityID: id,
        EntityName: this.EntityName,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }

  openFilterSearch() {
    const dialogRef4 = this.dialog.open(FilterSearchComponent, {
      height: '100%',
      width: '80%',
      data: {
        EntityName: this.EntityName,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }
// EditList dialog model
EditList(installno:any,entityName:any,entityid:any){
  const dialogRef4 = this.dialog.open( EditListComponent, {
    height: '50%%',
    width: '80%',
    data: {
      installno:installno,
      entityName: entityName,
      entityid:entityid
    },
  });

  dialogRef4.afterClosed().subscribe();
}
  //  MODEL POP UP End here

  ngOnInit(): void {}
  // pagination
  perPage = 10;
  p: number = 1;
  key: string = 'id';
  reverse: boolean = true;
  // sorting
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // Per page itom code
  selectPegItom(e: any) {
    this.perPage = e.target.value;
  }

  checkValue(e: any) {
    console.log(e.target.value);
    this.checkbox = !this.checkbox;
  }
}
