import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { prospectdatafield } from 'src/apitable';


@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  // list API url
  listUrl = "https://apitest.ffherp.co.in/api/FFHAMC/AMCList";

  // entityID show details API URL
  entityIdUrl = "https://ffherp.co.in:446/api/Voucher/ViewModuleWiseEntityInfo";

  // lead Productview  Details API URL
  productViewUrl = "http://178.63.87.175:82//webService/Lead/LeadAction.asmx/ProductView";

  
  // Note show Data API URL
  noteViewUrl = "https://apitest.ffherp.co.in/api/Voucher/NotesDetails";

  // Note Save Data API URL
  noteSaveUrl = "https://ffherp.co.in:446/api/Voucher/AddNotes";

  // product Details  Data API URL
  productDetailsUrl = "https://ffherp.co.in:446/api/Voucher/GetModuleEntityProductDetails";

  // action Details  Data API URL
  actionDetailsUrl = "https://ffherp.co.in:446/api/Voucher/GetActualData";

  // Lead Action Details Data API URL
  leadActionUrl="http://178.63.87.175:82//webService/Lead/LeadAction.asmx/ActionView"

  // emailtraceUrl Quotation API URL
  emailtraceUrl = "https://ffherp.co.in:446/api/Voucher/QuotationEmailRead";

  //  show Email Quotation API URL
  emailQuoteUrl = "https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFEmailDetails";

  // Send Email Api Url
  sendEmailUrl="https://apitest.ffherp.co.in/api/Voucher/SendEmailQuotation"

  // Email Quotation API URL
  viewEmailQuoteDetaiUrl = "https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFDefaultValues";

  // Email Show PDF API URL
  showEmailPDFUrl = "https://apitest.ffherp.co.in/api/Voucher/GetQuotationFormatFile"

  // terms and Condition API URL
  termsConditionurl = "https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFTermsSet"

  // terms and Condition API URL
  termSeturl = "https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFTermsSetDetails"

  // Save terms API URL
  saveTermsUrl="https://apitest.ffherp.co.in/api/Voucher/SaveLeadPDFTermsSet"

  // Chat  API URL
  Chaturl = "https://apitest.ffherp.co.in/api/Sales/GetChatHistory"

  constructor(private http: HttpClient) { }


  // list  table api calling

  getLeadList(flag: string)  {

    const requestBody = {
      dbname: "Vol187",
      encrypt: "X·ÌØ8âˆø«¸SÚã’",
      id: "1",
      flag,
      userid: "Director"
    }

    return this.http.post (this.listUrl, requestBody);
  }

  // show entityid  info APi calling
  getViewList(flag: string, id: number) {

    const requestBody = {
      dbname: "Vol187",
      encrypt: " X·ÌØ8âˆø«¸SÚã’",
      password: "123456789",
      id,
      flag,
      userid: "Director"
       
    }

    return this.http.post(this.entityIdUrl, requestBody);

  }

  // Entity product details api calling
  getProductList(flag: string, id: number) {

    const requestBody = {

      DbName: "Vol187",
      id,
      flag,
    }

    return this.http.post(this.productDetailsUrl, requestBody);

  };
  
  // Entity Lead product details api calling
  getLeadProductView( EntityId: number,Module:number){
    const requestBody={
      dbName: "Vol187",
      EntityId ,
      Module,
      // DbName: "Vol187",
      //                       EntityId: id,
      //                       Module: "Lead"
    }
    return this.http.post(this.productViewUrl, requestBody);
  }

  // get api calling show note data
  getNoteList(EntityName: string, EntityID: number) {

    const requestBody = {
      DBNAME: "Vol187",
      EntityID,
      EntityName,
      UpdatedBy: "Director",
      password: " X·ÌØ8âˆø«¸SÚã’",

    }

    return this.http.post(this.noteViewUrl, requestBody);

  }

  // save note Api calling
  saveNoteList(EntityName: string, EntityID: number, Description: string) {

    const requestBody = {
      DBNAME: "Vol187",
      EntityID,
      EntityName,
      UpdatedBy: "Director",
      password: " X·ÌØ8âˆø«¸SÚã’",
      Description,

    }

    return this.http.post(this.noteSaveUrl, requestBody);

  }

  // Product Api calling
  productDetails(EntityId: number, Module: string) {

    const requestBody = {
      DbName: "Vol187",
      EntityId,
      Module,

    }

    return this.http.post(this.productDetailsUrl, requestBody);

  }

  // Action Api calling
  actionDetails(EntityId: number, Module: string) {

    const requestBody = {
      DbName: "Vol187",
      EntityId,
      Module,

    }

    return this.http.post(this.actionDetailsUrl, requestBody);

  }
  leadActionDetails(leadId:number){
    const requestBody = {
      dbName: "Vol187",
leadId ,
password: "123456789"

    }
    return this.http.post(this.leadActionUrl, requestBody);
  }
  // emailtrace Api calling
  emailtrace(EntityID: number, EmailAddress: any) {

    const requestBody = {
      DBNAME: "Vol187",
      EntityID,
      OwnerId: "Director",
      password: " X·ÌØ8âˆø«¸SÚã’",
      EmailAddress,

    }

    return this.http.post(this.emailtraceUrl, requestBody);

  }

  // PDF Email Details Api calling
  emailQuotedetail(PDFSource: string, PDFEntityID: number) {

    const requestBody = {
      dbname: "Vol187",
      PDFUserID: "Director",
      password: " X·ÌØ8âˆø«¸SÚã’",
      PDFSource,
      PDFEntityID,
      //     PDFEntityID: "211228001"
      // PDFSource: "Lead"
      // PDFUserID: "Director"
      // dbname: "Vol187"
      // 


    }

    return this.http.post(this.emailQuoteUrl, requestBody);

  }
  // send Mail API Calling
  sendEmail(PDFEntityID:number,PDFEntityType:string,PDFFormatID:number,PDFHeaderLogo:number,eBCCEmailID:any,eCCEmailID:any,eEmailBody:string, eEmailSubject:string,eRouteFlag:string,eToEmailID:any,PDFFormatSeqID:any,PDFPageName:any){
    const requestBody = {
      PDFCustomerID: 187,
      PDFDBName: "Vol187",
      PDFEntityID,
      PDFEntityType,
      PDFFormatID,
      PDFFormatSetNo:PDFFormatID,
      PDFFormatSeqID,
      PDFPageName,
      PDFPassword: " X·ÌØ8âˆø«¸SÚã’",
      PDFSource: PDFEntityType,
      PDFUserID: "Director",
      PDFRoleId: 1,
      PDFHeaderLogo,
      eBCCEmailID,
      eCCEmailID,
      eEmailBody,
      eEmailSubject,
      eRouteFlag,
      eToEmailID,
    }
//     PDFCustomerID: 187
// PDFDBName: "Vol187"
// PDFEntityID: "220110002"
// PDFEntityType: "Lead"
// PDFFormatID: "105"
// PDFFormatSeqID: ""
// PDFFormatSetNo: "105"
// PDFHeaderLogo: "92"
// PDFPageName: ""
// PDFPassword: " X·ÌØ8âˆø«¸SÚã’"
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
  PDFEmailDetail(eEntityFlag: string) {
    const requestBody = {
      DBNAME: "Vol187",
      Password: "123456789",
      eEntityFlag,
    }
    return this.http.post(this.viewEmailQuoteDetaiUrl, requestBody);
  }
  showEmailPDF(EntityName: string,   PDFEntityID: number) {

    const requestBody = {
       
      PDFDBName: "Vol187",
      PDFEntityID,
      EntityName,
      PDFPageName: PDFEntityID,
      PDFSource: PDFEntityID,
      PDFFormatSeqID: "",
      PDFFormatSetNo: "",
      PDFHeaderLogo: "",
      PDFShowTax: "No",
      PDFRoleId: 1,
      password: "123456789",
      PDFUserID: "Director"

      
      // PDFCustomerID: 187
      // PDFDBName: "Vol187"
      // PDFEntityID: "220110002"
      // PDFEntityType: "Lead"
      // PDFFormatSeqID: ""
      // PDFFormatSetNo: ""
      // PDFHeaderLogo: ""
      // PDFPageName: "Lead"
      // PDFPassword: " X·ÌØ8âˆø«¸SÚã’"
      // PDFRoleId: 1
      // PDFShowTax: "No"
      // PDFSource: "Lead"
      // PDFUserID: "Director"
    }

    return this.http.post(this.showEmailPDFUrl, requestBody);

  }
  showtermscondition(eLeadFormatID: number) {

    const requestBody = {
      dbname: "Vol187",
      eLeadFormatID,
      password: " X·ÌØ8âˆø«¸SÚã’"

      // 

    }

    return this.http.post(this.termsConditionurl, requestBody);

  }
  showtermSet(eLeadFormatID: number, eLeadTermsSetID: number) {

    const requestBody = {
      dbname: "Vol187",
      eLeadFormatID,
      password: " X·ÌØ8âˆø«¸SÚã’",
      eLeadTermsSetID,



    }

    return this.http.post(this.termSeturl, requestBody);

  }
   saveTerms(EntityId: number, EntityName:string,FormatId:number,Set_SeqNo:number) {

    const requestBody = {
      dbname: "Vol187",
      EntityId,
      
      EntityName,
      FormatId,
      Set_SeqNo,
 

    }

    return this.http.post(this.saveTermsUrl, requestBody);

  }
  showChat(EntityId: number, PageId: string) {

    const requestBody = {
      dbname: "Vol187",
      EntityId,
      UserID: "Director",
      PageId,



    }

    return this.http.post(this.Chaturl, requestBody);

  }

}

