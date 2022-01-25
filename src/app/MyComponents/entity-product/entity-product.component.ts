import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-entity-product',
  templateUrl: './entity-product.component.html',
  styleUrls: ['./entity-product.component.css']
})

export class EntityProductComponent implements OnInit {

  entityIdDetailData: any;
  entityIdDetailData2: any;
  flag: any;
  ViewProductDetail: any;
  ViewProductDetail2: any;
  ViewActionDetail: any;
  ViewActionDetail2: any;


  viewProductTable: boolean = false;
  actionTable: boolean = false;
  Module: any;


  constructor(private listService: ProspectService, private root: ActivatedRoute) {
    this.root.params.subscribe((param) => {

      
      this.listService.getViewList(param["flag"], param["id"]).subscribe((data: any) => {
        this.entityIdDetailData = data;
        this.entityIdDetailData2 = JSON.parse(this.entityIdDetailData);
      })
      this.flag = param["flag"]
    })
    
// entity Product module name set start here


    if (this.flag == "PoList") {
      this.Module = "PO";
    }
    else if (this.flag == "SalesOrderLIst"){
       this.Module="SO";
       
    }
    else if (this.flag == "Payable"){
       this.Module="Payable";
       
    }
    else if (this.flag == "MoList"){
       this.Module="MO";
       
    }
    else if (this.flag == "MIList"){
       this.Module="MI";
       
    }
    else if (this.flag == "Repair"){
       this.Module="Repair";
       
    }
    else if (this.flag == "Payment"){
       this.Module="RCB";
       
    }
    else if (this.flag == "AMC"){
       this.Module="AMC";
       
    }
    else if (this.flag == "Work"){
       this.Module="AMC";
       
    }

// entity Product module name set end here

    this.root.params.subscribe((param) => {

      console.warn("Product" + param["flag"], param["id"])
      

      this.listService.productDetails(param["id"], this.Module).subscribe((data: any) => {
        this.ViewProductDetail = data;
        this.ViewProductDetail2 = JSON.parse(this.ViewProductDetail);
      })

    })

    this.root.params.subscribe((param) => {

      console.warn(param["id"])
      this.listService.actionDetails(param["id"], this.Module).subscribe((data: any) => {
        this.ViewActionDetail = data;
        this.ViewActionDetail2 = JSON.parse(this.ViewActionDetail);
      })

    })

  }

  product() {
    this.viewProductTable = !this.viewProductTable;
    this.actionTable = false;
  }
  action() {
    this.actionTable = !this.actionTable;
    this.viewProductTable = false;
  }
  ngOnInit(): void {
   
  }

}

