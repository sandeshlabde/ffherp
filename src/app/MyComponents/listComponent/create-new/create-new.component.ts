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
import { Global } from 'Global';
import * as moment from 'moment';
import { CommanService } from 'src/app/services/comman.service';
import { MY_FORMATS } from 'src/app/matdatepickerformat';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { DelivaryBillingAddressComponent } from './delivary-billing-address/delivary-billing-address.component';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
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
export class CreateNewComponent implements OnInit {
  CommanData: any;
  Company: any = '';
  a = moment();
  minDate = this.a.toISOString();
  LExpCloserDate: any = this.a.toISOString();
  DelDate: any = this.a.toISOString();
  MPODate: any = this.a.toISOString();
  PPODate: any = this.a.toISOString();
  PIPODate: any = this.a.toISOString();
  TCloseBefore: any = this.a.toISOString();
  POEXPDelDate: any = this.a.toISOString();
  PIInvoiceDate: any = this.a.toISOString();
  EntityName: any;

  autoCompleteData: any;
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

  get MaterialReceiptStatus() {
    return ['polist', 'payable'].includes(this.EntityName.toLowerCase());
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

  constructor(
    private global: Global,
    private commanservice: CommanService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {
    this.CommanData = data.commanData;
    console.log(data.commanData);
    this.EntityName = this.data.EntityName;
  }

  Autocomplete(e: any) {
    console.log(e);
    if (e.length >= 3) {
      let param = {
        DBName: this.global.LOGGED_IN_USER.DbName,
        prefixText: e,
      };
      this.commanservice
        .createFormAutoComplete(param)
        .subscribe((data: any) => {
          this.autoCompleteData = JSON.parse(data);
          console.log(this.autoCompleteData);
        });
    }
    this.companyContactList(id);
  }
  companyContactList(id: any) {
    console.log(id);

    let param = {
      DBNAME: this.global.LOGGED_IN_USER.DbName,
      id11: this.Company,
      password: this.global.LOGGED_IN_USER.encryptPswd,
    };
    this.commanservice.getCompanyContactList(param).subscribe((data: any) => {
      console.log(JSON.parse(data));
    });
  }

  Detail() {
    const dialogRef = this.dialog.open(AdditionalDetailsComponent, {
      position: { right: 0 + '%', top: 10 + '%' },
      data: {
        EntityName: this.EntityName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  address() {
    const dialogRef = this.dialog.open(DelivaryBillingAddressComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe();
  }
  ngOnInit(): void {}
}
function id(id: any) {
  throw new Error('Function not implemented.');
}