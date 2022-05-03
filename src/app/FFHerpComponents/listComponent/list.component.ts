import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { listdatafield } from 'src/apitable';
import { ApprovalComponent } from './approval/approval.component';
import { ChatComponent } from './chat/chat.component';

import { EmailTraceComponent } from './email-trace/email-trace.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { NoteComponent } from './note/note.component';
import { ShowEmailQuotComponent } from './show-email-quot/show-email-quot.component';
import { ActionComponent } from 'src/app/shared/action/action.component';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as moment from 'moment';
import { CommanService } from 'src/app/services/comman.service';

import { EntityProductComponent } from './viewEntity/entity-product.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ActionScheduledComponent } from 'src/app/shared/action-scheduled/action-scheduled.component';
import { Subscription } from 'rxjs';
import { CreateNewFormComponent } from './create-new/create-new-form.component';
import { Global } from 'src/app/shared/Global';
import { CurrencyConversion } from 'src/app/shared/models';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';

import { MY_FORMATS } from 'src/app/matdatepickerformat';

export interface DialogData {
  EntityID: number;
  EntityName: string;
}
@Component({
  selector: 'app-prospect-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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
export class ListComponent implements OnInit {
  panelOpenState: boolean = false;
  a = moment();
  toDayDate = this.a.toISOString();
  public dateColour: boolean;

  EntityNameTitle: string = '';
  listcol: any;

  groupbydata: Map<any, any>;
  commanData: any;
  Allshow: boolean = false;
  selectedColumn: any;
  FilterEntityData: any;
  EntityName: any;
  id: any;
  date: any;
  Selection: any;
  tableSection: boolean = true;
  cardSection: boolean = false;
  DetailViewSection: boolean = false;
  groupSelected: any;
  Array: any;
  ActivityFrom: any = this.a;
  ActivityTo: any = this.a;
  currencyConversion = CurrencyConversion;

  displayedColumns: any[] = [
    {
      default: true,
      columnName: 'select',
    },
    {
      default: true,
      columnName: 'InstalledNo',
    },

    {
      default: true,
      columnName: 'ClientName',
    },
    {
      default: false,
      columnName: 'ContactName',
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
        'salesorderlist',
        'polist',
        'payable',
      ],
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
  columns: any[] = [
    'Company',
    'UploadEdit',
    'Details',
    'Amount',
    'Description',
    'AddCount',
    'Schedule',
    'ChatEmailPDF',
  ];
  ActivityLogColumn: any[] = [
    'Entity',
    'Action',
    'CreationDate',
    'Company',
    'Contact',
    'Code',
    'Actor',
    'Type',
    'Form',
    'To',
    'NextAction',
    'Dis',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Count: string;
  subscriptions: Subscription;
  dialogData: any;
  Approval: any;
  IsSearch: any;
  fromDate: any;
  toDate: any;
  Ownername: any;
  categoryId: any;
  commanEntityName: any;

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      this.dataSource.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  dataSource = new MatTableDataSource<listdatafield>([]);
  selection = new SelectionModel<listdatafield>(true, []);
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
  get voucherStatus() {
    return ['voucher', 'salesorderlist'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get facDelDate() {
    return ['salesorderlist'].includes(this.EntityName.toLowerCase());
  }
  get UpTo() {
    return ['lead'].includes(this.EntityName.toLowerCase());
  }
  get nextAct() {
    return ['salesorderlist', 'prospect'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get allList() {
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
      'voucher',
    ].includes(this.EntityName.toLowerCase());
  }
  get ActivityList() {
    return ['activity'].includes(this.EntityName.toLowerCase());
  }
  constructor(
    private CommanService: CommanService,
    private listService: ProspectService,
    private root: ActivatedRoute,
    public dialog: MatDialog,
    private injector: Injector,
    private global: Global
  ) {
    this.root.params.subscribe((param) => {
      this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);

      if (this.dialogData) {
        if (this.dialogData.Count) {
          this.EntityName = this.dialogData.EntityName;
          this.Approval = '296';
          this.IsSearch = 1;
        } else if (this.dialogData.columnId) {
          this.EntityName = this.dialogData.EntityName;
          this.fromDate = this.dialogData.fromdate;
          this.toDate = this.dialogData.todate;
          this.Ownername = this.dialogData.Ownername;
          this.categoryId = this.dialogData.categoryId;
        }
      } else {
        this.EntityName = param['EntityName'];

        if (this.EntityName === 'POList') {
          this.EntityNameTitle = 'Purchase Order';
          this.commanEntityName = 'PO';
        } else if (this.EntityName === 'SalesOrderLIst') {
          this.EntityNameTitle = 'Sales Order';
          this.commanEntityName = 'SO';
        } else if (this.EntityName === 'Prospect') {
          this.EntityNameTitle = 'Prospect';
          this.commanEntityName = 'Prospect';
        } else if (this.EntityName === 'Lead') {
          this.EntityNameTitle = 'Lead';
          this.commanEntityName = 'Lead';
        } else if (this.EntityName === 'Payable') {
          this.EntityNameTitle = 'Payable';
          this.commanEntityName = 'Invoice';
        } else if (this.EntityName === 'MoList') {
          this.EntityNameTitle = 'Material Out';
          this.commanEntityName = 'MO';
        } else if (this.EntityName === 'MIList') {
          this.EntityNameTitle = 'Material In';
          this.commanEntityName = 'MI';
        } else if (this.EntityName === 'Repair') {
          this.EntityNameTitle = 'Repair';
          this.commanEntityName = 'Repair';
        } else if (this.EntityName === 'Payment') {
          this.EntityNameTitle = 'Payment';
          this.commanEntityName = 'Payment';
        } else if (this.EntityName === 'AMC') {
          this.EntityNameTitle = 'AMC';
          this.commanEntityName = 'AMC';
        } else if (this.EntityName === 'Work') {
          this.EntityNameTitle = 'Work';
          this.commanEntityName = 'Work';
        } else if (this.EntityName === 'Ticket') {
          this.EntityNameTitle = 'Ticket';
          this.commanEntityName = 'Ticket';
        } else if (this.EntityName === 'Voucher') {
          this.EntityNameTitle = 'Voucher';
          this.commanEntityName = 'Voucher';
        } else if (this.EntityName === 'Activity') {
          this.EntityNameTitle = 'Activity Log';
          this.commanEntityName = '';
        }
      }

      if (this.EntityName == 'Activity') {
        this.activityGenerate();
      } else {
        let params = {
          Flag: this.EntityName,
          Dbname: this.global.LOGGED_IN_USER.DbName,
          Password: this.global.LOGGED_IN_USER.encryptPswd,

          userid: this.global.LOGGED_IN_USER.UserId,
          RoleID: this.global.LOGGED_IN_USER.RoleId,
          Approval: this.Approval,
          IsSearch: this.IsSearch,

          ClientName: '',
          ProductId: '',
          CategoryId: this.categoryId,
          GroupId: '',
          ManufacturerName: '',
          SerialNO: '',
          Remark: '',
          Status: ' ',
          BranchId: '',
          ServicetyType: '',
          Subscriptioncheck: '',
          DateStatus: '',
          Fromdate: this.fromDate,
          ToDate: this.toDate,
          InstalledNo: '',
          Periodicity: '-1',
          ProspectId: '',
          CompanyName: '',
          ProductName: '',
          Source: '0',
          Source_name: '',
          NActor: '',
          CompEmail: '',
          ConMobile: '',
          ConEmail: '',
          Opendate: '',
          ContactName: '',
          OwnerName: this.Ownername,
          FActor: '',
          ProblemDetail: 'Select Problems',
          Billedstatus: '0',

          SoDateTypee: '0',
          DocketNo: '',
          TransportName: '',
          SalesOrderId: '',
          POID: '',
          MIID: '',
          PONumber: '',
          BillType: 'Select Invoice Type',
          DeliveryStatusName: '0',
          AssociateCompany: '',
          IndustryType: '0',
          Relationshiptype: '0',
          Area: '',
          City: '',
          State: '',
          CompanyOwner: '',
          Parentcompany: '',
          Stage: '0',
          ProspectContactCode: '0',
          LeadStage: '0',
          MOID: '',
          actiontype: '0',
          ProductRowId: '0',
          Priority: '0',
          SourceRef: '',
          EntityId: '',
          ENTITY: 'Select Entity',
          TicketType: '0',
          TicketFaultType: '0',
          Installedstatusid: '0',
          Tag: '0',
          VoucherNo: '',
          ExpneseType: '0',
        };
        this.listService.getList(params).subscribe((data: any) => {
          this.dataSource.data = JSON.parse(data);
          this.commanTotalData();
          this.ngAfterViewInit();
        });
      }
    });
  }

  changeSortedColumn() {
    const sortState: Sort = { active: this.selectedColumn, direction: 'asc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: listdatafield): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  multipleSelect() {
    this.Allshow = !this.Allshow;
  }
  // MODEL POP UP start here

  // entityid Dialog Model

  openEntity(id: any) {
    const dialogRef = this.dialog.open(EntityProductComponent, {
      height: '80%',
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
      height: '82vh',
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
      width: '30%',

      position: { left: 70 + '%', top: 10 + '%' },
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
      height: '80%',
      width: '80%',
      data: {
        Data: this.commanData,
        EntityName: this.EntityName,
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef4.afterClosed().subscribe();
  }
  // EditList dialog model
  // EditList(installno: any, entityName: any, entityid: any) {
  //   const dialogRef4 = this.dialog.open(EditListComponent, {
  //     height: '50%',
  //     width: '80%',
  //     data: {
  //       installno: installno,
  //       entityName: entityName,
  //       entityid: entityid,
  //       EntityNameTitle: this.EntityNameTitle,
  //     },
  //   });

  //   dialogRef4.afterClosed().subscribe();
  // }
  approval(installno: any, entityName: any, entityid: any, name: string) {
    console.log(installno, entityName, entityid);
    const dialogRef4 = this.dialog.open(ApprovalComponent, {
      height: '50%',
      width: '80%',
      data: {
        installno: installno,
        entityName: entityName,
        entityid: entityid,
        EntityNameTitle: this.EntityNameTitle,
        name: name,
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
    const dialogRef = this.dialog.open(CreateNewFormComponent, {
      data: {
        EntityName: this.EntityName,
        commanData: this.commanData,
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  actionSchedul(id, company) {
    const dialogRef = this.dialog.open(ActionScheduledComponent, {
      height: '50%',
      width: '80%',
      data: {
        companyName: company,
        EntityID: id,
        EntityName: this.EntityName,
        EntityNameTitle: this.EntityNameTitle,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  selectTable() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.tableSection = true;
    this.cardSection = false;
    this.DetailViewSection = false;
    this.ngAfterViewInit();
  }
  selectCard() {
    this.tableSection = false;
    this.cardSection = true;
    this.DetailViewSection = false;
  }
  viewDetail() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.tableSection = false;
    this.cardSection = false;
    this.DetailViewSection = true;
    this.ngAfterViewInit();
  }
  groupSelectedValue() {
    const map = new Map();
    this.dataSource.data.forEach((item) => {
      map.set(item[this.groupSelected], {
        total:
          map.get(item[this.groupSelected]) &&
          map.get(item[this.groupSelected]).total
            ? map.get(item[this.groupSelected]).total + 1
            : 1,
      });
    });
    this.Array = map;
  }
  filteredEntity(entity: any) {
    if (this.groupSelected != null) {
      return this.dataSource.data.filter(
        (item) => item[this.groupSelected] == entity
      );
    }
    return [];
  }
  commanTotalData() {
    let param = {
      DbName: this.global.LOGGED_IN_USER.DbName,
      Password: this.global.LOGGED_IN_USER.encryptPswd,
      UserId: this.global.LOGGED_IN_USER.UserId,
      EntityName: this.commanEntityName,
    };
    this.CommanService.listCommanData(param).subscribe((data: any) => {
      this.commanData = JSON.parse(data);
      console.log(this.commanData);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.changeSortedColumn();
  }
  activityGenerate() {
    var ToDate = moment(this.ActivityTo).format('YYYY/MM/DD');
    var FromDate = moment(this.ActivityFrom)
      .startOf('month')
      .format('YYYY/MM/DD');
    let params = {
      DbName: this.global.LOGGED_IN_USER.DbName,
      RoleID: this.global.LOGGED_IN_USER.RoleId,
      Password: this.global.LOGGED_IN_USER.Password,
      UserID: this.global.LOGGED_IN_USER.UserId,
      FromDate: FromDate,
      ToDate: ToDate,
    };
    this.listService.GetActivityLog(params).subscribe((data: any) => {
      this.dataSource.data = JSON.parse(data);
      console.log(JSON.parse(data));

      this.ngAfterViewInit();
    });
  }

  ngOnInit() {}
}
