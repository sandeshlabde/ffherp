import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProspectService {
  loader = new BehaviorSubject<boolean>(false);
  // Login API URL
  loginUrl = 'https://apitest.ffherp.co.in/api/FFHAMC/FFHLogin';

  // list API url
  listUrl = 'https://ffherp.co.in:446/api/FFHAMC/AMCList';

  // entityID show details API URL
  entityIdUrl = 'https://ffherp.co.in:446/api/Voucher/ViewModuleWiseEntityInfo';

  // Note show Data API URL
  noteViewUrl = 'https://apitest.ffherp.co.in/api/Voucher/NotesDetails';

  // Note Save Data API URL
  noteSaveUrl = 'https://ffherp.co.in:446/api/Voucher/AddNotes';

  // product Details  Data API URL
  productDetailsUrl =
    'https://ffherp.co.in:446/api/Voucher/GetModuleEntityProductDetails';

  // action Details  Data API URL
  actionDetailsUrl = 'https://ffherp.co.in:446/api/Voucher/GetActualData';

  // emailtraceUrl Quotation API URL
  emailtraceUrl = 'https://ffherp.co.in:446/api/Voucher/QuotationEmailRead';

  //  show Email Quotation API URL
  emailQuoteUrl =
    'https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFEmailDetails';

  // Send Email Api Url
  sendEmailUrl = 'https://apitest.ffherp.co.in/api/Voucher/SendEmailQuotation';

  // Email Quotation API URL
  viewEmailQuoteDetaiUrl =
    'https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFDefaultValues';

  // Email Show PDF API URL
  showEmailPDFUrl =
    'https://apitest.ffherp.co.in/api/Voucher/GetQuotationFormatFile';

  // terms and Condition API URL
  termsConditionurl =
    'https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFTermsSet';

  // terms and Condition API URL
  termSeturl =
    'https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFTermsSetDetails';

  // Save terms API URL
  saveTermsUrl = 'https://apitest.ffherp.co.in/api/Voucher/SaveLeadPDFTermsSet';

  // Chat  API URL
  Chaturl = 'https://apitest.ffherp.co.in/api/Sales/GetChatHistory';

  // submmitting chat API URL
  submitChatUrl = 'https://apitest.ffherp.co.in/api/Sales/SubmitChattingData';

  // submmitting chat API URL

  // edit list Api URL
  voucharDetailUrl = 'https://ffherp.co.in:446/api/Voucher/VoucherDetails';

  // Approved Vouchar API URL
  approvedVoucharUrl =
    'https://apitest.ffherp.co.in/api/Voucher/GetVoucherApproval';
  // total activity visit Api URl
  totalActivityUrl =
    'https://apitest.ffherp.co.in/api/Voucher/GetActivityReportDetails';

  // Activity log API url
  ActivityLogUrl = 'https://ffherp.co.in:446/api/FFHAMC/ActivityLogList';

  constructor(private http: HttpClient) {}

  // login API Calling
  login(user: any) {
    return this.http.post(this.loginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('Global.LOGGED_IN_USER');
  }

  // list  table api calling

  getList(params: any) {
    return this.http.post(this.listUrl, params);
  }

  // show entityid  info APi calling
  getViewList(param) {
    return this.http.post(this.entityIdUrl, param);
  }

  // Entity product details api calling
  getProductList(param) {
    return this.http.post(this.productDetailsUrl, param);
  }

  // get api calling show note data
  getNoteList(
    EntityName: string,
    EntityID: number,
    DBNAME: string,
    UpdatedBy: string,
    password: string
  ) {
    const requestBody = {
      DBNAME,
      EntityID,
      EntityName,
      UpdatedBy,
      password,
    };

    return this.http.post(this.noteViewUrl, requestBody);
  }

  // save note Api calling
  saveNoteList(
    EntityName: string,
    EntityID: number,
    Description: string,
    DBNAME: string,
    password: string,
    UpdatedBy: string
  ) {
    const requestBody = {
      DBNAME,
      EntityID,
      EntityName,
      UpdatedBy,
      password,
      Description,
    };

    return this.http.post(this.noteSaveUrl, requestBody);
  }

  // Product Api calling
  productDetails(EntityId: number, Module: string, DbName: string) {
    const requestBody = {
      DbName,
      EntityId,
      Module,
    };

    return this.http.post(this.productDetailsUrl, requestBody);
  }

  // Action Api calling
  actionDetails(
    EntityId: number,
    EntityName: string,
    DBNAME: string,
    password: string
  ) {
    const requestBody = {
      DBNAME,
      EntityId,
      EntityName,
      password,
    };

    return this.http.post(this.actionDetailsUrl, requestBody);
  }

  // emailtrace Api calling
  emailtrace(params: any) {
    return this.http.post(this.emailtraceUrl, params);
  }

  // PDF Email Details Api calling
  emailQuotedetail(
    PDFSource: string,
    PDFEntityID: number,
    dbname: string,
    PDFUserID: string,
    password: string
  ) {
    const requestBody = {
      dbname,
      PDFUserID,
      password,
      PDFSource,
      PDFEntityID,
      //     PDFEntityID: "211228001"
      // PDFSource: "Lead"
      // PDFUserID: "Director"
      // dbname: "Vol187"
      //
    };

    return this.http.post(this.emailQuoteUrl, requestBody);
  }
  // send Mail API Calling
  sendEmail(
    PDFEntityID: number,
    PDFEntityType: string,
    PDFFormatID: number,
    PDFHeaderLogo: number,
    eBCCEmailID: any,
    eCCEmailID: any,
    eEmailBody: string,
    eEmailSubject: string,
    eRouteFlag: string,
    eToEmailID: any,
    PDFFormatSeqID: any,
    PDFPageName: any,
    PDFDBName: string,
    PDFCustomerID: string,
    PDFPassword: string,
    PDFUserID: string,
    PDFRoleId: string
  ) {
    const requestBody = {
      PDFCustomerID,
      PDFDBName,
      PDFEntityID,
      PDFEntityType,
      PDFFormatID,
      PDFFormatSetNo: PDFFormatID,
      PDFFormatSeqID,
      PDFPageName,
      PDFPassword,
      PDFSource: PDFEntityType,
      PDFUserID,
      PDFRoleId,
      PDFHeaderLogo,
      eBCCEmailID,
      eCCEmailID,
      eEmailBody,
      eEmailSubject,
      eRouteFlag,
      eToEmailID,
    };
    //     PDFCustomerID: 187
    // PDFDBName: "Vol187"
    // PDFEntityID: "220110002"
    // PDFEntityType: "Lead"
    // PDFFormatID: "105"
    // PDFFormatSeqID: ""
    // PDFFormatSetNo: "105"
    // PDFHeaderLogo: "92"
    // PDFPageName: ""
    // PDFPassword: " X??????8??????????S?????????"
    // PDFRoleId: 1
    // PDFShowTax: "No"
    // PDFSource: "Lead"
    // PDFUserID: "Director"
    // eBCCEmailID: ""
    // eCCEmailID: ""
    // eEmailBody: "Dear Sir<br/> Please find the attached proposal as per your requirement.<br/><br/>Regards,<br/>Director<br/><br/>+919730988805<br/>dir@noemail.com<br/><br/>"
    // eEmailSubject: "Quotation for Rhythm Cancer Hospital   (220110002)"
    // eRouteFlag: "LeadList"
    // eToEmailID: "tes@gmail.com"
    return this.http.post(this.sendEmailUrl, requestBody);
  }
  emailQuoteData(DBNAME: string, Password: string, eEntityFlag: string) {
    const requestBody = {
      DBNAME,
      Password,
      eEntityFlag,
    };
    return this.http.post(this.viewEmailQuoteDetaiUrl, requestBody);
  }
  showEmailPDF(
    EntityName: string,
    PDFEntityID: number,
    PDFDBName: string,
    password: string,
    PDFUserID: string,
    PDFRoleId: string
  ) {
    const requestBody = {
      PDFDBName,
      PDFEntityID,
      EntityName,
      PDFPageName: PDFEntityID,
      PDFSource: PDFEntityID,
      PDFFormatSeqID: '',
      PDFFormatSetNo: '',
      PDFHeaderLogo: '',
      PDFShowTax: 'No',
      PDFRoleId,
      password,
      PDFUserID,

      // PDFCustomerID: 187
      // PDFDBName: "Vol187"
      // PDFEntityID: "220110002"
      // PDFEntityType: "Lead"
      // PDFFormatSeqID: ""
      // PDFFormatSetNo: ""
      // PDFHeaderLogo: ""
      // PDFPageName: "Lead"
      // PDFPassword: " X??????8??????????S?????????"
      // PDFRoleId: 1
      // PDFShowTax: "No"
      // PDFSource: "Lead"
      // PDFUserID: "Director"
    };

    return this.http.post(this.showEmailPDFUrl, requestBody);
  }
  showtermscondition(eLeadFormatID: number, dbname: string, password: string) {
    const requestBody = {
      dbname,
      eLeadFormatID,
      password,

      //
    };

    return this.http.post(this.termsConditionurl, requestBody);
  }
  showtermSet(
    eLeadFormatID: number,
    eLeadTermsSetID: number,
    dbname: string,
    password: string
  ) {
    const requestBody = {
      dbname,
      eLeadFormatID,
      password,
      eLeadTermsSetID,
    };

    return this.http.post(this.termSeturl, requestBody);
  }
  saveTerms(
    EntityId: number,
    EntityName: string,
    FormatId: number,
    Set_SeqNo: number,
    dbname: string
  ) {
    const requestBody = {
      dbname,
      EntityId,

      EntityName,
      FormatId,
      Set_SeqNo,
    };

    return this.http.post(this.saveTermsUrl, requestBody);
  }
  showChat(params: any) {
    return this.http.post(this.Chaturl, params);
  }
  submitChat(param) {
    return this.http.post(this.submitChatUrl, param);
  }

  showvoucharData(param: any) {
    return this.http.post(this.voucharDetailUrl, param);
  }
  approvedVouchar(param: any) {
    return this.http.post(this.approvedVoucharUrl, param);
  }
  showtotalActivity(param: any) {
    return this.http.post(this.totalActivityUrl, param);
  }
  GetActivityLog(param: any) {
    return this.http.post(this.ActivityLogUrl, param);
  }
}
