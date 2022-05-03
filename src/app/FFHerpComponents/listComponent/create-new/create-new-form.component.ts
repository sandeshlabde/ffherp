import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';
import * as moment from 'moment';
import { CommanService } from 'src/app/services/comman.service';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { DelivaryBillingAddressComponent } from './delivary-billing-address/delivary-billing-address.component';
import { TicketProductComponent } from './ticket-product/ticket-product.component';
import { ActionService } from 'src/app/services/action.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.css'],
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
export class CreateNewFormComponent implements OnInit {
  CommanData: any;
  a = moment();
  minDate = this.a;
  LExpCloserDate: any = this.a;
  DelDate: any = this.a;
  MPODate: any = this.a;
  PPODate: any = this.a;
  PIPODate: any = this.a;
  POEXPDelDate: any = this.a;
  PIInvoiceDate: any = this.a;
  EntityName: any;

  autoCompleteData: any;
  CompanyId: any;
  contactData: any = [];

  ProductData: any;
  bindTicketValues: any;
  DDTypeValue: any = [];
  Product: boolean = false;
  SelectedProductData: any = [];
  userValues: any;
  Mobile: any;
  Email: any;
  contactinfo: any;
  selectedUserData: any;
  UserData: any;
  CPIDetailsData: any;
  ScheduleAction: boolean = false;
  Ownername: any;
  tempProduct: any;
  contactMobile: any = '';

