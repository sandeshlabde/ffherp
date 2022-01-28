import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-show-email-quot',
  templateUrl: './show-email-quot.component.html',
  styleUrls: ['./show-email-quot.component.css']
})
export class ShowEmailQuotComponent implements OnInit {
  
  pdfemailData: any;
  pdfemailData2: any;
  EntityName: any;
  id:any;
  Entityid: any;
  PDFCustomerID!: number;

  constructor(private listService: ProspectService, private root: ActivatedRoute,  @Inject(MAT_DIALOG_DATA) public data:any) {   
    this.Entityid=this.data.EntityID,
    this.EntityName=this.data.EntityName
       

       this.listService.pdfemaildetail(this.EntityName).subscribe((data: any) => {
      this.pdfemailData = data;
      this.pdfemailData2 = JSON.parse(this.pdfemailData);
       
    })
  
}
showPDF(){
  this.listService.showEmailPDF(this.EntityName,this.PDFCustomerID, this.Entityid).subscribe((data: any) => {
  })
}

  ngOnInit(): void {
  }

}
