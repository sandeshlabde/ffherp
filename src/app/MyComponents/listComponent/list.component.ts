import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { prospectdatafield } from 'src/apitable';
import { Global } from 'Global';
import { ApprovalComponent } from './approval/approval.component';
import { ChatComponent } from './chat/chat.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EmailTraceComponent } from './email-trace/email-trace.component';
import { EntityProductComponent } from './entity-product/entity-product.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { NoteComponent } from './note/note.component';
import { ShowEmailQuotComponent } from './show-email-quot/show-email-quot.component';

export interface DialogData {
  EntityID: number;
  EntityName: string;
}
@Component({
  selector: 'app-prospect-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ProspectListComponent implements OnInit {
  displayedColumns: string[] = [
    'InstalledNo',
    'ClientName',
    'ContactName',
    'OwnerName',
    'Anualisedamount',
    'StatusName',
    'Billedstatus',
    'SourceName',
    'Billedstatus1',
    'isDDeliveryStatus1',
    'ServiceTypeName',
    'Stage',
    'EXPClosuredateDashboard',
    'DeliveryDate',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<prospectdatafield>([]);

  EntityName: any;
  id: any;
  date: any;
  current_date: any;
  selection: any;

  // table colum row show function start here
  get delstatus() {
    return ['salesorderlist'].includes(this.EntityName.toLowerCase());
  }
  get isShowDStatus() {
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
      'voucher',
    ].includes(this.EntityName.toLowerCase());
  }
  get isSourceName() {
    return ['prospect', 'lead'].includes(this.EntityName.toLowerCase());
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
      'voucher',
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
    return ['prospect', 'lead'].includes(this.EntityName.toLowerCase());
  }
  get installedno() {
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
      'salesorderlist',
      'polist',
      'payable',
    ].includes(this.EntityName.toLowerCase());
  }
  get voucher() {
    return ['voucher'].includes(this.EntityName.toLowerCase());
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
        this.dataSource.data = JSON.parse(data);
      });
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  EditList(installno: any, entityName: any, entityid: any) {
    console.log(installno, entityName, entityid);
    const dialogRef4 = this.dialog.open(EditListComponent, {
      height: '50%%',
      width: '80%',
      data: {
        installno: installno,
        entityName: entityName,
        entityid: entityid,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }
  approval(installno: any, entityName: any, entityid: any) {
    console.log(installno, entityName, entityid);
    const dialogRef4 = this.dialog.open(ApprovalComponent, {
      height: '50%%',
      width: '80%',
      data: {
        installno: installno,
        entityName: entityName,
        entityid: entityid,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }

  ngOnInit() {}
}
