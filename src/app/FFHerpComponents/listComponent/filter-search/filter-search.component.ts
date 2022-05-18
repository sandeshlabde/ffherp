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
  commanData: any;
  get lead() {
    return ['lead'].includes(this.EntityName.toLowerCase());
  }
  get prospect() {
    return ['prospect'].includes(this.EntityName.toLowerCase());
  }
  get so() {
    return ['salesorderlist'].includes(this.EntityName.toLowerCase());
  }
  get mo() {
    return ['molist'].includes(this.EntityName.toLowerCase());
  }
  get mi() {
    return ['milist'].includes(this.EntityName.toLowerCase());
  }
  get po() {
    return ['polist'].includes(this.EntityName.toLowerCase());
  }
  get invoice() {
    return ['payment'].includes(this.EntityName.toLowerCase());
  }
  get pi() {
    return ['payable'].includes(this.EntityName.toLowerCase());
  }
  get ticket() {
    return ['ticket'].includes(this.EntityName.toLowerCase());
  }
  get amc() {
    return ['amc'].includes(this.EntityName.toLowerCase());
  }
  get work() {
    return ['work'].includes(this.EntityName.toLowerCase());
  }
  get repair() {
    return ['repair'].includes(this.EntityName.toLowerCase());
  }
  get vouchar() {
    return ['voucher'].includes(this.EntityName.toLowerCase());
  }
  constructor(
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.commanData = data.Data;
    this.EntityName = this.data.EntityName;
  }
  filterData(type: any) {
    return this.commanData.filter((item) => item.Type == type);
  }
  company(e: any) {
    console.log(e);
  }
  ngOnInit(): void {}
}
