import { Component, OnInit } from '@angular/core';
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
  flag: any;
  id:any;

  constructor(private listService: ProspectService, private root: ActivatedRoute) {   
    this.root.params.subscribe((param) => {
      console.warn(param["flag"], param["id"])

       this.listService.pdfemaildetail(param["flag"]).subscribe((data: any) => {
      this.pdfemailData = data;
      this.pdfemailData2 = JSON.parse(this.pdfemailData);
      console.warn("pdfemaildata"+this.pdfemailData2)
    })
    this.flag = param["flag"]
  })}

  ngOnInit(): void {
  }

}
