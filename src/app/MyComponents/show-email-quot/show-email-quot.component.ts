import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-show-email-quot',
  templateUrl: './show-email-quot.component.html',
  styleUrls: ['./show-email-quot.component.css']
})
export class ShowEmailQuotComponent implements OnInit {
  
 emailQuoteData: any;
   
  EntityName: any;
  id:any;
  Entityid: any;
  PDFCustomerID!: number;
  ShowPDFData: any;
  ShowEmailQuoteData: any;
  data2: any;
  emailQuote:boolean= false; 
  termsCondition:boolean=false
  viewPDF:boolean=false
  termsconditionData: any;
  key!: number;
  eLeadFormatID: any;
  eLeadTermsSetID: any;
  termSetData: any;
  termsSaveData: any;
  url=  " ";
  format: any;
  header: any;
  bank: any;
    
  constructor(private listService: ProspectService,   @Inject(MAT_DIALOG_DATA) public data:any) {   
    this.Entityid=this.data.EntityID,
    this.EntityName=this.data.EntityName
       

       this.listService.PDFEmailDetail(this.EntityName).subscribe((data: any) => {
        
      this.emailQuoteData = JSON.parse(data);
      console.log( this.emailQuoteData);
       
    })
    
  
}
// pdf view function
showPDF(){
  this.emailQuote=false;
this.termsCondition=false;
this.viewPDF=!this.viewPDF
  this.listService.showEmailPDF(this.EntityName,  this.Entityid).subscribe((data: any) => {
    alert(this.EntityName +this.PDFCustomerID+ this.Entityid);
    this.url= data;
    console.log(this.url);

     
  })
};
// Send Mail Function
selectFormat(e:any){
this.format=e.target.value;
 
};
selectHeader(e:any){
this.header=e.target.value;
 
};
selectBank(e:any){
this.bank=e.target.value;
console.log(this.format,  this.header,this.bank)
};
 
onClickSubmit(data:any){

  // this.listService.sendEmail(this.format,this.header, this.Entityid,this.EntityName,this.header,this.format).subscribe((data: any) => {
  // console.log(this.eLeadTermsSetID,  this.Entityid,this.eLeadFormatID)
  // })
  alert(data.EmailTo+","+data.Message+","+data.BCC+",");
}
// Email Quote function
EmailQuote(){
  this.listService.emailQuotedetail(this.EntityName, this.Entityid).subscribe((data: any) => {
    this.ShowEmailQuoteData=JSON.parse(data);
  
  })
  this.emailQuote=!this.emailQuote;
  this.termsCondition=false
  this.viewPDF=false
}


// Terms And Condition function
TermsCondition(){
  this.emailQuote=false;
  this.viewPDF=false;
this.termsCondition=!this.termsCondition
}
// select format DropDown function
selectDropDown(e: any){
  
  this.eLeadFormatID = e.target.value;
   
  this.listService.showtermscondition(this.eLeadFormatID ).subscribe((data: any) => {
    this.termsconditionData=JSON.parse(data);
     
  })
}
// select Term Set DropDown Function
selectTermSet(e: any){
this.eLeadTermsSetID=e.target.value;
  this.listService.showtermSet(this.eLeadFormatID,this.eLeadTermsSetID).subscribe((data: any) => {
    this.termSetData=JSON.parse(data);
     console.log(this.termSetData);
  })

}

// save Terms and Condition
saveCondition(){ 
  console.warn(this.EntityName,this.Entityid,this.eLeadFormatID,this.eLeadTermsSetID);
  this.listService.saveTerms(this.EntityName,this.Entityid,this.eLeadFormatID,this.eLeadTermsSetID).subscribe((data: any) => {
    this.termsSaveData=JSON.parse(data);
    
  })
}
 

// PDFEmailDetai
  ngOnInit(): void {
  }

}
