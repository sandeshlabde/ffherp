import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css'],
})
export class FilterSearchComponent implements OnInit {
  labelData: any;
  FormArry: any;
  EntityName: any;

  constructor(
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.EntityName = this.data.EntityName;
    this.httpClient.get('/assets/inputlabel.json').subscribe((data) => {
      this.FormArry = data;
      if (this.EntityName === 'Prospect') {
        this.labelData = this.FormArry.prospect;
      } else if (this.EntityName === 'Lead') {
        this.labelData = this.FormArry.Lead;
      } else if (this.EntityName === 'SalesOrderLIst') {
        this.labelData = this.FormArry.SO;
      } else if (this.EntityName === 'MIList') {
        this.labelData = this.FormArry.MI;
      } else if (this.EntityName === 'MoList') {
        this.labelData = this.FormArry.MO;
      } else if (this.EntityName === 'POList') {
        this.labelData = this.FormArry.PO;
      } else if (this.EntityName === 'Repair') {
        this.labelData = this.FormArry.Repair;
      } else if (this.EntityName === 'Payment') {
        this.labelData = this.FormArry.Payment;
      } else if (this.EntityName === 'Payable') {
        this.labelData = this.FormArry.Payble;
      } else if (this.EntityName === 'Ticket') {
        this.labelData = this.FormArry.Ticket;
      } else if (this.EntityName === 'AMC') {
        this.labelData = this.FormArry.AMC;
      } else if (this.EntityName === 'Work') {
        this.labelData = this.FormArry.Work;
      }

      console.log();
    });
  }

  ngOnInit(): void {}
}
