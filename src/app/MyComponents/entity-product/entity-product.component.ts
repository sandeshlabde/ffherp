import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProspectService } from 'src/app/services/prospect.service';


@Component({
  selector: 'app-entity-product',
  templateUrl: './entity-product.component.html',
  styleUrls: ['./entity-product.component.css']
})

export class EntityProductComponent implements OnInit {

  entityIdDetailData: any;

  EntityName: any;
  ViewProductDetail: any;

  ViewActionDetail: any;

  viewNoteTable: boolean = false;

  viewProductTable: boolean = false;
  actionTable: boolean = false;
  EntityModule: any;
  Entityid: any;
  chatData: any;
  noteData: any;
  Entityflag: any;




  constructor(private listService: ProspectService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Entityid = this.data.EntityID,
      this.EntityName = this.data.EntityName
 

    
    // entity Product EntityModule name set start here

    if (this.EntityName === "POList") {
      this.EntityModule = "PO";
      this.Entityflag = "PO";
    }
    else if (this.EntityName === "SalesOrderLIst") {
      this.EntityModule = "SO";
      this.Entityflag = "SO";

    }
    // else if (this.EntityName === "Prospect") {
    //   this.EntityModule = "Prospect";

    // }
    else if (this.EntityName === "Lead") {
      this.EntityModule = "Lead";
      this.Entityflag = "Lead";

    }
    else if (this.EntityName === "Payable") {
      this.EntityModule = "Payable";
      this.Entityflag = "Payable";

    }
    else if (this.EntityName === "MoList") {
      this.EntityModule = "MO";
      this.Entityflag = "MO";

    }
    else if (this.EntityName === "MIList") {
      this.EntityModule = "MI";
      this.Entityflag = "MI";

    }
    else if (this.EntityName === "Repair") {
      this.EntityModule = "Repair";
      this.Entityflag = "Repair";

    }
    else if (this.EntityName === "Payment") {
      
      this.EntityModule = "RCB";
      this.Entityflag = "Receivable";

    }
    else if (this.EntityName === "AMC") {
      this.EntityModule = "AMC";
      this.Entityflag = "AMC";

    }
    else if (this.EntityName === "Work") {
      this.EntityModule = "todolist";
      this.Entityflag = "todolist";

    }
    else if (this.EntityName === "Ticket") {
      this.EntityModule = "Ticket";
      this.Entityflag = "Ticket";

    };

    // entity Product EntityModule name set end here

// entityid Details Section Start Here*******************************************************************************
    // if(this.EntityName === "MoList")
    // {
this.listService.getViewList(this.Entityflag, this.Entityid).subscribe((data: any) => {
  this.entityIdDetailData = JSON.parse(data);
  console.log( this.entityIdDetailData);
  console.log( this.EntityModule, this.Entityid);

});
// }

//     else if(this.EntityName === "POList")
//     {
// this.listService.getViewList(this.EntityModule, this.Entityid).subscribe((data: any) => {
//   this.entityIdDetailData = JSON.parse(data);
// });
// }
//     else if(this.EntityName === "MIList")
//     {
// this.listService.getViewList(this.EntityModule, this.Entityid).subscribe((data: any) => {
//   this.entityIdDetailData = JSON.parse(data);
// });
// }
//     else{
// this.listService.getViewList(this.EntityName, this.Entityid).subscribe((data: any) => {
//   this.entityIdDetailData = JSON.parse(data);
// });
// }
// entityid Details Section End Here*************************************************************************
      
 
    this.listService.showChat(this.EntityModule, this.Entityid).subscribe((data: any) => {
      this.chatData = JSON.parse(data);

    })
 

    // entity ID product Details section start here
    this.listService.productDetails(this.Entityid, this.EntityModule).subscribe((data: any) => {
      this.ViewProductDetail = JSON.parse(data);
      console.log( this.ViewProductDetail);
    });
    // entity ID product Details section End here

    //  ****************************************************************************************************************
    // entity ID Action Details section start here

    this.listService.actionDetails(this.Entityid, this.EntityModule).subscribe((data: any) => {
      this.ViewActionDetail = JSON.parse(data);
      console.log( this.ViewActionDetail);

    })

    // entity ID Action Details section End here 







    this.listService.getNoteList(this.EntityName, this.Entityid).subscribe((data: any) => {
      this.noteData = JSON.parse(data);


    });
  }

  product() {
    this.viewProductTable = !this.viewProductTable;
    this.actionTable = false;
    this.viewNoteTable = false;
  }
  action() {
    this.actionTable = !this.actionTable;
    this.viewProductTable = false;
    this.viewNoteTable = false;
  }
  noteTable() {
    this.viewProductTable = false;
    this.actionTable = false;
    this.viewNoteTable = !this.viewNoteTable
  }
  ngOnInit(): void {

  }

}

