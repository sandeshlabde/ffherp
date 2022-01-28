import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProspectService } from 'src/app/services/prospect.service';


@Component({
  selector: 'app-entity-product',
  templateUrl: './entity-product.component.html',
  styleUrls: ['./entity-product.component.css']
})

export class EntityProductComponent implements OnInit {

  entityIdDetailData: any;
  entityIdDetailData2: any;
  EntityName: any;
  ViewProductDetail: any;
  ViewProductDetail2: any;
  ViewActionDetail: any;
  ViewActionDetail2: any;


  viewProductTable: boolean = false;
  actionTable: boolean = false;
  EntityModule: any;
  Entityid: any;



constructor(private listService: ProspectService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Entityid = this.data.EntityID,
      this.EntityName = this.data.EntityName


 
    this.listService.getViewList(this.EntityName, this.Entityid).subscribe((data: any) => {
      this.entityIdDetailData = data;
      this.entityIdDetailData2 = JSON.parse(this.entityIdDetailData);
      console.log("dialogdata" + this.EntityName, this.entityIdDetailData2);
    });



    // entity Product EntityModule name set start here
 
    if (this.EntityName == "PoList") {
      this.EntityModule = "PO";
    }
    else if (this.EntityName == "SalesOrderLIst") {
      this.EntityModule = "SO";

    }
    else if (this.EntityName == "Payable") {
      this.EntityModule = "Payable";

    }
    else if (this.EntityName == "MoList") {
      this.EntityModule = "MO";

    }
    else if (this.EntityName == "MIList") {
      this.EntityModule = "MI";

    }
    else if (this.EntityName == "Repair") {
      this.EntityModule = "Repair";

    }
    else if (this.EntityName == "Payment") {
      this.EntityModule = "RCB";

    }
    else if (this.EntityName == "AMC") {
      this.EntityModule = "AMC";

    }
    else if (this.EntityName == "Work") {
      this.EntityModule = "AMC";

    }

    // entity Product EntityModule name set end here



    // entity ID product Details section start here
    this.listService.productDetails(this.Entityid, this.EntityModule).subscribe((data: any) => {
      this.ViewProductDetail = data;
      this.ViewProductDetail2 = JSON.parse(this.ViewProductDetail);
      console.log("product"+ this.ViewProductDetail2)
    })

    // entity ID product Details section End here

    // entity ID Action Details section start here

    this.listService.actionDetails(this.Entityid, this.EntityModule).subscribe((data: any) => {
      this.ViewActionDetail = data;
      this.ViewActionDetail2 = JSON.parse(this.ViewActionDetail);
      console.log("Action"+  this.ViewActionDetail2)
    })

    // entity ID Action Details section End here 

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

