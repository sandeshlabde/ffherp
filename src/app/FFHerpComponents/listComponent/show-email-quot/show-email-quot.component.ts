import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/shared/Global';

import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-show-email-quot',
  templateUrl: './show-email-quot.component.html',
  styleUrls: ['./show-email-quot.component.css'],
})
export class ShowEmailQuotComponent implements OnInit {
  emailQuoteData: any;

  EntityName: any;
  id: any;
  Entityid: any;
  PDFCustomerID!: number;
  ShowEmailQuoteData: any;
  emailQuote: boolean = false;
  termsCondition: boolean = false;
  viewPDF: boolean = false;
  termsconditionData: any;
  eLeadFormatID: any;
  eLeadTermsSetID: any;
  termSetData: any;
  termsSaveData: any;
  url = ' ';
  format: any;
  header: any;
  bank: any;
  myform: any;
  termSection: boolean = false;
  selectemailQuoteFormat: any;
  SelectFormat: any;
  SelectHeaderFooter: any;
  SelectBank: any;
  SelecteeLeadTermsSetID: any;

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    (this.Entityid = this.data.EntityID),
      (this.EntityName = this.data.EntityName);

    this.listService
      .emailQuoteData(
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd,
        this.EntityName
      )
      .subscribe((data: any) => {
        this.emailQuoteData = JSON.parse(data);
        console.log(this.emailQuoteData);
      });
  }
  // pdf view function
  showPDF() {
    this.emailQuote = false;
    this.termsCondition = false;
    this.viewPDF = !this.viewPDF;
    this.listService
      .showEmailPDF(
        this.EntityName,
        this.Entityid,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.RoleId,
        this.global.LOGGED_IN_USER.encryptPswd,
        this.global.LOGGED_IN_USER.UserId
      )
      .subscribe((data: any) => {
        this.url = data;
      });
  }
  // Send Mail Function
  selectFormat() {
    this.format = this.SelectFormat;
  }
  selectHeader() {
    this.header = this.SelectHeaderFooter;
  }
  selectBank() {
    this.bank = this.SelectBank;
  }
  //  send email Quote
  onClickSubmit(data: any) {
    // this.listService.sendEmail(this.format,this.header, this.Entityid,this.EntityName,this.header,this.format).subscribe((data: any) => {
    // console.log(this.eLeadTermsSetID,  this.Entityid,this.eLeadFormatID)
    // })
  }
  // save terms And condition
  onClickSave(data: any) {
    this.myform.reset();
  }

  // Email Quote function
  EmailQuote() {
    this.listService
      .emailQuotedetail(
        this.EntityName,
        this.Entityid,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.UserId,
        this.global.LOGGED_IN_USER.encryptPswd
      )
      .subscribe((data: any) => {
        this.ShowEmailQuoteData = JSON.parse(data);
      });
    this.emailQuote = !this.emailQuote;
    this.termsCondition = false;
    this.viewPDF = false;
  }

  // Terms And Condition function
  TermsCondition() {
    this.emailQuote = false;
    this.viewPDF = false;
    this.termsCondition = !this.termsCondition;
  }
  // select format DropDown function
  selectDropDown() {
    this.termSection = false;
    this.eLeadFormatID = this.selectemailQuoteFormat;

    this.listService
      .showtermscondition(
        this.eLeadFormatID,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd
      )
      .subscribe((data: any) => {
        this.termsconditionData = JSON.parse(data);
      });
  }
  // select Term Set DropDown Function
  selectTermSet() {
    this.termSection = true;
    this.eLeadTermsSetID = this.SelecteeLeadTermsSetID;
    this.listService
      .showtermSet(
        this.eLeadFormatID,
        this.eLeadTermsSetID,
        this.global.LOGGED_IN_USER.DbName,
        this.global.LOGGED_IN_USER.encryptPswd
      )
      .subscribe((data: any) => {
        this.termSetData = JSON.parse(data);
        console.log(this.termSetData);
      });
  }

  // save Terms and Condition
  // saveCondition(){
  //   console.warn(this.EntityName,this.Entityid,this.eLeadFormatID,this.eLeadTermsSetID);
  //   this.listService.saveTerms(this.EntityName,this.Entityid,this.eLeadFormatID,this.eLeadTermsSetID,this.global.LOGGED_IN_USER.DbName,this.global.LOGGED_IN_USER.encryptPswd,).subscribe((data: any) => {
  //     this.termsSaveData=JSON.parse(data);

  //   })
  // }

  // PDFEmailDetai
  ngOnInit(): void {}
}
