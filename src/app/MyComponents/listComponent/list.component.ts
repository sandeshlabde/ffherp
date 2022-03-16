import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { listdatafield } from 'src/apitable';
import { Global } from 'Global';
import { ApprovalComponent } from './approval/approval.component';
import { ChatComponent } from './chat/chat.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EmailTraceComponent } from './email-trace/email-trace.component';
import { EntityProductComponent } from './entity-product/entity-product.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { NoteComponent } from './note/note.component';
import { ShowEmailQuotComponent } from './show-email-quot/show-email-quot.component';
import { ActionComponent } from 'src/app/shared/action/action.component';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CreateNewComponent } from './create-new/create-new.component';
import * as moment from 'moment';
export interface DialogData {
  EntityID: number;
  EntityName: string;
}
@Component({
  selector: 'app-prospect-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  a = moment();
  toDayDate = this.a.toISOString();
  public dateColour: boolean;
  displayedColumns: any[] = [
    {
      default: true,
      columnName: 'InstalledNo',
    },
    {
      default: true,
      columnName: 'ClientName',
    },
    {
      default: true,
      columnName: 'ContactName',
    },
    {
      default: true,
      columnName: 'OwnerName',
    },
    {
      default: true,
      columnName: 'Anualisedamount',
    },
    {
      default: false,
      columnName: 'StatusName',
      entityTypes: [
        'lead',
        'molist',
        'payment',
        'prospect',
        'payable',
        'Ticket',
        'repair',
        'work',
        'voucher',
      ],
    },
    {
      default: false,
      columnName: 'Billedstatus',
      entityTypes: ['salesorderlist', 'polist', 'payment'],
    },
    {
      default: false,
      columnName: 'SourceName',
      entityTypes: ['prospect', 'lead'],
    },
    {
      default: false,
      columnName: 'DeliveryStatusName',
      entityTypes: ['salesorderlist'],
    },
    {
      default: false,
      columnName: 'ServiceTypeName',
      entityTypes: ['Ticket', 'repair', 'work', 'amc'],
    },
    {
      default: false,
      columnName: 'Stage',
      entityTypes: ['prospect', 'lead'],
    },
    {
      default: false,
      columnName: 'EXPClosuredateDashboard',
      entityTypes: [
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
      ],
    },
    {
      default: false,
      columnName: 'DeliveryDate',
      entityTypes: ['salesorderlist', 'polist', 'payable'],
    },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<listdatafield>([]);
  EntityNameTitle: string = '';
  listcol: any;
  eXPDate: any;
  groupbydata: Map<any, any>;
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      this.dataSource.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  EntityName: any;
  id: any;
  date: any;
  current_date: any;
  selection: any;
  tableSection: boolean = true;
  cardSection: boolean = false;
  // table colum row show function start here

  get listColumns() {
    return Object.values(this.displayedColumns)
      .filter((item) => {
        if (item.default) {
          return true;
        }
        if (item.entityTypes) {
          return (
            item.entityTypes.includes(this.EntityName.toLowerCase()) ||
            item.default
          );
        } else {
          return false;
        }
      })
      .map((item) => item.columnName);
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
        Flag: this.EntityName,
        Dbname: this.global.LOGGED_IN_USER.DbName,
        Password: this.global.LOGGED_IN_USER.encryptPswd,
        id: this.global.LOGGED_IN_USER.RoleId,
        userid: this.global.LOGGED_IN_USER.UserId,
      };
      this.listService.getLeadList(params).subscribe((data: any) => {
        this.dataSource.data = JSON.parse(data);
        console.log(this.dataSource.data);
        // this.groupby();
      });
      if (this.EntityName === 'POList') {
        this.EntityNameTitle = 'Purchase Order';
      } else if (this.EntityName === 'SalesOrderLIst') {
        this.EntityNameTitle = 'Sales Order';
      } else if (this.EntityName === 'Prospect') {
        this.EntityNameTitle = 'Prospect';
      } else if (this.EntityName === 'Lead') {
        this.EntityNameTitle = 'Lead';
      } else if (this.EntityName === 'Payable') {
        this.EntityNameTitle = 'Payable';
      } else if (this.EntityName === 'MoList') {
        this.EntityNameTitle = 'Material Out';
      } else if (this.EntityName === 'MIList') {
        this.EntityNameTitle = 'Material In';
      } else if (this.EntityName === 'Repair') {
        this.EntityNameTitle = 'Repair';
      } else if (this.EntityName === 'Payment') {
        this.EntityNameTitle = 'Payment';
      } else if (this.EntityName === 'AMC') {
        this.EntityNameTitle = 'AMC';
      } else if (this.EntityName === 'Work') {
        this.EntityNameTitle = 'Work';
      } else if (this.EntityName === 'Ticket') {
        this.EntityNameTitle = 'Ticket';
      }
    });
  }
  // groupby() {
  //   const map = new Map();
  //   this.dataSource.data.forEach((item) => {
  //     map.set(item['ClientName'], {
  //       ...map.get(item['ClientName']),
  //       [item['ClientName']]:
  //         map.get(item['ClientName']) &&
  //         map.get(item['ClientName'])[item['ClientName']]
  //           ? map.get(item['ClientName'])[item['ClientName']] + 1
  //           : 1,
  //     });
  //   });
  //   return (this.groupbydata = map);
  //   console.log(map);
  // }
  // get columns(): Array<string> {
  //   if (this.groupbydata) {
  //     const c: any = Array.from(this.groupbydata).reduce(
  //       (cols: Set<string>, o) => {
  //         Object.keys(o[1]).forEach((key) => {
  //           cols.add(key.trim());
  //         });
  //         return cols;
  //       },
  //       new Set()
  //     );
  //     return Array.from(c);
  //   }
  //   return [];
  // }
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
        EntityNameTitle: this.EntityNameTitle,
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
        EntityNameTitle: this.EntityNameTitle,
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
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  // Notes Section Dialog Model
  openNotes(id: any, company: any) {
    const dialogRef3 = this.dialog.open(NoteComponent, {
      height: '50%',
      width: '60%',
      data: {
        EntityID: id,
        EntityName: this.EntityName,
        EntityNameTitle: this.EntityNameTitle,
        companyName: company,
      },
    });

    dialogRef3.afterClosed().subscribe();
  }
  // Chat Section Dialog Model
  openChat(id: any) {
    const dialogRef4 = this.dialog.open(ChatComponent, {
      width: '35%',

      position: { left: 65 + '%', top: 5 + '%' },
      data: {
        EntityID: id,
        EntityName: this.EntityName,
        EntityNameTitle: this.EntityNameTitle,
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
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }
  // EditList dialog model
  EditList(installno: any, entityName: any, entityid: any) {
    const dialogRef4 = this.dialog.open(EditListComponent, {
      height: '50%%',
      width: '80%',
      data: {
        installno: installno,
        entityName: entityName,
        entityid: entityid,
        EntityNameTitle: this.EntityNameTitle,
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
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }
  openAction(id: any, clientNo: any) {
    const dialogRef = this.dialog.open(ActionComponent, {
      width: '35%',

      position: { left: 65 + '%', top: 5 + '%' },

      data: {
        EntityID: id,
        EntityName: this.EntityName,
        clientNo: clientNo,
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  createForm() {
    const dialogRef = this.dialog.open(CreateNewComponent, {
      data: {
        EntityName: this.EntityName,

        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  selectTable() {
    this.tableSection = true;
    this.cardSection = false;
  }
  selectCard() {
    this.tableSection = false;
    this.cardSection = true;
  }
  ngOnInit() {}
}