  ContactName: any;
  get Source() {
    return ['prospect', 'lead', 'salesorderlist'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get DelivaryMode() {
    return ['po', 'mo'].includes(this.EntityName.toLowerCase());
  }

  get prospectlead() {
    return ['prospect', 'lead'].includes(this.EntityName.toLowerCase());
  }

  get DelivaryName() {
    return ['molist', 'polist'].includes(this.EntityName.toLowerCase());
  }
  get DispatchBy() {
    return ['molist', 'polist', 'milist'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get Stage() {
    return ['payment', 'polist'].includes(this.EntityName.toLowerCase());
  }
  get Docket() {
    return ['molist', 'milist'].includes(this.EntityName.toLowerCase());
  }
  get PONumber() {
    return ['payment', 'payable', 'salesorderlist'].includes(
      this.EntityName.toLowerCase()
    );
  }
  get paymentpayable() {
    return ['payment', 'payable'].includes(this.EntityName.toLowerCase());
  }

  get PODate() {
    return ['payment', 'payable', 'molist', 'salesorderlist'].includes(
      this.EntityName.toLowerCase()
    );
  }

  get prospect() {
    return ['prospect'].includes(this.EntityName.toLowerCase());
  }

  get lead() {
    return ['lead'].includes(this.EntityName.toLowerCase());
  }
  get so() {
    return ['salesorderlist'].includes(this.EntityName.toLowerCase());
  }
  get mo() {
    return ['molist'].includes(this.EntityName.toLowerCase());
  }
  get po() {
    return ['polist'].includes(this.EntityName.toLowerCase());
  }
  get mi() {
    return ['milist'].includes(this.EntityName.toLowerCase());
  }
  get payment() {
    return ['payment'].includes(this.EntityName.toLowerCase());
  }
  get pi() {
    return ['payable'].includes(this.EntityName.toLowerCase());
  }
  get ticket() {
    return ['ticket'].includes(this.EntityName.toLowerCase());
  }
  get work() {
    return ['work'].includes(this.EntityName.toLowerCase());
  }
  userForm = new FormGroup({
    PartyName: new FormControl(''),
    ContactId: new FormControl(''),
    Emailcheckbox: new FormControl(''),
    ContactEmail: new FormControl('', [Validators.required, Validators.email]),
    OwnerEmail: new FormControl('', [Validators.required, Validators.email]),
    OwnerMobile: new FormControl(''),
    ContactMobile: new FormControl(''),
    FormControl: new FormControl(''),
    ProductServicetype: new FormControl(''),
    TypeId: new FormControl(''),
    SelectProblem: new FormControl(''),
    OwnerId: new FormControl(''),
    Title: new FormControl(''),
    ChargeAmount: new FormControl(''),
    ProblemType: new FormControl(''),
    Priority: new FormControl(''),
    TCloseBefore: new FormControl(this.a),
    TicketSourceId: new FormControl(''),
    Stage: new FormControl(''),
    Description: new FormControl(''),
    ActionType: new FormControl(''),
    AllocateTo: new FormControl(''),
    SchduleEmail: new FormControl('', [Validators.required, Validators.email]),
    Instruction: new FormControl(''),
    ScheduleOn: new FormControl(this.a),
    AlertBefore: new FormControl(''),
    ScheduleActionTime: new FormControl(''),
    Days: new FormControl(''),
    CloseBefore: new FormControl(this.a),
  });
  constructor(
    private global: Global,
    private commanservice: CommanService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private actionService: ActionService
  ) {
    this.CommanData = data.commanData;
    this.EntityName = this.data.EntityName;

    this.GetTicketDDLvalue();
    this.GetdataForbindTicket();
  }

  GetTicketDDLvalue() {
    let param = {
      dbname: this.global.LOGGED_IN_USER.DbName,
    };
    this.commanservice.GetTicketDDLvalues(param).subscribe((data: any) => {
      this.DDTypeValue = JSON.parse(data);
    });
  }
  GetdataForbindTicket() {
    let param = {
      dbname: this.global.LOGGED_IN_USER.DbName,
    };
    this.commanservice
      .GetdataForbindTicketValues(param)
      .subscribe((data: any) => {
        this.bindTicketValues = JSON.parse(data);
        this.userValues = this.bindTicketValues.Table2;

        this.tempProduct = this.bindTicketValues.Table5;
      });
  }

  company(C: any) {
    this.companyContactList(C.companyId);
    this.GetProduct(C.companyName);
  }
  companyContactList(id: any) {
    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      id11: id,
      password: this.global.LOGGED_IN_USER.encryptPswd,
    };
    this.commanservice.getCompanyContactList(param).subscribe((data: any) => {
      this.contactData = JSON.parse(data);
    });
  }
  Contact(e: any) {
    this.userForm.controls['ContactMobile'].setValue(e.ContactMobile);
    this.userForm.controls['ContactEmail'].setValue(e.ContactEmail);
  }
  ManagerContact(e) {
    console.log(e);
    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      id11: e,
    };
    this.actionService.getUserEmailMobile(param).subscribe((data: any) => {
      this.UserData = JSON.parse(data);
      this.userForm.controls['OwnerMobile'].setValue(
        this.UserData[0].UserMobile
      );
      this.userForm.controls['OwnerEmail'].setValue(this.UserData[0].UserEmail);
    });
  }
  selectManagerContact(C: any) {}
  Detail() {
    const dialogRef = this.dialog.open(AdditionalDetailsComponent, {
      position: { right: 0 + '%', top: 10 + '%' },
      data: {
        EntityName: this.EntityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  TicketProduct() {
    this.Product = true;
  }
  selectedProduct(e: boolean) {
    this.Product = e;
  }
  GetProduct(partyname) {
    let param = {
      dbname: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      PartyName: partyname,
      SiteId: '',
    };
    this.commanservice.GetProductByParty(param).subscribe((data: any) => {
      this.ProductData = JSON.parse(data);
    });
  }
  address() {
    const dialogRef = this.dialog.open(DelivaryBillingAddressComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe();
  }
  product(event: any) {
    console.log(event);
    this.SelectedProductData = event;
    let param = {
      dbname: this.global.LOGGED_IN_USER.DbName,
      CIPID: this.SelectedProductData.CIPID,
    };
    this.commanservice.GetCIPdetail(param).subscribe((data: any) => {
      this.CPIDetailsData = JSON.parse(data);

      this.userForm.controls['OwnerId'].setValue(this.CPIDetailsData.ActorId);
      this.userForm.controls['Priority'].setValue(
        this.CPIDetailsData.PriorityId
      );
      this.userForm.controls['TypeId'].setValue(this.CPIDetailsData.TypeId);

      this.Ownername = this.CPIDetailsData.ActorName;

      this.ManagerContact(this.CPIDetailsData.ActorId);
    });
  }
  scheduleAction() {
    this.ScheduleAction = true;
  }
  CreateTicket(data: any) {
    console.log(data);
    let param = {
      PartyId: this.SelectedProductData.PartyId,
      ContactId: data.ContactId,
      StatusId: '155',
      PriorityId: data.Priority,
      ProjectId: 0,
      ProjectName: null,
      TicketSourceId: 41,
      ProductId: 0,
      OwnerId: data.OwnerId,
      OtherName: null,
      OtherMobile: '9960009919',
      UpdatedBy: this.global.LOGGED_IN_USER.Username,
      ExpClosureDate: moment(data.CloseBefore).format('YYYY-MM-DD'),
      Instruction: data.Instruction,
      NewProduct: '',
      ProblemReported: 'testing',
      Severity: '66',
      serddlSevirityId: data.ProblemType,
      serddlSevirityName: '',
      ChargeAmount: data.ChargeAmount,
      OpenDate: '1970-01-01',
      AttendedDate: '2022-04-13',
      Title: data.Title,
      RdoProductId: this.SelectedProductData.productsId,
      openTime: null,
      Counter: '',
      CIPID: this.CPIDetailsData.CIPID,
      nextotherContactInfo: 'chavandattatray24@gmail.com/9960009919',
      TypeId: data.TypeId,
      dbname: this.global.LOGGED_IN_USER.DbName,
      password: this.global.LOGGED_IN_USER.encryptPswd,
      iClose: 1,
      PartyName: data.PartyName,
      OwnerName: this.Ownername,
      OtherEmail: data.ContactEmail,
      UserId: this.global.LOGGED_IN_USER.UserId,
      userEmail: this.global.LOGGED_IN_USER.EmailId,
      ownerEmail: data.OwnerEmail,
      ownerMobile: data.OwnerMobile,
      InstalledNo: '',
      chkConSMS: true,
      chkConEmail: true,
      ConMobile: data.ContactMobile,
      ConEmail: data.ContactEmail,
      chOWSMS: false,
      SiteId: '',
      problemType: 'application issue',
      robtempproduct: false,
      ddltempProductCategory: '',
      txtOpenTimeHR: '',
      txtOpenTimeMM: '',
      UserroleId: this.global.LOGGED_IN_USER.RoleId,
      CreatetionDate: '',
      Branch: '',
      Costcenter: '',
      ContactName: this.ContactName,
      StatusName: '',
      productName: '',
      Id: '',
      userMobile: '',
      AllocatedHours: '',
      tempProductId: '',
      ReturnResult: '',
      source: data.TicketSourceId,
      Amount: data.ChargeAmount,
      TicketType: '',
      chkOWEmail: false,
      ActorId: 'DC5254',
      ActorName: 'Dattatray Chavan',
      actionTime: data.ScheduleActionTime,
      ActionStartTime: '12:11',
      actionType: '30',
      chkAllonSMS: null,
      chkAlloEmail: null,
      AlloEmail: 'chavandattatray24@gmail.com',
      schDate: moment(data.ScheduleOn).format('YYYY-MM-DD'),
      schtime: data.ScheduleActionTime,
      actorMobile: '9960009919',
      ddl_alertperiod: data.AlertBefore,
      ddl_alerttime: 1,
      ActionTypeName: data.ActionType,
      AlloMobile: '9960009919',
      Proddetail: '',
    };
    console.log(param);
    // this.commanservice.createTicket(param).subscribe((data: any) => {
    //   console.log(data);
    // });
  }
  ngOnInit(): void {}
}
