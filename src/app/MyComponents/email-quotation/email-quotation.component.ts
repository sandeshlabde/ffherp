import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-email-quotation',
  templateUrl: './email-quotation.component.html',
  styleUrls: ['./email-quotation.component.css']
})
export class EmailQuotationComponent implements OnInit {
  emailData: any;
  emailData2: any;
  flag: any;
  id: any;

  constructor( private listService: ProspectService,private root:ActivatedRoute) {
    this.root.params.subscribe((param)=>{
      this.listService.emailQuotation(param["flag"], param["id"] ).subscribe((data: any)=>{ 
        console.log( "emailquot"+param["flag"], param["id"]);
        this.emailData=data;
         this.emailData2 =JSON.parse(this.emailData);
      }) ; 
      
      this.flag =param['flag']
  this.id=param["id"]
    }); 
    
   }

  ngOnInit(): void {
  }

}
