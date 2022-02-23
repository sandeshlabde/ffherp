import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'Global';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productdata: any;

  pageType: any;
  Entityid: any;
  EntityName: any;

  constructor(
    private listService: ProspectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private global: Global
  ) {
    this.Entityid = this.data.EntityID;
    this.EntityName = this.data.EntityName;
    const param = {
      Dbname: this.global.LOGGED_IN_USER.DbName,
      flag: this.EntityName,
      id: this.Entityid,
    };

    this.listService.getProductList(param).subscribe((data: any) => {
      this.productdata = JSON.parse(data);
    });
    this.pageType = param['flag'];
  }

  ngOnInit(): void {}
}
