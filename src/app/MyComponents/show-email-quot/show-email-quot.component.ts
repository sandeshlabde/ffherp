import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
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
  termsconditionData: any;
  key!: number;
  eLeadFormatID: any;
  eLeadTermsSetID: any;
  termSetData: any;
   

  constructor(private listService: ProspectService,   @Inject(MAT_DIALOG_DATA) public data:any) {   
    this.Entityid=this.data.EntityID,
    this.EntityName=this.data.EntityName
       

       this.listService.PDFEmailDetail(this.EntityName).subscribe((data: any) => {
        
      this.emailQuoteData = JSON.parse(data);
       console.log(  this.emailQuoteData);
    })
    
  
}
showPDF(){
  this.listService.showEmailPDF(this.EntityName,this.PDFCustomerID, this.Entityid).subscribe((data: any) => {
    this.ShowPDFData=JSON.parse(data);
    console.log("PDF view"+this.ShowPDFData);
  })
}
EmailQuote(){
  this.listService.emailQuotedetail(this.EntityName, this.Entityid).subscribe((data: any) => {
    this.ShowEmailQuoteData=JSON.parse(data);
  
  })
  this.emailQuote=!this.emailQuote;
  this.termsCondition=false
}
TermsCondition(){
  this.emailQuote=false;
this.termsCondition=!this.termsCondition
}
selectDropDown(e: any){
  
  this.eLeadFormatID = e.target.value;
   
  this.listService.showtermscondition(this.eLeadFormatID ).subscribe((data: any) => {
    this.termsconditionData=JSON.parse(data);
     console.log(this.termsconditionData);
  })
}
selectTermSet(e: any){
this.eLeadTermsSetID=e.target.value;
  this.listService.showtermSet(this.eLeadFormatID,this.eLeadTermsSetID).subscribe((data: any) => {
    this.termSetData=JSON.parse(data);
     console.log(this.termSetData);
  })

}
// showtermSet

// PDFEmailDetai
  ngOnInit(): void {
  }

}
