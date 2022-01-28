import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { prospectdatafield } from 'src/apitable';


@Injectable({
  providedIn: 'root'
})
export class ProspectService {
   
  // list API url
  listUrl="https://apitest.ffherp.co.in/api/FFHAMC/AMCList";

// entityID show details API URL
  entityIdUrl="https://ffherp.co.in:446/api/Voucher/ViewModuleWiseEntityInfo";

  // Productview  Details API URL
  productViewUrl="http://178.63.87.175:82//webService/Lead/LeadAction.asmx/ProductView";
  
  // Note show Data API URL
  noteViewUrl="https://apitest.ffherp.co.in/api/Voucher/NotesDetails";

  // Note Save Data API URL
  noteSaveUrl="https://ffherp.co.in:446/api/Voucher/AddNotes";

  // product Details  Data API URL
  productDetailsUrl="https://ffherp.co.in:446/api/Voucher/GetModuleEntityProductDetails";

  // action Details  Data API URL
  actionDetailsUrl="https://ffherp.co.in:446/api/Voucher/GetActualData";

  // Email Quotation API URL
  emailQuotationUrl="https://ffherp.co.in:446/api/Voucher/QuotationEmailRead";
  
  // Email Quotation API URL
  PDFEmailDetailUrl="https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFEmailDetails";
  // Email Quotation API URL
  PDFEmailDetaiUrl="https://apitest.ffherp.co.in/api/Voucher/GetLeadPDFDefaultValues";

  // Email Show PDF API URL
  showEmailPDFUrl="https://apitest.ffherp.co.in/api/Voucher/GetQuotationFormatFile"
   
  constructor(private http: HttpClient) { }

 
// list  table api calling

  getLeadList(EntityName:string):Observable<prospectdatafield[]> {
  
    const requestBody = {
    dbname: "Vol187",
    encrypt: "X·ÌØ8âˆø«¸SÚã’", 
    id: "1",
    EntityName ,
    userid: "Director"
  }
 
  return this.http.post<prospectdatafield[]>(this.listUrl, requestBody );
}

// show entityid  info APi calling
getViewList(EntityName:string, id:number)   {

  const requestBody = {
    dbname: "Vol187",
    encrypt: "X·ÌØ8âˆø«¸SÚã’",
    password: "123456789",
    id,
    EntityName,
    userid: "Director"

}
 
return this.http.post (this.entityIdUrl, requestBody );

}

// Entity product details api calling
getProductList(EntityName:string, id:number)   {

  const requestBody = {
   
    DbName: "Vol187",
    id,
    EntityName,
}
 
return this.http.post (this.productViewUrl, requestBody );

};

// get api calling show note data
getNoteList(EntityName:string, EntityID:number)   {

  const requestBody = {
    DBNAME: "Vol187",
    EntityID,
    EntityName,
    UpdatedBy: "Director",
    password: " X·ÌØ8âˆø«¸SÚã’",
   
}
 
return this.http.post (this.noteViewUrl, requestBody );

}

// save note Api calling
saveNoteList(EntityName:string, EntityID:number,Description:string)   {

  const requestBody = {
    DBNAME: "Vol187",
    EntityID,
    EntityName,
    UpdatedBy: "Director",
    password: " X·ÌØ8âˆø«¸SÚã’",
    Description,
    
}
 
return this.http.post (this.noteSaveUrl, requestBody );

}

// Product Api calling
productDetails( EntityId:number ,Module:string)   {

  const requestBody = {
    DbName: "Vol187",
    EntityId ,
    Module,
    
}
 
return this.http.post (this.productDetailsUrl, requestBody );

}

// Action Api calling
actionDetails( EntityId:number,Module:string )   {

  const requestBody = {
    DbName: "Vol187",
    EntityId ,
    Module,
    
}
 
return this.http.post (this.actionDetailsUrl, requestBody );

}
// Action Api calling
emailQuotation(  EntityID:number,EmailAddress:any )   {

  const requestBody = {
    DBNAME: "Vol187",
    EntityID , 
    OwnerId: "Director",
    password: " X·ÌØ8âˆø«¸SÚã’",
    EmailAddress,
  
}
 
return this.http.post (this.emailQuotationUrl, requestBody );

}
// Action Api calling
pdfemaildetail(EntityName:string )   {

  const requestBody = {
    DBNAME: "Vol187",
    EntityName ,  
    password: "123456789",
    
    
   
}
 
return this.http.post (this.PDFEmailDetaiUrl, requestBody );

}
showEmailPDF(EntityName:string ,PDFCustomerID:number,PDFEntityID:number)   {

  const requestBody = {
    PDFCustomerID,
    DBNAME: "Vol187",
    PDFEntityID,
    EntityName , 
    PDFPageName : PDFEntityID,
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
 
return this.http.post (this.showEmailPDFUrl, requestBody );

}
}
 
